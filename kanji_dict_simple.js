DICTIONARY = function() {
  const dictionary = [];
  const dictionaryRaw =
`

日	nhật	nichi, jitsu	mặt trời, ngày, nhật thực, nhật báo
一	nhất	ichi, itsu	một, đồng nhất, nhất định
国	quốc	koku	nước, quốc gia, quốc ca
十	thập	juu, jiQ	mười
大	đại	dai, tai	to lớn, đại dương, đại lục
会	hội	kai, e	hội họp, đại hội
人	nhân	jin, nin	nhân vật
年	niên	nen	năm, niên đại
二	nhị	ni	2
本	bản	hon	sách, cơ bản, nguyên bản, bản chất
三	tam	san	3
中	trung	chuu	trung tâm, trung gian, trung ương
長	trường, trưởng	choo	trường giang, sở trường; hiệu trưởng
出	xuất	shutsu, sui	xuất hiện, xuất phát
政	chính	sei, shoo	chính phủ, chính sách, hành chính
五	ngũ	go	5
自	tự	ji, shi	tự do, tự kỉ, tự thân
事	sự	ji, zu	sự việc
者	giả	sha	học giả, tác giả
社	xã	sha	xã hội, công xã, hợp tác xã
月	nguyệt	getsu, gatsu	mặt trăng, tháng, nguyệt san, nguyệt thực
四	tứ	shi	4
分	phân	bun, fun, bu	phân số, phân chia
時	thời	ji	thời gian
合	hợp	goo, gaQ, kaQ 	thích hợp, hội họp, hợp lí
同	đồng	doo	đồng nhất, tương đồng
九	cửu	kyuu, ku	9
上	thượng	joo, shoo	thượng tầng, thượng đẳng
行	hành, hàng	koo, gyoo, an	thực hành, lữ hành; ngân hàng
民	dân	min	quốc dân, dân tộc
前	tiền	zen	trước, tiền sử, tiền chiến, mặt tiền
業	nghiệp	gyoo, goo	nghề nghiệp, công nghiệp, sự nghiệp
生	sinh	sei, shoo	sinh sống, sinh sản
議	nghị	gi	nghị luận, nghị sự
後	hậu	go, koo	sau, hậu quả, hậu sự
新	tân	shin	mới, cách tân, tân thời
部	bộ	bu	bộ môn, bộ phận
見	kiến	ken	ý kiến
東	đông	too	phía đông
間	gian	kan, ken	trung gian, không gian
地	địa	chi, ji	thổ địa, địa đạo
的	đích	teki	mục đích, đích thực
場	trường	joo	hội trường, quảng trường
八	bát	hachi	8
入	nhập	nyuu	nhập cảnh, nhập môn, nhập viện
方	phương	hoo	phương hướng, phương pháp
六	lục	roku	6
市	thị	shi	thành thị, thị trường
発	phát	hatsu, hotsu	xuất phát, phát kiến, phát hiện, phát ngôn
員	viên	in	thành viên, nhân viên
対	đối	tai, tsui	đối diện, phản đối, đối với
金	kim	kin, kon	hoàng kim, kim ngân
子	tử	shi, su	tử tôn, phần tử, phân tử, nguyên tử
内	nội	nai, dai	nội thành, nội bộ
定	định	tei, joo	thiết định, quyết định, định mệnh
学	học	gaku	học sinh, học thuyết
高	cao	koo	cao đẳng, cao thượng
手	thủ	shu	tay, thủ đoạn
円	viên	en	viên mãn, tiền Yên
立	lập	ritsu, ryuu	thiết lập, tự lập
回	hồi	kai, e	vu hồi, chương hồi
連	liên	ren	liên tục, liên lạc
選	tuyển	sen	tuyển chọn
田	điền	den	điền viên, tá điền
七	thất	shichi	7
代	đại	dai, tai	đại biểu, thời đại, đại diện, đại thế
力	lực	ryoku, riki	sức lực
今	kim	kon, kin	đương kim, kim nhật
米	mễ	bei, mai	gạo
百	bách	hyaku	trăm, bách niên
相	tương, tướng	soo, shoo	tương hỗ, tương tự, tương đương; thủ tướng
関	quan	kan	hải quan, quan hệ
明	minh	mei, myoo	quang minh, minh tinh
開	khai	kai	khai mạc, khai giảng
京	kinh	kyoo, kei	kinh đô, kinh thành
問	vấn	mon	vấn đáp, chất vấn, vấn đề
体	thể	tai, tei	hình thể, thân thể, thể thao
実	thực	jitsu	sự thực, chân thực
決	quyết	ketsu	quyết định
主	chủ	shu, su	chủ yếu, chủ nhân
動	động	doo	hoạt động, chuyển động
表	biểu	hyoo	biểu hiện, bảng biểu, biểu diễn
目	mục	moku, boku	mắt, hạng mục, mục lục
通	thông	tsuu, tsu	thông qua, thông hành, phổ thông
化	hóa	ka, ke	biến hóa
治	trị	chi, ji	cai trị, trị an, trị bệnh
全	toàn	zen	toàn bộ
度	độ	do, to, taku	mức độ, quá độ, độ lượng
当	đương, đáng	too	chính đáng; đương thời, tương đương
理	lí	ri	lí do, lí luận, nguyên lí
山	sơn	san	núi, sơn hà
小	tiểu	shoo	nhỏ, ít
経	kinh	kei, kyoo	kinh tế, sách kinh, kinh độ
制	chế	sei	chế ngự, thể chế, chế độ
法	pháp	hoo, haQ, hoQ	pháp luật, phương pháp
下	hạ	ka, ge	dưới, hạ đẳng
千	thiên	sen	nghìn, nhiều, thiên lí
万	vạn	man, ban	vạn, nhiều, vạn vật
約	ước	yaku	lời hứa (ước nguyện), ước tính
戦	chiến	sen	chiến tranh, chiến đấu
外	ngoại	gai, ge	ngoài, ngoại thành, ngoại đạo
最	tối	sai	nhất (tối cao, tối đa)
調	điều, điệu	choo	điều tra, điều hòa; thanh điệu, giai điệu
野	dã	ya	cánh đồng, hoang dã, thôn dã
現	hiện	gen	xuất hiện, hiện tại, hiện tượng, hiện hình
不	bất	fu, bu	bất công, bất bình đẳng, bất tài
公	công	koo	công cộng, công thức, công tước
気	khí	ki, ke	không khí, khí chất, khí khái, khí phách
勝	thắng	shoo	thắng lợi, thắng cảnh
家	gia	ka, ke	gia đình, chuyên gia
取	thủ	shu	lấy, nhận
意	ý	I	ý nghĩa, ý thức, ý kiến, chú ý
作	tác	saku, sa	tác phẩm, công tác, canh tác
川	xuyên	sen	sông
要	yêu, yếu	yoo	yêu cầu; chủ yếu
用	dụng	yoo	sử dụng, dụng cụ, công dụng
権	quyền	ken, gon	chính quyền, quyền uy, quyền lợi
性	tính	sei, shoo	tính dục, giới tính, bản tính, tính chất
言	ngôn	gen, gon	ngôn ngữ, ngôn luận, phát ngôn
氏	thị	shi	họ
務	vụ	mu	chức vụ, nhiệm vụ
所	sở	sho	trụ sở
話	thoại	wa	nói chuyện, đối thoại, giai thoại
期	kì	ki, go	thời kì, kì hạn
機	cơ	ki	cơ khí, thời cơ, phi cơ
成	thành	sei, joo	thành tựu, hoàn thành, trở thành
題	đề	dai	đề tài, đề mục, chủ đề
来	lai	rai	đến, tương lai, vị lai
総	tổng	soo	tổng số, tổng cộng
産	sản	san	sản xuất, sinh sản, cộng sản
首	thủ	shu	đầu, cổ, thủ tướng
強	cường, cưỡng	kyoo, goo	cường quốc; miễn cưỡng
県	huyện	ken	huyện, tỉnh
数	số	suu, su	số lượng
協	hiệp	kyoo	hiệp lực
思	tư	shi	nghĩ, suy tư, tư tưởng, tư duy
設	thiết	setsu	thiết lập, kiến thiết
保	bảo	ho	bảo trì, bảo vệ, đảm bảo
持	trì	ji	cầm, duy trì
区	khu	ku	khu vực, địa khu
改	cải	kai	cải cách, cải chính
以	dĩ	I	dĩ tiền, dĩ vãng
道	đạo	doo, too	đạo lộ, đạo đức, đạo lí
都	đô	to, tsu	đô thị, đô thành
和	hòa	wa, o	hòa bình, tổng hòa, điều hòa
受	thụ	ju	nhận, tiếp thụ
安	an	an	an bình, an ổn
加	gia	ka	tăng gia, gia giảm
続	tục	zoku	tiếp tục
点	điểm	ten	điểm số, điểm hỏa
進	tiến	shin	thăng tiến, tiền tiến, tiến lên
平	bình	hei, byoo	hòa bình, bình đẳng, trung bình, bình thường
教	giáo	kyoo	giáo dục, giáo viên
正	chính	sei, shoo	chính đáng, chính nghĩa, chân chính
原	nguyên	gen	thảo nguyên, nguyên tử, nguyên tắc
支	chi	shi	chi nhánh, chi trì (ủng hộ)
多	đa	ta	đa số
世	thế	sei, se	thế giới, thế gian, thế sự
組	tổ	so	tổ hợp, tổ chức
界	giới	kai	thế giới, giới hạn, địa giới
挙	cử	kyo	tuyển cử, cử động, cử hành
記	kí	ki	thư kí, kí sự, kí ức
報	báo	hoo	báo cáo, báo thù, báo đáp
書	thư	sho	thư đạo, thư tịch, thư kí
心	tâm	shin	tâm lí, nội tâm
文	văn	bun, mon	văn chương, văn học
北	bắc	hoku	phương bắc
名	danh	mei, myoo	danh tính, địa danh
指	chỉ	shi	chỉ định, chỉ số
委	ủy	I	ủy viên, ủy ban, ủy thác
資	tư	shi	tư bản, đầu tư, tư cách
初	sơ	sho	sơ cấp
女	nữ	jo, nyo, nyoo	phụ nữ
院	viện	in	học viện, y viện
共	cộng	kyoo	tổng cộng, cộng sản, công cộng
元	nguyên	gen, gan	gốc
海	hải	kai	hải cảng, hải phận
近	cận	kin	thân cận, cận thị, cận cảnh
第	đệ	dai	đệ nhất, đệ nhị
売	mại	bai	thương mại
島	đảo	too	hải đảo
先	tiên	sen	tiên sinh, tiên tiến
統	thống	too	thống nhất, tổng thống, thống trị
電	điện	den	phát điện, điện lực
物	vật	butsu, motsu	động vật
済	tế	sai	kinh tế, cứu tế
官	quan	kan	quan lại
水	thủy	sui	thủy điện
投	đầu	too	đầu tư, đầu cơ
向	hướng	koo	hướng thượng, phương hướng
派	phái	ha	trường phái
信	tín	shin	uy tín, tín thác, thư tín
結	kết	ketsu	đoàn kết, kết thúc
重	trọng, trùng	juu, choo	trọng lượng; trùng phùng
団	đoàn	dan, ton	đoàn kết, đoàn đội
税	thuế	zei	thuế vụ
予	dự	yo	dự đoán, dự báo
判	phán	han, ban	phán quyết, phán đoán
活	hoạt	katsu	hoạt động, sinh hoạt
考	khảo	koo	khảo sát, tư khảo
午	ngọ	go	chính ngọ
工	công	koo, ku	công tác, công nhân
省	tỉnh	sei, shoo	tỉnh lược, phản tỉnh, hồi tỉnh
知	tri	chi	tri thức, tri giác
画	họa, hoạch	ga, kaku	họa sĩ; kế hoạch
引	dẫn	in	dẫn hỏa
局	cục	kyoku	cục diện, cục kế hoạch
打	đả	da	đả kích, ẩu đả
反	phản	han, hon, tan	phản loạn, phản đối
交	giao	koo	giao hảo, giao hoán
品	phẩm	hin	sản phẩm
解	giải	kai, ge	giải quyết, giải thể, giải thích
査	tra	sa	điều tra
任	nhiệm	nin	trách nhiệm, nhiệm vụ
策	sách	saku	đối sách
込	<vào>	-	
領	lĩnh, lãnh	ryoo	thống lĩnh, lãnh thổ, lĩnh vực
利	lợi	ri	phúc lợi, lợi ích
次	thứ	ji, shi	thứ nam, thứ nữ
際	tế	sai	quốc tế
集	tập	shuu	tập hợp, tụ tập
面	diện	men	phản diện, chính diện
得	đắc	toku	đắc lợi, cầu bất đắc
減	giảm	gen	gia giảm, giảm
側	trắc	soku	bên cạnh
村	thôn	son	thôn xã, thôn làng
計	kê, kế	kei	thống kê; kế hoạch, kế toán
変	biến	hen	biến đổi, biến thiên
革	cách	kaku	da thuộc, cách mạng
論	luận	ron	lí luận, ngôn luận, thảo luận
別	biệt	betsu	biệt li, đặc biệt, tạm biệt
使	sử, sứ	shi	sử dụng; sứ giả, thiên sứ
告	cáo	koku	báo cáo, thông cáo
直	trực	choku, jiki	trực tiếp, chính trực
朝	triều	choo	buổi sáng, triều đình
広	quảng	koo	quảng trường, quảng đại
企	xí	ki	xí nghiệp, xí hoạch
認	nhận	nin	xác nhận, nhận thức
億	ức	oku	trăm triệu
切	thiết	setsu, sai	cắt, thiết thực, thân thiết
求	cầu	kyuu	yêu cầu, mưu cầu
件	kiện	ken	điều kiện, sự kiện, bưu kiện
増	tăng	zoo	tăng gia, tăng tốc
半	bán	han	bán cầu, bán nguyệt
感	cảm	kan	cảm giác, cảm xúc, cảm tình
車	xa	sha	xe cộ, xa lộ
校	hiệu	koo	trường học
西	tây	sei, sai	phương tây
歳	tuế	sai, sei	tuổi, năm, tuế nguyệt
示	thị	ji, shi	biểu thị
建	kiến	ken, kon	kiến thiết, kiến tạo
価	giá	ka	giá cả, vô giá, giá trị
付	phụ	fu	phụ thuộc, phụ lục
勢	thế	sei	tư thế, thế lực
男	nam	dan, nan	đàn ông, nam giới
在	tại	zai	tồn tại, thực tại
情	tình	joo, sei	tình cảm, tình thế
始	thủy	shi	ban đầu, khai thủy, nguyên thủy
台	đài	dai, tai	lâu đài, đài
聞	văn	bun, mon	nghe, tân văn (báo)
基	cơ	ki	cơ sở, cơ bản
各	các	kaku	các, mỗi
参	tham	san	tham chiếu, tham quan, tham khảo
費	phí	hi	học phí, lộ phí, chi phí
木	mộc	boku, moku	cây, gỗ
演	diễn	en	diễn viên, biểu diễn, diễn giả
無	vô	mu, bu	hư vô, vô ý nghĩa
放	phóng	hoo	giải phóng, phóng hỏa, phóng lao
昨	tạc	saku	<hôm> qua, <năm> qua..
特	đặc	toku	đặc biệt, đặc công
運	vận	un	vận chuyển, vận mệnh
係	hệ	kei	quan hệ, hệ số
住	trú, trụ	juu	cư trú; trụ sở
敗	bại	hai	thất bại
位	vị	I	vị trí, tước vị, đơn vị
私	tư	shi	tư nhân, công tư, tư lợi
役	dịch	eki, yaku	chức vụ, nô dịch
果	quả	ka	hoa quả, thành quả, kết quả
軍	quân	gun	quân đội, quân sự
井	tỉnh	sei, shoo	giếng
格	cách	kaku, koo	tư cách, cách thức, sở hữu cách
料	liệu	ryoo	nguyên liệu, tài liệu, nhiên liệu
語	ngữ	go	ngôn ngữ, từ ngữ
職	chức	shoku	chức vụ, từ chức
終	chung	shuu	chung kết, chung liễu
宮	cung	kyuu, guu, ku	cung điện
検	kiểm	ken	kiểm tra
死	tử	shi	tử thi, tự tử
必	tất	hitsu	tất nhiên, tất yếu
式	thức	shiki	hình thức, phương thức, công thức
少	thiếu, thiểu	shoo	thiếu niên; thiểu số
過	qua, quá	ka	thông qua; quá khứ, quá độ
止	chỉ	shi	đình chỉ
割	cát	katsu	chia cắt, cát cứ
口	khẩu	koo, ku	miệng, nhân khẩu, khẩu ngữ
確	xác	kaku	chính xác, xác lập, xác suất
裁	tài	sai	may vá, tài phán, trọng tài
置	trí	chi	bố trí, bài trí, vị trí
提	đề	tei	cung cấp, đề cung
流	lưu	ryuu, ru	lưu lượng, hạ lưu, lưu hành
能	năng	noo	năng lực, tài năng
有	hữu	yuu, u	sở hữu, hữu hạn
町	đinh	choo	khu phố
沢	trạch	taku	đầm lầy
球	cầu	kyuu	quả cầu, địa cầu
石	thạch	seki, shaku, koku	đá, thạch anh, bảo thạch
義	nghĩa	gi	ý nghĩa, nghĩa lí, đạo nghĩa
由	do	yu, yuu, yui	tự do, lí do
再	tái	sai, sa	lại, tái phát
営	doanh	ei	doanh nghiệp, kinh doanh, doanh trại
両	lưỡng	ryoo	hai, lưỡng quốc
神	thần	shin, jin	thần, thần thánh, thần dược
比	tỉ	hi	so sánh, tỉ lệ, tỉ dụ
容	dung	yoo	dung mạo, hình dung, nội dung, dung nhận
規	quy	ki	quy tắc, quy luật
送	tống	soo	tiễn, tống tiễn, tống đạt
消	tiêu	shoo	tiêu diệt, tiêu hao, tiêu thất
銀	ngân	gin	ngân hàng, ngân lượng, kim ngân
状	trạng	joo	tình trạng, trạng thái, cáo trạng
輸	thâu	yu	thâu nhập, thâu xuất
研	nghiên	ken	mài, nghiên cứu
談	đàm	dan	hội đàm, đàm thoại
説	thuyết	setsu, zei	tiểu thuyết, học thuyết, lí thuyết
常	thường	joo	bình thường, thông thường
応	ứng	oo	đáp ứng, ứng đối, phản ứng
空	không	kuu	không khí, hư không, hàng không
夫	phu	fu, fuu	trượng phu, phu phụ
争	tranh	soo	đấu tranh, chiến tranh, tranh luận, cạnh tranh
身	thân	shin	thân thể, thân phận
優	ưu	yuu	ưu việt, ưu thế, ưu tiên
違	vi	I	vi phạm, tương vi
護	hộ	go	bảo hộ, phòng hộ, hộ vệ
店	điếm	ten	cửa hàng, tửu điếm
土	thổ	do, to	thổ địa, thổ công
率	suất	sotsu, ritsu	thống suất, xác suất, tỉ lệ suất
士	sĩ	shi	chiến sĩ, sĩ tử, bác sĩ
算	toán	san	tính toán, kế toán, toán học
育	dục	iku	giáo dục, dưỡng dục
配	phối	hai	phân phối, chi phối, phối ngẫu
術	thuật	jutsu	kĩ thuật, học thuật, nghệ thuật
商	thương	shoo	thương mại, thương số
収	thu	shuu	thu nhập, thu nhận, thu hoạch
武	vũ	bu, mu	vũ trang, vũ lực
州	châu	shuu	tỉnh, bang, châu lục
導	đạo	doo	dẫn đường, chỉ đạo
農	nông	noo	nông nghiệp, nông thôn, nông dân
構	cấu	koo	cấu tạo, cấu thành, cơ cấu
疑	nghi	gi	nghi ngờ, nghi vấn, tình nghi
残	tàn	zan	tàn dư, tàn tích, tàn đảng
与	dữ, dự	yo	cấp dữ, tham dự
足	túc	soku	chân, bổ túc, sung túc
何	hà	ka	cái gì, hà cớ
断	đoạn, đoán	dan	phán đoán, đoạn tuyệt
真	chân	shin	chân lí, chân thực
転	chuyển	ten	chuyển động
楽	lạc, nhạc	gaku, raku	an lạc, lạc thú, âm nhạc
施	thi	shi, se	thực thi, thi hành
庁	sảnh	choo	đại sảnh
番	phiên	ban	thứ tự, phiên hiệu
害	hại	gai	có hại, độc hại, lợi hại
援	viện	en	viện trợ
究	cứu	kyuu	nghiên cứu, cứu cánh
可	khả	ka	có thể, khả năng, khả dĩ
起	khởi	ki	khởi động, khởi sự, khởi nghĩa
視	thị	shi	thị sát, thị lực, giám thị
副	phó	fuku	phó, phó phòng
線	tuyến	sen	dây, tiền tuyến, điện tuyến, vô tuyến
急	cấp	kyuu	khẩn cấp, cấp cứu
例	lệ	rei	ví dụ, tiền lệ, thông lệ, điều lệ
食	thực	shoku, jiki	ẩm thực, thực đường
補	bổ	ho	bổ sung, bổ túc
額	ngạch	gaku	trán, giá tiền, hạn ngạch, kim ngạch
証	chứng	shoo	bằng chứng, nhân chứng, chứng nhận
館	quán	kan	đại sứ quán, hội quán
質	chất	shitsu, shichi, chi	vật chất, phẩm chất, khí chất
限	hạn	gen	giới hạn, hữu hạn, hạn độ
難	nan, nạn	nan	khó, nan giải, nguy nan; tai nạn
製	chế	sei	chế tạo
監	giam, giám	kan	giam cấm; giám đốc, giám sát
声	thanh	sei, shoo	âm thanh, thanh điệu
準	chuẩn	jun	tiêu chuẩn, chuẩn bị
落	lạc	raku	rơi, lạc hạ, trụy lạc
病	bệnh	byoo, hei	bệnh nhân, bệnh viện, bệnh tật
張	trương	choo	chủ trương, khai trương
葉	diệp	yoo	lá, lạc diệp, hồng diệp
警	cảnh	kei	cảnh báo, cảnh sát, cảnh vệ
技	kĩ	gi	kĩ thuật, kĩ nghệ
試	thí	shi	thí nghiệm, thí điểm
英	anh	ei	anh hùng, anh tú, anh tuấn
松	tùng	shoo	cây tùng, tùng bách
担	đảm	tan	đảm đương, đảm bảo
幹	cán	kan	cán sự, cán bộ
景	cảnh	kei	cảnh sắc, thắng cảnh, quang cảnh
備	bị	bi	trang bị, phòng bị, thiết bị
防	phòng	boo	phòng vệ, phòng bị, đề phòng
南	nam	nan, na	phương nam
美	mĩ	bi	mĩ nhân, mĩ lệ
労	lao	roo	lao động, lao lực, công lao
谷	cốc	koku	thung lũng, khê cốc
態	thái	tai	trạng thái, hình thái, thái độ
崎	khi	-	mũi đất
着	trước	chaku, jaku	đến, đáo trước, mặc
横	hoành	oo	tung hoành, hoành độ, hoành hành
映	ánh	ei	phản ánh
形	hình	kei,gyoo	hình thức, hình hài, định hình
席	tịch	seki	chủ tịch, xuất tịch (tham gia)
域	vực	iki	khu vực, lĩnh vực
待	đãi	tai	đợi, đối đãi
象	tượng	shoo, zoo	hiện tượng, khí tượng, hình tượng
助	trợ	jo	hộ trợ, trợ giúp, viện trợ, cứu trợ
展	triển	ten	triển khai, phát triển, triển lãm
屋	ốc	oku	phòng ốc
働	động	doo	lao động
佐	tá	sa	phò tá, trợ tá
宅	trạch	taku	nhà ở
票	phiếu	hyoo	lá phiếu, đầu phiếu
伝	truyền, truyện	den	truyền đạt, truyền động; tự truyện
福	phúc	fuku	phúc, hạnh phúc, phúc lợi
早	tảo	soo, saQ	sớm, tảo hôn
審	thẩm	shin	thẩm tra, thẩm phán, thẩm định
境	cảnh	kyoo, kei	nhập cảnh, quá cảnh, cảnh ngộ
況	huống	kyoo	tình huống, trạng huống
仕	sĩ	shi, ji	làm việc
条	điều	joo	điều khoản, điều kiện
乗	thừa	joo	lên xe
想	tưởng	soo, so	tư tưởng, tưởng tượng
渡	độ	to	đi qua, truyền tay
字	tự	ji	chữ, văn tự
造	tạo	zoo	chế tạo, sáng tạo
味	vị	mi	vị giác, mùi vị
念	niệm	nen	ý niệm, tưởng niệm
負	phụ	fu	âm, mang, phụ thương, phụ trách
親	thân	shin	thân thuộc, thân thích, thân thiết
述	thuật	jutsu	tường thuật. tự thuật
差	sai	sa	sai khác, sai biệt
族	tộc	zoku	gia tộc, dân tộc, chủng tộc
追	truy	tsui	truy lùng, truy nã, truy cầu
験	nghiệm	ken, gen	thí nghiệm, hiệu nghiệm, kinh nghiệm
個	cá	ko	cá nhân, cá thể
若	nhược	jaku, nyaku	trẻ, nhược niên
訴	tố	so	tố cáo, tố tụng
低	đê	tei	thấp, đê hèn, đê tiện
量	lượng	ryoo	lực lượng, độ lượng, dung lượng, trọng lượng
然	nhiên	zen, nen	quả nhiên, tất nhiên, thiên nhiên
独	độc	doku	cô độc, đơn độc
供	cung	kyoo, ku	cung cấp, cung phụng
細	tế	sai	tinh tế, tường tế, tế bào
授	thụ	ju	đưa cho, truyền thụ, giáo thụ
医	y	I	y học, y viện
衛	vệ	ei	bảo vệ, vệ tinh, vệ sinh
器	khí	ki	khí cụ, cơ khí, dung khí
音	âm	on, in	âm thanh, phát âm
花	hoa	ka	hoa, bông hoa
頭	đầu	too, zu, to	đầu não
整	chỉnh	sei	điều chỉnh, chỉnh hình
財	tài	zai, sai	tiền tài, tài sản
門	môn	mon	cửa, nhập môn, môn đồ, bộ môn
値	trị	chi	giá trị
退	thoái	tai	triệt thoái, thoái lui
守	thủ	shu, su	cố thủ, bảo thủ
古	cổ	ko	cũ, cổ điển, đồ cổ
太	thái	tai, ta	thái dương, thái bình
姿	tư	shi	tư thế, tư dung, tư sắc
答	đáp	too	trả lời, vấn đáp, đáp ứng
末	mạt	matsu, batsu	kết thúc, mạt vận, mạt kì
隊	đội	tai	đội ngũ, quân đội
紙	chỉ	shi	giấy
注	chú	chuu	chú ý, chú thích
株	chu	-	cổ phiếu
望	vọng	boo, moo	ước vọng, nguyện vọng, kì vọng
含	hàm	gan	hàm ý, hàm nghĩa, hàm súc
種	chủng	shu	chủng loại, chủng tộc
返	phản	hen	trả lại
洋	dương	yoo	đại dương, tây dương
失	thất	shitsu	thất nghiệp, thất bại
評	bình	hyoo	bình luận, phê bình
様	dạng	yoo	đa dạng, hình dạng
好	hảo, hiếu	koo	hữu hảo; hiếu sắc
影	ảnh	ei	hình ảnh; nhiếp ảnh
命	mệnh, mạng	mei, myoo	tính mạng, cách mạng, vận mệnh, mệnh lệnh
型	hình	kei	khuôn hình, mô hình
室	thất	shitsu	phòng, giáo thất
路	lộ	ro	đường, không lộ, thủy lộ
良	lương	ryoo	tốt, lương tâm, lương tri
復	phục	fuku	phục thù, hồi phục
課	khóa	ka	khóa học, chính khóa
程	trình	tei	trình độ, lộ trình, công trình
環	hoàn	kan	hoàn cảnh, tuần hoàn
閣	các	kaku	nội các
港	cảng	koo	hải cảng, không cảng
科	khoa	ka	khoa học, chuyên khoa
響	hưởng	kyoo	ảnh hưởng, âm hưởng
訪	phóng, phỏng	hoo	phóng sự; phỏng vấn
憲	hiến	ken	hiến pháp, hiến binh
史	sử	shi	lịch sử, sử sách
戸	hộ	ko	hộ khẩu
秒	miểu	byoo	giây (1/60 phút)
風	phong	fuu, fu	phong ba, phong cách, phong tục
極	cực	kyoku, goku	cực lực, cùng cực, địa cực
去	khứ	kyo, ko	quá khứ, trừ khử
欧	âu	oo	châu âu
段	đoạn	dan	giai đoạn
管	quản	kan	ống, mao quản, quản lí
天	thiên	ten	thiên thạch, thiên nhiên, thiên đường
非	phi	hi	phi nhân đạo, phi nghĩa
買	mãi	bai	mua, khuyến mãi
賞	thưởng	shoo	giải thưởng, tưởng thưởng
辺	biên	hen	biên, biên giới
競	cạnh	kyoo, kei	cạnh tranh
振	chấn	shin	chấn động
察	sát	satsu	quan sát, giám sát, cảnh sát
観	quan	kan	quan sát, tham quan
推	thôi	sui	giới thiệu, thôi tiến
易	dị, dịch	i, eki	dễ, dịch chuyển
移	di	I	di chuyển, di động
専	chuyên	sen	chuyên môn, chuyên quyền
衆	chúng	shuu, shu	quần chúng, chúng sinh
申	thân	shin	thân thỉnh (xin)
浜	banh	hin	bờ biển
深	thâm	shin	thâm sâu, thâm hậu
離	li	ri	tách li, li khai
督	đốc	toku	giám đốc, đôn đốc
白	bạch	kaku, byaku	thanh bạch, bạch sắc
帰	quy	ki	hồi quy
撃	kích	geki	công kích, tập kích
橋	kiều	kyoo	cây cầu
歩	bộ	ho, bu, fu	bộ hành, tiến bộ
材	tài	zai	tài liệu
識	thức	shiki	nhận thức, kiến thức, tri thức
雄	hùng	yuu	thư hùng, anh hùng, hùng tráng
達	đạt	tatsu	đạt tới, điều đạt, thành đạt
録	lục	roku	kí lục, đăng lục
討	thảo	too	thảo phạt, thảo luận, kiểm thảo
春	xuân	shun	mùa xuân, thanh xuân
鮮	tiên	sen	sáng, tươi, tiên minh (tươi đẹp), tân tiên
赤	xích	seki, shaku	đỏ, xích kì, xích đạo, xích thập tự
効	hiệu	koo	hiệu quả, hiệu ứng, công hiệu
被	bị	hi	bị, bị động, bị cáo
呼	hô	ko	gọi tên, hô hoán, hô hấp, hô hào
悪	ác, ố	aku, o	hung ác, độc ác; tăng ố
右	hữu	u, yuu	bên phải, hữu ngạn, cánh hữu
根	căn	kon	gốc, căn bản, căn cứ
光	quang	koo	ánh sáng, nhật quang, quang minh
他	tha	ta	khác, tha hương, vị tha
渉	thiệp	shoo	can thiệp, giao thiệp
融	dung	yuu	tan chảy, dung hòa, dung hợp
針	châm	shin	cái kim, phương châm, châm cứu
満	mãn	man	thỏa mãn, bất mãn, mãn nguyện
兵	binh	hei, hyoo	binh lính, binh lực
修	tu	shuu, shu	tu sửa, tu chính, tu luyện
処	xử, xứ	sho	cư xử, xử trí, xử lí; nơi chỗ
捕	bộ	ho	bắt, đãi bộ
積	tích	seki	tích tụ, súc tích, tích phân
河	hà	ka	sông, sơn hà
丸	hoàn	gan	tròn
編	biên	hen	đan, biên tập
師	sư	shi	giáo sư, tôn sư trọng đạo
歌	ca	ka	ca dao, ca khúc
森	sâm	shin	rừng
鉄	thiết	tetsu	sắt, thiết đạo, thiết giáp
並	tịnh	hei	xếp hàng
愛	ái	ai	yêu, ái tình, ái mộ
青	thanh	sei, shoo	xanh, thanh thiên, thanh niên
責	trách	seki	khiển trách, trách cứ, trách nhiệm
単	đơn	tan	cô đơn, đơn độc, đơn chiếc
客	khách	kyaku, kaku	hành khách, thực khách
秋	thu	shuu	mùa thu
園	viên	en	vườn, điền viên, hoa viên, công viên
献	hiến	ken, kon	hiến dâng, hiến tặng, hiến thân
林	lâm	rin	lâm sản, lâm nghiệp
蔵	tàng	zoo	bảo tàng, tàng trữ, tàng hình
模	mô	mo, bo	mô phỏng, mô hình
系	hệ	kei	hệ thống, hệ số
券	khoán	ken	vé, chứng khoán
清	thanh	sei, shoo	thanh bạch, trong sạch
婦	phụ	fu	phụ nữ, dâm phụ
夜	dạ	ya	ban đêm, dạ cảnh, dạ quang
核	hạch	kaku	hạt nhân, hạch tâm
富	phú	fu, fuu	giàu, phú hào, phú hộ, phong phú
接	tiếp	setsu	nối tiếp, tiếp đãi, tiếp xúc
城	thành	joo	thành phố, thành quách
販	phán	han	bán, phán mại
請	thỉnh	sei, shin	thỉnh cầu, thỉnh nguyện
久	cửu	kyuu, ku	lâu, vĩnh cửu
登	đăng	too, to	trèo, đăng sơn, đăng kí, đăng lục
図	đồ	zu, to	bản đồ, đồ án, địa đồ
読	độc	doku, toku, too	độc giả, độc thư
益	ích	eki, yaku	lợi ích, hữu ích
黒	hắc	koku	đen, hắc ám
介	giới	kai	ở giữa, môi giới, giới thiệu
貿	mậu	boo	mậu dịch, trao đổi
脳	não	noo	bộ não, đầu não
候	hậu	koo	mùa, khí hậu, thời hậu
存	tồn	son, zon	tồn tại, bảo tồn, ôn tồn
号	hiệu	goo	phiên hiệu, tín hiệu, phù hiệu
吉	cát	kichi, kitsu	tốt lành, cát tường
除	trừ	jo, ji	trừ khử, trừ bỏ, loại trừ, phép chia
旧	cựu	kyuu	cũ, cựu thủ tướng, cựu binh
超	siêu	choo	siêu việt, siêu thị, siêu nhân
健	kiện	ken	khỏe mạnh, kiện khang, tráng kiện
障	chướng	shoo	chướng ngại
左	tả	sa	bên trái, tả hữu, cánh tả
母	mẫu	bo	mẹ, phụ mẫu, mẫu thân
険	hiểm	ken	nguy hiểm, mạo hiểm, hiểm ác
激	kích	geki	kích động, kích thích, kích hoạt
摘	trích	teki	hái, trích yếu
央	ương	oo	trung ương
批	phê	hi	phê bình, phê phán
座	tọa	za	chỗ ngồi, tọa đàm, tọa độ
弁	biện	ben	hùng biện, biện luận
催	thôi	sai	tổ chức, khai thôi, thôi thúc
児	nhi	ji, ni	nhi đồng, hài nhi
江	giang	koo	trường giang, giang hồ
給	cấp	kyuu	cung cấp, cấp phát
具	cụ	gu	công cụ, dụng cụ
殺	sát	satsu, sai, setsu	sát hại, sát nhân
飛	phi	hi	bay, phi công, phi hành
速	tốc	soku	tốc độ, tăng tốc
波	ba	ha	sóng, phong ba
階	giai	kai	giai cấp, giai tầng
友	hữu	yuu	bạn hữu, hữu hảo
苦	khổ	ku	khổ cực, cùng khổ
幅	phúc	fuku	bề ngang
劇	kịch	geki	kịch bản, vở kịch, kịch tính
司	ti, tư	shi	công ti, tư lệnh
周	chu	shuu	chu vi, chu biên
走	tẩu	soo	chạy
未	vị	mi	vị thành niên, vị lai
拡	khuếch	kaku	khuếch đại
週	chu	shuu	tuần
従	tùng	juu, shoo, ju	phục tùng, tùy tùng, tòng thuận
採	thải	sai	hái, thải dụng
否	phủ	hi	phủ định, phủ quyết
織	chức	shoku, shiki	dệt
舞	vũ	bu	vũ điệu, khiêu vũ
写	tả	sha	miêu tả
抜	bạt	batsu	rút ra
色	sắc	shoku, shiki	màu sắc, sắc dục
療	liệu	ryoo	trị liệu
突	đột	totsu	đột phá, đột nhiên
余	dư	yo	thặng dư, dư dật
火	hỏa	ka	lửa
越	việt	etsu	vượt qua, việt vị
攻	công	koo	tấn công, công kích
歴	lịch	reki	lí lịch, lịch sử, kinh lịch
完	hoàn	kan	hoàn thành, hoàn toàn
破	phá	ha	phá hoại, tàn phá
休	hưu	kyuu	hưu trí, hưu nhàn
船	thuyền	sen	thuyền
危	nguy	ki	nguy hiểm, nguy cơ
債	trái	sai	nợ, quốc trái, công trái
航	hàng	koo	hàng không, hàng hải
冷	lãnh	rei	lạnh, lãnh đạm
廃	phế	hai	tàn phế, hoang phế
盟	minh	mei	đồng minh, gia minh
庫	khố	ko, ku	kho, xa khố, kim khố
皇	hoàng	koo, oo	hoàng đế
占	chiêm, chiếm	sen	chiếm cứ
将	tướng	shoo	tướng quân
捜	sưu	soo	sưu tầm, sưu tập
厳	nghiêm	gen, gon	tôn nghiêm, nghiêm khắc, nghiêm trọng
及	cập	kyuu	phổ cập
紀	kỉ	ki	thế kỉ, kỉ nguyên
故	cố	ko	cố tổng thống, lí do
装	trang	soo, shoo	trang phục, hóa trang, trang bị
就	tựu	shuu, ju	thành tựu
塁	lũy	rui	thành lũy
素	tố	so, su	yếu tố, nguyên tố
竹	trúc	chiku	trúc
異	dị	I	dị bản, dị tộc, dị giáo
薬	dược	yaku	thuốc
札	trát	satsu	tiền giấy
盛	thịnh	sei, joo	thịnh vượng, hưng thịnh
延	duyên	en	trì hoãn
馬	mã	ba	ngựa
遺	di	i, yui	sót lại, di tích, di ngôn, di vật
級	cấp	kyuu	sơ cấp, trung cấp, cao cấp
父	phụ	fu	phụ tử, phụ thân, phụ huynh
降	giáng, hàng	koo	giáng trần; đầu hàng
王	vương	oo	vương giả
講	giảng	koo	giảng đường, giảng bài
維	duy	I	sợi dây
顔	nhan	gan	nhan sắc, hồng nhan
均	quân	kin	quân bình, quân nhất
玉	ngọc	gyoku	ngọc
油	du	yu	dầu
喜	hỉ	ki	vui
類	loại	rui	chủng loại
等	đẳng	too	bình đẳng, đẳng cấp
芸	nghệ	gei	nghệ thuật, nghệ nhân
覚	giác	kaku	cảm giác, giác ngộ
静	tĩnh	sei, joo	bình tĩnh, trấn tĩnh
習	tập	shuu	học tập
標	tiêu	hyoo	mục tiêu, tiêu chuẩn
般	bàn, ban	han	nhất ban
夏	hạ	ka, ge	mùa hè
永	vĩnh	ei	vĩnh viễn, vỉnh cửu
興	hưng, hứng	koo, kyoo	hưng thịnh, phục hưng; hứng thú
羽	vũ	u	lông vũ
博	bác	haku, baku	uyên bác
迎	nghênh	gei	hoan nghênh, nghênh tiếp
禁	cấm	kin	cấm đoán, nghiêm cấm
短	đoản	tan	đoản mệnh, sở đoản
彼	bỉ	hi	anh ta
曲	khúc	kyoku	ca khúc
伸	thân	shin	dãn ra
継	kế	kei	kế tục
圧	áp	atsu	áp lực, trấn áp
績	tích	seki	thành tích
頼	lại	rai	ỷ lại
僚	liêu	ryoo	đồng liêu, quan liêu
厚	hậu	koo	nồng hậu, hậu tạ
替	thế	tai	thay thế, đại thế
背	bối	hai	bối cảnh
逆	nghịch	gyaku	phản nghịch
岩	nham	gan	đá tảng, nham thạch
陸	lục	riku	lục địa, lục quân
印	ấn	in	in ấn, ấn tượng
熱	nhiệt	netsu	nhiệt độ, nhiệt tình
香	hương	koo, kyoo	mùi hương, hương thơm
角	giác	kaku	tam giác, tứ giác
毎	mỗi	mai	mỗi
豊	phong	hoo	phong phú
輪	luân	rin	bánh xe, luân hồi
留	lưu	ryuu, ru	lưu học, lưu trữ
順	thuận	jun	tòng thuận, thuận tự
辞	từ	ji	từ vựng, từ chức
便	tiện	ben, bin	thuận tiện
散	tán, tản	san	phấn tán, tản mát
締	đế	tei	buộc
妻	thê	sai	thê tử
因	nhân	in	nguyên nhân
津	tân	shin	bờ biển
途	đồ	to	tiền đồ
罪	tội	zai	tội phạm, tội ác
則	tắc	soku	quy tắc, phép tắc
諸	chư	sho	chư hầu
志	chí	shi	ý chí, chí nguyện
源	nguyên	gen	nguồn, nguyên tuyền
湾	loan	wan	vịnh
踏	đạp	too	dẫm lên
払	phất	futsu	trả tiền
幸	hạnh	koo	hạnh phúc, hạnh vận
許	hứa	kyo	cho phép, hứa khả
略	lược	ryaku	tỉnh lược, xâm lược
固	cố	ko	ngoan cố, cố thủ
賛	tán	san	tán đồng, tán thành
星	tinh	sei, shoo	hành tinh, tinh tú
執	chấp	shitsu, shuu	cố chấp
善	thiện	zen	thiện ác, từ thiện
版	bản	han	xuất bản
精	tinh	sei, shoo	tinh lực, tinh túy
亡	vong	boo, moo	diệt vong
植	thực	shoku	thực vật, thực dân
崩	băng	hoo	băng hoại
戻	lệ	rei	quay lại
層	tầng	soo	hạ tầng, thượng tầng
聴	thính	choo	thính giả
適	thích	teki	thích hợp
属	thuộc	zoku	phụ thuộc
震	chấn	shin	địa chấn
宿	túc	shuku	tá túc, kí túc xá
押	áp	oo	ấn
脱	thoát	datsu	giải thoát
欠	khiếm	ketsu	khiếm khuyết
尾	vĩ	bi	cái đuôi
逮	đãi	tai	đuổi bắt
昭	chiêu	shoo	sáng
囲	vi	I	chu vi, bao vây
婚	hôn	kon	kết hôn, hôn nhân
旅	lữ	ryo	lữ hành, lữ khách
倍	bội	bai	bội thu, bội số
迫	bách	haku	áp bách, bức bách
浦	phổ	ho	cửa biển
闘	đấu	too	đấu tranh, chiến đấu
池	trì	chi	cái ao
像	tượng	zoo	tưởng tượng, thần tượng
貨	hóa	ka	hàng hóa
削	tước	saku	gọt, tước đoạt
寺	tự	ji	chùa
坂	phản	han	cái dốc
壊	hoại	kai	phá hoại
乱	loạn	ran	phản loạn, chiến loạn
帯	đới	tai	nhiệt đới, ôn đới
岸	ngạn	gan	hải ngạn
遣	khiển	ken	phân phát
緊	khẩn	kin	khẩn cấp, khẩn trương
努	nỗ	do	nỗ lực
練	luyện	ren	rèn luyện, luyện tập
康	khang	koo	kiện khang, khang trang
遅	trì	chi	muộn
棄	khí	ki	từ bỏ
刑	hình	kei	hình phạt, tử hình
宣	tuyên	sen	tuyên bố, tuyên cáo
避	tị	hi	tị nạn
著	trứ	cho	trứ danh, trứ tác
房	phòng	boo	phòng ở
塚	trủng	-	đống đất
勤	cần	kin, gon	chuyên cần, cần lao
服	phục	fuku	y phục, cảm phục, phục vụ
臨	lâm	rin	lâm thời
測	trắc	soku	đo đạc
惑	hoặc	waku	nghi hoặc
巨	cự	kyo	to lớn, cự đại, cự phách
昇	thăng	shoo	thăng tiến, thăng thiên
為	vi, vị	I	hành vi; vị kỉ
停	đình	tei	đình chỉ
遠	viễn	en, on	viễn phương, vĩnh viễn
軽	khinh	kei	khinh suất, khinh khi
兆	triệu	choo	triệu chứng, triệu triệu (10 mũ 12)
混	hỗn	kon	hỗn hợp, hỗn độn, hỗn loạn
沖	xung	chuu	ngoài khơi
幕	mạc	maku, baku	khai mạc, bế mạc
賀	hạ	ga	chúc mừng
載	tải	sai	đăng tải
創	sáng	soo	sáng tạo
陣	trận	jin	trận mạc
暴	bạo, bộc	boo, baku	bạo lực, bộc lộ
倒	đảo	too	đảo lộn
普	phổ	fu	phổ thông
雑	tạp	zatsu, zoo	tạp chí, tạp kĩ
築	trúc	chiku	kiến trúc
徳	đức	toku	đạo đức
季	quý	ki	mùa
密	mật	mitsu	bí mật, mật độ
浮	phù	fu	nổi, phù du
令	lệnh	rei	mệnh lệnh, pháp lệnh
樹	thụ	ju	cây, cổ thụ
恵	huệ	kei, e	ân huệ
儀	nghi	gi	nghi thức
邦	bang	hoo	liên bang
犯	phạm	han	phạm nhân
償	thường	shoo	bồi thường
抑	ức	yoku	ức chế
絶	tuyệt	zetsu	đoạn tuyệt, tuyệt diệu
措	thố	so	đặt, để
爆	bộc	baku	bộc phát
刊	san	kan	tuần san, chuyên san
繰	sào	-	
貴	quý	ki	cao quý
庭	đình	tei	triều đình, gia đình
老	lão	roo	già, lão luyện
患	hoạn	kan	bệnh hoạn
底	để	tei	đáy
郵	bưu	yuu	bưu điện
旬	tuần	jun	10 ngày
損	tổn	son	tổn hại, tổn thương
徒	đồ	to	môn đồ, đồ đệ
承	thừa	shoo	thừa nhận
恐	khủng	kyoo	khủng bố, khủng hoảng
齢	linh	rei	tuổi
隆	long	ryuu	cao quý
誌	chí	shi	tạp chí
択	trạch	taku	tuyển trạch
居	cư	kyo	cư trú
裏	lí	ri	đằng sau
駅	dịch	eki	ga
卒	tốt	sotsu	tốt nghiệp
傷	thương	shoo	tổn thương, thương tật
遊	du	yuu, yu	du hí, du lịch
雇	cố	ko	thuê, cố nông
併	tính	hei	thôn tính
需	nhu	ju	nhu yếu
抱	bão	hoo	ôm, hoài bão
掲	yết	kei	yết thị
更	canh	koo	canh tân
緩	hoãn	kan	hòa hoãn
描	miêu	byoo	miêu tả
汚	ô	o	ô nhiễm
招	chiêu	shoo	chiêu đãi
欲	dục	yoku	dục vọng
染	nhiễm	sen	ô nhiễm
葬	táng	soo	an táng
養	dưỡng	yoo	dưỡng dục
絡	lạc	raku	liên lạc
訳	dịch	yaku	thông dịch, phiên dịch
募	mộ	bo	mộ tập, chiêu mộ
複	phức	fuku	phức tạp
刻	khắc	koku	thời khắc
血	huyết	ketsu	tâm huyết
希	hi	ki	hi hữu, hi vọng
筋	cân	kin	gân cơ
契	khế	kei	khế ước
致	trí	chi	trí mạng
列	liệt	retsu	cột, la liệt
迷	mê	mei	mê hoặc, mê đắm
拠	cứ	kyo, ko	căn cứ, chiếm cứ
息	tức	soku	con trai, tử tức
奏	tấu	soo	diễn tấu
功	công	koo, ku	công lao
草	thảo	soo	thảo mộc
盤	bàn	ban	cái khay
板	bản	han, ban	tấm bảng
我	ngã	ga	bản ngã
射	xạ	sha	xạ thủ
触	xúc	shoku	tiếp xúc
秀	tú	shuu	ưu tú, tuấn tú
温	ôn	on	ôn hòa, ôn tồn
暮	mộ	bo	chiều tối
懸	huyền	ken, ke	treo
弱	nhược	jaku	nhược điểm, nhược tiểu
章	chương	shoo	chương sách
撤	triệt	tetsu	triệt thoái
納	nạp	noo, naQ, na, nan, too	nộp
痛	thống	tsuu	thống khổ
街	nhai	gai, kai	phố xá
笑	tiếu	shoo	cười
栄	vinh	ei	vinh quang, vinh hạnh
救	cứu	kyuu	cấp cứu, cứu trợ
願	nguyện	gan	tự nguyện, tình nguyện
探	thám	tan	do thám, thám hiểm
仲	trọng	chuu	trọng tài
裕	dụ	yuu	giàu sang
賃	nhẫm	chin	tiền thuê
扱	tráp	-	đối xử
了	liễu	ryoo	kết liễu, liễu giải
枠	<khung>	-	cái khung
秘	tất	hi	tất nhiên, tất yếu
鈴	linh	rei, rin	cái chuông
巻	quyển	kan	quyển sách
縮	súc	shuku	co lại
折	chiết	setsu	bẻ gãy, chiết suất
逃	đào	too	đào tẩu
詰	cật	kitsu	đóng hộp
雨	vũ	u	mưa
弾	đàn, đạn	dan	đánh đàn; viên đạn
宇	vũ	u	vũ trụ
鳥	điểu	choo	chim chóc
託	thác	taku	ủy thác
堂	đường	doo	thực đường, thiên đường
党	đảng	too	đảng phái
仏	phật	butsu	phật giáo
困	khốn	kon	khốn cùng
倉	thương	soo	nhà kho
互	hỗ	go	tương hỗ
節	tiết	setsu, sechi	tiết mục
絵	hội	kai, e	hội họa
届	giới	-	đưa đến
慎	thận	shin	thận trọng
慮	lự	ryo	tư lự, khảo lự
徴	trưng	choo	đặc trưng, tượng trưng
端	đoan	tan	đầu đoạn
肉	nhục	niku	thịt
枚	mai	mai	tờ
丁	đinh	tei, choo	<số đếm>
借	tá	shaku	mượn, tá điền
骨	cốt	kotsu	xương, cốt nhục
傾	khuynh	kei	khuynh đảo, khuynh hướng
還	hoàn	kan	hoàn trả
里	lí	ri	làng
束	thúc	soku	bó (hoa)
伴	bạn	han, ban	đi cùng
跡	tích	seki	dấu tích, vết tích
酒	tửu	shu	rượu
君	quân	kun	quân chủ, quân vương
奥	áo	oo	trong cùng
項	hạng	koo	hạng mục
躍	dược	yaku	nhảy lên
災	tai	sai	tai họa
焼	thiêu	shoo	thiêu đốt
閉	bế	hei	bế mạc, bế quan
夕	tịch	seki	tịch dương
促	xúc	soku	xúc tiến
群	quần	gun	quần chúng, quần thể
瀬	lại	-	thác nước
拒	cự	kyo	cự tuyệt
縄	thằng	joo	sợi dây
銭	tiền	sen	tiền bạc
律	luật	ritsu, richi	luật pháp
純	thuần	jun	đơn thuần, thuần khiết
簡	giản	kan	đơn giản
緒	tự	sho, cho	tình tự
贈	tặng	zoo, soo	hiến tặng
陽	dương	yoo	thái dương
預	dự	yo	gửi
夢	mộng	mu	mơ
燃	nhiên	nen	nhiên liệu
却	khước	kyaku	khước từ
掛	quải	-	treo
杉	sam	-	cây sam
揮	huy	ki	phát huy, chỉ huy
渋	sáp	juu	chát
称	xưng	shoo	xưng tên, danh xưng
控	khống	koo	khống chế
暫	tạm	zan	tạm thời
誘	dụ	yuu	dụ dỗ
依	ỷ	i, e	ỷ lại
曜	diệu	yoo	ngày trong tuần
妥	thỏa	da	thỏa hiệp
宗	tôn	shuu, soo	tôn giáo
殿	điện	den, ten	cung điện
奪	đoạt	datsu	chiếm đoạt
豪	hào	goo	hào kiệt, phú hào
紹	thiệu	shoo	giới thiệu
敬	kính	kei	kính yêu
貸	thải	tai	cho mượn
症	chứng	shoo	chứng bệnh, triệu chứng
購	cấu	koo	mua
顧	cố	ko	nhìn lại
典	điển	ten	cổ điển, điển tích

`;
  const dictionaryExtra = `
液/dịch/?/chất lỏng
剤/tễ/?/thuốc
索/sách/?/?
`;
  const dictionaryRawSplitList = dictionaryRaw.split(/\r?\n/).map(it=>it.trim()).filter(it=>it.length > 0);
  for (const dictionaryRawSplit of dictionaryRawSplitList) {
    // console.log(dictionaryRawSplit);
    const parts = dictionaryRawSplit.split('\t');
    dictionary.push({kanji:parts[0],viet:parts[1],hira:parts[2],mean:parts[3]});
  }

  const dictionaryExtraSplitList = dictionaryExtra.split(/\r?\n/).map(it=>it.trim()).filter(it=>it.length > 0);
  for (const dictionaryExtraSplit of dictionaryExtraSplitList) {
    const parts = dictionaryExtraSplit.split('/');
    dictionary.push({kanji:parts[0],viet:parts[1],hira:parts[2],mean:parts[3]});
  }

  console.log(dictionary);
  return dictionary;
}();
