const STRCON = {
  dataBinding:
  'dataBinding',
  refTable:
  'refTable',
  refRow:
  'refRow',
}

/**@param {string} id
 * @return {string}*/
const correctifyElementId = function(id) {
  if (id.startsWith('#') && id.length > 1) {
    id = id.slice(1);
  }
  return id;
};

/**@param {string} id
 * @return HTMLElement*/
const getElementById = function(id) {
  if (!id) return null;
  if (id.startsWith('#') && id.length > 1) {
    id = id.slice(1);
  }
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`NTS: Element with ID ${id} not found!`);
  }
  return element;
};

/**@param {HTMLElement} parentElement
 * @param {HTMLElement} childElement
 * @return boolean*/
const appendChildTo = function(parentElement, childElement) {
  if (parentElement) {
    parentElement.appendChild(childElement);
    return true;
  } else {
    console.warn(`NTS: Parent element is ${parentElement}`);
  };
};

/**@param {string} id
 * @param {HTMLElement} childElements
 * @return boolean*/
const appendChildToById = function(id, ...childElements) {
  const parentElement = getElementById(id);
  if (parentElement) {
    for (const childElement of childElements) {
      appendChildTo(parentElement, childElement);
    }
    return true;
  } else {
    return false;
  }
};

/**@param {Element} element*/
const removeElement = function(element) {
  element.parentElement.removeChild(element);
};
const removeElementById = function(id) {
  id = correctifyElementId(id);
  const element = document.querySelector(id);
  removeElement(element);
};

/**
 * @param {string[]} optionDataList
 * @param {string} id
 * @param {function(string):void} onSelect
 * @return {HTMLSelectElement}
 * */
const createSelectElement = function(optionDataList, id, onSelect) {
  const selectElement = document.createElement('select');
  if (id) {
    selectElement.id = id;
  }
  let stringBuilder = '';
  for (let i=0; i<optionDataList.length; i++) {
    stringBuilder += `<option value="${i}">${optionDataList[i]}</option>`;
  }
  selectElement.innerHTML = stringBuilder;
  if (onSelect) {
    selectElement.onchange = function() {
      onSelect(selectElement.value);
    };
  }
  return selectElement;
};

/**
 * @param {HTMLSelectElement} selectElement
 * @param {string[]} optionDataList
 * @return {void}
 * */
const updateSelectElement = function(selectElement, optionDataList) {
  let stringBuilder = '';
  for (let i=0; i<optionDataList.length; i++) {
    stringBuilder += `<option value="${i}">${optionDataList[i]}</option>`;
  }
  selectElement.innerHTML = stringBuilder;
};

function _ngFor(list, mapperFun) {
  let sb = '';
  if (list) {
    list.forEach((item,index)=>{
      sb += mapperFun(item,index);
    });
  }
  return sb;
}

/**@param {function(void):string} classNameSuppliers*/
function _ngClass(...classNameSuppliers) {
  let sb = '';
  for (const classNameSupplier of classNameSuppliers) {
    let classNameResult = null;
    try {
      classNameResult = classNameSupplier();
    } catch (e) {/*ignore*/}
    if (classNameResult) {
      if (sb) {sb += ' '}
      sb += classNameResult;
    }
  }
  return sb ? `class=${sb}` : '';
}

/*
function _ngData(data) {
  return `data-binding=${JSON.stringify(data)}`;
  // return `data-binding=${data}`;
}
*/

function _ngDataCustom(name, data) {
  return `data-${name}=${JSON.stringify(data)}`;
  // return `data-${name}=${data}`;
}

/**@template T
 * @param {T[]|HTMLCollectionBase<T>} list
 * @param {function(T,number):any} callback*/
function forOf(list, callback) {
  if (list) {
    let count = 0;
    for (const item of list) {
      callback(item,count++);
    }
  }
}

/**@typedef TableElementOption
 * @type {object}
 * @property {string} [tableId]
 * @property {string} [tableClassName]
 * @property {string} [tableHeaderClassName]
 * @property {string} [tableHeaderCellClassName]
 * @property {string} [tableBodyRowClassName]
 * @property {string} [tableBodyCellClassName]
 * */

/**@param {string[]} headerNameList
 * @param {any[][]} dataMatrix
 * @param {TableElementOption} [option]
 * @param {function(HTMLTableElement):any} [callback]
 * @return HTMLTableElement*/
const createTableElement = function(headerNameList, dataMatrix, option, callback) {
  const tableElement = document.createElement('table');
  tableElement.innerHTML = `
    ${_createTableHeaderStr(headerNameList, option)}
    ${_createTableBodyStr(dataMatrix, option)}
  `;
  if (option&&option.tableId) {
    tableElement.id = option.tableId;
  }
  if (option&&option.tableClassName) {
    tableElement.className = option.tableClassName;
  }
  _storeTableElementData(tableElement, dataMatrix);
  if (callback) {
    callback(tableElement);
  }
  return tableElement;
};
/**@param {string[]} headerNameList
 * @param {TableElementOption} [option]
 * */
const _createTableHeaderStr = function(headerNameList, option) {
  return `<thead>
    <tr class="${option&&option['tableHeaderClassName']||''}">
      ${_ngFor(headerNameList,(headerName,headerIndex)=>
      `<th ${_ngClass(()=>option.tableHeaderCellClassName,()=>'nts-table-col-'+headerIndex)}>${headerName}</th>`)}
    </tr>
  </thead>`;
};
/**@param {any[][]} dataMatrix
 * @param {TableElementOption} [option]
 * */
const _createTableBodyStr = function(dataMatrix, option) {
  return `<tbody>
    ${_ngFor(dataMatrix,(rowData,rowIndex)=>
    `<tr ${_ngClass(()=>option.tableBodyRowClassName)} ${_ngDataCustom('row-index',rowIndex)}>
      ${_ngFor(rowData,(cellData,cellIndex)=>
      `<td ${_ngClass(()=>option.tableBodyCellClassName,()=>'nts-table-col-'+cellIndex)} ${_ngDataCustom('col-index',cellIndex)}>
        ${cellData}
      </td>`)}
    </tr>`)}
  </tbody>`;
};
/**@param {HTMLTableElement} tableElement
 * @param {any[][]} dataMatrix
 * @param {function(HTMLTableElement):any} [callback]
 * @return HTMLTableElement*/
const updateTableElement = function(tableElement, dataMatrix, callback) {
  const tbody = tableElement.querySelector('tbody');
  if (tbody) {
    tbody.outerHTML = _createTableBodyStr(dataMatrix);
  }
  _storeTableElementData(tableElement, dataMatrix);
  if (callback) {
    callback(tableElement);
  }
  return tableElement;
};

/**Return table's rows (except header row).
 * @param {HTMLTableElement} tableElement
 * @return HTMLTableRowElement[]*/
const getTableElementRows = function(tableElement) {
  const array = [];
  let rowIndex = -1;
  for (const row of tableElement.rows) {
    rowIndex++;
    if (rowIndex > 0) { // Skip header row.
      array.push(row);
    }
  }
  return array;
}

function _storeTableElementData(tableElement, dataMatrix) {
  try {
    tableElement[STRCON.dataBinding] = dataMatrix;
    getTableElementRows(tableElement).forEach((row, rowIndex)=>{
      row[STRCON.dataBinding] = dataMatrix[rowIndex];
      row[STRCON.refTable] = tableElement;
      let columnIndex = 0;
      for (const cell of row.cells) {
        cell[STRCON.dataBinding] = dataMatrix[rowIndex][columnIndex++];
        cell[STRCON.refRow] = row;
      }
    });
  } catch (e) {
    console.warn(e);
  }
}

function setTableRowElementsOnClick(tableElement, onclick) {
  getTableElementRows(tableElement).forEach((row,rowIndex)=>{
    row.onclick = onclick;
  });
}

/**@param {string|null} id
 * @param {function(boolean):any} onchange
 * @param {boolean|null|undefined} [initialValue]
 * @return {HTMLInputElement}
 * */
function createCheckBoxElement(id, onchange, initialValue) {
  const checkBoxElement = document.createElement('input');
  checkBoxElement.type = 'checkbox';
  checkBoxElement.onchange = checkboxChangeEvent => {
    onchange(checkBoxElement.checked);
  };
  if (id) {
    checkBoxElement.id = id;
    checkBoxElement.name = id;
  }
  if (initialValue != null) {
    checkBoxElement.checked = initialValue;
  }
  return checkBoxElement;
}

function createLabelElement(forInputId, text) {
  const labelElement = document.createElement('label');
  labelElement.innerText = text;
  if (forInputId) {
    labelElement.id = forInputId;
  }
  return labelElement;
}

// Export.
module && (module.exports = {
  correctifyElementId,
  getElementById,
  appendChildTo,
  appendChildToById,
  removeElement,
  removeElementById,
  createSelectElement,
  updateSelectElement,
  createTableElement,
  updateTableElement,
});
