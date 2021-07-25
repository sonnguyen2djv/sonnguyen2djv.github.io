const LESSONS =
//region JSON
{
    "1": [
        {
            "kanji": "私",
            "hiragana": "わたし",
            "nom": "TƯ",
            "meaning": "Tôi"
        },
        {
            "kanji": "私達",
            "hiragana": "わたしたち",
            "nom": "TƯ – ĐẠT",
            "meaning": "Chúng tôi, chúng ta"
        },
        {
            "kanji": "あの人",
            "hiragana": "あのひと",
            "nom": "NHÂN",
            "meaning": "Người kia"
        },
        {
            "kanji": "あの方",
            "hiragana": "あのかた",
            "nom": "PHƯƠNG",
            "meaning": "Vị kia"
        },
        {
            "kanji": "皆さん",
            "hiragana": "みなさん",
            "nom": "GIAI",
            "meaning": "Các ( bạn, anh, chị,)"
        },
        {
            "kanji": "～君",
            "hiragana": "～くん",
            "nom": "QUÂN",
            "meaning": "Bạn, Cậu ( gọi thân mật )"
        },
        {
            "kanji": "～人",
            "hiragana": "～じん",
            "nom": "NHÂN",
            "meaning": "Người"
        },
        {
            "kanji": "先生",
            "hiragana": "せんせい",
            "nom": "TIÊN - SINH",
            "meaning": "Giáo viên ( dùng để xưng hô"
        },
        {
            "kanji": "教師",
            "hiragana": "きょうし",
            "nom": "GIÁO - SƯ",
            "meaning": "Giáo viên ( dùng để chỉ chức"
        },
        {
            "kanji": "学生",
            "hiragana": "がくせい",
            "nom": "HỌC - SINH",
            "meaning": "Học sinh"
        },
        {
            "kanji": "会社員",
            "hiragana": "かいしゃいん",
            "nom": "HỘI – XÃ - VIÊN",
            "meaning": "Nhân viên công ty"
        },
        {
            "kanji": "社員",
            "hiragana": "しゃいん",
            "nom": "XÃ - VIÊN",
            "meaning": "Nhân viên"
        },
        {
            "kanji": "銀行員",
            "hiragana": "ぎんこういん",
            "nom": "NGÂN – HÀNG - VIÊN",
            "meaning": "Nhân viên ngân hàng"
        },
        {
            "kanji": "医者",
            "hiragana": "いしゃ",
            "nom": "Y – GIẢ",
            "meaning": "Bác sĩ"
        },
        {
            "kanji": "研究者",
            "hiragana": "けんきゅうしゃ",
            "nom": "NGHIÊN – CỨU – GIẢ",
            "meaning": "Nhà nghiên cứu"
        },
        {
            "kanji": "大学",
            "hiragana": "だいがく",
            "nom": "ĐẠI – HỌC",
            "meaning": "Đại học"
        },
        {
            "kanji": "病院",
            "hiragana": "びょういん",
            "nom": "BỆNH – VIỆN",
            "meaning": "Bệnh viện"
        },
        {
            "kanji": "誰",
            "hiragana": "だれ",
            "nom": "THÙY",
            "meaning": "Ai, người nào"
        },
        {
            "kanji": "才",
            "hiragana": "さい",
            "nom": "TÀI",
            "meaning": "Tuổi"
        },
        {
            "kanji": "歳",
            "hiragana": "さい",
            "nom": "TUẾ",
            "meaning": "Tuổi"
        },
        {
            "kanji": "何歳",
            "hiragana": "なんさい",
            "nom": "HÀ – TUẾ",
            "meaning": "Mấy tuổi ( hỏi bình thường )"
        },
        {
            "kanji": "何才",
            "hiragana": "なんさい",
            "nom": "HÀ - TÀI",
            "meaning": "Mấy tuổi ( hỏi bình thường )"
        },
        {
            "kanji": "中国",
            "hiragana": "ちゅうごく",
            "nom": "TRUNG – QUỐC",
            "meaning": "Trung Quốc"
        },
        {
            "kanji": "日本",
            "hiragana": "にほん",
            "nom": "NHẬT – BẢN",
            "meaning": "Nhật Bản"
        },
        {
            "kanji": "田舎",
            "hiragana": "いなか",
            "nom": "ĐIỀN - XÁ",
            "meaning": "Quê, Làng quê"
        },
        {
            "kanji": "出身",
            "hiragana": "しゅっしん",
            "nom": "XUẤT - THÂN",
            "meaning": "Xuất thân"
        },
        {
            "kanji": "実習生",
            "hiragana": "じっしゅうせい",
            "nom": "THỰC – TẬP - SINH",
            "meaning": "Thực tập sinh"
        },
        {
            "kanji": "機械",
            "hiragana": "きかい",
            "nom": "CƠ – GIỚI",
            "meaning": "Máy móc"
        },
        {
            "kanji": "専門",
            "hiragana": "せんもん",
            "nom": "CHUYÊN - MÔN",
            "meaning": "Chuyên môn"
        },
        {
            "kanji": "失礼ですが",
            "hiragana": "しつれいですが、",
            "nom": "THẤT – LỄ",
            "meaning": "Xin lỗi"
        },
        {
            "kanji": "お名前は？",
            "hiragana": "おなまえは？",
            "nom": "DANH – TIỀN",
            "meaning": "Tên gì"
        },
        {
            "kanji": "初めまして",
            "hiragana": "はじめまして",
            "nom": "SƠ",
            "meaning": "Xin chào ( Chào khi lần đầu"
        },
        {
            "kanji": "どうぞよろしくお願いします",
            "hiragana": "どうぞ、よろしくおねがいします",
            "nom": "NGUYỆN",
            "meaning": "Rất hân hạnh được làm quen"
        },
        {
            "kanji": "~から来ました",
            "hiragana": "～からきました",
            "nom": "LAI",
            "meaning": "Đến từ~"
        },
        {
            "kanji": "失礼ですが、お名前は？",
            "hiragana": "しつれいですが、おなまえは？",
            "nom": "THẤT LỄ DANH TIỀN",
            "meaning": "Xin lỗi, tên của bạn là gì"
        }
    ],
    "2": [
        {
            "kanji": "本",
            "hiragana": "ほん",
            "nom": "BẢN",
            "meaning": "Cuốn sách"
        },
        {
            "kanji": "辞書",
            "hiragana": "じしょ",
            "nom": "TỪ - THƯ",
            "meaning": "Từ điển"
        },
        {
            "kanji": "雑誌",
            "hiragana": "ざっし",
            "nom": "TẠP - CHÍ",
            "meaning": "Tạp chí"
        },
        {
            "kanji": "新聞",
            "hiragana": "しんぶん",
            "nom": "TÂN - VĂN",
            "meaning": "Báo"
        },
        {
            "kanji": "手帳",
            "hiragana": "てちょう",
            "nom": "THỦ - TRƯỚNG",
            "meaning": "Sổ tay"
        },
        {
            "kanji": "名刺",
            "hiragana": "めいし",
            "nom": "DANH - THÍCH",
            "meaning": "Danh thiếp"
        },
        {
            "kanji": "鉛筆",
            "hiragana": "えんぴつ",
            "nom": "DUYÊN - BÚT",
            "meaning": "Bút chì chuốt"
        },
        {
            "kanji": "時計",
            "hiragana": "とけい",
            "nom": "THỜI – KẾ",
            "meaning": "Đồng hồ"
        },
        {
            "kanji": "傘",
            "hiragana": "かさ",
            "nom": "TÁN",
            "meaning": "Cây dù"
        },
        {
            "kanji": "鞄",
            "hiragana": "かばん",
            "nom": "BẠC",
            "meaning": "Cái cặp"
        },
        {
            "kanji": "鍵",
            "hiragana": "かぎ",
            "nom": "KIỆN",
            "meaning": "Chìa khóa"
        },
        {
            "kanji": "自転車",
            "hiragana": "じてんしゃ",
            "nom": "TỰ - CHUYỂN - XA",
            "meaning": "Xe đạp"
        },
        {
            "kanji": "車",
            "hiragana": "くるま",
            "nom": "XA",
            "meaning": "Xe hơi"
        },
        {
            "kanji": "椅子",
            "hiragana": "いす",
            "nom": "Ỷ - TỬ",
            "meaning": "Cái ghế"
        },
        {
            "kanji": "机",
            "hiragana": "つくえ",
            "nom": "KỶ",
            "meaning": "Cái bàn"
        },
        {
            "kanji": "英語",
            "hiragana": "えいご",
            "nom": "ANH – NGỮ",
            "meaning": "Tiếng Anh"
        },
        {
            "kanji": "日本語",
            "hiragana": "にほんご",
            "nom": "NHẬT – BẢN – NGỮ",
            "meaning": "Tiếng Nhật"
        },
        {
            "kanji": "～語",
            "hiragana": "～ご",
            "nom": "NGỮ",
            "meaning": "Tiếng~"
        },
        {
            "kanji": "何",
            "hiragana": "なん",
            "nom": "HÀ",
            "meaning": "Cái gì"
        },
        {
            "kanji": "違います",
            "hiragana": "ちがいます",
            "nom": "VI",
            "meaning": "Sai rồi, nhầm rồi"
        },
        {
            "kanji": "紙",
            "hiragana": "かみ",
            "nom": "CHỈ",
            "meaning": "Tờ giấy"
        },
        {
            "kanji": "髪",
            "hiragana": "かみ",
            "nom": "PHÁT",
            "meaning": "Tóc"
        },
        {
            "kanji": "手紙",
            "hiragana": "てがみ",
            "nom": "THỦ - CHỈ",
            "meaning": "Thư, Lá thư"
        },
        {
            "kanji": "煙草",
            "hiragana": "たばこ",
            "nom": "YÊN – THẢO",
            "meaning": "Thuốc lá"
        },
        {
            "kanji": "灰皿",
            "hiragana": "はいざら",
            "nom": "HÔI - MÃNH",
            "meaning": "Cái gạt tàn thuốc"
        },
        {
            "kanji": "箱",
            "hiragana": "はこ",
            "nom": "TƯƠNG",
            "meaning": "Cái hộp"
        },
        {
            "kanji": "お願いします",
            "hiragana": "おねがいします",
            "nom": "NGUYỆN",
            "meaning": "Xin nhờ"
        },
        {
            "kanji": "待ってください",
            "hiragana": "まってください",
            "nom": "ĐÃI",
            "meaning": "Xin hãy đợi"
        }
    ],
    "3": [
        {
            "kanji": "教室",
            "hiragana": "きょうしつ",
            "nom": "GIÁO – THẤT",
            "meaning": "Phòng học"
        },
        {
            "kanji": "食堂",
            "hiragana": "しょくどう",
            "nom": "THỰC – ĐƯỜNG",
            "meaning": "Nhà ăn"
        },
        {
            "kanji": "事務所",
            "hiragana": "じむしょ",
            "nom": "SỰ - VỤ - SỞ",
            "meaning": "Văn phòng"
        },
        {
            "kanji": "会議室",
            "hiragana": "かいぎしつ",
            "nom": "HỘI – NGHỊ - THẤT",
            "meaning": "Phòng họp"
        },
        {
            "kanji": "受付",
            "hiragana": "うけつけ",
            "nom": "THỤ - PHÓ",
            "meaning": "Quầy tiếp tân"
        },
        {
            "kanji": "部屋",
            "hiragana": "へや",
            "nom": "BỘ - ỐC",
            "meaning": "Phòng, Căn phòng"
        },
        {
            "kanji": "お手洗い",
            "hiragana": "おてあらい",
            "nom": "THỦ - TẨY",
            "meaning": "Nhà vệ sinh ( sang trọng hơn"
        },
        {
            "kanji": "階段",
            "hiragana": "かいだん",
            "nom": "GIAI – ĐOẠN",
            "meaning": "Cầu thang"
        },
        {
            "kanji": "国",
            "hiragana": "くに",
            "nom": "QUỐC",
            "meaning": "Đất nước, Nước ( Quốc gia )"
        },
        {
            "kanji": "会社",
            "hiragana": "かいしゃ",
            "nom": "HỘI - XÃ",
            "meaning": "Công ty"
        },
        {
            "kanji": "家",
            "hiragana": "いえ ．うち",
            "nom": "GIA",
            "meaning": "Nhà"
        },
        {
            "kanji": "電話",
            "hiragana": "でんわ",
            "nom": "ĐIỆN – THOẠI",
            "meaning": "Điện thoại"
        },
        {
            "kanji": "煙草",
            "hiragana": "たばこ",
            "nom": "YÊN – THẢO",
            "meaning": "Thuốc lá"
        },
        {
            "kanji": "売り場",
            "hiragana": "うりば",
            "nom": "MÃI – TRƯỜNG",
            "meaning": "Quầy bán hàng"
        },
        {
            "kanji": "店員",
            "hiragana": "てんいん",
            "nom": "ĐIẾM - VIÊN",
            "meaning": "Nhân viên bán hàng"
        },
        {
            "kanji": "地下",
            "hiragana": "ちか",
            "nom": "ĐỊA – HẠ",
            "meaning": "Tầng hầm"
        },
        {
            "kanji": "~階",
            "hiragana": "～かい．がい",
            "nom": "GIAI",
            "meaning": "Tầng~"
        },
        {
            "kanji": "何階",
            "hiragana": "なんがい",
            "nom": "HÀ - GIAI",
            "meaning": "Tầng mấy"
        },
        {
            "kanji": "円",
            "hiragana": "えん",
            "nom": "VIÊN",
            "meaning": "Yên ( tiền Nhật )"
        },
        {
            "kanji": "大阪",
            "hiragana": "おおさか",
            "nom": "ĐẠI – PHẢN",
            "meaning": "OSAKA"
        },
        {
            "kanji": "新大阪",
            "hiragana": "しんおおさか",
            "nom": "TÂN – ĐẠI – PHẢN",
            "meaning": "SHIN-OSAKA"
        },
        {
            "kanji": "百",
            "hiragana": "ひゃく",
            "nom": "BÁCH",
            "meaning": "Trăm"
        },
        {
            "kanji": "千",
            "hiragana": "せん",
            "nom": "THIÊN",
            "meaning": "Ngàn"
        },
        {
            "kanji": "万",
            "hiragana": "まん",
            "nom": "VẠN",
            "meaning": "10 ngàn"
        },
        {
            "kanji": "研修センター",
            "hiragana": "けんしゅうセンター",
            "nom": "NGHIÊN - TU",
            "meaning": "Trung tâm thực tập"
        },
        {
            "kanji": "～を見せてください",
            "hiragana": "～をみせてください",
            "nom": "KIẾN",
            "meaning": "Làm ơn cho tôi xem"
        }
    ],
    "4": [
        {
            "kanji": "起きる",
            "hiragana": "おきる",
            "nom": "KHỞI",
            "meaning": "Thức dậy"
        },
        {
            "kanji": "寝る",
            "hiragana": "ねる",
            "nom": "TẨM",
            "meaning": "Ngủ"
        },
        {
            "kanji": "働く",
            "hiragana": "はたらく",
            "nom": "ĐỘNG",
            "meaning": "Làm việc"
        },
        {
            "kanji": "休む",
            "hiragana": "やすむ",
            "nom": "HƯU",
            "meaning": "Nghỉ"
        },
        {
            "kanji": "勉強する",
            "hiragana": "べんきょうする",
            "nom": "MIỄN – CƯỠNG",
            "meaning": "Học"
        },
        {
            "kanji": "終わる",
            "hiragana": "おわる",
            "nom": "CHUNG",
            "meaning": "Kết thúc, xong"
        },
        {
            "kanji": "銀行",
            "hiragana": "ぎんこう",
            "nom": "NGÂN - HÀNG",
            "meaning": "Ngân hàng"
        },
        {
            "kanji": "郵便局",
            "hiragana": "ゆうびんきょく",
            "nom": "BƯU – TIỆN – CỤC",
            "meaning": "Bưu điện"
        },
        {
            "kanji": "図書館",
            "hiragana": "としょかん",
            "nom": "ĐỒ - THƯ - QUÁN",
            "meaning": "Thư viện"
        },
        {
            "kanji": "美術館",
            "hiragana": "びじつかん",
            "nom": "MỸ - THUẬT - QUÁN",
            "meaning": "Viện bảo tàng mỹ thuật"
        },
        {
            "kanji": "電話番号",
            "hiragana": "でんわばんごう",
            "nom": "ĐIỆN THOẠI PHIÊN HIỆU",
            "meaning": "Số điện thoại"
        },
        {
            "kanji": "何番",
            "hiragana": "なんばん",
            "nom": "HÀ - PHIÊN",
            "meaning": "Số mấy"
        },
        {
            "kanji": "今",
            "hiragana": "いま",
            "nom": "KIM",
            "meaning": "Bây giờ"
        },
        {
            "kanji": "～時",
            "hiragana": "～じ",
            "nom": "THỜI",
            "meaning": "~ giờ"
        },
        {
            "kanji": "～分",
            "hiragana": "～ふん ．ぷん",
            "nom": "PHÂN",
            "meaning": "~Phút"
        },
        {
            "kanji": "半",
            "hiragana": "はん",
            "nom": "BÁN",
            "meaning": "Rưỡi, phân nửa"
        },
        {
            "kanji": "何時",
            "hiragana": "なんじ",
            "nom": "HÀ – THỜI",
            "meaning": "Mấy giờ"
        },
        {
            "kanji": "何分",
            "hiragana": "なんぷん",
            "nom": "HÀ - PHÂN",
            "meaning": "Mấy phút"
        },
        {
            "kanji": "午前",
            "hiragana": "ごぜん",
            "nom": "NGỌ - TIỀN",
            "meaning": "Buổi sáng ( AM )"
        },
        {
            "kanji": "午後",
            "hiragana": "ごご",
            "nom": "NGỌ - HẬU",
            "meaning": "Buổi chiều ( PM )"
        },
        {
            "kanji": "朝",
            "hiragana": "あさ",
            "nom": "TRIỀU",
            "meaning": "Sáng ( tinh mơ )"
        },
        {
            "kanji": "昼",
            "hiragana": "ひる",
            "nom": "TRÚ",
            "meaning": "Trưa"
        },
        {
            "kanji": "晩",
            "hiragana": "ばん",
            "nom": "VÃN",
            "meaning": "Tối"
        },
        {
            "kanji": "夜",
            "hiragana": "よる",
            "nom": "DẠ",
            "meaning": "Đêm, Tối"
        },
        {
            "kanji": "一昨日",
            "hiragana": "おととい",
            "nom": "NHẤT – TẠC – NHẬT",
            "meaning": "Hôm kia"
        },
        {
            "kanji": "昨日",
            "hiragana": "きのう",
            "nom": "TẠC – NHẬT",
            "meaning": "Hôm qua"
        },
        {
            "kanji": "今日",
            "hiragana": "きょう",
            "nom": "KIM – NHẬT",
            "meaning": "Hôm nay"
        },
        {
            "kanji": "明日",
            "hiragana": "あした",
            "nom": "MINH – NHẬT",
            "meaning": "Ngày mai"
        },
        {
            "kanji": "明後日",
            "hiragana": "あさって",
            "nom": "MINH – HẬU – NHẬT",
            "meaning": "Ngày mốt"
        },
        {
            "kanji": "今朝",
            "hiragana": "けさ",
            "nom": "KIM – TRIỀU",
            "meaning": "Sáng nay"
        },
        {
            "kanji": "今晩",
            "hiragana": "こんばん",
            "nom": "KIM - VÃN",
            "meaning": "Tối nay"
        },
        {
            "kanji": "昨夜",
            "hiragana": "ゆうべ",
            "nom": "TẠC – DẠ",
            "meaning": "Đêm qua, Tối qua"
        },
        {
            "kanji": "月曜日",
            "hiragana": "げつようび",
            "nom": "NGUYỆT – DIỆU – NHẬT",
            "meaning": "Thứ 2"
        },
        {
            "kanji": "火曜日",
            "hiragana": "かようび",
            "nom": "HỎA – DIỆU – NHẬT",
            "meaning": "Thứ 3"
        },
        {
            "kanji": "水曜日",
            "hiragana": "かようび",
            "nom": "THỦY – DIỆU – NHẬT",
            "meaning": "Thứ 4"
        },
        {
            "kanji": "木曜日",
            "hiragana": "もくようび",
            "nom": "MỘC – DIỆU – NHẬT",
            "meaning": "Thứ 5"
        },
        {
            "kanji": "金曜日",
            "hiragana": "きんようび",
            "nom": "KIM – DIỆU – NHẬT",
            "meaning": "Thứ 6"
        },
        {
            "kanji": "土曜日",
            "hiragana": "どようび",
            "nom": "THỔ - DIỆU – NHẬT",
            "meaning": "Thứ 7"
        },
        {
            "kanji": "日曜日",
            "hiragana": "にちよび",
            "nom": "NHẬT – DIỆU – NHẬT",
            "meaning": "Chủ nhật"
        },
        {
            "kanji": "何曜日",
            "hiragana": "なようび",
            "nom": "HÀ – DIỆU – NHẬT",
            "meaning": "Thứ mấy"
        },
        {
            "kanji": "休み",
            "hiragana": "やすみ",
            "nom": "HƯU",
            "meaning": "Nghỉ"
        },
        {
            "kanji": "昼休み",
            "hiragana": "ひるやすみ",
            "nom": "TRÚ – HƯU",
            "meaning": "Nghỉ trưa"
        },
        {
            "kanji": "毎晩",
            "hiragana": "まいばん",
            "nom": "MỖI - VÃN",
            "meaning": "Mỗi tối"
        },
        {
            "kanji": "毎日",
            "hiragana": "まいにち",
            "nom": "MỖI – NHẬT",
            "meaning": "Mỗi ngày"
        },
        {
            "kanji": "講義",
            "hiragana": "こうぎ",
            "nom": "GIẢNG - NGHĨA",
            "meaning": "Bài giảng"
        },
        {
            "kanji": "見学",
            "hiragana": "けんがく",
            "nom": "KIẾN – HỌC",
            "meaning": "Tham quan học hỏi"
        },
        {
            "kanji": "番号案内",
            "hiragana": "ばんごうあんない",
            "nom": "PHIÊN HIỆU ÁN NỘI",
            "meaning": "Số điện thoại hướng dẫn"
        },
        {
            "kanji": "お問い合わせ",
            "hiragana": "おといあわせ",
            "nom": "VẤN – HỢP",
            "meaning": "Nơi liên hệ"
        },
        {
            "kanji": "大変ですね",
            "hiragana": "たいへんですね",
            "nom": "ĐẠI – BIẾN",
            "meaning": "Vất vả quá nhỉ"
        }
    ],
    "5": [
        {
            "kanji": "行く",
            "hiragana": "いく",
            "nom": "HÀNH",
            "meaning": "Đi"
        },
        {
            "kanji": "帰る",
            "hiragana": "かえる",
            "nom": "QUY",
            "meaning": "Về, trở về"
        },
        {
            "kanji": "駅",
            "hiragana": "えき",
            "nom": "DỊCH",
            "meaning": "Nhà ga"
        },
        {
            "kanji": "電車",
            "hiragana": "でんしゃ",
            "nom": "ĐIỆN - XA",
            "meaning": "Xe điện"
        },
        {
            "kanji": "新幹線",
            "hiragana": "しんかんせん",
            "nom": "TÂN – CÁN – TUYẾN",
            "meaning": "Tàu cao tốc"
        },
        {
            "kanji": "歩いて行く",
            "hiragana": "あるいていく",
            "nom": "BỘ - HÀNH",
            "meaning": "Đi bộ"
        },
        {
            "kanji": "友達",
            "hiragana": "ともだち",
            "nom": "HỮU – ĐẠT",
            "meaning": "Bạn ( bạn bè )"
        },
        {
            "kanji": "来る",
            "hiragana": "くる",
            "nom": "LAI",
            "meaning": "Đến"
        },
        {
            "kanji": "学校",
            "hiragana": "がっこう",
            "nom": "HỌC – HIỆU",
            "meaning": "Trường học"
        },
        {
            "kanji": "飛行機",
            "hiragana": "ひこうき",
            "nom": "PHI HÀNH CƠ",
            "meaning": "Máy bay"
        },
        {
            "kanji": "地下鉄",
            "hiragana": "ちかてつ",
            "nom": "ĐỊA HẠ THIẾT",
            "meaning": "Tàu điện ngầm"
        },
        {
            "kanji": "自転車",
            "hiragana": "じてんしゃ",
            "nom": "TỰ CHUYỂN XA",
            "meaning": "Xe đạp"
        },
        {
            "kanji": "人",
            "hiragana": "ひと",
            "nom": "NHÂN",
            "meaning": "Người"
        },
        {
            "kanji": "彼",
            "hiragana": "かれ",
            "nom": "BỈ",
            "meaning": "Anh ấy"
        },
        {
            "kanji": "彼女",
            "hiragana": "かのじょ",
            "nom": "BỈ - NỮ",
            "meaning": "Cố ấy"
        },
        {
            "kanji": "一人で",
            "hiragana": "ひとりで",
            "nom": "NHẤT - NHÂN",
            "meaning": "Một mình"
        },
        {
            "kanji": "今週",
            "hiragana": "こんしゅう",
            "nom": "KIM - CHU",
            "meaning": "Tuần này"
        },
        {
            "kanji": "先月",
            "hiragana": "せんげつ",
            "nom": "TIÊN – NGUYỆT",
            "meaning": "Tháng rồi"
        },
        {
            "kanji": "来月",
            "hiragana": "らいげつ",
            "nom": "LAI – NGUYỆT",
            "meaning": "Tháng tới, tháng sau"
        },
        {
            "kanji": "今年",
            "hiragana": "ことし",
            "nom": "KIM - NIÊN",
            "meaning": "Năm nay"
        },
        {
            "kanji": "何日ですか",
            "hiragana": "なんにちですか",
            "nom": "HÀ – NHẬT",
            "meaning": "Ngày mấy"
        },
        {
            "kanji": "家族",
            "hiragana": "かぞく",
            "nom": "GIA – TỘC",
            "meaning": "Gia đình"
        },
        {
            "kanji": "先週",
            "hiragana": "せんしゅう",
            "nom": "TIÊN - CHU",
            "meaning": "Tuần trước"
        },
        {
            "kanji": "来週",
            "hiragana": "らいしゅう",
            "nom": "LAI - CHU",
            "meaning": "Tuần sau"
        },
        {
            "kanji": "今月",
            "hiragana": "こんげつ",
            "nom": "KIM – NGUYỆT",
            "meaning": "Tháng này"
        },
        {
            "kanji": "去年",
            "hiragana": "きょねん",
            "nom": "KHỨ - NIÊN",
            "meaning": "Năm ngoái, năm rồi"
        },
        {
            "kanji": "来年",
            "hiragana": "らいねん",
            "nom": "Năm sau, năm tới",
            "meaning": ""
        },
        {
            "kanji": "誕生日",
            "hiragana": "たんじょうび",
            "nom": "ĐẢN SINH NHẬT",
            "meaning": "Ngày sinh nhật"
        },
        {
            "kanji": "普通",
            "hiragana": "ふつう",
            "nom": "PHỔ - THÔNG",
            "meaning": "Thông thường, Tàu thường"
        },
        {
            "kanji": "急行",
            "hiragana": "きゅうこう",
            "nom": "CẤP - HÀNH",
            "meaning": "Tàu tốc hành"
        },
        {
            "kanji": "工場",
            "hiragana": "こうじょう",
            "nom": "CÔNG – TRƯỜNG",
            "meaning": "Nhà máy, công xưởng"
        },
        {
            "kanji": "特急",
            "hiragana": "とっきゅう",
            "nom": "ĐẶC – CẤP",
            "meaning": "Cấp tốc, Tàu hỏa tốc"
        },
        {
            "kanji": "次の",
            "hiragana": "つぎの",
            "nom": "THỨ",
            "meaning": "Kế tiếp, sau đây"
        },
        {
            "kanji": "番線",
            "hiragana": "ばんせん",
            "nom": "PHIÊN – TUYẾN",
            "meaning": "Tuyến số"
        }
    ],
    "6": [
        {
            "kanji": "食べる",
            "hiragana": "たべる",
            "nom": "THỰC",
            "meaning": "Ăn"
        },
        {
            "kanji": "吸う",
            "hiragana": "すう",
            "nom": "HẤP",
            "meaning": "Hút ( thuốc lá )"
        },
        {
            "kanji": "見る",
            "hiragana": "みる",
            "nom": "KIẾN",
            "meaning": "Xem, Nhìn"
        },
        {
            "kanji": "書く",
            "hiragana": "かく",
            "nom": "THƯ",
            "meaning": "Viết, Vẽ"
        },
        {
            "kanji": "買う",
            "hiragana": "かう",
            "nom": "MẠI",
            "meaning": "Mua"
        },
        {
            "kanji": "写真を撮る",
            "hiragana": "しゃしんをとる",
            "nom": "TẢ CHÂN TOÁT",
            "meaning": "Chụp hình"
        },
        {
            "kanji": "友達に会う",
            "hiragana": "ともだちにあう",
            "nom": "HỮU ĐẠT HỘI",
            "meaning": "Gặp bạn bè"
        },
        {
            "kanji": "飲む",
            "hiragana": "のむ",
            "nom": "ẨM",
            "meaning": "Uống"
        },
        {
            "kanji": "煙草を吸う",
            "hiragana": "たばこをすう",
            "nom": "YÊN – THẢO – HẤP",
            "meaning": "Hút thuốc"
        },
        {
            "kanji": "聞く",
            "hiragana": "きく",
            "nom": "VĂN",
            "meaning": "Nghe, Hỏi"
        },
        {
            "kanji": "読む",
            "hiragana": "よむ",
            "nom": "ĐỘC",
            "meaning": "Đọc"
        },
        {
            "kanji": "撮る",
            "hiragana": "とる",
            "nom": "TOÁT",
            "meaning": "Chụp ( hình )"
        },
        {
            "kanji": "会う",
            "hiragana": "あう",
            "nom": "HỘI",
            "meaning": "Gặp"
        },
        {
            "kanji": "ご飯",
            "hiragana": "ごはん",
            "nom": "PHẠN",
            "meaning": "Cơm"
        },
        {
            "kanji": "朝ご飯",
            "hiragana": "あさごはん",
            "nom": "TRIỀU – PHẠN",
            "meaning": "Cơm sáng, Bữa sáng"
        },
        {
            "kanji": "晩ご飯",
            "hiragana": "ばんごはん",
            "nom": "VÃN – PHẠN",
            "meaning": "Cơm tối"
        },
        {
            "kanji": "肉",
            "hiragana": "にく",
            "nom": "NHỤC",
            "meaning": "Thịt"
        },
        {
            "kanji": "野菜",
            "hiragana": "やさい",
            "nom": "DÃ - THÁI",
            "meaning": "Rau – Củ - Quả"
        },
        {
            "kanji": "水",
            "hiragana": "みず",
            "nom": "THỦY",
            "meaning": "Nước"
        },
        {
            "kanji": "紅茶",
            "hiragana": "こうちゃ",
            "nom": "HỒNG  - TRÀ",
            "meaning": "Hồng trà"
        },
        {
            "kanji": "お酒",
            "hiragana": "おさけ",
            "nom": "TỬU",
            "meaning": "Rượu"
        },
        {
            "kanji": "昼ご飯",
            "hiragana": "ひるごはん",
            "nom": "TRÚ – PHẠN",
            "meaning": "Cơm trưa"
        },
        {
            "kanji": "卵",
            "hiragana": "たまご",
            "nom": "NOÃN",
            "meaning": "Trứng"
        },
        {
            "kanji": "魚",
            "hiragana": "さかな",
            "nom": "NGƯ",
            "meaning": "Cá"
        },
        {
            "kanji": "果物",
            "hiragana": "くだもの",
            "nom": "QUẢ - VẬT",
            "meaning": "Trái cây"
        },
        {
            "kanji": "お茶",
            "hiragana": "おちゃ",
            "nom": "TRÀ",
            "meaning": "Trà"
        },
        {
            "kanji": "牛乳",
            "hiragana": "ぎゅうにゅう",
            "nom": "NGƯU - NHŨ",
            "meaning": "Sữa"
        },
        {
            "kanji": "映画",
            "hiragana": "えいが",
            "nom": "ÁNH – HỌA",
            "meaning": "Phim"
        },
        {
            "kanji": "映画館",
            "hiragana": "えいがかん",
            "nom": "ÁNH HỌA QUÁN",
            "meaning": "Rạp chiếu phim"
        },
        {
            "kanji": "店",
            "hiragana": "みせ",
            "nom": "ĐIẾM",
            "meaning": "Cửa tiệm"
        },
        {
            "kanji": "一緒に",
            "hiragana": "いっしょに",
            "nom": "NHẤT – TỰ",
            "meaning": "Cùng, cùng với"
        },
        {
            "kanji": "何ですか",
            "hiragana": "なんですか",
            "nom": "HÀ",
            "meaning": "Cái gì vậy"
        },
        {
            "kanji": "大阪城公園",
            "hiragana": "おおさかじょうこうえん",
            "nom": "ĐẠI PHẢN THÀNH CÔNG",
            "meaning": "VIÊN"
        },
        {
            "kanji": "何",
            "hiragana": "なに",
            "nom": "HÀ",
            "meaning": "Cái gì"
        },
        {
            "kanji": "時々",
            "hiragana": "ときどき",
            "nom": "THỜI - KÉP",
            "meaning": "Thỉnh thoảng"
        },
        {
            "kanji": "公園",
            "hiragana": "こうえん",
            "nom": "CÔNG - VIÊN",
            "meaning": "Công viên"
        },
        {
            "kanji": "お花見",
            "hiragana": "おはなみ",
            "nom": "HOA – KIẾN",
            "meaning": "Ngắm hoa Anh Đào"
        }
    ],
    "7": [
        {
            "kanji": "切る",
            "hiragana": "きる",
            "nom": "THIẾT",
            "meaning": "Cắt"
        },
        {
            "kanji": "貸す",
            "hiragana": "かす",
            "nom": "THẢI",
            "meaning": "Cho mượn"
        },
        {
            "kanji": "教える",
            "hiragana": "おしえる",
            "nom": "GIÁO",
            "meaning": "Dạy, chỉ dẫn"
        },
        {
            "kanji": "電話をかける",
            "hiragana": "でんわをかける",
            "nom": "ĐIỆN – THOẠI",
            "meaning": "Gọi điện thoại"
        },
        {
            "kanji": "消しゴム",
            "hiragana": "けしゴム",
            "nom": "TIÊU",
            "meaning": "Cục gôm"
        },
        {
            "kanji": "花",
            "hiragana": "はな",
            "nom": "HOA",
            "meaning": "Hoa"
        },
        {
            "kanji": "荷物",
            "hiragana": "にもつ",
            "nom": "HÀ – VẬT",
            "meaning": "Hành lý"
        },
        {
            "kanji": "送る",
            "hiragana": "おくる",
            "nom": "TỐNG",
            "meaning": "Gửi"
        },
        {
            "kanji": "借りる",
            "hiragana": "かりる",
            "nom": "TÁ",
            "meaning": "Mượn"
        },
        {
            "kanji": "習う",
            "hiragana": "ならう",
            "nom": "TẬP",
            "meaning": "Học"
        },
        {
            "kanji": "手",
            "hiragana": "て",
            "nom": "THỦ",
            "meaning": "Tay"
        },
        {
            "kanji": "紙",
            "hiragana": "かみ",
            "nom": "CHỈ",
            "meaning": "Giấy"
        },
        {
            "kanji": "電話",
            "hiragana": "でんわ",
            "nom": "ĐIỆN – THOẠI",
            "meaning": "Điện thoại"
        },
        {
            "kanji": "お金",
            "hiragana": "おかね",
            "nom": "KIM",
            "meaning": "Tiền"
        },
        {
            "kanji": "切符",
            "hiragana": "きっぷ",
            "nom": "THIẾT - PHÙ",
            "meaning": "Vé ( Xe, Tàu )"
        },
        {
            "kanji": "母",
            "hiragana": "はは",
            "nom": "MẪU",
            "meaning": "Mẹ ( của mình )"
        },
        {
            "kanji": "お母さん",
            "hiragana": "おかあさん",
            "nom": "MẪU",
            "meaning": "Mẹ ( của bạn )"
        },
        {
            "kanji": "失礼します",
            "hiragana": "しつれいします",
            "nom": "THẤT – LỄ",
            "meaning": "Xin lỗi, làm phiền"
        },
        {
            "kanji": "お土産",
            "hiragana": "おみやげ",
            "nom": "THỔ - SẢN",
            "meaning": "Quà đặc sản"
        },
        {
            "kanji": "父",
            "hiragana": "ちち",
            "nom": "PHỤ",
            "meaning": "Ba  ( của mình )"
        },
        {
            "kanji": "お父さん",
            "hiragana": "おとうさん",
            "nom": "PHỤ",
            "meaning": "Ba ( của bạn )"
        },
        {
            "kanji": "修理する",
            "hiragana": "しゅうりする",
            "nom": "TU - LÝ",
            "meaning": "Sửa chữa"
        },
        {
            "kanji": "旅行",
            "hiragana": "りょこう",
            "nom": "LỮ - HÀNH",
            "meaning": "Chuyến du lịch"
        }
    ],
    "8": [
        {
            "kanji": "静か",
            "hiragana": "しずか",
            "nom": "TĨNH",
            "meaning": "Yên tĩnh"
        },
        {
            "kanji": "有名",
            "hiragana": "ゆうめい",
            "nom": "HỮU DANH",
            "meaning": "Nổi tiếng"
        },
        {
            "kanji": "親切",
            "hiragana": "しんせつ",
            "nom": "THÂN THIẾT",
            "meaning": "Tử tế, tốt bụng"
        },
        {
            "kanji": "元気",
            "hiragana": "げんき",
            "nom": "NGUYÊN KHÍ",
            "meaning": "Khỏe mạnh"
        },
        {
            "kanji": "暇",
            "hiragana": "ひま",
            "nom": "HẠ",
            "meaning": "Rảnh rỗi"
        },
        {
            "kanji": "便利",
            "hiragana": "べんり",
            "nom": "TIỆN LỢI",
            "meaning": "Tiện lợi"
        },
        {
            "kanji": "素敵",
            "hiragana": "すてき",
            "nom": "TỐ ĐỊCH",
            "meaning": "Tuyệt vời, Đẹp, Dễ thương"
        },
        {
            "kanji": "大きい",
            "hiragana": "おおきい",
            "nom": "ĐẠI",
            "meaning": "To, lớn"
        },
        {
            "kanji": "小さい",
            "hiragana": "ちいさい",
            "nom": "TIỂU",
            "meaning": "Nhỏ, bé"
        },
        {
            "kanji": "新しい",
            "hiragana": "あたらしい",
            "nom": "TÂN",
            "meaning": "Mới"
        },
        {
            "kanji": "古い",
            "hiragana": "ふるい",
            "nom": "CỔ",
            "meaning": "Cũ"
        },
        {
            "kanji": "悪い",
            "hiragana": "わるい",
            "nom": "ÁC",
            "meaning": "Xấu ( tính cách )"
        },
        {
            "kanji": "暑い",
            "hiragana": "あつい",
            "nom": "THỬ",
            "meaning": "Nóng ( thời tiết )"
        },
        {
            "kanji": "熱い",
            "hiragana": "あつい",
            "nom": "NHIỆT",
            "meaning": "Nóng ( đồ ăn, đồ uống )"
        },
        {
            "kanji": "寒い",
            "hiragana": "さむい",
            "nom": "HÀN",
            "meaning": "Lạnh, lạnh lẽo"
        },
        {
            "kanji": "冷たい",
            "hiragana": "つめたい",
            "nom": "LÃNH",
            "meaning": "Lạnh ( thức ăn )"
        },
        {
            "kanji": "難しい",
            "hiragana": "むずかしい",
            "nom": "NAN",
            "meaning": "Khó, không dễ"
        },
        {
            "kanji": "優しい",
            "hiragana": "やさしい",
            "nom": "ƯU",
            "meaning": "Hiền lành, dịu dàng"
        },
        {
            "kanji": "易しい",
            "hiragana": "やさしい",
            "nom": "DỊCH",
            "meaning": "Dễ, không khó"
        },
        {
            "kanji": "高い",
            "hiragana": "たかい",
            "nom": "CAO",
            "meaning": "Cao, đắt tiền"
        },
        {
            "kanji": "安い",
            "hiragana": "やすい",
            "nom": "AN",
            "meaning": "Rẻ"
        },
        {
            "kanji": "低い",
            "hiragana": "ひくい",
            "nom": "ĐÊ",
            "meaning": "Thấp, lùn"
        },
        {
            "kanji": "面白い",
            "hiragana": "おもしろい",
            "nom": "DIỆN BẠCH",
            "meaning": "Thú vị, hấp dẫn, dí dỏm"
        },
        {
            "kanji": "忙しい",
            "hiragana": "いそがしい",
            "nom": "MANG",
            "meaning": "Bận rộn"
        },
        {
            "kanji": "楽しい",
            "hiragana": "たのしい",
            "nom": "LẠC",
            "meaning": "Vui, vui vẻ"
        },
        {
            "kanji": "白い",
            "hiragana": "しろい",
            "nom": "BẠCH",
            "meaning": "Trắng"
        },
        {
            "kanji": "黒い",
            "hiragana": "くろい",
            "nom": "HẮC",
            "meaning": "Đen"
        },
        {
            "kanji": "赤い",
            "hiragana": "あかい",
            "nom": "XÍCH",
            "meaning": "Đỏ"
        },
        {
            "kanji": "青い",
            "hiragana": "あおい",
            "nom": "THANH",
            "meaning": "Xanh"
        },
        {
            "kanji": "桜",
            "hiragana": "さくら",
            "nom": "ANH",
            "meaning": "Hoa Anh Đào"
        },
        {
            "kanji": "山",
            "hiragana": "やま",
            "nom": "SƠN",
            "meaning": "Núi"
        },
        {
            "kanji": "町",
            "hiragana": "まち",
            "nom": "ĐINH",
            "meaning": "Phố, Thị trấn"
        },
        {
            "kanji": "食べ物",
            "hiragana": "たべもの",
            "nom": "THỰC VẬT",
            "meaning": "Đồ ăn"
        },
        {
            "kanji": "所",
            "hiragana": "ところ",
            "nom": "SỞ",
            "meaning": "Nơi, nơi chốn"
        },
        {
            "kanji": "寮",
            "hiragana": "りょう",
            "nom": "LIÊU",
            "meaning": "Ký túc xá"
        },
        {
            "kanji": "勉強",
            "hiragana": "べんきょう",
            "nom": "MIỄN CƯỠNG",
            "meaning": "Việc học"
        },
        {
            "kanji": "お仕事",
            "hiragana": "おしごと",
            "nom": "SĨ SỰ",
            "meaning": "Công việc"
        },
        {
            "kanji": "富士山",
            "hiragana": "ふじさん",
            "nom": "PHÚ SĨ SƠN",
            "meaning": "Núi Phú Sĩ"
        },
        {
            "kanji": "七人の侍",
            "hiragana": "しちにんのさむらい",
            "nom": "THẤT NHÂN THỊ",
            "meaning": "7 Võ sĩ đạo"
        },
        {
            "kanji": "金閣寺",
            "hiragana": "きんかくじ",
            "nom": "KIM CÁC TỰ",
            "meaning": "Chùa vàng"
        },
        {
            "kanji": "宿題",
            "hiragana": "しゅくだい",
            "nom": "TÚC ĐỀ",
            "meaning": "Bài tập"
        },
        {
            "kanji": "大変",
            "hiragana": "たいへん",
            "nom": "ĐẠI BIẾN",
            "meaning": "Vất vả, cực nhọc"
        },
        {
            "kanji": "お元気ですか",
            "hiragana": "おげんきですか",
            "nom": "NGUYÊN KHÍ",
            "meaning": "Có khỏe không"
        },
        {
            "kanji": "慣れます",
            "hiragana": "なれます",
            "nom": "QUÁN",
            "meaning": "Quen ( tập quán )"
        },
        {
            "kanji": "日本の生活になれ",
            "hiragana": "にほんのせいかつにならましたか",
            "nom": "NHẬT BẢN SINH HOẠT",
            "meaning": "Đã quen với cuộc sống ở"
        },
        {
            "kanji": "もう一杯いか",
            "hiragana": "もういっぱいいかがです",
            "nom": "か",
            "meaning": "NHẤT BÔI"
        },
        {
            "kanji": "いいえ、結構",
            "hiragana": "いいえ、けっこうです",
            "nom": "KẾT CẤU",
            "meaning": "Thô, đủ rồi, Thôi, được rồi"
        },
        {
            "kanji": "そろそろ、失",
            "hiragana": "そろそろ、しつれいしま",
            "nom": "す",
            "meaning": "THẤT LỄ"
        },
        {
            "kanji": "飲み物",
            "hiragana": "のみもの",
            "nom": "ẨM VẬT",
            "meaning": "Đồ uống"
        }
    ],
    "9": [
        {
            "kanji": "分かる",
            "hiragana": "わかる",
            "nom": "PHÂN",
            "meaning": "Hiểu, biết"
        },
        {
            "kanji": "野球",
            "hiragana": "やきゅう",
            "nom": "DÃ CẦU",
            "meaning": "Bóng chày"
        },
        {
            "kanji": "音楽",
            "hiragana": "おんがく",
            "nom": "ÂM NHẠC",
            "meaning": "Âm nhạc"
        },
        {
            "kanji": "歌",
            "hiragana": "うた",
            "nom": "CA",
            "meaning": "Bài hát"
        },
        {
            "kanji": "歌舞伎",
            "hiragana": "かぶき",
            "nom": "CA VŨ KĨ",
            "meaning": "Loại hình nghệ thuật của"
        },
        {
            "kanji": "絵",
            "hiragana": "え",
            "nom": "HỘI",
            "meaning": "Tranh, bức tranh"
        },
        {
            "kanji": "字",
            "hiragana": "じ",
            "nom": "TỰ",
            "meaning": "Chữ"
        },
        {
            "kanji": "好き",
            "hiragana": "すき",
            "nom": "HẢO",
            "meaning": "Thích"
        },
        {
            "kanji": "嫌い",
            "hiragana": "きらい",
            "nom": "HIỀM",
            "meaning": "Ghét"
        },
        {
            "kanji": "上手",
            "hiragana": "じょうず",
            "nom": "THƯỢNG THỦ",
            "meaning": "Giỏi"
        },
        {
            "kanji": "下手",
            "hiragana": "へた",
            "nom": "HẠ THỦ",
            "meaning": "Dở, không giỏi"
        },
        {
            "kanji": "料理",
            "hiragana": "りょうり",
            "nom": "LIỆU LÝ",
            "meaning": "Món ăn"
        },
        {
            "kanji": "料理を作る",
            "hiragana": "りょうりをつくる",
            "nom": "LIỆU LÝ TÁC",
            "meaning": "Nấu ăn"
        },
        {
            "kanji": "飲み物",
            "hiragana": "のみもの",
            "nom": "ẨM VẬT",
            "meaning": "Đồ uống, thức uống"
        },
        {
            "kanji": "漢字",
            "hiragana": "かんじ",
            "nom": "HÁN TỰ",
            "meaning": "Chữ Hán"
        },
        {
            "kanji": "平仮名",
            "hiragana": "ひらがな",
            "nom": "BÌNH GIẢ DANH",
            "meaning": "Chữ Hiragana"
        },
        {
            "kanji": "片仮名",
            "hiragana": "かたかな",
            "nom": "PHIẾN GIẢ DANH",
            "meaning": "Chữ Katakana"
        },
        {
            "kanji": "ローマ字",
            "hiragana": "ローマじ",
            "nom": "TỰ",
            "meaning": "Chữ Romaji"
        },
        {
            "kanji": "細かいお金",
            "hiragana": "こまかいおかね",
            "nom": "TẾ KIM",
            "meaning": "Tiền lẻ"
        },
        {
            "kanji": "時間",
            "hiragana": "じかん",
            "nom": "THỜI GIAN",
            "meaning": "Thời gian"
        },
        {
            "kanji": "用事",
            "hiragana": "ようじ",
            "nom": "DỤNG SỰ",
            "meaning": "Có việc riêng"
        },
        {
            "kanji": "約束",
            "hiragana": "やくそく",
            "nom": "ƯỚC THÚC",
            "meaning": "Hẹn, cuộc hẹn"
        },
        {
            "kanji": "ご主人",
            "hiragana": "ごしゅじん",
            "nom": "CHỦ NHÂN",
            "meaning": "Chồng bạn, anh, chị, em"
        },
        {
            "kanji": "夫",
            "hiragana": "おっと",
            "nom": "PHU",
            "meaning": "Chồng tôi"
        },
        {
            "kanji": "主人",
            "hiragana": "しゅじん",
            "nom": "CHỦ NHÂN",
            "meaning": "Chồng tôi"
        },
        {
            "kanji": "奥さん",
            "hiragana": "おくさん",
            "nom": "ÁO",
            "meaning": "Vợ bạn, anh, chị, em"
        },
        {
            "kanji": "妻",
            "hiragana": "つま",
            "nom": "THÊ",
            "meaning": "Vợ tôi"
        },
        {
            "kanji": "家内",
            "hiragana": "かない",
            "nom": "GIA NỘI",
            "meaning": "Vợ tôi"
        },
        {
            "kanji": "子供",
            "hiragana": "こども",
            "nom": "TỬ CUNG",
            "meaning": "Con, con cái, trẻ con"
        },
        {
            "kanji": "大学",
            "hiragana": "だいがく",
            "nom": "ĐẠI HỌC",
            "meaning": "Đại học"
        },
        {
            "kanji": "少し",
            "hiragana": "すこし",
            "nom": "THIỂU",
            "meaning": "Một ít, một chút"
        },
        {
            "kanji": "全然～ない",
            "hiragana": "ぜんぜん～ない",
            "nom": "TOÀN NHIÊN",
            "meaning": "Hoàn toàn không"
        },
        {
            "kanji": "早く",
            "hiragana": "はやく",
            "nom": "TẢO",
            "meaning": "Sớm"
        },
        {
            "kanji": "速く",
            "hiragana": "はやく",
            "nom": "TỐC",
            "meaning": "Nhanh"
        },
        {
            "kanji": "早く帰る",
            "hiragana": "はやくかえる",
            "nom": "TẢO QUY",
            "meaning": "Về sớm"
        },
        {
            "kanji": "豚肉",
            "hiragana": "ぶたにく",
            "nom": "ĐỘN NHỤC",
            "meaning": "Thịt heo"
        },
        {
            "kanji": "鶏肉",
            "hiragana": "とりにく",
            "nom": "KÊ NHỤC",
            "meaning": "Thịt gà"
        },
        {
            "kanji": "牛肉",
            "hiragana": "ぎゅうにく",
            "nom": "NGƯU NHỤC",
            "meaning": "Thịt bò"
        },
        {
            "kanji": "病気",
            "hiragana": "びょうき",
            "nom": "BỆNH KHÍ",
            "meaning": "Bệnh, ốm"
        },
        {
            "kanji": "薬",
            "hiragana": "くすり",
            "nom": "DƯỢC",
            "meaning": "Thuốc"
        },
        {
            "kanji": "頭",
            "hiragana": "あたま",
            "nom": "ĐẦU",
            "meaning": "Đầu, cái đầu"
        },
        {
            "kanji": "お腹",
            "hiragana": "おなか",
            "nom": "PHÚC",
            "meaning": "Bụng, cái bụng"
        },
        {
            "kanji": "痛い",
            "hiragana": "いたい",
            "nom": "THỐNG",
            "meaning": "Đau, nhức"
        },
        {
            "kanji": "頭が痛い",
            "hiragana": "あたまがいたい",
            "nom": "ĐẦU THỐNG",
            "meaning": "Đau đầu"
        },
        {
            "kanji": "残念ですね",
            "hiragana": "ざんねんですね",
            "nom": "TÀN NIỆM",
            "meaning": "Đáng tiếc thật"
        },
        {
            "kanji": "熱があります",
            "hiragana": "ねつがあります",
            "nom": "NHIỆT",
            "meaning": "Bị sốt"
        },
        {
            "kanji": "風邪を引きま",
            "hiragana": "かぜをひきました",
            "nom": "PHONG TÀ DẪN",
            "meaning": "Bị cảm, bị trúng gió"
        },
        {
            "kanji": "休みます",
            "hiragana": "やすみます",
            "nom": "HƯU",
            "meaning": "Nghỉ"
        },
        {
            "kanji": "会社を休みます",
            "hiragana": "かいしゃをやすみます",
            "nom": "HỘI XÃ HƯU",
            "meaning": "Nghỉ làm"
        },
        {
            "kanji": "学校を休みます",
            "hiragana": "がっこうをやすみます",
            "nom": "HỌC HIỆU HƯU",
            "meaning": "Nghỉ học"
        },
        {
            "kanji": "夫婦",
            "hiragana": "ふうふ",
            "nom": "PHU PHỤ",
            "meaning": "Vợ chồng"
        },
        {
            "kanji": "不味い",
            "hiragana": "まずい",
            "nom": "BẤT VỊ",
            "meaning": "Dở, không ngon ( đồ ăn )"
        },
        {
            "kanji": "今度",
            "hiragana": "こんど",
            "nom": "KIM ĐỘ",
            "meaning": "Lần này, lần sau, tiếp theo"
        }
    ],
    "10": [
        {
            "kanji": "色々（な）",
            "hiragana": "いろいろ（な）",
            "nom": "SẮC KÉP",
            "meaning": "Nhiều thứ"
        },
        {
            "kanji": "男の人",
            "hiragana": "おとこのひと",
            "nom": "NAM NHÂN",
            "meaning": "Người con trai"
        },
        {
            "kanji": "女の人",
            "hiragana": "おんなのひと",
            "nom": "NỮ NHÂN",
            "meaning": "Người con gái"
        },
        {
            "kanji": "犬",
            "hiragana": "いぬ",
            "nom": "KHUYỂN",
            "meaning": "Con chó"
        },
        {
            "kanji": "猫",
            "hiragana": "ねこ",
            "nom": "MIÊU",
            "meaning": "Con mèo"
        },
        {
            "kanji": "木",
            "hiragana": "き",
            "nom": "MỘC",
            "meaning": "Cây"
        },
        {
            "kanji": "物",
            "hiragana": "もの",
            "nom": "VẬT",
            "meaning": "Đồ vật"
        },
        {
            "kanji": "電池",
            "hiragana": "でんち",
            "nom": "ĐIỆN TRÌ",
            "meaning": "Pin, cục pin"
        },
        {
            "kanji": "箱",
            "hiragana": "はこ",
            "nom": "TƯƠNG,SƯƠNG",
            "meaning": "Cái hộp"
        },
        {
            "kanji": "冷蔵庫",
            "hiragana": "れいぞうこ",
            "nom": "LÃNH TÀNG KHỐ",
            "meaning": "Tủ lạnh"
        },
        {
            "kanji": "棚",
            "hiragana": "たな",
            "nom": "BẰNG",
            "meaning": "Cái kệ"
        },
        {
            "kanji": "窓",
            "hiragana": "まど",
            "nom": "SONG",
            "meaning": "Cửa sổ"
        },
        {
            "kanji": "公園",
            "hiragana": "こうえん",
            "nom": "CÔNG VIÊN",
            "meaning": "Công viên"
        },
        {
            "kanji": "喫茶店",
            "hiragana": "きっさてん",
            "nom": "KHIẾT TRÀ ĐIẾM",
            "meaning": "Quán nước, quán cà phê"
        },
        {
            "kanji": "本屋",
            "hiragana": "ほんや",
            "nom": "BẢN ỐC",
            "meaning": "Nhà sách"
        },
        {
            "kanji": "～屋",
            "hiragana": "～や",
            "nom": "ỐC",
            "meaning": "Cửa hang"
        },
        {
            "kanji": "乗り場",
            "hiragana": "のりば",
            "nom": "THỪA TRƯỜNG",
            "meaning": "Bến xe"
        },
        {
            "kanji": "県",
            "hiragana": "けん",
            "nom": "HUYỆN",
            "meaning": "Tỉnh ( ở Nhật )"
        },
        {
            "kanji": "上",
            "hiragana": "うえ",
            "nom": "THƯỢNG",
            "meaning": "Phía trên"
        },
        {
            "kanji": "下",
            "hiragana": "した",
            "nom": "HẠ",
            "meaning": "Phía dưới"
        },
        {
            "kanji": "前",
            "hiragana": "まえ",
            "nom": "TIỀN",
            "meaning": "Phía trước"
        },
        {
            "kanji": "後ろ",
            "hiragana": "うしろ",
            "nom": "HẬU",
            "meaning": "Phía sau"
        },
        {
            "kanji": "右",
            "hiragana": "みぎ",
            "nom": "HỮU",
            "meaning": "Bên phải"
        },
        {
            "kanji": "左",
            "hiragana": "ひだり",
            "nom": "TẢ",
            "meaning": "Bên trái"
        },
        {
            "kanji": "中",
            "hiragana": "なか",
            "nom": "TRUNG",
            "meaning": "Bên trong"
        },
        {
            "kanji": "外",
            "hiragana": "そと",
            "nom": "NGOẠI",
            "meaning": "Bên ngoài"
        },
        {
            "kanji": "隣",
            "hiragana": "となり",
            "nom": "LÂN",
            "meaning": "Bên cạnh"
        },
        {
            "kanji": "近く",
            "hiragana": "ちかく",
            "nom": "CẬN",
            "meaning": "Ở gần"
        },
        {
            "kanji": "段目",
            "hiragana": "だんめ",
            "nom": "ĐOẠN MỤC",
            "meaning": "Ngăn thứ"
        },
        {
            "kanji": "男の子",
            "hiragana": "おとこのこ",
            "nom": "NAM TỬ",
            "meaning": "Bé trai"
        },
        {
            "kanji": "女の子",
            "hiragana": "おんなのこ",
            "nom": "NỮ TỬ",
            "meaning": "Bé gái"
        },
        {
            "kanji": "大使館",
            "hiragana": "たいしかん",
            "nom": "ĐẠI SỨ QUÁN",
            "meaning": "Đại Sứ Quán"
        },
        {
            "kanji": "奥",
            "hiragana": "おく",
            "nom": "ÁO",
            "meaning": "Trong góc"
        },
        {
            "kanji": "行ってまい",
            "hiragana": "いってまいります",
            "nom": "HÀNH",
            "meaning": "Tôi đi đây"
        },
        {
            "kanji": "行っていら",
            "hiragana": "いっていらっしゃい",
            "nom": "HÀNH",
            "meaning": "Bạn đi nhé"
        }
    ],
    "11": [
        {
            "kanji": "日本にいる",
            "hiragana": "にほんにいる",
            "nom": "NHẬT BẢN",
            "meaning": "Sống ở Nhật"
        },
        {
            "kanji": "休む",
            "hiragana": "やすむ",
            "nom": "HƯU",
            "meaning": "Nghỉ"
        },
        {
            "kanji": "一つ",
            "hiragana": "ひとつ",
            "nom": "NHẤT",
            "meaning": "1 cái"
        },
        {
            "kanji": "二つ",
            "hiragana": "ふたつ",
            "nom": "NHỊ",
            "meaning": "2 cái"
        },
        {
            "kanji": "三つ",
            "hiragana": "みっつ",
            "nom": "TAM",
            "meaning": "3 cái"
        },
        {
            "kanji": "四つ",
            "hiragana": "よっつ",
            "nom": "TỨ",
            "meaning": "4 cái"
        },
        {
            "kanji": "五つ",
            "hiragana": "いつつ",
            "nom": "NGŨ",
            "meaning": "5 cái"
        },
        {
            "kanji": "六つ",
            "hiragana": "むっつ",
            "nom": "LỤC",
            "meaning": "6 cái"
        },
        {
            "kanji": "七つ",
            "hiragana": "ななつ",
            "nom": "THẤT",
            "meaning": "7 cái"
        },
        {
            "kanji": "八つ",
            "hiragana": "やっつ",
            "nom": "BÁT",
            "meaning": "8 cái"
        },
        {
            "kanji": "九つ",
            "hiragana": "ここのつ",
            "nom": "CỬU",
            "meaning": "9 cái"
        },
        {
            "kanji": "十",
            "hiragana": "とお",
            "nom": "THẬP",
            "meaning": "10 cái"
        },
        {
            "kanji": "一人",
            "hiragana": "ひとり",
            "nom": "NHẤT NHÂN",
            "meaning": "1 người"
        },
        {
            "kanji": "二人",
            "hiragana": "ふたり",
            "nom": "NHỊ NHÂN",
            "meaning": "2 người"
        },
        {
            "kanji": "～人",
            "hiragana": "～にん",
            "nom": "NHÂN",
            "meaning": "~ người"
        },
        {
            "kanji": "～台",
            "hiragana": "～だい",
            "nom": "ĐÀI",
            "meaning": "~ chiếc"
        },
        {
            "kanji": "～枚",
            "hiragana": "～まい",
            "nom": "MAI",
            "meaning": "~ tờ"
        },
        {
            "kanji": "～回",
            "hiragana": "～かい",
            "nom": "HỒI",
            "meaning": "~ lần"
        },
        {
            "kanji": "切手",
            "hiragana": "きって",
            "nom": "THIẾT THỦ",
            "meaning": "Con tem"
        },
        {
            "kanji": "葉書",
            "hiragana": "はがき",
            "nom": "DIỆP THƯ",
            "meaning": "Bưu thiếp"
        },
        {
            "kanji": "封筒",
            "hiragana": "ふうとう",
            "nom": "PHONG ĐỒNG",
            "meaning": "Phong bì thư"
        },
        {
            "kanji": "速達",
            "hiragana": "そくたつ",
            "nom": "TỐC ĐẠT",
            "meaning": "Gửi phát nhanh"
        },
        {
            "kanji": "書留",
            "hiragana": "かきとめ",
            "nom": "THƯ LƯU",
            "meaning": "Gửi bảo đảm"
        },
        {
            "kanji": "船便",
            "hiragana": "ふなびん",
            "nom": "THUYỀN TIỆN",
            "meaning": "Gửi đường biển"
        },
        {
            "kanji": "両親",
            "hiragana": "りょうしん",
            "nom": "LƯỠNG THÂN",
            "meaning": "Ba mẹ"
        },
        {
            "kanji": "兄弟",
            "hiragana": "きょうだい",
            "nom": "HUYNH ĐỆ",
            "meaning": "Anh chị em"
        },
        {
            "kanji": "兄",
            "hiragana": "あに",
            "nom": "HUYNH",
            "meaning": "Anh trai mình"
        },
        {
            "kanji": "お兄さん",
            "hiragana": "おにいさん",
            "nom": "HUYNH",
            "meaning": "Anh trai của người ta"
        },
        {
            "kanji": "姉",
            "hiragana": "あね",
            "nom": "TỶ",
            "meaning": "Chị gái mình"
        },
        {
            "kanji": "お姉さん",
            "hiragana": "おねえさん",
            "nom": "TỶ",
            "meaning": "Chị gái của người ta"
        },
        {
            "kanji": "弟",
            "hiragana": "おとうと",
            "nom": "ĐỆ",
            "meaning": "Em trai mình"
        },
        {
            "kanji": "弟さん",
            "hiragana": "おとうとさん",
            "nom": "ĐỆ",
            "meaning": "Em trai người ta"
        },
        {
            "kanji": "妹",
            "hiragana": "いもうと",
            "nom": "MUỘI",
            "meaning": "Em gái mình"
        },
        {
            "kanji": "妹さん",
            "hiragana": "いもうとさん",
            "nom": "MUỘI",
            "meaning": "Em gái người ta"
        },
        {
            "kanji": "～時間",
            "hiragana": "～じかん",
            "nom": "THỜI GIAN",
            "meaning": "~ tiếng"
        },
        {
            "kanji": "～週間",
            "hiragana": "～しゅうかん",
            "nom": "CHU GIAN",
            "meaning": "~ tuần"
        },
        {
            "kanji": "～か月",
            "hiragana": "～かげつ",
            "nom": "NGUYỆT",
            "meaning": "~ tháng"
        },
        {
            "kanji": "～年",
            "hiragana": "～ねん",
            "nom": "NIÊN",
            "meaning": "~ năm"
        },
        {
            "kanji": "全部で",
            "hiragana": "ぜんぶで",
            "nom": "TOÀN BỘ",
            "meaning": "Tổng cộng"
        },
        {
            "kanji": "皆",
            "hiragana": "みんな",
            "nom": "GIAI",
            "meaning": "Mọi người"
        },
        {
            "kanji": "荷物",
            "hiragana": "にもつ",
            "nom": "HÀ VẬT",
            "meaning": "Hàng hóa"
        },
        {
            "kanji": "いい天気ですね",
            "hiragana": "いいてんきですね",
            "nom": "THIÊN KHÍ",
            "meaning": "Trời đẹp quá nhỉ"
        },
        {
            "kanji": "お出かけですか",
            "hiragana": "おでかけですか",
            "nom": "XUẤT",
            "meaning": "Đi ra ngoài đấy à"
        },
        {
            "kanji": "行ってらっしゃい",
            "hiragana": "いってらっしゃい",
            "nom": "HÀNH",
            "meaning": "Anh đi nhé"
        },
        {
            "kanji": "行っていらっしゃい",
            "hiragana": "いっていらっしゃい",
            "nom": "HÀNH",
            "meaning": "Anh đi nhé"
        },
        {
            "kanji": "行ってまいります",
            "hiragana": "いってまいります",
            "nom": "HÀNH",
            "meaning": "Tôi đi đây"
        },
        {
            "kanji": "行ってきます",
            "hiragana": "いってきます",
            "nom": "HÀNH",
            "meaning": "Tôi đi đây"
        }
    ],
    "12": [
        {
            "kanji": "簡単（な）",
            "hiragana": "かんたん（な）",
            "nom": "GIẢN ĐƠN",
            "meaning": "Đơn giản"
        },
        {
            "kanji": "近い",
            "hiragana": "ちかい",
            "nom": "CẬN",
            "meaning": "Gần"
        },
        {
            "kanji": "遠い",
            "hiragana": "とおい",
            "nom": "VIỄN",
            "meaning": "Xa"
        },
        {
            "kanji": "遅い",
            "hiragana": "おそい",
            "nom": "TRÌ",
            "meaning": "Chậm, trễ"
        },
        {
            "kanji": "多い",
            "hiragana": "おおい",
            "nom": "ĐA",
            "meaning": "Nhiều"
        },
        {
            "kanji": "人が多い",
            "hiragana": "ひとがおおい",
            "nom": "NHÂN ĐA",
            "meaning": "Nhiều người"
        },
        {
            "kanji": "少ない",
            "hiragana": "すくない",
            "nom": "THIẾU , THIỂU",
            "meaning": "Ít"
        },
        {
            "kanji": "人が少ない",
            "hiragana": "ひとがすくない",
            "nom": "NHÂN THIẾU",
            "meaning": "Ít người"
        },
        {
            "kanji": "暖かい",
            "hiragana": "あたたかい",
            "nom": "NOÃN",
            "meaning": "Ấm áp ( khí hậu )"
        },
        {
            "kanji": "温かい",
            "hiragana": "あたたかい",
            "nom": "ÔN",
            "meaning": "Ấm ( đồ ăn, đồ uống )"
        },
        {
            "kanji": "涼しい",
            "hiragana": "すずしい",
            "nom": "LƯƠNG",
            "meaning": "Mát mẻ"
        },
        {
            "kanji": "甘い",
            "hiragana": "あまい",
            "nom": "CAM",
            "meaning": "Ngọt"
        },
        {
            "kanji": "辛い",
            "hiragana": "からい",
            "nom": "TÂN",
            "meaning": "Cay"
        },
        {
            "kanji": "重い",
            "hiragana": "おもい",
            "nom": "TRỌNG",
            "meaning": "Nặng"
        },
        {
            "kanji": "軽い",
            "hiragana": "かるい",
            "nom": "KHINH",
            "meaning": "Nhẹ"
        },
        {
            "kanji": "季節",
            "hiragana": "きせつ",
            "nom": "QUÝ TIẾT",
            "meaning": "Mùa"
        },
        {
            "kanji": "春",
            "hiragana": "はる",
            "nom": "XUÂN",
            "meaning": "Mùa Xuân"
        },
        {
            "kanji": "夏",
            "hiragana": "なつ",
            "nom": "HẠ",
            "meaning": "Mùa Hạ"
        },
        {
            "kanji": "秋",
            "hiragana": "あき",
            "nom": "THU",
            "meaning": "Mùa Thu"
        },
        {
            "kanji": "冬",
            "hiragana": "ふゆ",
            "nom": "ĐÔNG",
            "meaning": "Mùa Đông"
        },
        {
            "kanji": "天気",
            "hiragana": "てんき",
            "nom": "THIÊN KHÍ",
            "meaning": "Thời tiết"
        },
        {
            "kanji": "雨",
            "hiragana": "あめ",
            "nom": "VŨ",
            "meaning": "Mưa"
        },
        {
            "kanji": "雪",
            "hiragana": "ゆき",
            "nom": "TUYẾT",
            "meaning": "Tuyết"
        },
        {
            "kanji": "曇り",
            "hiragana": "くもり",
            "nom": "VÂN",
            "meaning": "Mây, có mây"
        },
        {
            "kanji": "空港",
            "hiragana": "くうこう",
            "nom": "KHÔNG CẢNG",
            "meaning": "Sân bay"
        },
        {
            "kanji": "海",
            "hiragana": "うみ",
            "nom": "HẢI",
            "meaning": "Biển"
        },
        {
            "kanji": "世界",
            "hiragana": "せかい",
            "nom": "THẾ GIỚI",
            "meaning": "Thế giới"
        },
        {
            "kanji": "お祭り",
            "hiragana": "おまつり",
            "nom": "TẾ",
            "meaning": "Lễ hội"
        },
        {
            "kanji": "試験",
            "hiragana": "しけん",
            "nom": "THÍ NGHIỆM",
            "meaning": "Bài kiểm tra"
        },
        {
            "kanji": "すき焼き",
            "hiragana": "すきやき",
            "nom": "THIÊU",
            "meaning": "Món Sukiyaki"
        },
        {
            "kanji": "刺身",
            "hiragana": "さしみ",
            "nom": "THÍCH THÂN",
            "meaning": "Món Sashimi"
        },
        {
            "kanji": "寿司",
            "hiragana": "すし",
            "nom": "THỌ TY",
            "meaning": "Món Sushi"
        },
        {
            "kanji": "生け花",
            "hiragana": "いけばな",
            "nom": "SINH HOA",
            "meaning": "Nghệ thuật cắm hoa"
        },
        {
            "kanji": "紅葉",
            "hiragana": "もみじ",
            "nom": "HỒNG DIỆP",
            "meaning": "Lá đỏ"
        },
        {
            "kanji": "初めて",
            "hiragana": "はじめて",
            "nom": "SƠ",
            "meaning": "Lần đầu tiên"
        },
        {
            "kanji": "若い",
            "hiragana": "わかい",
            "nom": "NHƯỢC",
            "meaning": "Trẻ"
        },
        {
            "kanji": "お帰りなさい",
            "hiragana": "おかえりなさい",
            "nom": "QUY",
            "meaning": "Anh đã về rồi đấy à"
        },
        {
            "kanji": "疲れました",
            "hiragana": "つかれました",
            "nom": "BÌ",
            "meaning": "Mệt rồi"
        },
        {
            "kanji": "祇園祭",
            "hiragana": "ぎおんまつり",
            "nom": "KÌ VIÊN TẾ",
            "meaning": "Lễ hội cầu mùa"
        }
    ],
    "13": [
        {
            "kanji": "遊ぶ",
            "hiragana": "あそぶ",
            "nom": "DU",
            "meaning": "Chơi, Vui chơi"
        },
        {
            "kanji": "泳ぐ",
            "hiragana": "およぐ",
            "nom": "VỊNH",
            "meaning": "Bơi, bơi lội"
        },
        {
            "kanji": "迎える",
            "hiragana": "むかえる",
            "nom": "NGHÊNH",
            "meaning": "Đón, tiếp đón"
        },
        {
            "kanji": "疲れる",
            "hiragana": "つかれる",
            "nom": "BÌ",
            "meaning": "Mệt, mệt mỏi"
        },
        {
            "kanji": "出す",
            "hiragana": "だす",
            "nom": "XUẤT",
            "meaning": "Gửi, nộp"
        },
        {
            "kanji": "手紙を出す",
            "hiragana": "てがみをだす",
            "nom": "THỦ CHỈ XUẤT",
            "meaning": "Gửi thư"
        },
        {
            "kanji": "入る",
            "hiragana": "はいる",
            "nom": "NHẬP",
            "meaning": "Vào, Đi vào"
        },
        {
            "kanji": "喫茶店に入る",
            "hiragana": "きっさてんにはいる",
            "nom": "KHIẾT TRÀ ĐIẾM NHẬP",
            "meaning": "Vào quán nước"
        },
        {
            "kanji": "出る",
            "hiragana": "でる",
            "nom": "XUẤT",
            "meaning": "Ra, đi ra, rời khỏi"
        },
        {
            "kanji": "喫茶店を出る",
            "hiragana": "きっさてんをでる",
            "nom": "KHIẾT TRÀ ĐIẾM XUẤT",
            "meaning": "Rời khỏi quán nước"
        },
        {
            "kanji": "結婚する",
            "hiragana": "けっこんする",
            "nom": "KẾT HÔN",
            "meaning": "Kết hôn"
        },
        {
            "kanji": "買い物する",
            "hiragana": "かいものする",
            "nom": "MẠI VẬT",
            "meaning": "Mua sắm"
        },
        {
            "kanji": "食事する",
            "hiragana": "しょくじする",
            "nom": "THỰC SỰ",
            "meaning": "Việc ăn uống, Dùng bữa"
        },
        {
            "kanji": "散歩する",
            "hiragana": "さんぽする",
            "nom": "TẢN BỘ",
            "meaning": "Đi dạo, tản bộ"
        },
        {
            "kanji": "公園を散歩する",
            "hiragana": "こうえんをさんぽする",
            "nom": "CÔNG VIÊN TẢN BỘ",
            "meaning": "Đi dạo trong công viên"
        },
        {
            "kanji": "大変",
            "hiragana": "たいへん",
            "nom": "ĐẠI BIẾN",
            "meaning": "Rất, quá, lắm, vất vả"
        },
        {
            "kanji": "欲しい",
            "hiragana": "ほしい",
            "nom": "DỤC",
            "meaning": "Muốn có gì đó"
        },
        {
            "kanji": "寂しい",
            "hiragana": "さびしい",
            "nom": "TỊCH",
            "meaning": "Buồn"
        },
        {
            "kanji": "悲しい",
            "hiragana": "かなしい",
            "nom": "BI",
            "meaning": "Đau buồn"
        },
        {
            "kanji": "広い",
            "hiragana": "ひろい",
            "nom": "QUẢNG",
            "meaning": "Rộng, rộng rãi"
        },
        {
            "kanji": "狭い",
            "hiragana": "せまい",
            "nom": "HIỆP",
            "meaning": "Hẹp, chật hẹp"
        },
        {
            "kanji": "市役所",
            "hiragana": "しやくしょ",
            "nom": "THỊ DỊCH SỞ",
            "meaning": "Ủy Ban Nhân Dân ( TP )"
        },
        {
            "kanji": "川",
            "hiragana": "かわ",
            "nom": "XUYÊN",
            "meaning": "Sông, con sông"
        },
        {
            "kanji": "経済",
            "hiragana": "けいざい",
            "nom": "KINH TẾ",
            "meaning": "Kinh tế"
        },
        {
            "kanji": "美術",
            "hiragana": "びじゅつ",
            "nom": "MỸ THUẬT",
            "meaning": "Mỹ thuật, Hội họa"
        },
        {
            "kanji": "釣り",
            "hiragana": "つり",
            "nom": "ĐIẾU",
            "meaning": "Câu cá, việc câu cá"
        },
        {
            "kanji": "会議",
            "hiragana": "かいぎ",
            "nom": "HỘI NGHỊ",
            "meaning": "Cuộc họp"
        },
        {
            "kanji": "登録",
            "hiragana": "とうろく",
            "nom": "ĐĂNG LỤC",
            "meaning": "Đăng ký"
        },
        {
            "kanji": "週末",
            "hiragana": "しゅうまつ",
            "nom": "CHU MẠT",
            "meaning": "Cuối tuần"
        },
        {
            "kanji": "～頃",
            "hiragana": "~ごろ",
            "nom": "KHOẢNH",
            "meaning": "Khoảng~"
        },
        {
            "kanji": "何か",
            "hiragana": "なにか",
            "nom": "HÀ",
            "meaning": "Cái gì đó"
        },
        {
            "kanji": "換える",
            "hiragana": "かえる",
            "nom": "HOÁN",
            "meaning": "Đổi, đổi lại, thay thế cái khác"
        },
        {
            "kanji": "見物する",
            "hiragana": "けんぶつする",
            "nom": "KIẾN VẬT",
            "meaning": "Tham quan"
        },
        {
            "kanji": "お腹が空きました",
            "hiragana": "おなかがすきました",
            "nom": "PHÚC KHÔNG",
            "meaning": "Đói bụng"
        },
        {
            "kanji": "お腹がいっぱいです",
            "hiragana": "おなかがいっぱいです",
            "nom": "PHÚC",
            "meaning": "No bụng"
        },
        {
            "kanji": "喉が渇きました",
            "hiragana": "のどがかわきました",
            "nom": "HẦU KHÁT",
            "meaning": "Khát nước"
        },
        {
            "kanji": "ご注文は？",
            "hiragana": "ごちゅうもんは？",
            "nom": "CHÚ VĂN",
            "meaning": "Gọi món ăn, Đặt hàng"
        },
        {
            "kanji": "定食",
            "hiragana": "ていしょく",
            "nom": "ĐỊNH THỰC",
            "meaning": "Cơm phần"
        },
        {
            "kanji": "牛丼",
            "hiragana": "ぎゅうどん",
            "nom": "NGƯU ĐẢM",
            "meaning": "Tên món ăn"
        },
        {
            "kanji": "少々お待ちください",
            "hiragana": "しょうしょうおまちください",
            "nom": "THIỂU KÉP ĐÃI",
            "meaning": "Xin hãy đợi một chút ạ"
        },
        {
            "kanji": "別々に",
            "hiragana": "べつべつに",
            "nom": "BIỆT KÉP",
            "meaning": "Riêng biệt"
        }
    ],
    "14": [
        {
            "kanji": "点ける",
            "hiragana": "つける",
            "nom": "ĐIỂM",
            "meaning": "Bật ( đèn, )"
        },
        {
            "kanji": "電気を点ける",
            "hiragana": "でんきをつける",
            "nom": "ĐIỆN KHÍ ĐIẾM",
            "meaning": "Bật điền"
        },
        {
            "kanji": "消す",
            "hiragana": "けす",
            "nom": "TIÊU",
            "meaning": "Tắt"
        },
        {
            "kanji": "電気を消す",
            "hiragana": "でんきをけす",
            "nom": "ĐIỆN KHÍ TIÊU",
            "meaning": "Tắt điền"
        },
        {
            "kanji": "開ける",
            "hiragana": "あける",
            "nom": "KHAI",
            "meaning": "Mở ( cửa, )"
        },
        {
            "kanji": "ドアを開ける",
            "hiragana": "ドアをあける",
            "nom": "KHAI",
            "meaning": "Mở cửa"
        },
        {
            "kanji": "閉める",
            "hiragana": "しめる",
            "nom": "BẾ",
            "meaning": "Đóng ( cửa )"
        },
        {
            "kanji": "ドアを閉める",
            "hiragana": "ドアをしめる",
            "nom": "BẾ",
            "meaning": "Đóng cửa"
        },
        {
            "kanji": "急ぐ",
            "hiragana": "いそぐ",
            "nom": "CẤP",
            "meaning": "Vội vã, khẩn trương"
        },
        {
            "kanji": "待つ",
            "hiragana": "まつ",
            "nom": "ĐÃI",
            "meaning": "Chờ, đợi"
        },
        {
            "kanji": "友達を待つ",
            "hiragana": "ともだちをまつ",
            "nom": "HỮU ĐẠT ĐÃI",
            "meaning": "Chờ bạn"
        },
        {
            "kanji": "止める",
            "hiragana": "とめる",
            "nom": "CHỈ",
            "meaning": "Dừng ( xe )"
        },
        {
            "kanji": "曲がる",
            "hiragana": "まがる",
            "nom": "KHÚC",
            "meaning": "Quẹo, rẽ"
        },
        {
            "kanji": "右へ曲がる",
            "hiragana": "みぎへまがる",
            "nom": "HỮU KHÚC",
            "meaning": "Quẹo phải"
        },
        {
            "kanji": "持つ",
            "hiragana": "もつ",
            "nom": "TRÌ",
            "meaning": "Cầm, nắm, mang"
        },
        {
            "kanji": "取る",
            "hiragana": "とる",
            "nom": "THỦ",
            "meaning": "Lấy"
        },
        {
            "kanji": "手伝う",
            "hiragana": "てつだう",
            "nom": "THỦ TRUYỀN",
            "meaning": "Giúp đỡ"
        },
        {
            "kanji": "呼ぶ",
            "hiragana": "よぶ",
            "nom": "HÔ",
            "meaning": "Gọi"
        },
        {
            "kanji": "タクシーを呼ぶ",
            "hiragana": "タクシーをよぶ",
            "nom": "HÔ",
            "meaning": "Gọi Taxi"
        },
        {
            "kanji": "話す",
            "hiragana": "はなす",
            "nom": "THOẠI",
            "meaning": "Nói chuyện"
        },
        {
            "kanji": "見せる",
            "hiragana": "みせる",
            "nom": "KIẾN",
            "meaning": "Cho xem, trình ra"
        },
        {
            "kanji": "教える",
            "hiragana": "おしえる",
            "nom": "GIÁO",
            "meaning": "Chỉ, cho biết, chỉ bảo"
        },
        {
            "kanji": "住所を教える",
            "hiragana": "じゅうしょをおしえる",
            "nom": "TRÚ SỞ GIÁO",
            "meaning": "Cho biết địa chỉ"
        },
        {
            "kanji": "始める",
            "hiragana": "はじめる",
            "nom": "THỦY",
            "meaning": "Bắt đầu"
        },
        {
            "kanji": "授業を始める",
            "hiragana": "じゅぎょうをはじめる",
            "nom": "THỤ NGHIỆP THỦY",
            "meaning": "Bắt đầu giờ học"
        },
        {
            "kanji": "降る",
            "hiragana": "ふる",
            "nom": "GIÁNG",
            "meaning": "Rơi ( mưa, tuyết )"
        },
        {
            "kanji": "雨が降る",
            "hiragana": "あめがふる",
            "nom": "VŨ GIÁNG",
            "meaning": "Mưa rơi"
        },
        {
            "kanji": "住所",
            "hiragana": "じゅうしょ",
            "nom": "TRÚ SỞ",
            "meaning": "Địa chỉ"
        },
        {
            "kanji": "地図",
            "hiragana": "ちず",
            "nom": "ĐỊA ĐỒ",
            "meaning": "Bản đồ"
        },
        {
            "kanji": "塩",
            "hiragana": "しお",
            "nom": "DIÊM",
            "meaning": "Muối"
        },
        {
            "kanji": "砂糖",
            "hiragana": "さとう",
            "nom": "SA ĐƯỜNG",
            "meaning": "Đường ( ăn )"
        },
        {
            "kanji": "読み方",
            "hiragana": "よみかた",
            "nom": "ĐỘC PHƯƠNG",
            "meaning": "Cách đọc"
        },
        {
            "kanji": "～方",
            "hiragana": "～かた",
            "nom": "PHƯƠNG",
            "meaning": "Cách"
        },
        {
            "kanji": "後で",
            "hiragana": "あとで",
            "nom": "HẬU",
            "meaning": "Lát nữa, chốc nữa"
        },
        {
            "kanji": "もう少し",
            "hiragana": "もうすこし",
            "nom": "THIỂU,THIẾU",
            "meaning": "Thêm 1 chút nữa"
        },
        {
            "kanji": "覚える",
            "hiragana": "おぼえる",
            "nom": "GIÁC",
            "meaning": "Nhớ, thuộc, không quên"
        },
        {
            "kanji": "安いのはありませんか",
            "hiragana": "やすいのはありませんか",
            "nom": "AN",
            "meaning": "Có cái nào rẻ hơn không"
        },
        {
            "kanji": "また来ます",
            "hiragana": "またきます",
            "nom": "LAI",
            "meaning": "Lát nữa sẽ đến"
        },
        {
            "kanji": "信号を右へ曲がって",
            "hiragana": "しんごうをまがってください。",
            "nom": "TÍN HIỆU HỮU KHÚC",
            "meaning": "Quẹo phải ở chỗ đèn giao"
        },
        {
            "kanji": "まっすぐ行きます",
            "hiragana": "まっすぐいきます",
            "nom": "HÀNH",
            "meaning": "Đi thẳng"
        },
        {
            "kanji": "これでお願いします",
            "hiragana": "これでおねがいします",
            "nom": "NGUYỆN",
            "meaning": "Cho tôi gửi lại tiền thối"
        },
        {
            "kanji": "お釣り",
            "hiragana": "おつり",
            "nom": "ĐIẾU",
            "meaning": "Tiền thối lại, tiền lẻ"
        }
    ],
    "15": [
        {
            "kanji": "立つ",
            "hiragana": "たつ",
            "nom": "LẬP",
            "meaning": "Đứng"
        },
        {
            "kanji": "座る",
            "hiragana": "すわる",
            "nom": "TỌA",
            "meaning": "Ngồi"
        },
        {
            "kanji": "使う",
            "hiragana": "つかう",
            "nom": "SỬ",
            "meaning": "Sử dụng, dùng"
        },
        {
            "kanji": "置く",
            "hiragana": "おく",
            "nom": "TRÍ",
            "meaning": "Đặt, để"
        },
        {
            "kanji": "作る",
            "hiragana": "つくる",
            "nom": "TÁC",
            "meaning": "Chế biến"
        },
        {
            "kanji": "造る",
            "hiragana": "つくる",
            "nom": "TẠO",
            "meaning": "Sản xuất, chế tạo, xây dựng"
        },
        {
            "kanji": "知る",
            "hiragana": "しる",
            "nom": "TRI",
            "meaning": "Biết"
        },
        {
            "kanji": "知っている",
            "hiragana": "しっている",
            "nom": "TRI",
            "meaning": "Biết"
        },
        {
            "kanji": "電話番号を知っている",
            "hiragana": "でんわばんごうをしっている",
            "nom": "ĐIỆN THOẠI PHIÊN HIỆU TRI",
            "meaning": "Biết số điện thoại"
        },
        {
            "kanji": "住む",
            "hiragana": "すむ",
            "nom": "TRÚ",
            "meaning": "Sống, cư trú"
        },
        {
            "kanji": "住んでいる",
            "hiragana": "すんでいる",
            "nom": "TRÚ",
            "meaning": "Sống, cư trú"
        },
        {
            "kanji": "大阪に住んでいる",
            "hiragana": "おおさかにすんでいる",
            "nom": "ĐẠI PHẢN TRÚ",
            "meaning": "Sống ở OSAKA"
        },
        {
            "kanji": "研究する",
            "hiragana": "けんきゅうする",
            "nom": "NGHIÊN CỨU",
            "meaning": "Nghiên cứu"
        },
        {
            "kanji": "資料",
            "hiragana": "しりょう",
            "nom": "TƯ LIỆU",
            "meaning": "Tài liệu"
        },
        {
            "kanji": "時刻表",
            "hiragana": "じこくひょう",
            "nom": "THỜI KHẮC BIỂU",
            "meaning": "Lịch trình tàu, xe chạy"
        },
        {
            "kanji": "服",
            "hiragana": "ふく",
            "nom": "PHỤC",
            "meaning": "Quần áo"
        },
        {
            "kanji": "製品",
            "hiragana": "せいひん",
            "nom": "CHẾ PHẨM",
            "meaning": "Sản phẩm"
        },
        {
            "kanji": "専門",
            "hiragana": "せんもん",
            "nom": "CHUYÊN MÔN",
            "meaning": "Chuyên môn"
        },
        {
            "kanji": "歯医者",
            "hiragana": "はいしゃ",
            "nom": "XỈ Y GIẢ",
            "meaning": "Nha sĩ"
        },
        {
            "kanji": "床屋",
            "hiragana": "とこや",
            "nom": "SÀNG ỐC",
            "meaning": "Tiệm hớt tóc"
        },
        {
            "kanji": "独身",
            "hiragana": "どくしん",
            "nom": "ĐỘC THÂN",
            "meaning": "Độc thân"
        },
        {
            "kanji": "禁煙",
            "hiragana": "きんえん",
            "nom": "CẤM YÊN",
            "meaning": "Cấm hút thuốc"
        },
        {
            "kanji": "上の妹",
            "hiragana": "うえのいもうと",
            "nom": "THƯỢNG MUỘI",
            "meaning": "Chị gái kế"
        },
        {
            "kanji": "下の妹",
            "hiragana": "したのいもうと",
            "nom": "HẠ MUỘI",
            "meaning": "Em gái kế"
        },
        {
            "kanji": "特に",
            "hiragana": "とくに",
            "nom": "ĐẶC",
            "meaning": "Đặc biệt là"
        },
        {
            "kanji": "思い出す",
            "hiragana": "おもいだす",
            "nom": "TƯ XUẤT",
            "meaning": "Nhớ, nghĩ về"
        },
        {
            "kanji": "ご家族",
            "hiragana": "ごかぞく",
            "nom": "GIA TỘC",
            "meaning": "Gia đình bạn"
        },
        {
            "kanji": "高校",
            "hiragana": "こうこう",
            "nom": "CAO HIỆU",
            "meaning": "Trường cấp 3"
        }
    ],
    "16": [
        {
            "kanji": "乗る",
            "hiragana": "のる",
            "nom": "THỪA",
            "meaning": "Đi, Lên ( tàu, xe ), Cưỡi"
        },
        {
            "kanji": "電車に乗る",
            "hiragana": "でんしゃにのる",
            "nom": "ĐIỆN XA THỪA",
            "meaning": "Đi xe điện"
        },
        {
            "kanji": "降りる",
            "hiragana": "おりる",
            "nom": "GIÁNG",
            "meaning": "Xuống ( xe, tàu,)"
        },
        {
            "kanji": "電車を降りる",
            "hiragana": "でんしゃをおりる",
            "nom": "ĐIỆN XA GIÁNG",
            "meaning": "Xuống xe điện"
        },
        {
            "kanji": "乗り換える",
            "hiragana": "のりかえる",
            "nom": "THỪA HOÁN",
            "meaning": "Sang xe, tàu"
        },
        {
            "kanji": "浴びる",
            "hiragana": "あびる",
            "nom": "DỤC",
            "meaning": "Tắm"
        },
        {
            "kanji": "入れる",
            "hiragana": "いれる",
            "nom": "NHẬP",
            "meaning": "Cho vào, bỏ vào"
        },
        {
            "kanji": "出す",
            "hiragana": "だす",
            "nom": "XUẤT",
            "meaning": "Nộp ( báo cáo ), rút ( tiền )"
        },
        {
            "kanji": "お金を出す",
            "hiragana": "おかねをだす",
            "nom": "KIM XUẤT",
            "meaning": "Rút tiền"
        },
        {
            "kanji": "入る",
            "hiragana": "はいる",
            "nom": "NHẬP",
            "meaning": "Vào ( Đại học,)"
        },
        {
            "kanji": "大学に入る",
            "hiragana": "だいがくにはいる",
            "nom": "ĐẠI HỌC NHẬP",
            "meaning": "Vào Đại học"
        },
        {
            "kanji": "辞める",
            "hiragana": "やめる",
            "nom": "TỪ",
            "meaning": "Từ bỏ, bỏ, nghỉ, thôi ( việc"
        },
        {
            "kanji": "会社を辞める",
            "hiragana": "かいしゃをやめる",
            "nom": "HỘI XÃ TỪ",
            "meaning": "Nghỉ làm"
        },
        {
            "kanji": "押す",
            "hiragana": "おす",
            "nom": "ÁP",
            "meaning": "Nhấn, đẩy, xô, ấn, bấm"
        },
        {
            "kanji": "若い",
            "hiragana": "わかい",
            "nom": "NHƯỢC",
            "meaning": "Trẻ, trẻ trung"
        },
        {
            "kanji": "長い",
            "hiragana": "ながい",
            "nom": "TRƯỜNG",
            "meaning": "Dài, lâu"
        },
        {
            "kanji": "短い",
            "hiragana": "みじかい",
            "nom": "ĐOẢN",
            "meaning": "Ngắn"
        },
        {
            "kanji": "明るい",
            "hiragana": "あかるい",
            "nom": "MINH",
            "meaning": "Sáng, sáng sủa"
        },
        {
            "kanji": "暗い",
            "hiragana": "くらい",
            "nom": "ÁM",
            "meaning": "Tối, tối tăm"
        },
        {
            "kanji": "背が高い",
            "hiragana": "せがたかい",
            "nom": "BỘI CAO",
            "meaning": "Cao ( vóc dáng )"
        },
        {
            "kanji": "頭がいい",
            "hiragana": "あたまがいい",
            "nom": "ĐẦU",
            "meaning": "Thông minh"
        },
        {
            "kanji": "体",
            "hiragana": "からだ",
            "nom": "THỂ",
            "meaning": "Cơ thể, thân thể"
        },
        {
            "kanji": "頭",
            "hiragana": "あたま",
            "nom": "ĐẦU",
            "meaning": "Đầu, cái đầu"
        },
        {
            "kanji": "髪",
            "hiragana": "かみ",
            "nom": "PHÁT",
            "meaning": "Tóc, tóc tai"
        },
        {
            "kanji": "顔",
            "hiragana": "かお",
            "nom": "NHAN",
            "meaning": "Khuôn mặt, cái mặt"
        },
        {
            "kanji": "目",
            "hiragana": "め",
            "nom": "MỤC",
            "meaning": "Mắt, con mắt"
        },
        {
            "kanji": "耳",
            "hiragana": "みみ",
            "nom": "NHĨ",
            "meaning": "Tai, lỗ tai"
        },
        {
            "kanji": "口",
            "hiragana": "くち",
            "nom": "KHẨU",
            "meaning": "Miệng, cái miệng"
        },
        {
            "kanji": "歯",
            "hiragana": "は",
            "nom": "XỈ",
            "meaning": "Răng"
        },
        {
            "kanji": "お腹",
            "hiragana": "おなか",
            "nom": "PHÚC",
            "meaning": "Cái bụng"
        },
        {
            "kanji": "足",
            "hiragana": "あし",
            "nom": "TÚC",
            "meaning": "Chân, cái chân"
        },
        {
            "kanji": "緑",
            "hiragana": "みどり",
            "nom": "LỤC",
            "meaning": "Cây xanh, cây cối"
        },
        {
            "kanji": "お寺",
            "hiragana": "おてら",
            "nom": "TỰ",
            "meaning": "Chùa chiền"
        },
        {
            "kanji": "神社",
            "hiragana": "じんじゃ",
            "nom": "THẦN XÃ",
            "meaning": "Đền thờ Thần Đạo"
        },
        {
            "kanji": "留学生",
            "hiragana": "りゅうがくせい",
            "nom": "LƯU HỌC SINH",
            "meaning": "Du học sinh"
        },
        {
            "kanji": "一番",
            "hiragana": "いちばん",
            "nom": "NHẤT PHIÊN",
            "meaning": "Hạng nhất, số một"
        },
        {
            "kanji": "どの人",
            "hiragana": "どのひと",
            "nom": "NHÂN",
            "meaning": "Người nào"
        },
        {
            "kanji": "お引き出しですか",
            "hiragana": "おひきだしですか",
            "nom": "DẪN XUẤT",
            "meaning": "Rút tiền phải không"
        },
        {
            "kanji": "次に",
            "hiragana": "つぎに",
            "nom": "THỨ",
            "meaning": "Tiếp theo, kế tiếp"
        },
        {
            "kanji": "確認",
            "hiragana": "かくにん",
            "nom": "XÁC NHẬN",
            "meaning": "Xác nhận"
        },
        {
            "kanji": "金額",
            "hiragana": "きんがく",
            "nom": "KIM NGACH",
            "meaning": "Số tiền"
        },
        {
            "kanji": "出る",
            "hiragana": "でる",
            "nom": "XUẤT",
            "meaning": "Tốt nghiệp"
        }
    ],
    "17": [
        {
            "kanji": "覚える",
            "hiragana": "おぼえる",
            "nom": "GIÁC",
            "meaning": "Nhớ, học thuộc lòng"
        },
        {
            "kanji": "出す",
            "hiragana": "だす",
            "nom": "XUẤT",
            "meaning": "Gởi, nộp"
        },
        {
            "kanji": "飲む",
            "hiragana": "のむ",
            "nom": "ẨM",
            "meaning": "Uống"
        },
        {
            "kanji": "払う",
            "hiragana": "はらう",
            "nom": "PHẤT",
            "meaning": "Trả ( tiền )"
        },
        {
            "kanji": "出かける",
            "hiragana": "でかける",
            "nom": "XUẤT",
            "meaning": "Đi ra ngoài"
        },
        {
            "kanji": "持って行く",
            "hiragana": "もっていく",
            "nom": "TRÌ – HÀNH",
            "meaning": "Mang theo"
        },
        {
            "kanji": "心配する",
            "hiragana": "しんぱいする",
            "nom": "TÂM – PHỐI",
            "meaning": "Lo lắng"
        },
        {
            "kanji": "忘れる",
            "hiragana": "わすれる",
            "nom": "VONG",
            "meaning": "Quên"
        },
        {
            "kanji": "レポートを出す",
            "hiragana": "レポートをだす",
            "nom": "XUẤT",
            "meaning": "Gởi báo cáo"
        },
        {
            "kanji": "薬を飲む",
            "hiragana": "くすりをのむ",
            "nom": "DƯỢC - ẨM",
            "meaning": "Uống thuốc"
        },
        {
            "kanji": "返す",
            "hiragana": "かえす",
            "nom": "PHẢN",
            "meaning": "Trả lại"
        },
        {
            "kanji": "脱ぐ",
            "hiragana": "ぬぐ",
            "nom": "THOÁT",
            "meaning": "Cởi ( quần áo, giầy dép )"
        },
        {
            "kanji": "持って来る",
            "hiragana": "もってくる",
            "nom": "TRÌ – LAI",
            "meaning": "Mang đến"
        },
        {
            "kanji": "残業する",
            "hiragana": "ざんぎょうする",
            "nom": "TÀN – NGHIỆP",
            "meaning": "Tăng ca, làm thêm giờ"
        },
        {
            "kanji": "出張する",
            "hiragana": "しゅっちょうする",
            "nom": "XUẤT – TRƯƠNG",
            "meaning": "Đi công tác"
        },
        {
            "kanji": "お風呂に入る",
            "hiragana": "おふろにはいる",
            "nom": "PHONG – LỮ - NHẬP",
            "meaning": "Tắm"
        },
        {
            "kanji": "大丈夫",
            "hiragana": "だいじょうぶ",
            "nom": "ĐẠI – TRƯỢNG – PHU",
            "meaning": "Không sao"
        },
        {
            "kanji": "問題",
            "hiragana": "もんだい",
            "nom": "VẤN – ĐỀ",
            "meaning": "Vấn đề, bài tập"
        },
        {
            "kanji": "禁煙",
            "hiragana": "きんえん",
            "nom": "CẤM YÊN",
            "meaning": "Cấm hút thuốc"
        },
        {
            "kanji": "風邪",
            "hiragana": "かぜ",
            "nom": "PHONG – TÀ",
            "meaning": "Cảm, cúm, sổ mũi"
        },
        {
            "kanji": "熱",
            "hiragana": "ねつ",
            "nom": "NHIỆT",
            "meaning": "Sốt"
        },
        {
            "kanji": "入る",
            "hiragana": "はいる",
            "nom": "NHẬP",
            "meaning": "Đi vào"
        },
        {
            "kanji": "大切",
            "hiragana": "たいせつ",
            "nom": "ĐẠI – THIẾT",
            "meaning": "Quan trọng"
        },
        {
            "kanji": "危ない",
            "hiragana": "あぶない",
            "nom": "NGUY",
            "meaning": "Nguy hiểm"
        },
        {
            "kanji": "答え",
            "hiragana": "こたえ",
            "nom": "ĐÁP",
            "meaning": "Câu trả lời"
        },
        {
            "kanji": "健康保険証",
            "hiragana": "けんこうほけんしょう",
            "nom": "KIỆN KHANG BẢO HIỂM",
            "meaning": "CHỨNG"
        },
        {
            "kanji": "風を引く",
            "hiragana": "かぜをひく",
            "nom": "PHONG – DẪN",
            "meaning": "Bị cảm"
        },
        {
            "kanji": "熱があります",
            "hiragana": "ねつがあります",
            "nom": "NHIỆT",
            "meaning": "Bị sốt"
        },
        {
            "kanji": "病気",
            "hiragana": "びょうき",
            "nom": "BỆNH – KHÍ",
            "meaning": "Bệnh, ốm"
        },
        {
            "kanji": "お風呂",
            "hiragana": "おふろ",
            "nom": "PHONG – LỮ",
            "meaning": "Bồn tắm"
        },
        {
            "kanji": "下着",
            "hiragana": "したぎ",
            "nom": "HẠ - TRƯỚC",
            "meaning": "Quần áo lót"
        },
        {
            "kanji": "２，３日",
            "hiragana": "にさんにち",
            "nom": "NHẬT",
            "meaning": "2, 3 ngày"
        },
        {
            "kanji": "痛い",
            "hiragana": "いたい",
            "nom": "THỐNG",
            "meaning": "Đau"
        },
        {
            "kanji": "お大事に",
            "hiragana": "おだいじに",
            "nom": "ĐẠI – SỰ",
            "meaning": "Chúc mau hết bệnh"
        },
        {
            "kanji": "薬",
            "hiragana": "くすり",
            "nom": "DƯỢC",
            "meaning": "Thuốc"
        },
        {
            "kanji": "上着",
            "hiragana": "うわぎ",
            "nom": "THƯỢNG – TRƯỚC",
            "meaning": "Áo khoác"
        },
        {
            "kanji": "先生",
            "hiragana": "せんせい",
            "nom": "TIÊN – SINH",
            "meaning": "Giáo viên – Bác sĩ"
        },
        {
            "kanji": "許可",
            "hiragana": "きょか",
            "nom": "HỨA – KHẢ",
            "meaning": "Cho phép"
        },
        {
            "kanji": "喉",
            "hiragana": "のど",
            "nom": "HẦU",
            "meaning": "Cổ họng"
        },
        {
            "kanji": "喉が痛いです",
            "hiragana": "のどがいたいです",
            "nom": "HẦU – THỐNG",
            "meaning": "Đau cổ họng"
        },
        {
            "kanji": "触る",
            "hiragana": "さわる",
            "nom": "XÚC",
            "meaning": "Sờ"
        }
    ],
    "18": [
        {
            "kanji": "洗う",
            "hiragana": "あらう",
            "nom": "TẨY",
            "meaning": "Rửa"
        },
        {
            "kanji": "ピアノを弾く",
            "hiragana": "ピアノをひく",
            "nom": "ĐÀN",
            "meaning": "Đánh đàn Piano"
        },
        {
            "kanji": "集める",
            "hiragana": "あつめる",
            "nom": "TẬP",
            "meaning": "Tập hợp, sưu tập"
        },
        {
            "kanji": "換える",
            "hiragana": "かえる",
            "nom": "HOÁN",
            "meaning": "Đổi ( Tiền )"
        },
        {
            "kanji": "予約する",
            "hiragana": "よやくする",
            "nom": "DỰ - ƯỚC",
            "meaning": "Hẹn trước, đặt trước"
        },
        {
            "kanji": "国際",
            "hiragana": "こくさい",
            "nom": "QUỐC – TẾ",
            "meaning": "Quốc tế"
        },
        {
            "kanji": "現金",
            "hiragana": "げんきん",
            "nom": "HIỆN - KIM",
            "meaning": "Tiền mặt"
        },
        {
            "kanji": "弾く",
            "hiragana": "ひく",
            "nom": "ĐÀN",
            "meaning": "Chơi, đánh ( Đàn )"
        },
        {
            "kanji": "歌う",
            "hiragana": "うたう",
            "nom": "CA",
            "meaning": "Hát"
        },
        {
            "kanji": "捨てる",
            "hiragana": "すてる",
            "nom": "XẢ",
            "meaning": "Vứt, bỏ"
        },
        {
            "kanji": "運転する",
            "hiragana": "うんてんする",
            "nom": "VẬN – CHUYỂN",
            "meaning": "Lái xe"
        },
        {
            "kanji": "見学する",
            "hiragana": "けんがくする",
            "nom": "KIẾN – HỌC",
            "meaning": "Tham quan"
        },
        {
            "kanji": "国際電話",
            "hiragana": "こくさいでんわ",
            "nom": "QUỐC TẾ ĐIỆN THOẠI",
            "meaning": "Điện thoại quốc tế"
        },
        {
            "kanji": "趣味",
            "hiragana": "しゅみ",
            "nom": "THÚ – VỊ",
            "meaning": "Sở thích"
        },
        {
            "kanji": "日記",
            "hiragana": "にっき",
            "nom": "NHẬT - KÝ",
            "meaning": "Nhật ký"
        },
        {
            "kanji": "課長",
            "hiragana": "かちょう",
            "nom": "KHOA – TRƯỞNG",
            "meaning": "Trưởng Ban"
        },
        {
            "kanji": "社長",
            "hiragana": "しゃちょう",
            "nom": "XÃ – TRƯỞNG",
            "meaning": "Giám Đốc"
        },
        {
            "kanji": "動物",
            "hiragana": "どうぶつ",
            "nom": "ĐỘNG – VẬT",
            "meaning": "Động vật"
        },
        {
            "kanji": "牧場",
            "hiragana": "ぼくじょう",
            "nom": "MỤC TRƯỜNG",
            "meaning": "Trang trại"
        },
        {
            "kanji": "大丈夫です",
            "hiragana": "だいじょうぶです",
            "nom": "ĐẠI TRƯỢNG PHU",
            "meaning": "Không sao, Ổn"
        },
        {
            "kanji": "お祈り",
            "hiragana": "おいのり",
            "nom": "KỲ",
            "meaning": "Cầu nguyện"
        },
        {
            "kanji": "部長",
            "hiragana": "ぶちょう",
            "nom": "BỘ - TRƯỞNG",
            "meaning": "Trưởng phòng"
        },
        {
            "kanji": "故障",
            "hiragana": "こしょう",
            "nom": "CỐ - CHƯỚNG",
            "meaning": "Hỏng hóc, hư"
        },
        {
            "kanji": "馬",
            "hiragana": "うま",
            "nom": "MÃ",
            "meaning": "Con ngựa"
        },
        {
            "kanji": "本当ですか",
            "hiragana": "ほんとうですか",
            "nom": "BỔN - ĐƯƠNG",
            "meaning": "Có thật không"
        }
    ],
    "19": [
        {
            "kanji": "登る",
            "hiragana": "のぼる",
            "nom": "ĐĂNG",
            "meaning": "Leo ( núi )"
        },
        {
            "kanji": "泊まる",
            "hiragana": "とまる",
            "nom": "BẠC",
            "meaning": "Trọ, ở ( lại )"
        },
        {
            "kanji": "掃除する",
            "hiragana": "そうじする",
            "nom": "TẢO – TRỪ",
            "meaning": "Dọn dẹp, vệ sinh"
        },
        {
            "kanji": "練習する",
            "hiragana": "れんしゅうする",
            "nom": "LUYỆN – TẬP",
            "meaning": "Luyện tập"
        },
        {
            "kanji": "強い",
            "hiragana": "つよい",
            "nom": "CƯỜNG",
            "meaning": "Mạnh"
        },
        {
            "kanji": "調子",
            "hiragana": "ちょうし",
            "nom": "ĐIỀU – TỬ",
            "meaning": "Tình trạng sức khỏe"
        },
        {
            "kanji": "調子が悪い",
            "hiragana": "ちょうしがわるい",
            "nom": "ĐIỀU – TỬ - ÁC",
            "meaning": "Sức khỏe không tốt"
        },
        {
            "kanji": "山に登る",
            "hiragana": "やまにのぼる",
            "nom": "SƠN - ĐĂNG",
            "meaning": "Leo núi"
        },
        {
            "kanji": "ホテルに泊まる",
            "hiragana": "ホテルにとまる",
            "nom": "BẠC",
            "meaning": "Trọ lại khách sạn"
        },
        {
            "kanji": "洗濯する",
            "hiragana": "せんたくする",
            "nom": "TẨY – TRẠC",
            "meaning": "Giặt ( giũ )"
        },
        {
            "kanji": "眠い",
            "hiragana": "ねむい",
            "nom": "MIÊN",
            "meaning": "Buồn ngủ"
        },
        {
            "kanji": "弱い",
            "hiragana": "よわい",
            "nom": "NHƯỢC",
            "meaning": "Yếu"
        },
        {
            "kanji": "調子がいい",
            "hiragana": "ちょうしがいい",
            "nom": "ĐIỀU – TỬ",
            "meaning": "Sức khỏe tốt"
        },
        {
            "kanji": "日",
            "hiragana": "ひ",
            "nom": "Nhật",
            "meaning": "Ngày"
        },
        {
            "kanji": "相撲",
            "hiragana": "すもう",
            "nom": "TƯƠNG - PHÁC",
            "meaning": "Võ Sumo"
        },
        {
            "kanji": "実は",
            "hiragana": "じつは",
            "nom": "THỰC",
            "meaning": "Thật ra thì"
        },
        {
            "kanji": "何回も",
            "hiragana": "なんかいも",
            "nom": "HÀ – HỒI",
            "meaning": "Nhiều lần, mấy lần"
        },
        {
            "kanji": "無理",
            "hiragana": "むり",
            "nom": "VÔ - LÍ",
            "meaning": "Không thể"
        },
        {
            "kanji": "体にいい",
            "hiragana": "からだにいい",
            "nom": "THỂ",
            "meaning": "Tốt cho sức khỏe"
        },
        {
            "kanji": "体に悪い",
            "hiragana": "からだにわるい",
            "nom": "THỂ - ÁC",
            "meaning": "Không tốt cho sức khỏe"
        },
        {
            "kanji": "そろそろ失礼します",
            "hiragana": "そろそろしつれいします",
            "nom": "THẤT – LỄ",
            "meaning": "Có lẽ sắp giờ tôi phải về rồi"
        },
        {
            "kanji": "お茶",
            "hiragana": "おちゃ",
            "nom": "TRÀ",
            "meaning": "Trà"
        },
        {
            "kanji": "茶道",
            "hiragana": "さどう",
            "nom": "TRÀ – ĐẠO",
            "meaning": "Trà đạo"
        },
        {
            "kanji": "一度",
            "hiragana": "いちど",
            "nom": "NHẤT – ĐỘ",
            "meaning": "Một lần"
        },
        {
            "kanji": "段々",
            "hiragana": "だんだん",
            "nom": "ĐOẠN - KÉP",
            "meaning": "Dần dần"
        },
        {
            "kanji": "お蔭様で",
            "hiragana": "おかげさまで",
            "nom": "ÂM – DẠNG",
            "meaning": "Nhờ trời"
        },
        {
            "kanji": "外国",
            "hiragana": "がいこく",
            "nom": "NGOẠI – QUỐC",
            "meaning": "Nước ngoài"
        },
        {
            "kanji": "乾杯",
            "hiragana": "かんぱい",
            "nom": "CAN - BÔI",
            "meaning": "Cạn ly"
        }
    ],
    "20": [
        {
            "kanji": "要る",
            "hiragana": "いる",
            "nom": "YẾU",
            "meaning": "Cần"
        },
        {
            "kanji": "修理する",
            "hiragana": "しゅうりする",
            "nom": "TÚ - LÍ",
            "meaning": "Tu sửa ( lại )"
        },
        {
            "kanji": "僕",
            "hiragana": "ぼく",
            "nom": "BỘC",
            "meaning": "Tôi, Tớ, Tao"
        },
        {
            "kanji": "物価",
            "hiragana": "ぶっか",
            "nom": "VẬT - GIÁ",
            "meaning": "Vật giá"
        },
        {
            "kanji": "着物",
            "hiragana": "きもの",
            "nom": "TRƯỚC – VẬT",
            "meaning": "Áo Kimono"
        },
        {
            "kanji": "終わり",
            "hiragana": "おわり",
            "nom": "CHUNG",
            "meaning": "Cuối, kết thúc"
        },
        {
            "kanji": "今月の終わり",
            "hiragana": "こんげつのおわり",
            "nom": "KIM – NGUYỆT - CHUNG",
            "meaning": "Cuối tháng này"
        },
        {
            "kanji": "調べる",
            "hiragana": "しらべる",
            "nom": "ĐIÊU",
            "meaning": "Tra cứu, tìm hiểu"
        },
        {
            "kanji": "直す",
            "hiragana": "なおす",
            "nom": "TRỰC",
            "meaning": "Sửa chữa"
        },
        {
            "kanji": "君",
            "hiragana": "きみ",
            "nom": "QUÂN",
            "meaning": "Em, Cậu ( em ), Bạn"
        },
        {
            "kanji": "言葉",
            "hiragana": "ことば",
            "nom": "NGÔN – DIỆP",
            "meaning": "Từ vựng"
        },
        {
            "kanji": "始め",
            "hiragana": "はじめ",
            "nom": "THỦY",
            "meaning": "Đầu ( Đầu tháng )"
        },
        {
            "kanji": "今月の始め",
            "hiragana": "こんげつのはじめ",
            "nom": "KIM – NGUYỆT – THỦY",
            "meaning": "Đầu tháng này"
        },
        {
            "kanji": "この間",
            "hiragana": "このあいだ",
            "nom": "GIAN",
            "meaning": "Vừa rồi, Hôm  nọ"
        },
        {
            "kanji": "皆で",
            "hiragana": "みんなで",
            "nom": "GIAI",
            "meaning": "Tất cả, mọi người"
        },
        {
            "kanji": "待っているよ",
            "hiragana": "まっているよ",
            "nom": "ĐÃI",
            "meaning": "Mình đang chờ đấy"
        },
        {
            "kanji": "場所",
            "hiragana": "ばしょ",
            "nom": "TRƯỜNG – SỞ",
            "meaning": "Địa điểm, chổ"
        },
        {
            "kanji": "色々",
            "hiragana": "いろいろ",
            "nom": "SẮC - KÉP",
            "meaning": "Nhiều"
        }
    ],
    "21": [
        {
            "kanji": "思う",
            "hiragana": "おもう",
            "nom": "TƯ",
            "meaning": "Nghĩ là, cho là"
        },
        {
            "kanji": "足りる",
            "hiragana": "たりる",
            "nom": "TÚC",
            "meaning": "Đủ"
        },
        {
            "kanji": "負ける",
            "hiragana": "まける",
            "nom": "PHỤ",
            "meaning": "Thua"
        },
        {
            "kanji": "役に立つ",
            "hiragana": "やくにたつ",
            "nom": "DỊCH – LẬP",
            "meaning": "Có ích"
        },
        {
            "kanji": "不便",
            "hiragana": "ふべん",
            "nom": "BẤT – TIỆN",
            "meaning": "Bất tiện"
        },
        {
            "kanji": "首相",
            "hiragana": "しゅしょう",
            "nom": "THỦ - TƯỚNG",
            "meaning": "Thủ tướng"
        },
        {
            "kanji": "政治",
            "hiragana": "せいじ",
            "nom": "CHÍNH – TRỊ",
            "meaning": "Chính trị"
        },
        {
            "kanji": "言う",
            "hiragana": "いう",
            "nom": "NGÔN",
            "meaning": "Nói"
        },
        {
            "kanji": "勝つ",
            "hiragana": "かつ",
            "nom": "THẮNG",
            "meaning": "Thắng"
        },
        {
            "kanji": "お祭りがある",
            "hiragana": "おまつりがある",
            "nom": "TẾ",
            "meaning": "Có lễ hội"
        },
        {
            "kanji": "無駄",
            "hiragana": "むだ",
            "nom": "VÔ - ĐÀ",
            "meaning": "Lãng phí, Vô ích"
        },
        {
            "kanji": "同じ",
            "hiragana": "おなじ",
            "nom": "ĐỒNG",
            "meaning": "Giống"
        },
        {
            "kanji": "大統領",
            "hiragana": "だいとうりょう",
            "nom": "ĐẠI-THỐNG LĨNH",
            "meaning": "Tổng thống"
        },
        {
            "kanji": "試合",
            "hiragana": "しあい",
            "nom": "THÍ – HỢP",
            "meaning": "Cuộc thi đấu"
        },
        {
            "kanji": "意見",
            "hiragana": "いけん",
            "nom": "Ý – KIẾN",
            "meaning": "Ý kiến"
        },
        {
            "kanji": "最近",
            "hiragana": "さいきん",
            "nom": "TỐI – CẬN",
            "meaning": "Gần đây"
        },
        {
            "kanji": "多分",
            "hiragana": "たぶん",
            "nom": "ĐA - PHÂN",
            "meaning": "Có lẽ"
        },
        {
            "kanji": "研修旅行",
            "hiragana": "けんしゅうりょこう",
            "nom": "NGHIÊN TU LỮ HÀNH",
            "meaning": "Đi du lịch mang tính học hỏi"
        },
        {
            "kanji": "技術",
            "hiragana": "ぎじゅつ",
            "nom": "KỸ - THUẬT",
            "meaning": "Kỹ thuật"
        },
        {
            "kanji": "他の N",
            "hiragana": "ほかの N",
            "nom": "THA",
            "meaning": ",Khác, Ngoài,ra"
        },
        {
            "kanji": "お話",
            "hiragana": "おはなし",
            "nom": "THOẠI",
            "meaning": "Câu chuyện"
        },
        {
            "kanji": "交通",
            "hiragana": "こうつう",
            "nom": "GIAO - THÔNG",
            "meaning": "Giao thông"
        },
        {
            "kanji": "本当に",
            "hiragana": "ほんとうに",
            "nom": "BỎN - ĐƯƠNG",
            "meaning": "Quả thực là"
        },
        {
            "kanji": "仕方がありません",
            "hiragana": "しかたがありません",
            "nom": "SĨ - PHƯƠNG",
            "meaning": "Không còn cách nào khác"
        },
        {
            "kanji": "質問",
            "hiragana": "しつもん",
            "nom": "CHẤT – VẤN",
            "meaning": "Câu hỏi"
        }
    ],
    "22": [
        {
            "kanji": "履く",
            "hiragana": "はく",
            "nom": "LÍ",
            "meaning": "Mặc ( quần ), Mang ( giầy )"
        },
        {
            "kanji": "また今度お願いします",
            "hiragana": "またこんどおねがいします",
            "nom": "KIM  - ĐỘ -  NGUYỆN",
            "meaning": "Xin hẹn lại lần sau"
        },
        {
            "kanji": "帽子",
            "hiragana": "ぼうし",
            "nom": "MẠO – TỬ",
            "meaning": "Cái nón"
        },
        {
            "kanji": "部品",
            "hiragana": "ぶひん",
            "nom": "BỘ - PHẨM",
            "meaning": "Linh kiện điện tử"
        },
        {
            "kanji": "服",
            "hiragana": "ふく",
            "nom": "PHỤC",
            "meaning": "Quần áo"
        },
        {
            "kanji": "和室",
            "hiragana": "わしつ",
            "nom": "HÒA – THẤT",
            "meaning": "Phòng kiểu Nhật"
        },
        {
            "kanji": "押し入れ",
            "hiragana": "おしいれ",
            "nom": "ÁP – NHẬP",
            "meaning": "Tủ âm tường dung để đựng"
        },
        {
            "kanji": "着る",
            "hiragana": "きる",
            "nom": "TRƯỚC",
            "meaning": "Mặc ( áo )"
        },
        {
            "kanji": "生まれる",
            "hiragana": "うまれる",
            "nom": "SINH",
            "meaning": "Được sinh ra"
        },
        {
            "kanji": "眼鏡",
            "hiragana": "めがね",
            "nom": "NHÃN - KÍNH",
            "meaning": "Mắt kính"
        },
        {
            "kanji": "万里の長城",
            "hiragana": "ばんりのちょうじょう",
            "nom": "VẠN LÝ TRƯỜNG THÀNH",
            "meaning": "Vạn Lý Trường Thành"
        },
        {
            "kanji": "約束",
            "hiragana": "やくそく",
            "nom": "ƯỚC - THÚC",
            "meaning": "Lời hứa"
        },
        {
            "kanji": "家賃",
            "hiragana": "やちん",
            "nom": "GIA – NHẪM",
            "meaning": "Tiền thuê nhà"
        },
        {
            "kanji": "布団",
            "hiragana": "ふとん",
            "nom": "BỐ - ĐOÀN",
            "meaning": "Chăn mền"
        },
        {
            "kanji": "意見",
            "hiragana": "いけん",
            "nom": "Ý – KIẾN",
            "meaning": "Ý kiến"
        },
        {
            "kanji": "最近",
            "hiragana": "さいきん",
            "nom": "TỐI – CẬN",
            "meaning": "Gần đây"
        },
        {
            "kanji": "多分",
            "hiragana": "たぶん",
            "nom": "ĐA - PHÂN",
            "meaning": "Có lẽ"
        },
        {
            "kanji": "研修旅行",
            "hiragana": "けんしゅうりょこう",
            "nom": "NGHIÊN TU LỮ HÀNH",
            "meaning": "Đi du lịch mang tính học hỏi"
        },
        {
            "kanji": "技術",
            "hiragana": "ぎじゅつ",
            "nom": "KỸ - THUẬT",
            "meaning": "Kỹ thuật"
        },
        {
            "kanji": "他の N",
            "hiragana": "ほかの N",
            "nom": "THA",
            "meaning": ",Khác, Ngoài,ra"
        },
        {
            "kanji": "お話",
            "hiragana": "おはなし",
            "nom": "THOẠI",
            "meaning": "Câu chuyện"
        },
        {
            "kanji": "交通",
            "hiragana": "こうつう",
            "nom": "GIAO - THÔNG",
            "meaning": "Giao thông"
        },
        {
            "kanji": "本当に",
            "hiragana": "ほんとうに",
            "nom": "BỎN - ĐƯƠNG",
            "meaning": "Quả thực là"
        },
        {
            "kanji": "仕方がありません",
            "hiragana": "しかたがありません",
            "nom": "SĨ - PHƯƠNG",
            "meaning": "Không còn cách nào khác"
        },
        {
            "kanji": "質問",
            "hiragana": "しつもん",
            "nom": "CHẤT – VẤN",
            "meaning": "Câu hỏi"
        }
    ],
    "23": [
        {
            "kanji": "聞く",
            "hiragana": "きく",
            "nom": "VĂN",
            "meaning": "Hỏi, nghe"
        },
        {
            "kanji": "先生に聞く",
            "hiragana": "せんせいにきく",
            "nom": "TIÊN SINH VĂN",
            "meaning": "Hỏi giáo viên"
        },
        {
            "kanji": "回す",
            "hiragana": "まわす",
            "nom": "HỒI",
            "meaning": "Quay, xoay, vặn"
        },
        {
            "kanji": "つまみを回す",
            "hiragana": "つまみをまわす",
            "nom": "HỒI",
            "meaning": "Vặn nút"
        },
        {
            "kanji": "引く",
            "hiragana": "ひく",
            "nom": "DẪN",
            "meaning": "Kéo"
        },
        {
            "kanji": "変える",
            "hiragana": "かえる",
            "nom": "BIẾN",
            "meaning": "Đổi, thay đổi"
        },
        {
            "kanji": "出る",
            "hiragana": "でる",
            "nom": "XUẤT",
            "meaning": "Ra"
        },
        {
            "kanji": "お釣が出る",
            "hiragana": "おつりがでる",
            "nom": "ĐIẾU XUẤT",
            "meaning": "Tiền thối tự động ( tiền thối chạy"
        },
        {
            "kanji": "動く",
            "hiragana": "うごく",
            "nom": "ĐỘNG",
            "meaning": "Chạy, chuyển động"
        },
        {
            "kanji": "時計が動く",
            "hiragana": "とけいがうごく",
            "nom": "THỜI KẾ ĐỘNG",
            "meaning": "Đồng hồ chạy"
        },
        {
            "kanji": "歩く",
            "hiragana": "あるく",
            "nom": "BỘ",
            "meaning": "Đi bộ"
        },
        {
            "kanji": "道を歩く",
            "hiragana": "みちをあるく",
            "nom": "ĐẠO BỘ",
            "meaning": "Đi bộ trên đường"
        },
        {
            "kanji": "渡る",
            "hiragana": "わたる",
            "nom": "ĐỘ",
            "meaning": "Băng qua ( cầu, đường,)"
        },
        {
            "kanji": "橋を渡る",
            "hiragana": "はしをわたる",
            "nom": "KIỀU ĐỘ",
            "meaning": "Băng qua cầu"
        },
        {
            "kanji": "気を付ける",
            "hiragana": "きをつける",
            "nom": "KHÍ PHÓ",
            "meaning": "Chú ý, cẩn thận"
        },
        {
            "kanji": "車に気を付ける",
            "hiragana": "くるまにきをつける",
            "nom": "XA KHÍ PHÓ",
            "meaning": "Chú ý xe cộ"
        },
        {
            "kanji": "引越しする",
            "hiragana": "ひっこしする",
            "nom": "DẪN VIỆT",
            "meaning": "Dọn nhà, chuyển nhà"
        },
        {
            "kanji": "電気屋",
            "hiragana": "でんきや",
            "nom": "ĐIỆN KHÍ ỐC",
            "meaning": "Tiệm điện"
        },
        {
            "kanji": "音",
            "hiragana": "おと",
            "nom": "ÂM",
            "meaning": "Âm thanh, tiếng động"
        },
        {
            "kanji": "機械",
            "hiragana": "きかい",
            "nom": "CƠ GIỚI",
            "meaning": "Máy móc"
        },
        {
            "kanji": "道",
            "hiragana": "みち",
            "nom": "ĐẠO",
            "meaning": "Đường, con đường, đường"
        },
        {
            "kanji": "交差点",
            "hiragana": "こうさてん",
            "nom": "GIAO SAI ĐIỂM",
            "meaning": "Ngã tư, bùng binh"
        },
        {
            "kanji": "T 字路",
            "hiragana": "ティーじろ",
            "nom": "TỰ LỘ",
            "meaning": "Ngã 3"
        },
        {
            "kanji": "信号",
            "hiragana": "しんごう",
            "nom": "TÍN HIỆU",
            "meaning": "Đèn giao thông"
        },
        {
            "kanji": "角",
            "hiragana": "かど",
            "nom": "GIÁC",
            "meaning": "Góc"
        },
        {
            "kanji": "橋",
            "hiragana": "はし",
            "nom": "KIỀU",
            "meaning": "Cầu, cây cầu"
        },
        {
            "kanji": "駐車場",
            "hiragana": "ちゅうしゃじょう",
            "nom": "TRÚ XA TRƯỜNG",
            "meaning": "Bãi đậu xe hơi"
        },
        {
            "kanji": "～目",
            "hiragana": "～め",
            "nom": "MỤC",
            "meaning": "Thứ ~"
        },
        {
            "kanji": "お正月",
            "hiragana": "おしょうがつ",
            "nom": "CHÍNH NGUYỆT",
            "meaning": "Tết, ngày Tết"
        },
        {
            "kanji": "止まる",
            "hiragana": "とまる",
            "nom": "CHỈ",
            "meaning": "Ngừng, dừng, đậu ( xe )"
        },
        {
            "kanji": "機械が止まる",
            "hiragana": "きかいがとまる",
            "nom": "KHÍ GIỚI CHỈ",
            "meaning": "Máy ngừng"
        },
        {
            "kanji": "調節する",
            "hiragana": "ちょうせつする",
            "nom": "ĐIỀU TIẾT",
            "meaning": "Điều chỉnh"
        },
        {
            "kanji": "困る",
            "hiragana": "こまる",
            "nom": "KHỐN",
            "meaning": "Khó khăn, gặp khó khăn"
        },
        {
            "kanji": "頑張る",
            "hiragana": "がんばる",
            "nom": "NGOAN TRƯƠNG",
            "meaning": "Cố gắng"
        },
        {
            "kanji": "曲がる",
            "hiragana": "まがる",
            "nom": "KHÚC",
            "meaning": "Rẽ, quẹo"
        },
        {
            "kanji": "悲しい",
            "hiragana": "かなしい",
            "nom": "BI",
            "meaning": "Đau buồn"
        },
        {
            "kanji": "千円札",
            "hiragana": "せんえんさつ",
            "nom": "THIÊN VIÊN TRÁT",
            "meaning": "Tờ 1000 Yên"
        },
        {
            "kanji": "建物",
            "hiragana": "たてもの",
            "nom": "KIẾN VẬT",
            "meaning": "Tòa nhà, công trình xây dựng"
        },
        {
            "kanji": "外国人登録証",
            "hiragana": "がいこくじんとうろくしょう",
            "nom": "NGOẠI QUỐC NHÂN",
            "meaning": "ĐĂNG LỤC CHỨNG"
        },
        {
            "kanji": "困ったな",
            "hiragana": "こまったな",
            "nom": "KHỐN",
            "meaning": "Chết tôi rồi, gay quá nhỉ"
        },
        {
            "kanji": "何に使いますか",
            "hiragana": "なににつかいますか",
            "nom": "HÀ SỬ",
            "meaning": "Sử dụng để làm gì"
        },
        {
            "kanji": "駐輪場",
            "hiragana": "ちゅうりんじょう",
            "nom": "TRÚ LUÂN TRƯỜNG",
            "meaning": "Bãi đậu xe 2 bánh"
        }
    ],
    "24": [
        {
            "kanji": "連れて行く",
            "hiragana": "つれていく",
            "nom": "LIÊN HÀNH",
            "meaning": "Dẫn,đi, dẫn đi theo"
        },
        {
            "kanji": "連れて来る",
            "hiragana": "つれてくる",
            "nom": "LIÊN LAI",
            "meaning": "Dẫn,đến, dẫn đến"
        },
        {
            "kanji": "送る",
            "hiragana": "おくる",
            "nom": "TỐNG",
            "meaning": "Tiễn, đưa tiễn, đưa, gửi"
        },
        {
            "kanji": "人を送る",
            "hiragana": "ひとをおくる",
            "nom": "NHÂN TỐNG",
            "meaning": "Tiễn người"
        },
        {
            "kanji": "紹介する",
            "hiragana": "しょうかいする",
            "nom": "THIỆU GIỚI",
            "meaning": "Giới thiệu"
        },
        {
            "kanji": "案内する",
            "hiragana": "あんないする",
            "nom": "ÁN NỘI",
            "meaning": "Hướng dẫn"
        },
        {
            "kanji": "説明する",
            "hiragana": "せつめいする",
            "nom": "THUYẾT MINH",
            "meaning": "Giải thích, trình bày"
        },
        {
            "kanji": "準備",
            "hiragana": "じゅんび",
            "nom": "CHUẨN BỊ",
            "meaning": "Sự chuẩn bị"
        },
        {
            "kanji": "意味",
            "hiragana": "いみ",
            "nom": "Ý VỊ",
            "meaning": "Ý nghĩa"
        },
        {
            "kanji": "お菓子",
            "hiragana": "おかし",
            "nom": "QUẢ TỬ",
            "meaning": "Bánh kẹo"
        },
        {
            "kanji": "全部",
            "hiragana": "ぜんぶ",
            "nom": "TOÀN BỘ",
            "meaning": "Toàn bộ"
        },
        {
            "kanji": "自分で",
            "hiragana": "じぶんで",
            "nom": "TỰ PHÂN",
            "meaning": "Tự mình"
        },
        {
            "kanji": "人形",
            "hiragana": "にんぎょう",
            "nom": "NHÂN HÌNH",
            "meaning": "Búp bê"
        },
        {
            "kanji": "東京タワー",
            "hiragana": "とうきょうタワー",
            "nom": "ĐÔNG KINH",
            "meaning": "Tháp Tokyo"
        },
        {
            "kanji": "大阪城",
            "hiragana": "おおさかじょう",
            "nom": "ĐẠI PHẢN THÀNH",
            "meaning": "Thành OSAKA"
        },
        {
            "kanji": "他に",
            "hiragana": "ほかに",
            "nom": "THA",
            "meaning": "Ngoài ra"
        },
        {
            "kanji": "ワゴン車",
            "hiragana": "ワゴンしゃ",
            "nom": "XA",
            "meaning": "Xe chở hàng"
        },
        {
            "kanji": "お弁当",
            "hiragana": "おべんとう",
            "nom": "BIỆN ĐƯƠNG",
            "meaning": "Cơm hộp"
        },
        {
            "kanji": "入れる",
            "hiragana": "いれる",
            "nom": "NHẬP",
            "meaning": "Pha ( trà, cà phê,)"
        }
    ],
    "25": [
        {
            "kanji": "考える",
            "hiragana": "かんがえる",
            "nom": "KHẢO",
            "meaning": "Nghĩ, suy nghĩ"
        },
        {
            "kanji": "着く",
            "hiragana": "つく",
            "nom": "TRƯỚC",
            "meaning": "Đến nơi"
        },
        {
            "kanji": "駅に着く",
            "hiragana": "えきにつく",
            "nom": "DỊCH TRƯỚC",
            "meaning": "Đến nhà ga"
        },
        {
            "kanji": "留学する",
            "hiragana": "りゅうがくする",
            "nom": "LƯU HỌC",
            "meaning": "Du học"
        },
        {
            "kanji": "取る",
            "hiragana": "とる",
            "nom": "THỦ",
            "meaning": "Lấy, cầm, nắm, đạt"
        },
        {
            "kanji": "年を取る",
            "hiragana": "としをとる",
            "nom": "NIÊN THỦ",
            "meaning": "Lớn tuổi, có tuổi"
        },
        {
            "kanji": "1 億",
            "hiragana": "いちおく",
            "nom": "ỨC",
            "meaning": "1 trăm triệu"
        },
        {
            "kanji": "続ける",
            "hiragana": "つづける",
            "nom": "TỤC",
            "meaning": "Tiếp tục"
        },
        {
            "kanji": "辞める",
            "hiragana": "やめる",
            "nom": "TỪ",
            "meaning": "Nghỉ, bỏ, từ bỏ, thôi"
        },
        {
            "kanji": "勉強を止める",
            "hiragana": "べんきょうをやめる",
            "nom": "MIỄN CƯỠNG CHỈ",
            "meaning": "Nghỉ học"
        },
        {
            "kanji": "片付ける",
            "hiragana": "かたづける",
            "nom": "PHIẾN PHÓ",
            "meaning": "Dọn dẹp, sắp xếp lại"
        },
        {
            "kanji": "道具",
            "hiragana": "どうぐ",
            "nom": "ĐẠO CỤ",
            "meaning": "Dụng cụ, công cụ"
        },
        {
            "kanji": "一般研修",
            "hiragana": "いっぱんけんしゅう",
            "nom": "NHẤT BÁN NGHIÊN TU",
            "meaning": "Tu nghiệp bình thường"
        },
        {
            "kanji": "世界",
            "hiragana": "せかい",
            "nom": "THẾ GIỚI",
            "meaning": "Thế giới"
        },
        {
            "kanji": "困ったこと",
            "hiragana": "こまったこと",
            "nom": "KHỐN",
            "meaning": "Chuyện khó khăn"
        },
        {
            "kanji": "転勤",
            "hiragana": "てんきん",
            "nom": "CHUYỂN CẦN",
            "meaning": "Chuyển chỗ làm"
        },
        {
            "kanji": "一杯飲みましょう",
            "hiragana": "いっぱいのみましょう",
            "nom": "NHẤT BÔI ẨM",
            "meaning": "Uống 1 ly nhé"
        },
        {
            "kanji": "色々お世話に",
            "hiragana": "いろいろおせわになりました",
            "nom": "SẮC KÉP THẾ THOẠI",
            "meaning": "Cám ơn vì đã giúp đỡ tôi rất"
        },
        {
            "kanji": "頑張る",
            "hiragana": "がんばる",
            "nom": "NGOAN TRƯƠNG",
            "meaning": "Cố gắng"
        },
        {
            "kanji": "どうぞ、お元気で",
            "hiragana": "どうぞ、おげんきで",
            "nom": "NGUYÊN KHÍ",
            "meaning": "Nhớ giữ gìn sức khỏe"
        },
        {
            "kanji": "田舎",
            "hiragana": "いなか",
            "nom": "ĐIỀN XÁ",
            "meaning": "Nông thôn, quê, làng quê"
        },
        {
            "kanji": "大使館",
            "hiragana": "たいしかん",
            "nom": "ĐẠI SỨ QUÁN",
            "meaning": "Đại sứ quán"
        }
    ],
    "26": [
        {
            "kanji": "診る",
            "hiragana": "みる",
            "nom": "CHẨN",
            "meaning": "Khám bệnh"
        },
        {
            "kanji": "探す",
            "hiragana": "さがす",
            "nom": "THÁM",
            "meaning": "Tìm kiếm"
        },
        {
            "kanji": "遅れる",
            "hiragana": "おくれる",
            "nom": "TRÌ",
            "meaning": "Bị trễ, muộn, chậm"
        },
        {
            "kanji": "時間に間に合う",
            "hiragana": "じかんにまにあう",
            "nom": "THỜI GIAN GIAN HỢP",
            "meaning": "Kịp, kịp giờ"
        },
        {
            "kanji": "参加する",
            "hiragana": "さんかする",
            "nom": "THAM GIA",
            "meaning": "Tham gia"
        },
        {
            "kanji": "申し込む",
            "hiragana": "もうしこむ",
            "nom": "THÂN NHẬP",
            "meaning": "Đăng ký tham gia"
        },
        {
            "kanji": "都合がいい",
            "hiragana": "つごうがいい",
            "nom": "ĐÔ HỢP",
            "meaning": "Được, không có kẹt"
        },
        {
            "kanji": "都合が悪い",
            "hiragana": "つごうがわるい",
            "nom": "ĐÔ HỘ ÁC",
            "meaning": "Bị kẹt, không rảnh, bận"
        },
        {
            "kanji": "気分がいい",
            "hiragana": "きぶんがいい",
            "nom": "KHÍ PHÂN",
            "meaning": "Tâm trạng vui vẻ"
        },
        {
            "kanji": "気分が悪い",
            "hiragana": "きぶんがわるい",
            "nom": "KHÍ PHÂN ÁC",
            "meaning": "Tâm trạng không vui"
        },
        {
            "kanji": "新聞社",
            "hiragana": "しんぶんしゃ",
            "nom": "TÂN VĂN XÃ",
            "meaning": "Tòa soạn"
        },
        {
            "kanji": "柔道",
            "hiragana": "じゅうどう",
            "nom": "NHU ĐẠO",
            "meaning": "Võ Judo"
        },
        {
            "kanji": "運動会",
            "hiragana": "うんどうかい",
            "nom": "VẬN ĐỘNG HỘI",
            "meaning": "Hội khỏe phù đổng"
        },
        {
            "kanji": "場所",
            "hiragana": "ばしょ",
            "nom": "TRƯỜNG SỞ",
            "meaning": "Nơi chốn, địa điểm"
        },
        {
            "kanji": "今度",
            "hiragana": "こんど",
            "nom": "KIM ĐỘ",
            "meaning": "Lần này, lần sau"
        },
        {
            "kanji": "直接",
            "hiragana": "ちょくせつ",
            "nom": "TRỰC TIẾP",
            "meaning": "Trực tiếp"
        },
        {
            "kanji": "何でも",
            "hiragana": "なんでも",
            "nom": "HÀ",
            "meaning": "Bất cứ thứ gì, cái gì"
        },
        {
            "kanji": "子供の日",
            "hiragana": "こどものひ",
            "nom": "TỬ CUNG NHẬT",
            "meaning": "Ngày thiếu nhi"
        },
        {
            "kanji": "片付ける",
            "hiragana": "かたづける",
            "nom": "PHIẾN PHÓ",
            "meaning": "Thu dọn, Sắp xếp"
        },
        {
            "kanji": "荷物を片付ける",
            "hiragana": "にもつをかたづける",
            "nom": "HÀ VẬT PHIẾN PHÓ",
            "meaning": "Sắp xếp hành lý"
        },
        {
            "kanji": "ごみを出す",
            "hiragana": "ごみをだす",
            "nom": "XUẤT",
            "meaning": "Đổ rác"
        },
        {
            "kanji": "ごみが燃える",
            "hiragana": "ごみがもえる",
            "nom": "NHIÊN",
            "meaning": "Rác đốt được"
        },
        {
            "kanji": "置き場",
            "hiragana": "おきば",
            "nom": "TRÍ TRƯỜNG",
            "meaning": "Chỗ để, nơi để"
        },
        {
            "kanji": "横",
            "hiragana": "よこ",
            "nom": "HOÀNH",
            "meaning": "Bên cạnh"
        },
        {
            "kanji": "缶",
            "hiragana": "かん",
            "nom": "PHẪU,PHỮU",
            "meaning": "Cái lon, vỏ lon"
        },
        {
            "kanji": "お湯",
            "hiragana": "おゆ",
            "nom": "THANG",
            "meaning": "Nước nóng, nước sôi"
        },
        {
            "kanji": "～会社",
            "hiragana": "～がいしゃ",
            "nom": "HỘI XÃ",
            "meaning": "Công ty ~"
        },
        {
            "kanji": "連絡する",
            "hiragana": "れんらくする",
            "nom": "LIÊN LẠC",
            "meaning": "Liên lạc"
        },
        {
            "kanji": "困ったな",
            "hiragana": "こまったな",
            "nom": "KHỐN",
            "meaning": "Căng quá, gay quá, chết rồi"
        },
        {
            "kanji": "電子メール",
            "hiragana": "でんしメール",
            "nom": "ĐIỆN TỬ",
            "meaning": "Thư điện tử"
        },
        {
            "kanji": "宇宙",
            "hiragana": "うちゅう",
            "nom": "VŨ TRỤ",
            "meaning": "Vũ trụ"
        },
        {
            "kanji": "怖い",
            "hiragana": "こわい",
            "nom": "BỐ",
            "meaning": "Sợ, khiếp, hãi hùng"
        },
        {
            "kanji": "宇宙船",
            "hiragana": "うちゅうせん",
            "nom": "VŨ TRỤ THUYỀN",
            "meaning": "Tàu vũ trụ"
        },
        {
            "kanji": "宇宙飛行士",
            "hiragana": "うちゅうひこうし",
            "nom": "VŨ TRỤ PHI HÀNH SĨ",
            "meaning": "Nhà du hành vũ trụ"
        },
        {
            "kanji": "随分",
            "hiragana": "ずいぶん",
            "nom": "TÙY PHÂN",
            "meaning": "Rất"
        },
        {
            "kanji": "瓶",
            "hiragana": "びん",
            "nom": "BÌNH",
            "meaning": "Cái bình, vỏ chai lọ"
        },
        {
            "kanji": "間に合う",
            "hiragana": "まにあう",
            "nom": "GIAN HỢP",
            "meaning": "Kịp giờ"
        },
        {
            "kanji": "片付く",
            "hiragana": "かたづく",
            "nom": "PHIẾN PHÓ",
            "meaning": "Được sắp xếp"
        },
        {
            "kanji": "粗大ごみ",
            "hiragana": "そだいごみ",
            "nom": "THÔ ĐẠI",
            "meaning": "Rác cồng kềnh"
        },
        {
            "kanji": "燃えるごみ",
            "hiragana": "もえるごみ",
            "nom": "NHIÊN",
            "meaning": "Rác đốt được"
        },
        {
            "kanji": "ごみを収集する",
            "hiragana": "ごみをしゅうしゅうする",
            "nom": "THU TẬP",
            "meaning": "Thu gom rác"
        },
        {
            "kanji": "気分",
            "hiragana": "きぶん",
            "nom": "KHÍ PHÂN",
            "meaning": "Tâm trạng"
        }
    ],
    "27": [
        {
            "kanji": "飼う",
            "hiragana": "かう",
            "nom": "TỰ",
            "meaning": "Nuôi ( thú )"
        },
        {
            "kanji": "建てる",
            "hiragana": "たてる",
            "nom": "KIẾN",
            "meaning": "Xây dựng"
        },
        {
            "kanji": "走る",
            "hiragana": "はしる",
            "nom": "TẨU",
            "meaning": "Chạy"
        },
        {
            "kanji": "道を走る",
            "hiragana": "みちをはしる",
            "nom": "ĐẠO TẨU",
            "meaning": "Chạy trên đường"
        },
        {
            "kanji": "取る",
            "hiragana": "とる",
            "nom": "THỦ",
            "meaning": "Lấy, nghỉ  ( phép )"
        },
        {
            "kanji": "休みを取る",
            "hiragana": "やすみをとる",
            "nom": "HƯU THỦ",
            "meaning": "Nghỉ phép"
        },
        {
            "kanji": "見える",
            "hiragana": "みえる",
            "nom": "KIẾN",
            "meaning": "Thấy, nhìn thấy được"
        },
        {
            "kanji": "山が見える",
            "hiragana": "やまがみえる",
            "nom": "SƠN KIẾN",
            "meaning": "Thấy được núi"
        },
        {
            "kanji": "聞こえる",
            "hiragana": "きこえる",
            "nom": "VĂN",
            "meaning": "Nghe thấy"
        },
        {
            "kanji": "音が聞こえる",
            "hiragana": "おとがきこえる",
            "nom": "ÂM VĂN",
            "meaning": "Nghe thấy tiếng động"
        },
        {
            "kanji": "金魚",
            "hiragana": "きんぎょ",
            "nom": "KIM NGƯ",
            "meaning": "Cá cảnh, cá vàng"
        },
        {
            "kanji": "空港ができる",
            "hiragana": "くうこうができる",
            "nom": "KHÔNG CẢNG",
            "meaning": "Hoàn thành sân bay"
        },
        {
            "kanji": "開く",
            "hiragana": "ひらく",
            "nom": "KHAI",
            "meaning": "Khai giảng, tổ chức, mở (lớp)"
        },
        {
            "kanji": "教室を開く",
            "hiragana": "きょうしつをひらく",
            "nom": "GIÁO THẤT KHAI",
            "meaning": "Mở lớp"
        },
        {
            "kanji": "鳥",
            "hiragana": "とり",
            "nom": "ĐIỂU",
            "meaning": "Chim"
        },
        {
            "kanji": "声",
            "hiragana": "こえ",
            "nom": "THANH",
            "meaning": "Âm thanh, tiếng động"
        },
        {
            "kanji": "波",
            "hiragana": "なみ",
            "nom": "BA",
            "meaning": "Sóng"
        },
        {
            "kanji": "花火",
            "hiragana": "はなび",
            "nom": "HOA HỎA",
            "meaning": "Pháo hoa"
        },
        {
            "kanji": "景色",
            "hiragana": "けしき",
            "nom": "CẢNH SẮC",
            "meaning": "Phong cảnh ( thiên nhiên )"
        },
        {
            "kanji": "昼間",
            "hiragana": "ひるま",
            "nom": "TRÚ GIAN",
            "meaning": "Ban ngày"
        },
        {
            "kanji": "昔",
            "hiragana": "むかし",
            "nom": "TÍCH",
            "meaning": "Ngày xưa"
        },
        {
            "kanji": "道具",
            "hiragana": "どうぐ",
            "nom": "ĐẠO CỤ",
            "meaning": "Dụng cụ"
        },
        {
            "kanji": "自動販売機",
            "hiragana": "じどうはんばいき",
            "nom": "TỰ ĐỘNG PHIẾN MẠI CƠ",
            "meaning": "Máy bán hàng tự động"
        },
        {
            "kanji": "通信販売",
            "hiragana": "つうしんはんばい",
            "nom": "THÔNG TÍN PHIẾN MẠI",
            "meaning": "Mua bán trên mạng"
        },
        {
            "kanji": "台所",
            "hiragana": "だいどころ",
            "nom": "ĐÀI SỞ",
            "meaning": "Nhà bếp"
        },
        {
            "kanji": "～教室",
            "hiragana": "～きょうしつ",
            "nom": "GIÁO THẤT",
            "meaning": "Lớp học"
        },
        {
            "kanji": "～後",
            "hiragana": "～ご",
            "nom": "HẬU",
            "meaning": ",sau"
        },
        {
            "kanji": "他の～",
            "hiragana": "ほかの～",
            "nom": "THA",
            "meaning": ",khác"
        },
        {
            "kanji": "関西空港",
            "hiragana": "かんさいくうこう",
            "nom": "QUAN TÂY KHÔNG CẢNG",
            "meaning": "Sân bay Kansai"
        },
        {
            "kanji": "秋葉原",
            "hiragana": "あきはばら",
            "nom": "THU DIỆP NGUYÊN",
            "meaning": "Tên một khu phố chuyên bán hàng"
        },
        {
            "kanji": "伊豆",
            "hiragana": "いず",
            "nom": "Y ĐẬU",
            "meaning": "Vùng Izu"
        },
        {
            "kanji": "日曜大工",
            "hiragana": "にちようだいく",
            "nom": "NHẬT DIỆU ĐẠI CÔNG",
            "meaning": "Công việc đóng bàn ghế để giải"
        },
        {
            "kanji": "本棚",
            "hiragana": "ほんだな",
            "nom": "BẢN BẰNG",
            "meaning": "Kệ sách"
        },
        {
            "kanji": "夢",
            "hiragana": "ゆめ",
            "nom": "MỘNG",
            "meaning": "Mơ ước, giấc mơ"
        },
        {
            "kanji": "素晴らしい",
            "hiragana": "すばらしい",
            "nom": "TỐ TÌNH",
            "meaning": "Tuyệt vời"
        },
        {
            "kanji": "子供達",
            "hiragana": "こどもたち",
            "nom": "TỬ CUNG ĐẠT",
            "meaning": "Bọn trẻ, lũ trẻ"
        },
        {
            "kanji": "大好き",
            "hiragana": "だいすき",
            "nom": "ĐẠI HẢO",
            "meaning": "Rất thích"
        },
        {
            "kanji": "漫画",
            "hiragana": "まんが",
            "nom": "MAN HỌA",
            "meaning": "Truyện tranh"
        },
        {
            "kanji": "主人公",
            "hiragana": "しゅじんこう",
            "nom": "CHỦ NHÂN CÔNG",
            "meaning": "Nhân vật chính trong phim"
        },
        {
            "kanji": "形",
            "hiragana": "かたち",
            "nom": "HÌNH",
            "meaning": "Hình dạng"
        },
        {
            "kanji": "不思議",
            "hiragana": "ふしぎ",
            "nom": "BẤT TƯ NGHỊ",
            "meaning": "Lạ lung, kỳ lạ"
        },
        {
            "kanji": "付ける",
            "hiragana": "つける",
            "nom": "PHÓ",
            "meaning": "Đính vào, gắn vào"
        },
        {
            "kanji": "空",
            "hiragana": "そら",
            "nom": "KHÔNG",
            "meaning": "Bầu trời"
        },
        {
            "kanji": "飛ぶ",
            "hiragana": "とぶ",
            "nom": "PHI",
            "meaning": "Bay"
        },
        {
            "kanji": "自由",
            "hiragana": "じゆう",
            "nom": "TỰ DO",
            "meaning": "Sự tự do"
        }
    ],
    "28": [
        {
            "kanji": "売れる",
            "hiragana": "うれる",
            "nom": "MẠI",
            "meaning": "Bán chạy, bán được"
        },
        {
            "kanji": "踊る",
            "hiragana": "おどる",
            "nom": "DŨNG",
            "meaning": "Nhảy, múa, nhảy múa"
        },
        {
            "kanji": "選ぶ",
            "hiragana": "えらぶ",
            "nom": "TUYỂN",
            "meaning": "Tuyển, chọn, tuyển chọn"
        },
        {
            "kanji": "違う",
            "hiragana": "ちがう",
            "nom": "VI",
            "meaning": "Khác nhau, sai"
        },
        {
            "kanji": "通う",
            "hiragana": "かよう",
            "nom": "THÔNG",
            "meaning": "Đi học, lui tới"
        },
        {
            "kanji": "真面目",
            "hiragana": "まじめ",
            "nom": "CHÂN DIỆN MỤC",
            "meaning": "Nghiêm túc, đàng hoàng"
        },
        {
            "kanji": "熱心",
            "hiragana": "ねっしん",
            "nom": "NHIỆT TÂM",
            "meaning": "Nhiệt tình, tận tình, hết lòng"
        },
        {
            "kanji": "優しい",
            "hiragana": "やさしい",
            "nom": "ƯU",
            "meaning": "Hiền lành, dịu dàng, dễ tính"
        },
        {
            "kanji": "習慣",
            "hiragana": "しゅうかん",
            "nom": "TẬP QUÁN",
            "meaning": "Phong tục, tập quán, thói"
        },
        {
            "kanji": "原因",
            "hiragana": "げんいん",
            "nom": "NGUYÊN NHÂN",
            "meaning": "Nguyên nhân"
        },
        {
            "kanji": "力",
            "hiragana": "ちから",
            "nom": "LỰC",
            "meaning": "Sức mạnh, năng lực"
        },
        {
            "kanji": "人気がある",
            "hiragana": "にんきがある",
            "nom": "NHÂN KHÍ HỮU",
            "meaning": "Được hâm mộ, được yêu"
        },
        {
            "kanji": "形",
            "hiragana": "かたち",
            "nom": "HÌNH",
            "meaning": "Hình dạng, kiểu dáng"
        },
        {
            "kanji": "色",
            "hiragana": "いろ",
            "nom": "SẮC",
            "meaning": "Màu sắc"
        },
        {
            "kanji": "味",
            "hiragana": "あじ",
            "nom": "VỊ",
            "meaning": "Vị, mùi vị"
        },
        {
            "kanji": "品物",
            "hiragana": "しなもの",
            "nom": "PHẨM VẬT",
            "meaning": "Hàng hóa, mặt hàng"
        },
        {
            "kanji": "値段",
            "hiragana": "ねだん",
            "nom": "TRỊ ĐOẠN",
            "meaning": "Giá cả"
        },
        {
            "kanji": "給料",
            "hiragana": "きゅうりょう",
            "nom": "CẤP LIỆU",
            "meaning": "Tiền lương"
        },
        {
            "kanji": "番組",
            "hiragana": "ばんぐみ",
            "nom": "PHIÊN TỔ",
            "meaning": "Chương trình Tivi"
        },
        {
            "kanji": "小説",
            "hiragana": "しょうせつ",
            "nom": "TIỂU THUYẾT",
            "meaning": "Tiểu thuyết"
        },
        {
            "kanji": "小説家",
            "hiragana": "しょうせつか",
            "nom": "TIỂU THUYẾT GIA",
            "meaning": "Nhà văn, tiểu thuyết gia"
        },
        {
            "kanji": "歌手",
            "hiragana": "かしゅ",
            "nom": "CA THỦ",
            "meaning": "Ca sĩ"
        },
        {
            "kanji": "管理人",
            "hiragana": "かんりにん",
            "nom": "QUẢN LÝ NHÂN",
            "meaning": "Người quản lý"
        },
        {
            "kanji": "息子",
            "hiragana": "むすこ",
            "nom": "TỨC TỬ",
            "meaning": "Con trai tôi"
        },
        {
            "kanji": "娘",
            "hiragana": "むすめ",
            "nom": "NƯƠNG",
            "meaning": "Con gái tôi"
        },
        {
            "kanji": "お知らせ",
            "hiragana": "おしらせ",
            "nom": "TRI",
            "meaning": "Thông báo"
        },
        {
            "kanji": "日にち",
            "hiragana": "ひにち",
            "nom": "NHẬT NHẬT",
            "meaning": "Ngày tháng cụ thể"
        },
        {
            "kanji": "体育館",
            "hiragana": "たいいくかん",
            "nom": "THỂ DỤC QUÁN",
            "meaning": "Phòng tập thể dục, trung tâm"
        },
        {
            "kanji": "無料",
            "hiragana": "むりょう",
            "nom": "VÔ LIỆU",
            "meaning": "Miễn phí"
        },
        {
            "kanji": "理由",
            "hiragana": "りゆう",
            "nom": "LÝ DO",
            "meaning": "Lý do"
        },
        {
            "kanji": "偉い",
            "hiragana": "えらい",
            "nom": "VĨ",
            "meaning": "Tài giỏi, xuất sắc"
        },
        {
            "kanji": "噛む",
            "hiragana": "かむ",
            "nom": "NIẾT",
            "meaning": "Cắn, nhai"
        },
        {
            "kanji": "人気",
            "hiragana": "にんき",
            "nom": "NHÂN KHÍ",
            "meaning": "Sự nổi tiếng"
        },
        {
            "kanji": "～家",
            "hiragana": "～か",
            "nom": "~ GIA",
            "meaning": "Nhà ~( báo, văn,)"
        }
    ],
    "29": [
        {
            "kanji": "開く",
            "hiragana": "あく",
            "nom": "KHAI",
            "meaning": "(Cửa,) (được) mở"
        },
        {
            "kanji": "閉まる",
            "hiragana": "しまる",
            "nom": "BẾ",
            "meaning": "( Cửa,) ( được,bị ) đóng"
        },
        {
            "kanji": "点く",
            "hiragana": "つく",
            "nom": "ĐIỂM",
            "meaning": "( Đèn,) ( được ) bật, sáng"
        },
        {
            "kanji": "消える",
            "hiragana": "きえる",
            "nom": "TIÊU",
            "meaning": "( Đèn, lửa,) ( được,bị ) tắt"
        },
        {
            "kanji": "込む",
            "hiragana": "こむ",
            "nom": "NHẬP",
            "meaning": "Đông đúc"
        },
        {
            "kanji": "空く",
            "hiragana": "すく",
            "nom": "KHÔNG",
            "meaning": "Trống rỗng, vắng"
        },
        {
            "kanji": "壊れる",
            "hiragana": "こわれる",
            "nom": "HOẠI",
            "meaning": "( Ghế,) (bị) hỏng, hư, gãy"
        },
        {
            "kanji": "割れる",
            "hiragana": "われる",
            "nom": "CÁT",
            "meaning": "(Ly,) (bị) vỡ, bể, bị đập"
        },
        {
            "kanji": "折れる",
            "hiragana": "おれる",
            "nom": "CHIẾT",
            "meaning": "( Cây,) (bị) gãy, bị bẻ"
        },
        {
            "kanji": "破れる",
            "hiragana": "やぶれる",
            "nom": "PHÁ",
            "meaning": "(Giấy,) (bị) rách, bị xé"
        },
        {
            "kanji": "汚れる",
            "hiragana": "よごれる",
            "nom": "Ô",
            "meaning": "(Quần áo,) (bị) bẩn, dơ"
        },
        {
            "kanji": "付く",
            "hiragana": "つく",
            "nom": "PHÓ",
            "meaning": "Có gắn, ,được đính vào"
        },
        {
            "kanji": "外れる",
            "hiragana": "はずれる",
            "nom": "NGOẠI",
            "meaning": ", ( bị ) bung ra, tuột, sứt"
        },
        {
            "kanji": "止まる",
            "hiragana": "とまる",
            "nom": "CHỈ",
            "meaning": "( Xe,) tự dừng lại, dừng"
        },
        {
            "kanji": "間違える",
            "hiragana": "まちがえる",
            "nom": "GIAN VI",
            "meaning": "Nhầm lẫn, lộn"
        },
        {
            "kanji": "落す",
            "hiragana": "おとす",
            "nom": "LẠC",
            "meaning": "Làm rơi, làm rớt"
        },
        {
            "kanji": "皿",
            "hiragana": "さら",
            "nom": "MÃNH",
            "meaning": "Cái dĩa, đĩa"
        },
        {
            "kanji": "茶碗",
            "hiragana": "ちゃわん",
            "nom": "TRÀ OẢN",
            "meaning": "Cái chén, bát"
        },
        {
            "kanji": "袋",
            "hiragana": "ふくろ",
            "nom": "ĐẠI",
            "meaning": "Cái bao, bịch, túi"
        },
        {
            "kanji": "財布",
            "hiragana": "さいふ",
            "nom": "TÀI BỐ",
            "meaning": "Cái bóp, ví tiền"
        },
        {
            "kanji": "枝",
            "hiragana": "えだ",
            "nom": "CHI",
            "meaning": "Nhánh, cành cây"
        },
        {
            "kanji": "駅員",
            "hiragana": "えきいん",
            "nom": "DỊCH VIÊN",
            "meaning": "Nhân viên nhà ga"
        },
        {
            "kanji": "この辺",
            "hiragana": "このへん",
            "nom": "BIÊN",
            "meaning": "Chỗ này, quanh đây"
        },
        {
            "kanji": "～辺",
            "hiragana": "～へん",
            "nom": "BIÊN",
            "meaning": "Chỗ ~"
        },
        {
            "kanji": "お先にどうぞ",
            "hiragana": "おさきにどうぞ",
            "nom": "TIÊN",
            "meaning": "Xin mời đi trước"
        },
        {
            "kanji": "今の電車",
            "hiragana": "いまのでんしゃ",
            "nom": "KIM ĐIỆN XA",
            "meaning": "Chuyến tàu vừa mới khỏi"
        },
        {
            "kanji": "忘れ物",
            "hiragana": "わすれもの",
            "nom": "VONG VẬT",
            "meaning": "Đồ bị bỏ quên"
        },
        {
            "kanji": "～側",
            "hiragana": "～がわ",
            "nom": "TRẮC",
            "meaning": "Phía ~"
        },
        {
            "kanji": "覚えていません",
            "hiragana": "おぼえていません",
            "nom": "GIÁC",
            "meaning": "Không nhớ"
        },
        {
            "kanji": "網棚",
            "hiragana": "あみだな",
            "nom": "VÕNG BẰNG",
            "meaning": "Kệ hành lý trên tàu,xe"
        },
        {
            "kanji": "確か",
            "hiragana": "たしか",
            "nom": "XÁC",
            "meaning": "Nếu tôi không lầm thì"
        },
        {
            "kanji": "地震",
            "hiragana": "じしん",
            "nom": "ĐỊA CHẤN",
            "meaning": "Động đất"
        },
        {
            "kanji": "壁",
            "hiragana": "かべ",
            "nom": "BÍCH",
            "meaning": "Tường, bức tường"
        },
        {
            "kanji": "針",
            "hiragana": "はり",
            "nom": "CHÂM",
            "meaning": "Cây kim"
        },
        {
            "kanji": "指す",
            "hiragana": "さす",
            "nom": "CHỈ",
            "meaning": "Chỉ, chỉ vào"
        },
        {
            "kanji": "駅前",
            "hiragana": "えきまえ",
            "nom": "DỊCH TIỀN",
            "meaning": "Trước nhà ga"
        },
        {
            "kanji": "倒れる",
            "hiragana": "たおれる",
            "nom": "ĐẢO",
            "meaning": ", (bị) ngã, đổ"
        },
        {
            "kanji": "西",
            "hiragana": "にし",
            "nom": "TÂY",
            "meaning": "Phía Tây"
        },
        {
            "kanji": "倒す",
            "hiragana": "たおす",
            "nom": "ĐẢO",
            "meaning": "Làm đổ, ngã"
        },
        {
            "kanji": "鍵がかかる",
            "hiragana": "かぎがかかる",
            "nom": "KIỆN",
            "meaning": "Cửa (bị) khóa"
        },
        {
            "kanji": "鍵をかける",
            "hiragana": "かぎをかける",
            "nom": "KIỆN",
            "meaning": "Khóa cửa"
        },
        {
            "kanji": "落ちる",
            "hiragana": "おちる",
            "nom": "LẠC",
            "meaning": ",(bị) rơi, rớt"
        },
        {
            "kanji": "汚す",
            "hiragana": "よごす",
            "nom": "Ô",
            "meaning": "Làm dơ, làm cho bẩn"
        },
        {
            "kanji": "付ける",
            "hiragana": "つける",
            "nom": "PHÓ",
            "meaning": "Đính,vào"
        },
        {
            "kanji": "外す",
            "hiragana": "はずす",
            "nom": "NGOẠI",
            "meaning": "Tháo,ra"
        },
        {
            "kanji": "止める",
            "hiragana": "とめる",
            "nom": "CHỈ",
            "meaning": "Dừng (xe,) lại"
        },
        {
            "kanji": "込める",
            "hiragana": "こめる",
            "nom": "NHẬP",
            "meaning": "Nhét,vào, dồn,vào"
        },
        {
            "kanji": "壊す",
            "hiragana": "こわす",
            "nom": "HOẠI",
            "meaning": "Phá cho hư, hỏng"
        },
        {
            "kanji": "割る",
            "hiragana": "わる",
            "nom": "CÁT",
            "meaning": "Cắt, chia, đập vỡ"
        },
        {
            "kanji": "折る",
            "hiragana": "おる",
            "nom": "CHIẾT",
            "meaning": "Bẻ gãy, làm gãy"
        },
        {
            "kanji": "破る",
            "hiragana": "やぶる",
            "nom": "PHÁ",
            "meaning": "Xé, làm rách"
        },
        {
            "kanji": "開ける",
            "hiragana": "あける",
            "nom": "KHAI",
            "meaning": "Mở ( cửa,)"
        },
        {
            "kanji": "点ける",
            "hiragana": "つける",
            "nom": "ĐIỂM",
            "meaning": "Bật ( đèn,)"
        },
        {
            "kanji": "閉める",
            "hiragana": "しめる",
            "nom": "BẾ",
            "meaning": "Đóng ( cửa,)"
        },
        {
            "kanji": "消す",
            "hiragana": "けす",
            "nom": "TIÊU",
            "meaning": "Tắt ( đèn, lửa,)"
        },
        {
            "kanji": "空ける",
            "hiragana": "あける",
            "nom": "KHÔNG",
            "meaning": "Đổ,ra, làm cho rỗng"
        }
    ],
    "30": [
        {
            "kanji": "貼る",
            "hiragana": "はる",
            "nom": "THIẾP",
            "meaning": "Dán vào"
        },
        {
            "kanji": "掛ける",
            "hiragana": "かける",
            "nom": "QUẢI",
            "meaning": "Treo, móc"
        },
        {
            "kanji": "飾る",
            "hiragana": "かざる",
            "nom": "SỨC",
            "meaning": "Trang trí"
        },
        {
            "kanji": "並べる",
            "hiragana": "ならべる",
            "nom": "TỊNH",
            "meaning": "Xếp, xếp theo hàng theo lối"
        },
        {
            "kanji": "植える",
            "hiragana": "うえる",
            "nom": "THỰC",
            "meaning": "Trồng (cây), gieo (hạt)"
        },
        {
            "kanji": "木を植える",
            "hiragana": "きをうえる",
            "nom": "MỘC THỰC",
            "meaning": "Trồng cây"
        },
        {
            "kanji": "戻す",
            "hiragana": "もどす",
            "nom": "LỆ",
            "meaning": "Để lại chỗ cũ, trả lại chỗ cũ"
        },
        {
            "kanji": "片付ける",
            "hiragana": "かたづける",
            "nom": "PHIẾN PHÓ",
            "meaning": "Dọn dẹp cho gọn, sắp xếp lại"
        },
        {
            "kanji": "決める",
            "hiragana": "きめる",
            "nom": "QUYẾT",
            "meaning": "Quyết định"
        },
        {
            "kanji": "知らせる",
            "hiragana": "しらせる",
            "nom": "TRI",
            "meaning": "Thông báo"
        },
        {
            "kanji": "相談する",
            "hiragana": "そうだんする",
            "nom": "TƯƠNG ĐÀM",
            "meaning": "Bàn bạc, trao đổi, thảo luận"
        },
        {
            "kanji": "予習する",
            "hiragana": "よしゅうする",
            "nom": "DỰ TẬP",
            "meaning": "Soạn bài, chuẩn bị bài, chuẩn"
        },
        {
            "kanji": "復習する",
            "hiragana": "ふくしゅうする",
            "nom": "PHỤC TẬP",
            "meaning": "Ôn tập, ôn bài cũ"
        },
        {
            "kanji": "お子さん",
            "hiragana": "おこさん",
            "nom": "TỬ",
            "meaning": "Con của người khác"
        },
        {
            "kanji": "授業",
            "hiragana": "じゅぎょう",
            "nom": "THỤ NGHIỆP",
            "meaning": "Giờ dạy, giờ học"
        },
        {
            "kanji": "講義",
            "hiragana": "こうぎ",
            "nom": "GIẢNG NGHĨA",
            "meaning": "Giờ giảng, bài giảng"
        },
        {
            "kanji": "予定",
            "hiragana": "よてい",
            "nom": "DỰ ĐỊNH",
            "meaning": "Dự kiến, dự trù"
        },
        {
            "kanji": "お知らせ",
            "hiragana": "おしらせ",
            "nom": "TRI",
            "meaning": "Thông báo"
        },
        {
            "kanji": "案内書",
            "hiragana": "あんないしょ",
            "nom": "ÁN NỘI THƯ",
            "meaning": "Sách hướng dẫn, tài liệu"
        },
        {
            "kanji": "ゴミ箱",
            "hiragana": "ゴミばこ",
            "nom": "TƯƠNG",
            "meaning": "Thùng rác"
        },
        {
            "kanji": "人形",
            "hiragana": "にんぎょう",
            "nom": "NHÂN HÌNH",
            "meaning": "Búp bê"
        },
        {
            "kanji": "鏡",
            "hiragana": "かがみ",
            "nom": "KÍNH",
            "meaning": "Gương soi"
        },
        {
            "kanji": "引き出し",
            "hiragana": "ひきだし",
            "nom": "DẪN XUẤT",
            "meaning": "Ngăn kéo"
        },
        {
            "kanji": "玄関",
            "hiragana": "げんかん",
            "nom": "HUYỀN QUAN",
            "meaning": "Sảnh, tiền sảnh, cửa trước"
        },
        {
            "kanji": "廊下",
            "hiragana": "ろうか",
            "nom": "LANG HẠ",
            "meaning": "Hành lang"
        },
        {
            "kanji": "池",
            "hiragana": "いけ",
            "nom": "TRÌ",
            "meaning": "Cái ao, hồ nước"
        },
        {
            "kanji": "交番",
            "hiragana": "こうばん",
            "nom": "GIAO PHIÊN",
            "meaning": "Chốt cảnh sát, đồn cảnh sát"
        },
        {
            "kanji": "元の所",
            "hiragana": "もとのところ",
            "nom": "NGUYÊN SỞ",
            "meaning": "Chỗ cũ, chỗ ban đầu"
        },
        {
            "kanji": "周り",
            "hiragana": "まわり",
            "nom": "CHU",
            "meaning": "Xung quanh"
        },
        {
            "kanji": "真ん中",
            "hiragana": "まんなか",
            "nom": "CHÂN TRUNG",
            "meaning": "Chính giữa"
        },
        {
            "kanji": "隅",
            "hiragana": "すみ",
            "nom": "NGUNG",
            "meaning": "Góc ( nhà, phố,)"
        },
        {
            "kanji": "予定表",
            "hiragana": "よていひょう",
            "nom": "DỰ ĐỊNH BIỂU",
            "meaning": "Bảng kế hoạch"
        },
        {
            "kanji": "ご苦労様",
            "hiragana": "ごくろうさま",
            "nom": "KHỔ LAO DẠNG",
            "meaning": "Câu chào hỏi của người cấp"
        },
        {
            "kanji": "希望",
            "hiragana": "khi kết thúc công việc",
            "nom": "きぼう",
            "meaning": "HI VỌNG"
        },
        {
            "kanji": "何かご希望がありますか",
            "hiragana": "なにかごきぼうがありますか",
            "nom": "HÀ HI VỌNG",
            "meaning": "Có nguyện vọng gì không"
        },
        {
            "kanji": "丸い",
            "hiragana": "まるい",
            "nom": "HOÀN",
            "meaning": "Tròn, tròn trịac"
        },
        {
            "kanji": "月",
            "hiragana": "つき",
            "nom": "NGUYỆT",
            "meaning": "Trăng, mặt trăng"
        },
        {
            "kanji": "ある晩",
            "hiragana": "あるばん",
            "nom": "VÃN",
            "meaning": "Một đêm nọ, tối nọ"
        },
        {
            "kanji": "目が覚める",
            "hiragana": "めがさめる",
            "nom": "MỤC GIÁC",
            "meaning": "Tỉnh giấc, thức giấc, mở mắt"
        },
        {
            "kanji": "嫌",
            "hiragana": "いや",
            "nom": "HIỀM",
            "meaning": "Bực mình, không thích, khó"
        },
        {
            "kanji": "予定",
            "hiragana": "よてい",
            "nom": "DỰ ĐỊNH",
            "meaning": "Dự kiến, dự trù"
        },
        {
            "kanji": "戻る",
            "hiragana": "もどる",
            "nom": "LỆ",
            "meaning": "Quay trở lại, quay về"
        }
    ],
    "31": [
        {
            "kanji": "始まる",
            "hiragana": "はじまる",
            "nom": "THỦY",
            "meaning": "Được bắt đầu"
        },
        {
            "kanji": "式が始まる",
            "hiragana": "しきがはじまる",
            "nom": "THỨC THỦY",
            "meaning": "Buổi lễ được bắt đầu"
        },
        {
            "kanji": "続ける",
            "hiragana": "つづける",
            "nom": "TỤC",
            "meaning": "Tiếp tục"
        },
        {
            "kanji": "見つける",
            "hiragana": "みつける",
            "nom": "KIẾN",
            "meaning": "Tìm thấy, tìm kiếm, bắt gặp"
        },
        {
            "kanji": "受ける",
            "hiragana": "うける",
            "nom": "THỤ",
            "meaning": "Dự ( thi,)"
        },
        {
            "kanji": "試験を受ける",
            "hiragana": "しけんをうける",
            "nom": "THÍ NGHIỆM THỤ",
            "meaning": "Dự thi, kiểm tra"
        },
        {
            "kanji": "入学する",
            "hiragana": "にゅうがくする",
            "nom": "NHẬP HỌC",
            "meaning": "Nhập học, vào ( đại học )"
        },
        {
            "kanji": "大学に入学する",
            "hiragana": "だいがくににゅうがくする",
            "nom": "ĐẠI HỌC NHẬP HỌC",
            "meaning": "Vào Đại học"
        },
        {
            "kanji": "出席する",
            "hiragana": "しゅっせきする",
            "nom": "XUẤT TỊCH",
            "meaning": "Tham dự, có mặt"
        },
        {
            "kanji": "会議に出席する",
            "hiragana": "かいぎにしゅっせきする",
            "nom": "HỘI NGHỊ XUẤT TỊCH",
            "meaning": "Tham dự cuộc họp"
        },
        {
            "kanji": "休憩する",
            "hiragana": "きゅうけいする",
            "nom": "HƯU KHẾ",
            "meaning": "Giải lao, nghỉ giải lao"
        },
        {
            "kanji": "連休",
            "hiragana": "れんきゅう",
            "nom": "LIÊN HƯU",
            "meaning": "Kỳ nghỉ dài ngày"
        },
        {
            "kanji": "作文",
            "hiragana": "さくぶん",
            "nom": "TÁC VĂN",
            "meaning": "Bài văn, đoạn văn"
        },
        {
            "kanji": "展覧会",
            "hiragana": "てんらんかい",
            "nom": "TRIỄN LÃM HỘI",
            "meaning": "Buổi triển lãm"
        },
        {
            "kanji": "結婚式",
            "hiragana": "けっこんしき",
            "nom": "KẾT HÔN THỨC",
            "meaning": "Đám cưới, lễ thành hôn"
        },
        {
            "kanji": "お葬式",
            "hiragana": "おそうしき",
            "nom": "TÁNG THỨC",
            "meaning": "Đám tang, lễ tang"
        },
        {
            "kanji": "～式",
            "hiragana": "～しき",
            "nom": "THỨC",
            "meaning": "Lễ"
        },
        {
            "kanji": "本社",
            "hiragana": "ほんしゃ",
            "nom": "BẢN XÃ",
            "meaning": "Trụ sở chính, công ty mẹ"
        },
        {
            "kanji": "支店",
            "hiragana": "してん",
            "nom": "CHI ĐIẾM",
            "meaning": "Chi nhánh, công ty con"
        },
        {
            "kanji": "教会",
            "hiragana": "きょうかい",
            "nom": "GIÁO HỘI",
            "meaning": "Nhà thờ"
        },
        {
            "kanji": "大学院",
            "hiragana": "だいがくいん",
            "nom": "ĐẠI HỌC VIỆN",
            "meaning": "Cao học"
        },
        {
            "kanji": "動物園",
            "hiragana": "どうぶつえん",
            "nom": "ĐỘNG VẬT VIÊN",
            "meaning": "Sở thú, thảo cầm viên"
        },
        {
            "kanji": "温泉",
            "hiragana": "おんせん",
            "nom": "ÔN TUYỀN",
            "meaning": "Suối nước nóng"
        },
        {
            "kanji": "お客さん",
            "hiragana": "おきゃくさん",
            "nom": "KHÁCH",
            "meaning": "Khách, khách hàng, khách"
        },
        {
            "kanji": "誰が",
            "hiragana": "だれが",
            "nom": "THÙY",
            "meaning": "Ái đó"
        },
        {
            "kanji": "～の方",
            "hiragana": "～のほう",
            "nom": "PHƯƠNG",
            "meaning": "Phía, đằng"
        },
        {
            "kanji": "上野公園",
            "hiragana": "うえのこうえん",
            "nom": "THƯỢNG DÃ CÔNG VIÊN",
            "meaning": "Công viên UENO"
        },
        {
            "kanji": "村",
            "hiragana": "むら",
            "nom": "THÔN",
            "meaning": "Làng xã, thôn xóm, ngôi làng"
        },
        {
            "kanji": "閉じる",
            "hiragana": "とじる",
            "nom": "BẾ",
            "meaning": "Nhắm ( mắt ,) lại, đóng"
        },
        {
            "kanji": "集まる",
            "hiragana": "あつまる",
            "nom": "TẬP",
            "meaning": "Tập trung lại"
        },
        {
            "kanji": "自然",
            "hiragana": "しぜん",
            "nom": "TỰ NHIÊN",
            "meaning": "Tự nhiên"
        },
        {
            "kanji": "気がつく",
            "hiragana": "きがつく",
            "nom": "KHÍ",
            "meaning": "Nhận ra, nhớ ra"
        },
        {
            "kanji": "美しい",
            "hiragana": "うつくしい",
            "nom": "MỸ",
            "meaning": "Xinh đẹp, duyên dáng"
        },
        {
            "kanji": "始める",
            "hiragana": "はじめる",
            "nom": "THỦY",
            "meaning": "Bắt đầu"
        },
        {
            "kanji": "続く",
            "hiragana": "つづく",
            "nom": "TỤC",
            "meaning": "Được tiếp tục"
        },
        {
            "kanji": "集める",
            "hiragana": "あつめる",
            "nom": "TẬP",
            "meaning": "Tập hợp, sưu tầm"
        },
        {
            "kanji": "残る",
            "hiragana": "のこる",
            "nom": "TÀN",
            "meaning": "Còn thừa, bị dư"
        },
        {
            "kanji": "残す",
            "hiragana": "のこす",
            "nom": "TÀN",
            "meaning": "Chừa lại, để lại"
        }
    ],
    "32": [
        {
            "kanji": "運動する",
            "hiragana": "うんどうする",
            "nom": "VẬN ĐỘNG",
            "meaning": "Vận động"
        },
        {
            "kanji": "成功する",
            "hiragana": "せいこうする",
            "nom": "THÀNH CÔNG",
            "meaning": "Thành công"
        },
        {
            "kanji": "失敗する",
            "hiragana": "しっぱいする",
            "nom": "THẤT BẠI",
            "meaning": "Thất bại"
        },
        {
            "kanji": "試験に失敗する",
            "hiragana": "しけんにしっぱいする",
            "nom": "KIỂM TRA THẤT BẠI",
            "meaning": "Thi rớt"
        },
        {
            "kanji": "合格する",
            "hiragana": "ごうかくする",
            "nom": "HỢP CÁCH",
            "meaning": "Đậu ( thi cử, phỏng vấn )"
        },
        {
            "kanji": "試験に合格する",
            "hiragana": "しけんにごうかくする",
            "nom": "KIỂM TRA HỢP CÁCH",
            "meaning": "Thi đậu"
        },
        {
            "kanji": "戻る",
            "hiragana": "もどる",
            "nom": "LỆ",
            "meaning": "Quay lại, quay trở lại"
        },
        {
            "kanji": "止む",
            "hiragana": "やむ",
            "nom": "CHỈ",
            "meaning": "Tạnh"
        },
        {
            "kanji": "雨が止む",
            "hiragana": "あめがやむ",
            "nom": "VŨ CHỈ",
            "meaning": "Tạnh mưa"
        },
        {
            "kanji": "晴れる",
            "hiragana": "はれる",
            "nom": "TÌNH",
            "meaning": "Trời quang đãng, trời nắng"
        },
        {
            "kanji": "曇る",
            "hiragana": "くもる",
            "nom": "ĐÀM",
            "meaning": "Trời âm u, trời có mây"
        },
        {
            "kanji": "吹く",
            "hiragana": "ふく",
            "nom": "XÚY",
            "meaning": "Thổi"
        },
        {
            "kanji": "風が吹く",
            "hiragana": "かぜがふく",
            "nom": "PHONG XÚY",
            "meaning": "Gió thổi"
        },
        {
            "kanji": "治る",
            "hiragana": "なおる",
            "nom": "TRỊ",
            "meaning": "Khỏi, Hết ( bệnh )"
        },
        {
            "kanji": "病気が治る",
            "hiragana": "びょうきがなる",
            "nom": "BỆNH KHÍ TRỊ",
            "meaning": "Khỏi bệnh, hết bệnh"
        },
        {
            "kanji": "直る",
            "hiragana": "なおる",
            "nom": "TRỰC",
            "meaning": "Được sửa chữa"
        },
        {
            "kanji": "故障が直る",
            "hiragana": "こしょうがなおる",
            "nom": "CỐ CHƯỚNG TRỰC",
            "meaning": "Trục trặc được sửa chữa"
        },
        {
            "kanji": "続く",
            "hiragana": "つづく",
            "nom": "TỤC",
            "meaning": "Tiếp tục, kéo dài"
        },
        {
            "kanji": "熱が続く",
            "hiragana": "ねつがつづく",
            "nom": "NHIỆT TỤC",
            "meaning": "Sốt kéo dài"
        },
        {
            "kanji": "風邪を引く",
            "hiragana": "かぜをひく",
            "nom": "PHONG TÀ DẪN",
            "meaning": "Bị cảm, bị trúng gió"
        },
        {
            "kanji": "冷やす",
            "hiragana": "ひやす",
            "nom": "LÃNH",
            "meaning": "Ướp lạnh, làm lạnh"
        },
        {
            "kanji": "心配",
            "hiragana": "しんぱい",
            "nom": "TÂM PHỐI",
            "meaning": "Lo lắng"
        },
        {
            "kanji": "十分",
            "hiragana": "じゅうぶん",
            "nom": "THẬP PHẦN",
            "meaning": "Nhiều, đủ, dư"
        },
        {
            "kanji": "火傷",
            "hiragana": "やけど",
            "nom": "HỎA THƯƠNG",
            "meaning": "Vết thương, phỏng"
        },
        {
            "kanji": "怪我",
            "hiragana": "けが",
            "nom": "QUÁI NGÃ",
            "meaning": "Vết thương"
        },
        {
            "kanji": "咳が出る",
            "hiragana": "せきがでる",
            "nom": "KHÁI XUẤT",
            "meaning": "Bị ho"
        },
        {
            "kanji": "空",
            "hiragana": "そら",
            "nom": "KHÔNG",
            "meaning": "Bầu trời"
        },
        {
            "kanji": "太陽",
            "hiragana": "たいよう",
            "nom": "THÁI DƯƠNG",
            "meaning": "Mặt trời"
        },
        {
            "kanji": "星",
            "hiragana": "ほし",
            "nom": "TINH",
            "meaning": "Ngôi sao"
        },
        {
            "kanji": "月",
            "hiragana": "つき",
            "nom": "NGUYỆT",
            "meaning": "Mặt trăng"
        },
        {
            "kanji": "風",
            "hiragana": "かぜ",
            "nom": "PHONG",
            "meaning": "Gió"
        },
        {
            "kanji": "北",
            "hiragana": "きた",
            "nom": "BẮC",
            "meaning": "Phía Bắc, Hướng Bắc"
        },
        {
            "kanji": "南",
            "hiragana": "みなみ",
            "nom": "NAM",
            "meaning": "Phía Nam, Hướng Nam"
        },
        {
            "kanji": "西",
            "hiragana": "にし",
            "nom": "TÂY",
            "meaning": "Phía Tây, hướng Tây"
        },
        {
            "kanji": "東",
            "hiragana": "ひがし",
            "nom": "ĐÔNG",
            "meaning": "Phía Đông, hướng Đông"
        },
        {
            "kanji": "水道",
            "hiragana": "すいどう",
            "nom": "THỦY ĐẠO",
            "meaning": "Đường ống nước"
        },
        {
            "kanji": "今夜",
            "hiragana": "こんや",
            "nom": "KIM DẠ",
            "meaning": "Đêm nay, Tối nay"
        },
        {
            "kanji": "夕方",
            "hiragana": "ゆうがた",
            "nom": "TỊCH PHƯƠNG",
            "meaning": "Hoàng hôn, xế chiều"
        },
        {
            "kanji": "前から",
            "hiragana": "まえから",
            "nom": "TIỀN",
            "meaning": "Từ trước đến giờ"
        },
        {
            "kanji": "遅く",
            "hiragana": "おそく",
            "nom": "TRÌ",
            "meaning": "Trễ, muộn, chậm trễ"
        },
        {
            "kanji": "胃",
            "hiragana": "い",
            "nom": "VỊ",
            "meaning": "Bao tử"
        },
        {
            "kanji": "働きすぎ",
            "hiragana": "はたらきすぎ",
            "nom": "ĐỘNG",
            "meaning": "Làm việc quá sức, quá nhiều"
        },
        {
            "kanji": "無理をする",
            "hiragana": "さぎょうば",
            "nom": "VÔ LÝ",
            "meaning": "Làm việc quá sức"
        },
        {
            "kanji": "星占い",
            "hiragana": "ほしうらない",
            "nom": "TINH CHIÊM",
            "meaning": "Bói sao"
        },
        {
            "kanji": "宝くじ",
            "hiragana": "たからくじ",
            "nom": "BẢO",
            "meaning": "Vé số"
        },
        {
            "kanji": "当たる",
            "hiragana": "あたる",
            "nom": "ĐƯƠNG",
            "meaning": "Trúng"
        },
        {
            "kanji": "健康",
            "hiragana": "けんこう",
            "nom": "KIỆN KHANG",
            "meaning": "Sức khỏe"
        },
        {
            "kanji": "恋愛",
            "hiragana": "れんあい",
            "nom": "LUYẾN ÁI",
            "meaning": "Tình yêu"
        },
        {
            "kanji": "お金持ち",
            "hiragana": "おかねもち",
            "nom": "KIM TRÌ",
            "meaning": "Giàu có"
        }
    ],
    "33": [
        {
            "kanji": "逃げる",
            "hiragana": "にげる",
            "nom": "ĐÀO",
            "meaning": "Chạy trốn, chạy khỏi"
        },
        {
            "kanji": "騒る",
            "hiragana": "さわる",
            "nom": "XÚC",
            "meaning": "Sờ, chạm"
        },
        {
            "kanji": "諦める",
            "hiragana": "あきらめる",
            "nom": "ĐẾ",
            "meaning": "Từ bỏ, bỏ cuộc, chào thua"
        },
        {
            "kanji": "投げる",
            "hiragana": "なげる",
            "nom": "ĐẦU",
            "meaning": "Ném"
        },
        {
            "kanji": "守る",
            "hiragana": "まもる",
            "nom": "THỦ",
            "meaning": "Bảo vệ, giữ gìn, tuân thủ"
        },
        {
            "kanji": "上げる",
            "hiragana": "あげる",
            "nom": "THƯỢNG",
            "meaning": "Tăng lên, nâng lên"
        },
        {
            "kanji": "下げる",
            "hiragana": "さげる",
            "nom": "HẠ",
            "meaning": "Giảm xuống, hạ xuống"
        },
        {
            "kanji": "伝える",
            "hiragana": "つたえる",
            "nom": "TRUYỀN",
            "meaning": "Nhắn lại, chuyển lời, truyền"
        },
        {
            "kanji": "注意する",
            "hiragana": "ちゅういする",
            "nom": "CHÚ Ý",
            "meaning": "Chú ý, Nhắc nhở"
        },
        {
            "kanji": "車に注意する",
            "hiragana": "くるまにちゅういする",
            "nom": "XA CHÚ Ý",
            "meaning": "Chú ý xe cộ"
        },
        {
            "kanji": "外す",
            "hiragana": "はずす",
            "nom": "NGOẠI",
            "meaning": "Rời khỏi"
        },
        {
            "kanji": "席を外す",
            "hiragana": "せきをはずす",
            "nom": "TỊCH NGOẠI",
            "meaning": "Rời khỏi chỗ ngồi, Đi ra"
        },
        {
            "kanji": "洗濯機",
            "hiragana": "せんたくき",
            "nom": "TẨY TRẠC CƠ",
            "meaning": "Máy giặt"
        },
        {
            "kanji": "～機",
            "hiragana": "～き",
            "nom": "CƠ",
            "meaning": "Máy~"
        },
        {
            "kanji": "規則",
            "hiragana": "きそく",
            "nom": "QUY TẮC",
            "meaning": "Quy tắc"
        },
        {
            "kanji": "使用禁止",
            "hiragana": "しようきんし",
            "nom": "SỬ DỤNG CẤM CHỈ",
            "meaning": "Cấm sử dụng"
        },
        {
            "kanji": "立ち入り禁止",
            "hiragana": "たちいりきんし",
            "nom": "LẬP NHẬP CẤM CHỈ",
            "meaning": "Không phận sự miễn vào"
        },
        {
            "kanji": "入口",
            "hiragana": "いりぐち",
            "nom": "NHẬP KHẨU",
            "meaning": "Lối vào, cửa vào"
        },
        {
            "kanji": "出口",
            "hiragana": "でぐち",
            "nom": "XUẤT KHẨU",
            "meaning": "Lối ra, cửa ra"
        },
        {
            "kanji": "非常口",
            "hiragana": "ひじょうぐち",
            "nom": "PHI THƯỜNG KHẨU",
            "meaning": "Lối thoát hiểm, Cửa thoát"
        },
        {
            "kanji": "無料",
            "hiragana": "むりょう",
            "nom": "VÔ LIỆU",
            "meaning": "Miễn phí"
        },
        {
            "kanji": "本日休業",
            "hiragana": "ほんじつきゅうぎょう",
            "nom": "BẢN NHẬT HƯU NGIỆP",
            "meaning": "Hôm nay là ngày nghỉ làm"
        },
        {
            "kanji": "営業中",
            "hiragana": "えいぎょうちゅう",
            "nom": "DOANH NGHIỆP TRUNG",
            "meaning": "Đang mở cửa, đang bán hàng"
        },
        {
            "kanji": "～中",
            "hiragana": "～ちゅう",
            "nom": "TRUNG",
            "meaning": "Đang ~, Trong lúc ~"
        },
        {
            "kanji": "どういう意味ですか",
            "hiragana": "どういういみですか",
            "nom": "Ý VỊ",
            "meaning": "Nghĩa là gì"
        },
        {
            "kanji": "駐車違反",
            "hiragana": "ちゅうしゃいはん",
            "nom": "TRÚ XA VI PHẢN",
            "meaning": "Đậu xe sai chỗ"
        },
        {
            "kanji": "～以内",
            "hiragana": "～いない",
            "nom": "Ý NỘI",
            "meaning": "Trong vòng ~, Trong phạm vi"
        },
        {
            "kanji": "警察",
            "hiragana": "けいさつ",
            "nom": "CẢNH SÁT",
            "meaning": "Cảnh sát"
        },
        {
            "kanji": "罰金",
            "hiragana": "ばっきん",
            "nom": "PHẠT KIM",
            "meaning": "Tiền phạt"
        },
        {
            "kanji": "電報",
            "hiragana": "でんぽう",
            "nom": "ĐIỆN BÁO",
            "meaning": "Điện báo, điện tín"
        },
        {
            "kanji": "急用",
            "hiragana": "きゅうよう",
            "nom": "CẤP DỤNG",
            "meaning": "Việc gấp, việc khẩn cấp"
        },
        {
            "kanji": "打つ",
            "hiragana": "うつ",
            "nom": "ĐẢ",
            "meaning": "Đánh"
        },
        {
            "kanji": "電報を打つ",
            "hiragana": "でんぽうをうつ",
            "nom": "ĐIỆN BÁO ĐẢ",
            "meaning": "Đánh điện báo"
        },
        {
            "kanji": "電報代",
            "hiragana": "でんぽうだい",
            "nom": "ĐIỆN THOẠI ĐÀI",
            "meaning": "Tiền điện thoại"
        },
        {
            "kanji": "危篤",
            "hiragana": "きとく",
            "nom": "NGUY ĐỐC",
            "meaning": "Hấp hối, cơn nguy kịch"
        },
        {
            "kanji": "重い病気",
            "hiragana": "おもいびょうき",
            "nom": "TRỌNG BỆNH KHÍ",
            "meaning": "Bệnh nặng"
        },
        {
            "kanji": "明日",
            "hiragana": "あす",
            "nom": "MINH NHẬT",
            "meaning": "Ngày mai"
        },
        {
            "kanji": "留守",
            "hiragana": "るす",
            "nom": "LƯU THỦ",
            "meaning": "Vắng nhà"
        },
        {
            "kanji": "留守番",
            "hiragana": "るすばん",
            "nom": "LƯU THỦ PHIÊN",
            "meaning": "Người coi nhà, trông nhà"
        },
        {
            "kanji": "お祝い",
            "hiragana": "おいわい",
            "nom": "CHÚC",
            "meaning": "Sự chúc mừng"
        },
        {
            "kanji": "亡くなる",
            "hiragana": "なくなる",
            "nom": "VONG",
            "meaning": "Mất, qua đời"
        },
        {
            "kanji": "利用する",
            "hiragana": "りようする",
            "nom": "LỢI DỤNG",
            "meaning": "Sử dụng"
        }
    ],
    "34": [
        {
            "kanji": "磨く",
            "hiragana": "みがく",
            "nom": "MA",
            "meaning": "Đánh, Chải ( răng )"
        },
        {
            "kanji": "歯を磨く",
            "hiragana": "はをみがく",
            "nom": "XỈ MA",
            "meaning": "Đánh răng, chải răng"
        },
        {
            "kanji": "組み立てる",
            "hiragana": "くみたてる",
            "nom": "TỔ LẬP",
            "meaning": "Lắp ráp"
        },
        {
            "kanji": "折る",
            "hiragana": "おる",
            "nom": "CHIẾT",
            "meaning": "Làm gãy, bẻ gãy"
        },
        {
            "kanji": "気がつく",
            "hiragana": "きがつく",
            "nom": "KHÍ",
            "meaning": "Nhận ra, nhớ ra"
        },
        {
            "kanji": "忘れ物に気がつく",
            "hiragana": "わすれものにきがつく",
            "nom": "VONG VẬT KHÍ",
            "meaning": "Nhớ ra đồ bỏ quên"
        },
        {
            "kanji": "醤油",
            "hiragana": "しょうゆ",
            "nom": "TƯƠNG DU",
            "meaning": "Nước tương"
        },
        {
            "kanji": "見つかる",
            "hiragana": "みつかる",
            "nom": "KIẾN",
            "meaning": "Tìm thấy"
        },
        {
            "kanji": "鍵が見つかる",
            "hiragana": "かぎがみつかる",
            "nom": "KIỆN KIẾN",
            "meaning": "Tìm thấy chìa khóa"
        },
        {
            "kanji": "質問",
            "hiragana": "しつもん",
            "nom": "CHẤT VẤN",
            "meaning": "Câu hỏi"
        },
        {
            "kanji": "細い",
            "hiragana": "ほそい",
            "nom": "TẾ",
            "meaning": "Ốm, gầy, thon"
        },
        {
            "kanji": "太い",
            "hiragana": "ふとい",
            "nom": "THÁI",
            "meaning": "Mập, béo"
        },
        {
            "kanji": "盆踊り",
            "hiragana": "ぼんおどり",
            "nom": "BỒN DŨNG",
            "meaning": "Điệu múa BON của Nhật"
        },
        {
            "kanji": "説明書",
            "hiragana": "せつめいしょ",
            "nom": "THUYẾT MINH THƯ",
            "meaning": "Sách hướng dẫn sử dụng kèm"
        },
        {
            "kanji": "家具",
            "hiragana": "かぐ",
            "nom": "GIA CỤ",
            "meaning": "Đồ dùng trong nhà"
        },
        {
            "kanji": "図",
            "hiragana": "ず",
            "nom": "ĐỒ",
            "meaning": "Hình vẽ minh họa"
        },
        {
            "kanji": "線",
            "hiragana": "せん",
            "nom": "TUYẾN",
            "meaning": "Đường kẻ, nét kẻ"
        },
        {
            "kanji": "矢印",
            "hiragana": "やじるし",
            "nom": "THỈ ẤN",
            "meaning": "Mũi tên, Hình mũi tên"
        },
        {
            "kanji": "黒",
            "hiragana": "くろ",
            "nom": "HẮC",
            "meaning": "Màu đen"
        },
        {
            "kanji": "白",
            "hiragana": "しろ",
            "nom": "BẠCH",
            "meaning": "Màu trắng"
        },
        {
            "kanji": "赤",
            "hiragana": "あか",
            "nom": "XÍCH",
            "meaning": "Màu đỏ"
        },
        {
            "kanji": "青",
            "hiragana": "あお",
            "nom": "THANH",
            "meaning": "Màu xanh"
        },
        {
            "kanji": "紺",
            "hiragana": "こん",
            "nom": "CÁM",
            "meaning": "Màu xanh đậm"
        },
        {
            "kanji": "黄色",
            "hiragana": "きいろ",
            "nom": "HOÀNG SẮC",
            "meaning": "Màu vàng"
        },
        {
            "kanji": "茶色",
            "hiragana": "ちゃいろ",
            "nom": "TRÀ SẮC",
            "meaning": "Màu nâu"
        },
        {
            "kanji": "夕べ",
            "hiragana": "ゆうべ",
            "nom": "TỊCH",
            "meaning": "Đêm qua, tối hôm qua"
        },
        {
            "kanji": "お茶をたてる",
            "hiragana": "おちゃをたてる",
            "nom": "TRÀ",
            "meaning": "Pha trà"
        },
        {
            "kanji": "載せる",
            "hiragana": "のせる",
            "nom": "TẢI",
            "meaning": "Đặt lên, chất lên"
        },
        {
            "kanji": "苦い",
            "hiragana": "にがい",
            "nom": "KHỔ",
            "meaning": "Đắng"
        },
        {
            "kanji": "材料",
            "hiragana": "ざいりょう",
            "nom": "TÀI LIỆU",
            "meaning": "Nguyên vật liệu"
        },
        {
            "kanji": "玉ねぎ",
            "hiragana": "たまねぎ",
            "nom": "NGỌC",
            "meaning": "Hành tây"
        },
        {
            "kanji": "調味料",
            "hiragana": "ちょうもりょう",
            "nom": "ĐIỀU VỊ LIỆU",
            "meaning": "Gia vị"
        },
        {
            "kanji": "鍋",
            "hiragana": "なべ",
            "nom": "OA",
            "meaning": "Cái nồi"
        },
        {
            "kanji": "火",
            "hiragana": "ひ",
            "nom": "HỎA",
            "meaning": "Lửa"
        },
        {
            "kanji": "火にかける",
            "hiragana": "ひにかける",
            "nom": "HỎA",
            "meaning": "Bắt lên bếp"
        },
        {
            "kanji": "煮る",
            "hiragana": "にる",
            "nom": "CHỬ",
            "meaning": "Hầm, ninh"
        },
        {
            "kanji": "煮える",
            "hiragana": "にえる",
            "nom": "CHỬ",
            "meaning": "Được hầm kỹ"
        }
    ],
    "35": [
        {
            "kanji": "咲く",
            "hiragana": "さく",
            "nom": "TIẾU",
            "meaning": "Nở"
        },
        {
            "kanji": "花が咲く",
            "hiragana": "はながさく",
            "nom": "HOA TIẾU",
            "meaning": "Hoa nở"
        },
        {
            "kanji": "変わる",
            "hiragana": "かわる",
            "nom": "BIẾN",
            "meaning": "( Bị ) thay đổi"
        },
        {
            "kanji": "色が変わる",
            "hiragana": "いろがかわる",
            "nom": "SẮC BIẾN",
            "meaning": "Màu sắc thay đổi"
        },
        {
            "kanji": "困る",
            "hiragana": "こまる",
            "nom": "KHỐN",
            "meaning": "Gặp khó khăn"
        },
        {
            "kanji": "付ける",
            "hiragana": "つける",
            "nom": "PHÓ",
            "meaning": "Khoanh, đánh dấu"
        },
        {
            "kanji": "丸を付ける",
            "hiragana": "まるをつける",
            "nom": "HOÀN PHÓ",
            "meaning": "Đánh dấu tròn, khoanh tròn"
        },
        {
            "kanji": "拾う",
            "hiragana": "ひろう",
            "nom": "THẬP",
            "meaning": "Nhặt, lượm"
        },
        {
            "kanji": "楽",
            "hiragana": "らく",
            "nom": "LẠC",
            "meaning": "Nhẹ nhàng, không vất vả"
        },
        {
            "kanji": "正しい",
            "hiragana": "ただしい",
            "nom": "CHÍNH",
            "meaning": "Đúng, chính xác"
        },
        {
            "kanji": "珍しい",
            "hiragana": "めずらしい",
            "nom": "TRÂN",
            "meaning": "Quý, hiếm"
        },
        {
            "kanji": "方",
            "hiragana": "かた",
            "nom": "PHƯƠNG",
            "meaning": "Ngài, ông"
        },
        {
            "kanji": "向こう",
            "hiragana": "むこう",
            "nom": "HƯỚNG",
            "meaning": "Bên kia, đối diện"
        },
        {
            "kanji": "島",
            "hiragana": "しま",
            "nom": "ĐẢO",
            "meaning": "Đảo, hòn đảo"
        },
        {
            "kanji": "村",
            "hiragana": "むら",
            "nom": "THÔN",
            "meaning": "Làng, ngôi làng"
        },
        {
            "kanji": "港",
            "hiragana": "みなと",
            "nom": "CẢNG",
            "meaning": "Cảng biển"
        },
        {
            "kanji": "近所",
            "hiragana": "きんじょ",
            "nom": "CẬN SỞ",
            "meaning": "Hàng xóm, láng giềng"
        },
        {
            "kanji": "屋上",
            "hiragana": "おくじょう",
            "nom": "ỐC THƯỢNG",
            "meaning": "Sân thượng"
        },
        {
            "kanji": "海外",
            "hiragana": "かいがい",
            "nom": "HẢI NGOẠI",
            "meaning": "Nước ngoài"
        },
        {
            "kanji": "山登り",
            "hiragana": "やまのぼり",
            "nom": "SƠN ĐĂNG",
            "meaning": "Việc leo núi"
        },
        {
            "kanji": "機会",
            "hiragana": "きかい",
            "nom": "CƠ HỘI",
            "meaning": "Cơ hội"
        },
        {
            "kanji": "許可",
            "hiragana": "きょか",
            "nom": "HỨA KHẢ",
            "meaning": "Sự cho phép"
        },
        {
            "kanji": "丸",
            "hiragana": "まる",
            "nom": "HOÀN",
            "meaning": "Hình tròn, dấu tròn"
        },
        {
            "kanji": "操作",
            "hiragana": "そうさ",
            "nom": "THAO TÁC",
            "meaning": "Thao tác, sự điều khiển, vận"
        },
        {
            "kanji": "方法",
            "hiragana": "ほうほう",
            "nom": "PHƯƠNG PHÁP",
            "meaning": "Phương pháp"
        },
        {
            "kanji": "設備",
            "hiragana": "せつび",
            "nom": "THIẾT BỊ",
            "meaning": "Trang thiết bị"
        },
        {
            "kanji": "紐",
            "hiragana": "ひも",
            "nom": "NỮU",
            "meaning": "Sợi dây"
        },
        {
            "kanji": "蓋",
            "hiragana": "ふた",
            "nom": "GAI",
            "meaning": "Cái nắp"
        },
        {
            "kanji": "葉",
            "hiragana": "は",
            "nom": "DIỆP",
            "meaning": "Lá cây"
        },
        {
            "kanji": "曲",
            "hiragana": "きょく",
            "nom": "KHÚC",
            "meaning": "Ca khúc, khúc nhạc"
        },
        {
            "kanji": "楽しみ",
            "hiragana": "たのしみ",
            "nom": "LẠC",
            "meaning": "Vui mừng, niềm vui"
        },
        {
            "kanji": "初めに",
            "hiragana": "はじめに",
            "nom": "SƠ",
            "meaning": "Trước tiên là, đầu tiên là"
        },
        {
            "kanji": "日光",
            "hiragana": "にっこう",
            "nom": "NHẬT QUANG",
            "meaning": "Tp Nikko thuộc tỉnh Tochigi"
        },
        {
            "kanji": "白馬",
            "hiragana": "はくば",
            "nom": "BẠCH MÃ",
            "meaning": "Hakuba thuộc tỉnh Nagano"
        },
        {
            "kanji": "夜行バス",
            "hiragana": "やこうバス",
            "nom": "DÃ HÀNH",
            "meaning": "Xe bus chạy về đêm"
        },
        {
            "kanji": "旅行会社",
            "hiragana": "りょこうがいしゃ",
            "nom": "LỮ HÀNH HỘI XÃ",
            "meaning": "Công ty du lịch"
        },
        {
            "kanji": "詳しい",
            "hiragana": "くわしい",
            "nom": "TƯỜNG",
            "meaning": "Tỉ mỉ, chi tiết, cụ thể"
        },
        {
            "kanji": "スキー場",
            "hiragana": "スキーじょう",
            "nom": "TRƯỜNG",
            "meaning": "Bãi trượt tuyết, sân trượt"
        },
        {
            "kanji": "諺",
            "hiragana": "ことわざ",
            "nom": "NGẠN",
            "meaning": "Tục ngữ, thành ngữ"
        },
        {
            "kanji": "仲良くする",
            "hiragana": "なかよくする",
            "nom": "TRỌNG LƯƠNG",
            "meaning": "Hòa thuận, quan hệ tốt với"
        },
        {
            "kanji": "必要",
            "hiragana": "ひつよう",
            "nom": "TẤT YẾU",
            "meaning": "Cần thiết"
        },
        {
            "kanji": "変える",
            "hiragana": "かえる",
            "nom": "BIẾN",
            "meaning": "( Làm ) thay đổi"
        },
        {
            "kanji": "楽しみにする",
            "hiragana": "たのしみにする",
            "nom": "LẠC",
            "meaning": "Mong chờ đến"
        },
        {
            "kanji": "箱根",
            "hiragana": "はこね",
            "nom": "TƯƠNG CĂN",
            "meaning": "Danh thắng Hakone ở tỉnh"
        },
        {
            "kanji": "夜行",
            "hiragana": "やこう",
            "nom": "DÃ HÀNH",
            "meaning": "Xe , tàu chạy về đêm"
        }
    ],
    "36": [
        {
            "kanji": "届く",
            "hiragana": "とどく",
            "nom": "GIỚI",
            "meaning": "Được giao tới, được chuyển"
        },
        {
            "kanji": "荷物が届く",
            "hiragana": "にもつがとどく",
            "nom": "HÀ VẬT GIỚI",
            "meaning": "Hành lý được giao tới"
        },
        {
            "kanji": "出る",
            "hiragana": "でる",
            "nom": "XUẤT",
            "meaning": "Tham gia, tham dự"
        },
        {
            "kanji": "試合に出る",
            "hiragana": "しあいにでる",
            "nom": "THÍ HỢP XUẤT",
            "meaning": "Tham gia trận đấu"
        },
        {
            "kanji": "打つ",
            "hiragana": "うつ",
            "nom": "ĐẢ",
            "meaning": "Đánh, gõ, đóng, đập"
        },
        {
            "kanji": "ワープロを打つ",
            "hiragana": "ワープロをうつ",
            "nom": "ĐẢ",
            "meaning": "Đánh máy đánh chữ"
        },
        {
            "kanji": "貯金する",
            "hiragana": "ちょきん",
            "nom": "TRỮ KIM",
            "meaning": "Tiết kiệm tiền"
        },
        {
            "kanji": "太る",
            "hiragana": "ふとる",
            "nom": "THÁI",
            "meaning": "Lên cân, mập lên, tăng cân"
        },
        {
            "kanji": "過ぎる",
            "hiragana": "すぎる",
            "nom": "QUÁ",
            "meaning": "Quá, hơn, vượt"
        },
        {
            "kanji": "～時を過ぎる",
            "hiragana": "～じをすぎる",
            "nom": "THỜI QUÁ",
            "meaning": "Quá,giờ"
        },
        {
            "kanji": "慣れる",
            "hiragana": "なれる",
            "nom": "QUÁN",
            "meaning": "Quen với, thích nghi với"
        },
        {
            "kanji": "習慣に慣れる",
            "hiragana": "しゅうかんになれる",
            "nom": "TẬP QUÁN QUÁN",
            "meaning": "Quen với phong tục"
        },
        {
            "kanji": "硬い",
            "hiragana": "かたい",
            "nom": "NGẠNH",
            "meaning": "Cứng, cứng nhắc"
        },
        {
            "kanji": "柔らかい",
            "hiragana": "やわらかい",
            "nom": "NHUYỄN",
            "meaning": "Mềm, nhảo, mềm mại, nhẹ"
        },
        {
            "kanji": "電子辞書",
            "hiragana": "でんしじしょ",
            "nom": "ĐIỆN TỬ TỪ THƯ",
            "meaning": "Kim từ điển"
        },
        {
            "kanji": "携帯電話",
            "hiragana": "けいたいでんわ",
            "nom": "HUỀ ĐỚI ĐIỆN THOẠI",
            "meaning": "Điện thoại di động"
        },
        {
            "kanji": "工場",
            "hiragana": "こうじょう",
            "nom": "CÔNG TRƯỜNG",
            "meaning": "Nhà máy"
        },
        {
            "kanji": "健康",
            "hiragana": "けんこう",
            "nom": "KIỆN KHANG",
            "meaning": "Sức khỏe"
        },
        {
            "kanji": "剣道",
            "hiragana": "けんどう",
            "nom": "KIẾM ĐẠO",
            "meaning": "Môn đấu kiếm"
        },
        {
            "kanji": "毎週",
            "hiragana": "まいしゅう",
            "nom": "MỖI CHU",
            "meaning": "Mỗi tuần, hàng tuần"
        },
        {
            "kanji": "毎月",
            "hiragana": "まいつき",
            "nom": "MỖI NGUYỆT",
            "meaning": "Mỗi tháng, hàng tháng"
        },
        {
            "kanji": "毎年",
            "hiragana": "まいとし",
            "nom": "MỖI NIÊN",
            "meaning": "Mỗi năm, hàng năm"
        },
        {
            "kanji": "必ず",
            "hiragana": "かならず",
            "nom": "TẤT",
            "meaning": "Nhất định, nhất quyết, nhất"
        },
        {
            "kanji": "絶対に",
            "hiragana": "ぜったいに",
            "nom": "TUYỆT ĐỐI",
            "meaning": "Tuyệt đối, tuyệt đối không"
        },
        {
            "kanji": "上手に",
            "hiragana": "じょうずに",
            "nom": "THƯỢNG THỦ",
            "meaning": "Một cách khéo léo, giỏi, khéo"
        },
        {
            "kanji": "この頃",
            "hiragana": "このごろ",
            "nom": "KHOẢNH",
            "meaning": "Dạo này, gần đây"
        },
        {
            "kanji": "その方～",
            "hiragana": "そのほうが～",
            "nom": "PHƯƠNG",
            "meaning": "Như vậy thì,hơn, như thế"
        },
        {
            "kanji": "水泳",
            "hiragana": "すいえい",
            "nom": "THỦY VỊNH",
            "meaning": "Môn bơi lội"
        },
        {
            "kanji": "乗り物",
            "hiragana": "のりもの",
            "nom": "THỪA VẬT",
            "meaning": "Phương tiện đi lại, phương"
        },
        {
            "kanji": "歴史",
            "hiragana": "れきし",
            "nom": "LỊCH SỬ",
            "meaning": "Lịch sử"
        },
        {
            "kanji": "世紀",
            "hiragana": "せいき",
            "nom": "THẾ KỶ",
            "meaning": "Thế kỷ"
        },
        {
            "kanji": "汽車",
            "hiragana": "きしゃ",
            "nom": "KHÍ XA",
            "meaning": "Tàu hỏa chạy bằng hơi nước"
        },
        {
            "kanji": "汽船",
            "hiragana": "きせん",
            "nom": "KHÍ THUYỀN",
            "meaning": "Thuyền chạy bằng hơi nước"
        },
        {
            "kanji": "運ぶ",
            "hiragana": "はこぶ",
            "nom": "VẬN",
            "meaning": "Chở, vận chuyển"
        },
        {
            "kanji": "安全",
            "hiragana": "あんぜん",
            "nom": "AN TOÀN",
            "meaning": "An toàn"
        },
        {
            "kanji": "届ける",
            "hiragana": "とどける",
            "nom": "GIỚI",
            "meaning": "Chuyển tới, giao tới, tới, đến"
        },
        {
            "kanji": "貯める",
            "hiragana": "ためる",
            "nom": "TRỮ",
            "meaning": "Dành dụm tiền"
        },
        {
            "kanji": "痩せる",
            "hiragana": "やせる",
            "nom": "TÍCH",
            "meaning": "Bị gầy, ốm đi, giảm cân"
        },
        {
            "kanji": "選ぶ",
            "hiragana": "えらぶ",
            "nom": "TUYỂN",
            "meaning": "Lựa, chọn, bầu cử"
        },
        {
            "kanji": "兄弟",
            "hiragana": "きょうだい",
            "nom": "HUYNH ĐỆ",
            "meaning": "Anh chị em"
        },
        {
            "kanji": "姉妹",
            "hiragana": "しまい",
            "nom": "TỶ MUỘI",
            "meaning": "Chị em gái"
        }
    ],
    "37": [
        {
            "kanji": "褒める",
            "hiragana": "ほめる",
            "nom": "BAO",
            "meaning": "Khen, khen ngợi"
        },
        {
            "kanji": "叱る",
            "hiragana": "しかる",
            "nom": "SẤT",
            "meaning": "La, mắng"
        },
        {
            "kanji": "誘う",
            "hiragana": "さそう",
            "nom": "DỤ",
            "meaning": "Mời, rủ, rủ rê"
        },
        {
            "kanji": "起こす",
            "hiragana": "おこす",
            "nom": "KHỞI",
            "meaning": "Gây ra, đánh thức dậy"
        },
        {
            "kanji": "招待する",
            "hiragana": "しょうたいする",
            "nom": "CHIÊU ĐÃI",
            "meaning": "Mời, chiêu đãi"
        },
        {
            "kanji": "頼む",
            "hiragana": "たのむ",
            "nom": "LẠI",
            "meaning": "Nhờ vả, nhờ cậy, yêu cầu"
        },
        {
            "kanji": "注意する",
            "hiragana": "ちゅういする",
            "nom": "CHÚ Ý",
            "meaning": "Chú ý"
        },
        {
            "kanji": "盗る",
            "hiragana": "とる",
            "nom": "ĐẠO",
            "meaning": "Ắn cắp, lấy trộm"
        },
        {
            "kanji": "踏む",
            "hiragana": "ふむ",
            "nom": "ĐẠP",
            "meaning": "Dẫm, đạp"
        },
        {
            "kanji": "壊す",
            "hiragana": "こわす",
            "nom": "HOẠI",
            "meaning": "Làm hư, làm hỏng, phá hỏng"
        },
        {
            "kanji": "汚す",
            "hiragana": "よごす",
            "nom": "Ô , Ố",
            "meaning": "Làm dơ, làm bẩn"
        },
        {
            "kanji": "行う",
            "hiragana": "おこなう",
            "nom": "HÀNH",
            "meaning": "Tổ chức, tiến hành"
        },
        {
            "kanji": "輸出する",
            "hiragana": "ゆしゅつする",
            "nom": "THÂU  XUẤT",
            "meaning": "Xuất khẩu"
        },
        {
            "kanji": "輸入する",
            "hiragana": "ゆにゅうする",
            "nom": "THÂU  NHẬP",
            "meaning": "Nhập khẩu"
        },
        {
            "kanji": "翻訳する",
            "hiragana": "ほんやくする",
            "nom": "PHIÊN DỊCH",
            "meaning": "Dịch thuật"
        },
        {
            "kanji": "発明する",
            "hiragana": "はつめいする",
            "nom": "PHÁT MINH",
            "meaning": "Sáng chế, phát minh"
        },
        {
            "kanji": "発見する",
            "hiragana": "はっけんする",
            "nom": "PHÁT HIỆN",
            "meaning": "Phát hiện, tìm ra"
        },
        {
            "kanji": "設計する",
            "hiragana": "せっけいする",
            "nom": "THIẾT KẾ",
            "meaning": "Thiết kế"
        },
        {
            "kanji": "米",
            "hiragana": "こめ",
            "nom": "MỄ",
            "meaning": "Lúa, gạo"
        },
        {
            "kanji": "麦",
            "hiragana": "むぎ",
            "nom": "MẠCH",
            "meaning": "Lúa mạch"
        },
        {
            "kanji": "石油",
            "hiragana": "せきゆ",
            "nom": "THẠCH DU",
            "meaning": "Dầu mỏ thô, dầu hỏ"
        },
        {
            "kanji": "原料",
            "hiragana": "げんりょう",
            "nom": "NGUYÊN LIỆU",
            "meaning": "Nguyên vật liệu"
        },
        {
            "kanji": "泥棒",
            "hiragana": "どろぼう",
            "nom": "NÊ BỔNG",
            "meaning": "Tên trộm, kẻ trộm"
        },
        {
            "kanji": "警官",
            "hiragana": "けいかん",
            "nom": "CẢNH QUAN",
            "meaning": "Cảnh sát"
        },
        {
            "kanji": "建築家",
            "hiragana": "けんちくか",
            "nom": "KIẾN TRÚC GIA",
            "meaning": "Kiến trúc sư"
        },
        {
            "kanji": "科学者",
            "hiragana": "かがくしゃ",
            "nom": "KHOA HỌC GIẢ",
            "meaning": "Nhà khoa học"
        },
        {
            "kanji": "漫画",
            "hiragana": "まんが",
            "nom": "MẠN , MAN HỌA",
            "meaning": "Truyện tranh"
        },
        {
            "kanji": "世界中",
            "hiragana": "せかいじゅう",
            "nom": "THẾ GIỚI TRUNG",
            "meaning": "Khắp thế giới"
        },
        {
            "kanji": "～中",
            "hiragana": "～じゅう",
            "nom": "TRUNG",
            "meaning": "Khắp, suốt"
        },
        {
            "kanji": "埋め立てる",
            "hiragana": "うめたてる",
            "nom": "MAI LẬP",
            "meaning": "San lấp ( ao, biển,), lấp đất"
        },
        {
            "kanji": "土地",
            "hiragana": "とち",
            "nom": "THỔ ĐỊA",
            "meaning": "Đất đai"
        },
        {
            "kanji": "騒音",
            "hiragana": "そうおん",
            "nom": "TAO ÂM",
            "meaning": "Tiếng ồn"
        },
        {
            "kanji": "豪華",
            "hiragana": "ごうか",
            "nom": "HÀO HOA",
            "meaning": "Xa hoa, sang trọng, hoành"
        },
        {
            "kanji": "彫刻",
            "hiragana": "ちょうこく",
            "nom": "ĐIÊU KHẮC",
            "meaning": "Điêu khắc, chạm trổ"
        },
        {
            "kanji": "眠る",
            "hiragana": "ねむる",
            "nom": "MIÊN",
            "meaning": "Buồn ngủ"
        },
        {
            "kanji": "彫る",
            "hiragana": "ほる",
            "nom": "ĐIÊU",
            "meaning": "Khắc, chạm trổ"
        },
        {
            "kanji": "仲間",
            "hiragana": "なかま",
            "nom": "TRỌNG GIAN",
            "meaning": "Cùng nhóm, cùng hội, cùng"
        },
        {
            "kanji": "一生懸命",
            "hiragana": "いっしょうけんめい",
            "nom": "NHẤT SINH HUYỀN MỆNH",
            "meaning": "Làm hết mình, chăm chỉ"
        },
        {
            "kanji": "アクセス",
            "hiragana": "Hệ thống giao thông, đường",
            "nom": "xá kết nối với sân bay, bến",
            "meaning": "cảng"
        },
        {
            "kanji": "土",
            "hiragana": "つち",
            "nom": "THỔ",
            "meaning": "Đất ( làm từ đất ), Còn 土地 thì"
        },
        {
            "kanji": "埋める",
            "hiragana": "うめる",
            "nom": "MAI",
            "meaning": "Chôn, lấp, san lấp"
        },
        {
            "kanji": "通訳する",
            "hiragana": "つうやくする",
            "nom": "THÔNG DỊCH",
            "meaning": "Phiên dịch, thông dịch"
        }
    ],
    "38": [
        {
            "kanji": "育てる",
            "hiragana": "そだてる",
            "nom": "DỤC",
            "meaning": "Nuôi dưỡng, chăm sóc, trồng"
        },
        {
            "kanji": "入院する",
            "hiragana": "にゅういんする",
            "nom": "NHẬP VIỆN",
            "meaning": "Nhập viện, nằm viện"
        },
        {
            "kanji": "退院する",
            "hiragana": "たいいんする",
            "nom": "THOÁI VIỆN",
            "meaning": "Ra viện, Xuất viện"
        },
        {
            "kanji": "切る",
            "hiragana": "きる",
            "nom": "THIẾT",
            "meaning": "Tắt, cắt ( nguồn điện )"
        },
        {
            "kanji": "電気を切る",
            "hiragana": "でんきをきる",
            "nom": "ĐIỆN KHÍ THIẾT",
            "meaning": "Tắt điện"
        },
        {
            "kanji": "気持ちがいい",
            "hiragana": "きもちがいい",
            "nom": "KHÍ TRÌ",
            "meaning": "Thoải mái"
        },
        {
            "kanji": "気持ちが悪い",
            "hiragana": "きもちがわるい",
            "nom": "KHÍ TRÌ ÁC",
            "meaning": "Khó chịu"
        },
        {
            "kanji": "運ぶ",
            "hiragana": "はこぶ",
            "nom": "VẬN",
            "meaning": "Bưng, vác, vận chuyển"
        },
        {
            "kanji": "亡くなる",
            "hiragana": "なくなる",
            "nom": "VONG",
            "meaning": "Mất, chết"
        },
        {
            "kanji": "入れる",
            "hiragana": "いれる",
            "nom": "NHẬP",
            "meaning": "Bật, ấn ( điện )"
        },
        {
            "kanji": "電気を入れる",
            "hiragana": "でんきをいれる",
            "nom": "ĐIỆN KHÍ NHẬP",
            "meaning": "Bật điện"
        },
        {
            "kanji": "掛ける",
            "hiragana": "かける",
            "nom": "QUẢI",
            "meaning": "Khóa ( cửa )"
        },
        {
            "kanji": "鍵を掛ける",
            "hiragana": "かぎをかける",
            "nom": "KIỆN QUẢI",
            "meaning": "Khóa cửa"
        },
        {
            "kanji": "大きな",
            "hiragana": "おおきな",
            "nom": "ĐẠI",
            "meaning": "To, lớn"
        },
        {
            "kanji": "赤ちゃん",
            "hiragana": "あかちゃん",
            "nom": "XÍCH",
            "meaning": "Em bé"
        },
        {
            "kanji": "駅前",
            "hiragana": "えきまえ",
            "nom": "DỊCH TIỀN",
            "meaning": "Phía trước nhà ga"
        },
        {
            "kanji": "海岸",
            "hiragana": "かいがん",
            "nom": "HẢI NGẠN",
            "meaning": "Bờ, bãi biển"
        },
        {
            "kanji": "～製",
            "hiragana": "～せい",
            "nom": "CHẾ",
            "meaning": "Hàng được sản xuất tại"
        },
        {
            "kanji": "原爆ドーム",
            "hiragana": "げんばくドーム",
            "nom": "NGUYÊN BỘC",
            "meaning": "Đền tưởng niệm các nạn"
        },
        {
            "kanji": "整理する",
            "hiragana": "せいりする",
            "nom": "CHỈNH LÍ",
            "meaning": "Sàng lọc, phân loại"
        },
        {
            "kanji": "押す",
            "hiragana": "おす",
            "nom": "ÁP",
            "meaning": "Ấn, đóng ( con dấu )"
        },
        {
            "kanji": "小学校",
            "hiragana": "しょうがっこう",
            "nom": "TIỂU HỌC HIỆU",
            "meaning": "Trường tiểu học"
        },
        {
            "kanji": "中学校",
            "hiragana": "ちゅうがっこう",
            "nom": "TRUNG HỌC HIỆU",
            "meaning": "Trường cấp 2"
        },
        {
            "kanji": "書類",
            "hiragana": "しょるい",
            "nom": "THƯ LOẠI",
            "meaning": "Tài liệu, văn bản"
        },
        {
            "kanji": "電源",
            "hiragana": "でんげん",
            "nom": "ĐIỆN NGUYÊN",
            "meaning": "Nguồn điện"
        },
        {
            "kanji": "回覧",
            "hiragana": "こんらん",
            "nom": "HỒI LÃM",
            "meaning": "Việc chuyền nhau đọc gì đó"
        },
        {
            "kanji": "研究室",
            "hiragana": "けんきゅうしつ",
            "nom": "NGHIÊN CỨU THẤT",
            "meaning": "Phòng nghiên cứu"
        },
        {
            "kanji": "世話をする",
            "hiragana": "せわをする",
            "nom": "THẾ THOẠI",
            "meaning": "Chăm sóc ai đó"
        },
        {
            "kanji": "双子",
            "hiragana": "ふたご",
            "nom": "SONG TỬ",
            "meaning": "Sinh đôi"
        },
        {
            "kanji": "経つ",
            "hiragana": "たつ",
            "nom": "KINH",
            "meaning": "Trôi qua ( thời gian )"
        },
        {
            "kanji": "時間が経つ",
            "hiragana": "じかんがたつ",
            "nom": "THỜI GIAN KINH",
            "meaning": "Thời gian trôi qua"
        },
        {
            "kanji": "姉妹",
            "hiragana": "しまい",
            "nom": "TỶ MUỘI",
            "meaning": "Chị em gái"
        },
        {
            "kanji": "性格",
            "hiragana": "せいかく",
            "nom": "TÍNH CÁCH",
            "meaning": "Tính tình, tính cách"
        },
        {
            "kanji": "不思議",
            "hiragana": "ふしぎ",
            "nom": "BẤT TƯ NGHỊ",
            "meaning": "Khó hiểu, Kỳ lạ"
        },
        {
            "kanji": "判子",
            "hiragana": "はんこ",
            "nom": "PHÁN TỬ",
            "meaning": "Con dấu kí tên"
        }
    ],
    "39": [
        {
            "kanji": "答える",
            "hiragana": "こたえる",
            "nom": "ĐÁP",
            "meaning": "Trả lời"
        },
        {
            "kanji": "質問に答える",
            "hiragana": "しつもんにこたえる",
            "nom": "CHẤT VẤN ĐÁP",
            "meaning": "Trả lời câu hỏi"
        },
        {
            "kanji": "倒れる",
            "hiragana": "たおれる",
            "nom": "ĐẢO",
            "meaning": "Bị ngã, bị té, sụp đổ, ngã"
        },
        {
            "kanji": "ビルが倒れる",
            "hiragana": "ビルがたおれる",
            "nom": "ĐẢO",
            "meaning": "Tòa nhà sụp đổ"
        },
        {
            "kanji": "焼ける",
            "hiragana": "やける",
            "nom": "THIÊU",
            "meaning": "Được nướng chin, bị thiêu rụi, bị"
        },
        {
            "kanji": "家が焼ける",
            "hiragana": "いえがやける",
            "nom": "GIA THIÊU",
            "meaning": "Nhà bị cháy"
        },
        {
            "kanji": "通る",
            "hiragana": "とおる",
            "nom": "THÔNG",
            "meaning": "Đi qua ( đường )"
        },
        {
            "kanji": "道を通る",
            "hiragana": "みちをとおる",
            "nom": "ĐẠO THÔNG",
            "meaning": "Qua đường"
        },
        {
            "kanji": "死ぬ",
            "hiragana": "しぬ",
            "nom": "TỬ",
            "meaning": "Chết"
        },
        {
            "kanji": "安心する",
            "hiragana": "あんしんする",
            "nom": "AN TÂM",
            "meaning": "An tâm"
        },
        {
            "kanji": "遅刻する",
            "hiragana": "ちこくする",
            "nom": "TRÌ KHẮC",
            "meaning": "Chậm trễ"
        },
        {
            "kanji": "早退する",
            "hiragana": "そうたいする",
            "nom": "TẢO THOÁI",
            "meaning": "Về sớm"
        },
        {
            "kanji": "離婚する",
            "hiragana": "りこんする",
            "nom": "LY HÔN",
            "meaning": "Ly hôn"
        },
        {
            "kanji": "複雑",
            "hiragana": "ふくざつ",
            "nom": "PHỨC TẠP",
            "meaning": "Phức tạp"
        },
        {
            "kanji": "邪魔",
            "hiragana": "じゃま",
            "nom": "TÀ MA",
            "meaning": "Ngáng đường, cản lối, phiền"
        },
        {
            "kanji": "汚い",
            "hiragana": "きたない",
            "nom": "Ô,Ố",
            "meaning": "Dơ, bẩn, bỉ ổi, bẩn thỉu"
        },
        {
            "kanji": "嬉しい",
            "hiragana": "うれしい",
            "nom": "HỶ",
            "meaning": "Vui sướng"
        },
        {
            "kanji": "悲しい",
            "hiragana": "かなしい",
            "nom": "BI",
            "meaning": "Buồn, đau khổ"
        },
        {
            "kanji": "恥ずかしい",
            "hiragana": "はずかしい",
            "nom": "SỈ",
            "meaning": "Ngượng ngùng, mắc cỡ, rụt"
        },
        {
            "kanji": "地震",
            "hiragana": "じしん",
            "nom": "ĐỊA CHẤN",
            "meaning": "Động đất"
        },
        {
            "kanji": "台風",
            "hiragana": "たいふう",
            "nom": "ĐÀI PHONG",
            "meaning": "Bão"
        },
        {
            "kanji": "家事",
            "hiragana": "かじ",
            "nom": "GIA SỰ",
            "meaning": "Công việc nội trợ, công việc"
        },
        {
            "kanji": "事故",
            "hiragana": "じこ",
            "nom": "SỰ CỐ",
            "meaning": "Tai nạn"
        },
        {
            "kanji": "お見合い",
            "hiragana": "おみあい",
            "nom": "KIẾN HỢP",
            "meaning": "Sự gặp nhau để làm quen"
        },
        {
            "kanji": "電話代",
            "hiragana": "でんわだい",
            "nom": "ĐIỆN THOẠI ĐÀI",
            "meaning": "Tiền điện thoại"
        },
        {
            "kanji": "～代",
            "hiragana": "～だい",
            "nom": "ĐÀI",
            "meaning": "Tiền"
        },
        {
            "kanji": "～号質",
            "hiragana": "～ごうしつ",
            "nom": "HIỆU THẤT",
            "meaning": "Phòng số"
        },
        {
            "kanji": "汗",
            "hiragana": "あせ",
            "nom": "HÃN",
            "meaning": "Mồ hôi"
        },
        {
            "kanji": "石鹸",
            "hiragana": "せっけん",
            "nom": "THẠCH",
            "meaning": "Xà bông cục"
        },
        {
            "kanji": "伺う",
            "hiragana": "うかがう",
            "nom": "TÍ,TỨ",
            "meaning": "Thăm hỏi, viếng thăm"
        },
        {
            "kanji": "大勢",
            "hiragana": "おおぜい",
            "nom": "ĐẠI THẾ",
            "meaning": "Nhiều"
        },
        {
            "kanji": "途中で",
            "hiragana": "とちゅうで",
            "nom": "ĐỒ TRUNG",
            "meaning": "Giữa đường, giữa chừng, trên"
        },
        {
            "kanji": "並ぶ",
            "hiragana": "ならぶ",
            "nom": "TỊNH",
            "meaning": "Xếp hàng"
        },
        {
            "kanji": "洋服",
            "hiragana": "ようふく",
            "nom": "DƯƠNG PHỤC",
            "meaning": "Âu phục"
        },
        {
            "kanji": "西洋化する",
            "hiragana": "せいようかする",
            "nom": "TÂY DƯƠNG HÓA",
            "meaning": "Tây hóa"
        },
        {
            "kanji": "合う",
            "hiragana": "あう",
            "nom": "HỢP",
            "meaning": "Vừa vặn, phù hợp, hợp"
        },
        {
            "kanji": "成人式",
            "hiragana": "せいじんしき",
            "nom": "THÀNH NHÂN THỨC",
            "meaning": "Lễ Thành Nhân ( khi nam nữ"
        },
        {
            "kanji": "返事",
            "hiragana": "へんじ",
            "nom": "PHẢN SỰ",
            "meaning": "Đáp lại, trả lời, hồi âm thư"
        },
        {
            "kanji": "今まで",
            "hiragana": "いまでは",
            "nom": "KIM",
            "meaning": "Ngày nay thì, Bây giờ thì"
        },
        {
            "kanji": "火事",
            "hiragana": "かじ",
            "nom": "HỎA SỰ",
            "meaning": "Hỏa hoạn, cháy nhà"
        }
    ],
    "40": [
        {
            "kanji": "数える",
            "hiragana": "かぞえる",
            "nom": "SỐ",
            "meaning": "Đếm"
        },
        {
            "kanji": "確かめる",
            "hiragana": "たしかめる",
            "nom": "XÁC",
            "meaning": "Xác nhận lại"
        },
        {
            "kanji": "合う",
            "hiragana": "あう",
            "nom": "HỢP",
            "meaning": "Vừa, hợp ( kích cỡ )"
        },
        {
            "kanji": "サイズが合う",
            "hiragana": "サイズがあう",
            "nom": "HỢP",
            "meaning": "Vừa size"
        },
        {
            "kanji": "出発する",
            "hiragana": "しゅっぱつする",
            "nom": "XUẤT PHÁT",
            "meaning": "Xuất phát, khởi hành"
        },
        {
            "kanji": "到着する",
            "hiragana": "とうちゃくする",
            "nom": "ĐÁO TRƯỚC",
            "meaning": "Tới nơi, đến nơi"
        },
        {
            "kanji": "酔う",
            "hiragana": "よう",
            "nom": "TÚY",
            "meaning": "Say xỉn"
        },
        {
            "kanji": "危険",
            "hiragana": "きけん",
            "nom": "NGUY HIỂM",
            "meaning": "Nguy hiểm"
        },
        {
            "kanji": "必要",
            "hiragana": "ひつよう",
            "nom": "TẤT YẾU",
            "meaning": "Cần thiết"
        },
        {
            "kanji": "宇宙",
            "hiragana": "うちゅう",
            "nom": "VŨ TRỤ",
            "meaning": "Vũ trụ, không gian"
        },
        {
            "kanji": "地球",
            "hiragana": "ちきゅう",
            "nom": "ĐỊA CẦU",
            "meaning": "Trái đất"
        },
        {
            "kanji": "忘年会",
            "hiragana": "ぼうねんかい",
            "nom": "VONG NIÊN HỘI",
            "meaning": "Tiệc tất niên, tiệc cuối năm"
        },
        {
            "kanji": "新年会",
            "hiragana": "しんねんかい",
            "nom": "TÂN NIÊN HỘI",
            "meaning": "Tiệc đầu năm, tiệc mừng năm"
        },
        {
            "kanji": "二次会",
            "hiragana": "にじかい",
            "nom": "NHỊ THỨ HỘI",
            "meaning": "Tăng 2 ( tiệc tùng )"
        },
        {
            "kanji": "大会",
            "hiragana": "たいかい",
            "nom": "ĐẠI HỘI",
            "meaning": "Cuộc thi, Đại hội"
        },
        {
            "kanji": "表",
            "hiragana": "おもて",
            "nom": "BIỂU",
            "meaning": "Mặt trước, mặt trên, mặt"
        },
        {
            "kanji": "裏",
            "hiragana": "うら",
            "nom": "LÍ",
            "meaning": "Mặt sau, mặt trái"
        },
        {
            "kanji": "返事",
            "hiragana": "へんじ",
            "nom": "PHẢN SỰ",
            "meaning": "Trả lời lại, hồi âm lại"
        },
        {
            "kanji": "申し込む",
            "hiragana": "もうしこむ",
            "nom": "THÂN NHẬP",
            "meaning": "Đăng ký tham gia"
        },
        {
            "kanji": "本当",
            "hiragana": "ほんとう",
            "nom": "BẢN ĐƯƠNG",
            "meaning": "Thật sự, sự thật"
        },
        {
            "kanji": "間違い",
            "hiragana": "まちがい",
            "nom": "GIAN VI",
            "meaning": "Lội sai, nhầm"
        },
        {
            "kanji": "傷",
            "hiragana": "きず",
            "nom": "THƯƠNG",
            "meaning": "Vết thưng, vết trầy sước"
        },
        {
            "kanji": "長さ",
            "hiragana": "ながさ",
            "nom": "TRƯỜNG",
            "meaning": "Chiều dài, độ dài"
        },
        {
            "kanji": "重さ",
            "hiragana": "おもさ",
            "nom": "TRỌNG",
            "meaning": "Trọng lượng, cân nặng"
        },
        {
            "kanji": "高さ",
            "hiragana": "たかさ",
            "nom": "CAO",
            "meaning": "Chiều cao, độ cao"
        },
        {
            "kanji": "大きさ",
            "hiragana": "おおきさ",
            "nom": "ĐẠI",
            "meaning": "Kích thước, độ lớn"
        },
        {
            "kanji": "～便",
            "hiragana": "～びん",
            "nom": "TIỆN",
            "meaning": "Chuyến bay số"
        },
        {
            "kanji": "～号",
            "hiragana": "～ごう",
            "nom": "HIỆU",
            "meaning": "Số"
        },
        {
            "kanji": "～個",
            "hiragana": "～こ",
            "nom": "CÁ",
            "meaning": ",cái"
        },
        {
            "kanji": "～本",
            "hiragana": "～,ぼん,ぽん",
            "nom": "BẢN",
            "meaning": ",cây"
        },
        {
            "kanji": "～杯",
            "hiragana": "～はい,ばい,ぱい",
            "nom": "BÔI",
            "meaning": ",ly, ,chén, ,tô"
        },
        {
            "kanji": "雪祭り",
            "hiragana": "ゆきまつり",
            "nom": "TUYẾT TẾ",
            "meaning": "Lễ hội Băng Đăng ở"
        },
        {
            "kanji": "望み",
            "hiragana": "のぞみ",
            "nom": "VỌNG",
            "meaning": "Tên 1 loại tàu Shinkansen"
        },
        {
            "kanji": "様子",
            "hiragana": "ようす",
            "nom": "DẠNG TỬ",
            "meaning": "Tình hình, trạng thái"
        },
        {
            "kanji": "事件",
            "hiragana": "じけん",
            "nom": "SỰ KIỆN",
            "meaning": "Sự kiện, vụ việc"
        },
        {
            "kanji": "爆弾",
            "hiragana": "ばくだん",
            "nom": "BỘC ĐẠN",
            "meaning": "Bom đạn, bom mìn"
        },
        {
            "kanji": "積む",
            "hiragana": "つむ",
            "nom": "TÍCH",
            "meaning": "Chất ( hàng ) lên"
        },
        {
            "kanji": "運転手",
            "hiragana": "うんてんしゅ",
            "nom": "VẬN CHUYỂN THỦ",
            "meaning": "Tài xế"
        },
        {
            "kanji": "離れた所",
            "hiragana": "はなれたところ",
            "nom": "LY SỞ",
            "meaning": "Nơi xa, nơi xa xôi"
        },
        {
            "kanji": "逃げる",
            "hiragana": "にげる",
            "nom": "ĐÀO",
            "meaning": "Bỏ chạy, chạy trốn"
        },
        {
            "kanji": "犯人",
            "hiragana": "はんにん",
            "nom": "PHẠM NHÂN",
            "meaning": "Kẻ tội phạm, tội đồ"
        },
        {
            "kanji": "動かす",
            "hiragana": "うごかす",
            "nom": "ĐỘNG",
            "meaning": "Chạy, chuyển, khởi động"
        },
        {
            "kanji": "手に入れる",
            "hiragana": "てにいれる",
            "nom": "THỦ NHẬP",
            "meaning": "Có được, lấy được, đoạt được"
        },
        {
            "kanji": "噂する",
            "hiragana": "うわさする",
            "nom": "TỔN",
            "meaning": "Đồn đại"
        },
        {
            "kanji": "噂",
            "hiragana": "うわさ",
            "nom": "TỔN",
            "meaning": "Tin đồn"
        },
        {
            "kanji": "～以下",
            "hiragana": "～いか",
            "nom": "DĨ HẠ",
            "meaning": ",trở xuống"
        },
        {
            "kanji": "～以上",
            "hiragana": "～いじょう",
            "nom": "DĨ THƯỢNG",
            "meaning": ",trở lên"
        },
        {
            "kanji": "幅",
            "hiragana": "はば",
            "nom": "PHÚC,BỨC",
            "meaning": "Bề rộng, chiều rộng"
        },
        {
            "kanji": "深さ",
            "hiragana": "ふかさ",
            "nom": "THÂM",
            "meaning": "Độ sâu, chiều sâu"
        },
        {
            "kanji": "表裏",
            "hiragana": "ひょうり",
            "nom": "BIỂU LÝ",
            "meaning": "2 mặt"
        },
        {
            "kanji": "裏表",
            "hiragana": "うらおもて",
            "nom": "LÝ BIỂU",
            "meaning": "2 mặt"
        },
        {
            "kanji": "計る",
            "hiragana": "はかる",
            "nom": "KẾ",
            "meaning": "Đo ( số lượng, thời gian )"
        },
        {
            "kanji": "測る",
            "hiragana": "はかる",
            "nom": "TRẮC",
            "meaning": "Đo ( chiều dài, diện tích"
        },
        {
            "kanji": "量る",
            "hiragana": "はかる",
            "nom": "LƯỢNG",
            "meaning": "Đo ( trọng lượng, dung"
        }
    ],
    "41": [
        {
            "kanji": "呼ぶ",
            "hiragana": "よぶ",
            "nom": "HÔ",
            "meaning": "Mời, gọi, kêu"
        },
        {
            "kanji": "取り替える",
            "hiragana": "とりかえる",
            "nom": "THỦ THẾ",
            "meaning": "Đổi lại"
        },
        {
            "kanji": "親切にする",
            "hiragana": "しんせつにする",
            "nom": "THÂN THIẾT",
            "meaning": "Đối xử tốt, đối xử tử tế"
        },
        {
            "kanji": "可愛い",
            "hiragana": "かわいい",
            "nom": "KHẢ ÁI",
            "meaning": "Đáng yêu, dễ thương"
        },
        {
            "kanji": "お祝い",
            "hiragana": "おわい",
            "nom": "CHÚC",
            "meaning": "Chúc mừng, chuyện vui, quà"
        },
        {
            "kanji": "お年玉",
            "hiragana": "おとしだま",
            "nom": "NIÊN NGỌC",
            "meaning": "Tiền lì xì"
        },
        {
            "kanji": "お見舞い",
            "hiragana": "おみまい",
            "nom": "TƯƠNG DU",
            "meaning": "Nước tương"
        },
        {
            "kanji": "興味",
            "hiragana": "きょうみ",
            "nom": "HỨNG VỊ",
            "meaning": "Sự quan tâm, hứng thú"
        },
        {
            "kanji": "情報",
            "hiragana": "じょうほう",
            "nom": "TÌNH BÁO",
            "meaning": "Thông tin"
        },
        {
            "kanji": "文法",
            "hiragana": "ぶんぽう",
            "nom": "VĂN PHÁP",
            "meaning": "Văn phạm, ngữ pháp"
        },
        {
            "kanji": "発音",
            "hiragana": "はつおん",
            "nom": "PHÁT ÂM",
            "meaning": "Phát âm"
        },
        {
            "kanji": "猿",
            "hiragana": "さる",
            "nom": "VIÊN",
            "meaning": "Con khỉ"
        },
        {
            "kanji": "餌",
            "hiragana": "えさ",
            "nom": "NHỊ",
            "meaning": "Thức ăn cho thú nuôi, mồi"
        },
        {
            "kanji": "絵本",
            "hiragana": "えほん",
            "nom": "HỘI BẢN",
            "meaning": "Sách tranh"
        },
        {
            "kanji": "絵葉書",
            "hiragana": "えはがき",
            "nom": "HỘI DIỆP THƯ",
            "meaning": "Bưu ảnh"
        },
        {
            "kanji": "靴下",
            "hiragana": "くつした",
            "nom": "NGOA HẠ",
            "meaning": "Vớ, tất"
        },
        {
            "kanji": "手袋",
            "hiragana": "てぶくろ",
            "nom": "THỦ ĐẠI",
            "meaning": "Bao tay, găng tay"
        },
        {
            "kanji": "指輪",
            "hiragana": "ゆびわ",
            "nom": "CHỈ LUÂN",
            "meaning": "Chiếc nhẫn"
        },
        {
            "kanji": "祖父",
            "hiragana": "そふ",
            "nom": "TỔ PHỤ",
            "meaning": "Ông nôi, ông ngoại"
        },
        {
            "kanji": "祖母",
            "hiragana": "そぼ",
            "nom": "TỖ MẪU",
            "meaning": "Bà nội, bà ngoại"
        },
        {
            "kanji": "申し訳ございません",
            "hiragana": "もうしわけございません",
            "nom": "THÂN DỊCH",
            "meaning": "Thành thật xin lỗi"
        },
        {
            "kanji": "預かる",
            "hiragana": "あずかる",
            "nom": "DỰ",
            "meaning": "Giữ đồ giùm cho ai đó"
        },
        {
            "kanji": "先日",
            "hiragana": "せんじつ",
            "nom": "TIỀN NHẬT",
            "meaning": "Hôm trước, hôm qua"
        },
        {
            "kanji": "助かる",
            "hiragana": "たすかる",
            "nom": "TRỢ",
            "meaning": "Được giúp đỡ"
        },
        {
            "kanji": "昔話",
            "hiragana": "むかしばなし",
            "nom": "TÍCH THOẠI",
            "meaning": "Chuyện cổ tích, chuyện ngày"
        },
        {
            "kanji": "お城",
            "hiragana": "おしろ",
            "nom": "THÀNH",
            "meaning": "Lâu đài"
        },
        {
            "kanji": "暮らす",
            "hiragana": "くらす",
            "nom": "MỘ",
            "meaning": "Sinh sống"
        },
        {
            "kanji": "陸",
            "hiragana": "りく",
            "nom": "LỤC",
            "meaning": "Đất liền"
        },
        {
            "kanji": "真っ白",
            "hiragana": "まっしろ",
            "nom": "CHÂN BẠCH",
            "meaning": "Trắng toát, trắng tinh"
        },
        {
            "kanji": "中身",
            "hiragana": "なかみ",
            "nom": "TRUNG THÂN",
            "meaning": "Nội dung, cái bên trong"
        },
        {
            "kanji": "煙",
            "hiragana": "けむり",
            "nom": "YÊN",
            "meaning": "Làn khói"
        },
        {
            "kanji": "真っ青",
            "hiragana": "まっさお",
            "nom": "CHÂN THANH",
            "meaning": "Xanh lè, xanh lét"
        },
        {
            "kanji": "真っ黒",
            "hiragana": "まっくろ",
            "nom": "CHÂN HẮC",
            "meaning": "Đen thui, đen sì"
        },
        {
            "kanji": "お姫様",
            "hiragana": "おひめさま",
            "nom": "CHẨN DẠNG",
            "meaning": "Công chúa"
        },
        {
            "kanji": "苛める",
            "hiragana": "いじめる",
            "nom": "HÀ",
            "meaning": "Ăn hiếp, hiếp đáp, xử tệ"
        },
        {
            "kanji": "預ける",
            "hiragana": "あずける",
            "nom": "DỰ",
            "meaning": "Nhờ ai đó giữ đồ giùm"
        },
        {
            "kanji": "本日",
            "hiragana": "ほんじつ",
            "nom": "BẢN NHẬT",
            "meaning": "Hôm nay"
        },
        {
            "kanji": "玩具",
            "hiragana": "おもちゃ",
            "nom": "NGOẠN CỤ",
            "meaning": "Đồ chơi"
        },
        {
            "kanji": "孫",
            "hiragana": "まご",
            "nom": "TÔN",
            "meaning": "Cháu nội, cháu ngoại"
        }
    ],
    "42": [
        {
            "kanji": "包む",
            "hiragana": "つつむ",
            "nom": "BAO",
            "meaning": "Gói lại, bao lại, bọc lại"
        },
        {
            "kanji": "沸かす",
            "hiragana": "わかす",
            "nom": "PHÍ,PHẤT",
            "meaning": "Đun sôi, nấu nước"
        },
        {
            "kanji": "計算する",
            "hiragana": "けいさんする",
            "nom": "KẾ TOÁN",
            "meaning": "Tính, tính toán"
        },
        {
            "kanji": "厚い",
            "hiragana": "あつい",
            "nom": "HẬU",
            "meaning": "Dày"
        },
        {
            "kanji": "薄い",
            "hiragana": "うすい",
            "nom": "BẠC",
            "meaning": "Mỏng"
        },
        {
            "kanji": "弁護士",
            "hiragana": "べんごし",
            "nom": "BIỆN HỘ SĨ",
            "meaning": "Luật sư"
        },
        {
            "kanji": "音楽家",
            "hiragana": "おんがくか",
            "nom": "ÂM NHẠC GIA",
            "meaning": "Nhạc sĩ"
        },
        {
            "kanji": "子供たち",
            "hiragana": "こどもたち",
            "nom": "TỬ CUNG",
            "meaning": "Bọn trẻ, con nít, trẻ con"
        },
        {
            "kanji": "二人",
            "hiragana": "ふたり",
            "nom": "NHỊ NHÂN",
            "meaning": "2 người"
        },
        {
            "kanji": "教育",
            "hiragana": "きょういく",
            "nom": "GIÁO DỤC",
            "meaning": "Giáo dục, học hành"
        },
        {
            "kanji": "歴史",
            "hiragana": "れきし",
            "nom": "LỊCH SỬ",
            "meaning": "Lịch sử"
        },
        {
            "kanji": "文化",
            "hiragana": "ぶんか",
            "nom": "VĂN HÓA",
            "meaning": "Văn hóa"
        },
        {
            "kanji": "社会",
            "hiragana": "しゃかい",
            "nom": "XÃ HỘI",
            "meaning": "Xã hội"
        },
        {
            "kanji": "法律",
            "hiragana": "ほうりつ",
            "nom": "PHÁP LUẬT",
            "meaning": "Pháp luật, ngành Luật"
        },
        {
            "kanji": "戦争",
            "hiragana": "せんそう",
            "nom": "CHIẾN TRANH",
            "meaning": "Chiến tranh"
        },
        {
            "kanji": "平和",
            "hiragana": "へいわ",
            "nom": "BÌNH HÒA",
            "meaning": "Hòa bình"
        },
        {
            "kanji": "目的",
            "hiragana": "もくてき",
            "nom": "MỤC ĐÍCH",
            "meaning": "Mục đích"
        },
        {
            "kanji": "安全",
            "hiragana": "あんぜん",
            "nom": "AN TOÀN",
            "meaning": "An toàn"
        },
        {
            "kanji": "論文",
            "hiragana": "ろんぶん",
            "nom": "LUẬN VĂN",
            "meaning": "Luận văn, luận án tốt nghiệp"
        },
        {
            "kanji": "関係",
            "hiragana": "かんけい",
            "nom": "QUAN HỆ",
            "meaning": "Mối quan hệ"
        },
        {
            "kanji": "栓抜き",
            "hiragana": "せんぬき",
            "nom": "XUYÊN BẠT",
            "meaning": "Đồ khui nắp chai, đồ mở nắp"
        },
        {
            "kanji": "缶切り",
            "hiragana": "かんきり",
            "nom": "PHẪU THIẾT",
            "meaning": "Đồ khui đồ hộp"
        },
        {
            "kanji": "缶詰",
            "hiragana": "かんづめ",
            "nom": "PHẪU CẬT",
            "meaning": "Đồ hộp ( thức ăn )"
        },
        {
            "kanji": "風呂敷",
            "hiragana": "ふろしき",
            "nom": "PHONG LỮ PHU",
            "meaning": "Khăn gói đồ kiểu Nhật ( tấm"
        },
        {
            "kanji": "体温計",
            "hiragana": "たいおんけい",
            "nom": "THỂ ÔN KẾ",
            "meaning": "Nhiệt kế"
        },
        {
            "kanji": "材料",
            "hiragana": "ざいりょう",
            "nom": "TÀI LIỆU",
            "meaning": "Vật liệu chế biến"
        },
        {
            "kanji": "石",
            "hiragana": "いし",
            "nom": "THẠCH",
            "meaning": "Đá, sỏi, hòn đá"
        },
        {
            "kanji": "国連",
            "hiragana": "こくれん",
            "nom": "QUỐC LIÊN",
            "meaning": "Liên Hiệp Quốc"
        },
        {
            "kanji": "国際連合",
            "hiragana": "こくさいれんごう",
            "nom": "QUỐC TẾ LIÊN HỢP",
            "meaning": "Liên Hiệp Quốc"
        },
        {
            "kanji": "食品",
            "hiragana": "しょくひん",
            "nom": "THỰC PHẨM",
            "meaning": "Thức ăn, thực phẩm"
        },
        {
            "kanji": "調査",
            "hiragana": "ちょうさ",
            "nom": "ĐIỀU TRA",
            "meaning": "Khảo sát, điều tra"
        },
        {
            "kanji": "データ",
            "hiragana": "データ",
            "nom": "DATA",
            "meaning": "Dữ liệu"
        },
        {
            "kanji": "カップラーメン",
            "hiragana": "カップラーメン",
            "nom": "CUP RAMEN",
            "meaning": "Mì ly"
        },
        {
            "kanji": "ファイル",
            "hiragana": "ファイル",
            "nom": "FILE",
            "meaning": "Xấp hồ sơ"
        },
        {
            "kanji": "インスタントラーメン",
            "hiragana": "インスタントラーメン",
            "nom": "INSTANT RAMEN",
            "meaning": "Mì ăn liền"
        },
        {
            "kanji": "ローン",
            "hiragana": "ローン",
            "nom": "LOAN",
            "meaning": "Tiền vay ngân hàng"
        },
        {
            "kanji": "算盤",
            "hiragana": "そろばん",
            "nom": "TOÁN BÀN",
            "meaning": "Bàn tính gỗ"
        },
        {
            "kanji": "薬缶",
            "hiragana": "やかん",
            "nom": "DƯỢC PHẪU",
            "meaning": "Ấm nước"
        },
        {
            "kanji": "沸く",
            "hiragana": "わく",
            "nom": "PHÍ,PHẤT",
            "meaning": "Sôi lên ( nước nóng )"
        }
    ],
    "43": [
        {
            "kanji": "増える",
            "hiragana": "ふえる",
            "nom": "TĂNG",
            "meaning": "~ tăng lên, ~ tăng thêm"
        },
        {
            "kanji": "輸出が増える",
            "hiragana": "ゆしゅつがふえる",
            "nom": "THÂU XUẤT TĂNG",
            "meaning": "Xuất khẩu ( được ) tăng lên"
        },
        {
            "kanji": "減る",
            "hiragana": "へる",
            "nom": "GIẢM",
            "meaning": "~ giảm xuống, ~ giảm đi"
        },
        {
            "kanji": "輸出が減る",
            "hiragana": "ゆしゅつがへる",
            "nom": "THÂU XUẤT GIẢM",
            "meaning": "Xuất khẩu giảm xuống"
        },
        {
            "kanji": "上がる",
            "hiragana": "あがる",
            "nom": "THƯỢNG",
            "meaning": "~ tăng, ~ lên cao"
        },
        {
            "kanji": "値段が上がる",
            "hiragana": "ねだんがあがる",
            "nom": "TRỊ ĐOẠN THƯỢNG",
            "meaning": "Giá cả tăng lên"
        },
        {
            "kanji": "下がる",
            "hiragana": "さがる",
            "nom": "HẠ",
            "meaning": "~ giảm"
        },
        {
            "kanji": "値段が下がる",
            "hiragana": "ねだんがさがる",
            "nom": "TRỊ ĐOẠN HẠ",
            "meaning": "Giá giảm"
        },
        {
            "kanji": "切れる",
            "hiragana": "きれる",
            "nom": "THIẾT",
            "meaning": "~ đứt"
        },
        {
            "kanji": "紐が切れる",
            "hiragana": "ひもがきれる",
            "nom": "NỮU THIẾT",
            "meaning": "Dây đứt"
        },
        {
            "kanji": "取れる",
            "hiragana": "とれる",
            "nom": "THỦ",
            "meaning": "~ đứt"
        },
        {
            "kanji": "ボタンが取れる",
            "hiragana": "ボタンがとれる",
            "nom": "THỦ",
            "meaning": "Nút đứt"
        },
        {
            "kanji": "落ちる",
            "hiragana": "おちる",
            "nom": "LẠC",
            "meaning": "~ rơi, rớt"
        },
        {
            "kanji": "荷物が落ちる",
            "hiragana": "にもつがおちる",
            "nom": "HÀ VẬT LẠC",
            "meaning": "Hành lý rớt, rơi"
        },
        {
            "kanji": "無くなる",
            "hiragana": "なくなる",
            "nom": "VÔ",
            "meaning": "~ mất, ~ hết"
        },
        {
            "kanji": "ガソリンが無くなる",
            "hiragana": "ガソリンがなくなる",
            "nom": "VÔ",
            "meaning": "Xăng hết"
        },
        {
            "kanji": "変",
            "hiragana": "へん",
            "nom": "BIẾN",
            "meaning": "Kỳ quặc, bất thường"
        },
        {
            "kanji": "幸せ",
            "hiragana": "しあわせ",
            "nom": "HẠNH",
            "meaning": "Hạnh phúc"
        },
        {
            "kanji": "暖房",
            "hiragana": "だんぼう",
            "nom": "NOÃN PHÒNG",
            "meaning": "Lò sưởi, máy làm ấm"
        },
        {
            "kanji": "冷房",
            "hiragana": "れいぼう",
            "nom": "LÃNH PHÒNG",
            "meaning": "Máy lạnh"
        },
        {
            "kanji": "今にも",
            "hiragana": "いまにも",
            "nom": "KIM",
            "meaning": "Sắp sửa, liền bây giờ"
        },
        {
            "kanji": "会員",
            "hiragana": "かいいん",
            "nom": "HỘI VIÊN",
            "meaning": "Hội viên"
        },
        {
            "kanji": "適当",
            "hiragana": "てきとう",
            "nom": "THÍCH ĐƯƠNG",
            "meaning": "Thích hợp"
        },
        {
            "kanji": "年齢",
            "hiragana": "ねんれい",
            "nom": "NIÊN LINH",
            "meaning": "Tuổi tác"
        },
        {
            "kanji": "収入",
            "hiragana": "しゅうにゅう",
            "nom": "THU NHẬP",
            "meaning": "Thu nhập"
        },
        {
            "kanji": "その上",
            "hiragana": "そのうえ",
            "nom": "THƯỢNG",
            "meaning": "Hơn thế nữa"
        },
        {
            "kanji": "値段を下げる",
            "hiragana": "ねだんをさげる",
            "nom": "TRỊ ĐOẠN HẠ",
            "meaning": "Giảm giá"
        },
        {
            "kanji": "増やす",
            "hiragana": "ふやす",
            "nom": "TĂNG",
            "meaning": "Tăng ~ lên"
        },
        {
            "kanji": "減らす",
            "hiragana": "へらす",
            "nom": "GIẢM",
            "meaning": "Giảm ~ xuống, giảm ~ đi"
        },
        {
            "kanji": "上げる",
            "hiragana": "あげる",
            "nom": "THƯỢNG",
            "meaning": "Tăng ~ lên"
        },
        {
            "kanji": "下げる",
            "hiragana": "さげる",
            "nom": "HẠ",
            "meaning": "Giảm ~ xuống"
        },
        {
            "kanji": "切る",
            "hiragana": "きる",
            "nom": "THIẾT",
            "meaning": "Cắt ~, làm đứt ~"
        },
        {
            "kanji": "取る",
            "hiragana": "とる",
            "nom": "THỦ",
            "meaning": "~ đứt, bứt ~"
        },
        {
            "kanji": "落とす",
            "hiragana": "おとす",
            "nom": "LẠC",
            "meaning": "Rớt ~, rơi ~"
        },
        {
            "kanji": "幸福",
            "hiragana": "こうふく",
            "nom": "HẠNH PHÚC",
            "meaning": "Hạnh phúc"
        },
        {
            "kanji": "幸福に暮らす",
            "hiragana": "こうふくにする",
            "nom": "HẠNH PHÚC MỘ",
            "meaning": "Sống hạnh phúc"
        },
        {
            "kanji": "増減",
            "hiragana": "ぞうげん",
            "nom": "TĂNG GIẢM",
            "meaning": "Tăng giảm"
        },
        {
            "kanji": "幸福感",
            "hiragana": "こうふくかん",
            "nom": "HẠNH PHÚC CẢM",
            "meaning": "Cảm giác hạnh phúc"
        },
        {
            "kanji": "不幸",
            "hiragana": "ふこう",
            "nom": "BẤT HẠNH",
            "meaning": "Bất hạnh"
        },
        {
            "kanji": "ドライブ",
            "hiragana": "Chuyến đi chơi xa bằng xe",
            "nom": "hơi",
            "meaning": ""
        },
        {
            "kanji": "美味い",
            "hiragana": "うまい",
            "nom": "MỸ VỊ",
            "meaning": "Ngon, hay, thú vị"
        },
        {
            "kanji": "無くす",
            "hiragana": "なくす",
            "nom": "VÔ",
            "meaning": "Mất ~, làm mất ~"
        }
    ],
    "44": [
        {
            "kanji": "泣く",
            "hiragana": "なく",
            "nom": "KHẤP",
            "meaning": "Khóc"
        },
        {
            "kanji": "笑う",
            "hiragana": "わらう",
            "nom": "TIẾU",
            "meaning": "Cười"
        },
        {
            "kanji": "乾く",
            "hiragana": "かわく",
            "nom": "CAN",
            "meaning": "Khô"
        },
        {
            "kanji": "濡れる",
            "hiragana": "ぬれる",
            "nom": "NHU",
            "meaning": "~ ướt"
        },
        {
            "kanji": "滑る",
            "hiragana": "すべる",
            "nom": "HOẠT , CỐT",
            "meaning": "~ trợt, trơn trợt"
        },
        {
            "kanji": "起きる",
            "hiragana": "おきる",
            "nom": "KHỞI",
            "meaning": "Xảy ra, gây ra"
        },
        {
            "kanji": "調節する",
            "hiragana": "ちょうせつする",
            "nom": "ĐIỀU TIẾT",
            "meaning": "Điều chỉnh"
        },
        {
            "kanji": "安全",
            "hiragana": "あんぜん",
            "nom": "AN TOAN",
            "meaning": "An toàn"
        },
        {
            "kanji": "丁寧",
            "hiragana": "ていねい",
            "nom": "ĐINH NINH",
            "meaning": "Lịch sự, cẩn thận"
        },
        {
            "kanji": "細かい",
            "hiragana": "こまかい",
            "nom": "TẾ",
            "meaning": "Nhỏ, chi tiết, tỉ mỉ"
        },
        {
            "kanji": "濃い",
            "hiragana": "こい",
            "nom": "NỒNG",
            "meaning": "Đậm, đậm đặc"
        },
        {
            "kanji": "薄い",
            "hiragana": "うすい",
            "nom": "BẠC",
            "meaning": "Nhạt, loãng"
        },
        {
            "kanji": "空気",
            "hiragana": "くうき",
            "nom": "KHÔNG KHÍ",
            "meaning": "Không khí"
        },
        {
            "kanji": "涙",
            "hiragana": "なみだ",
            "nom": "LỆ",
            "meaning": "Nước mắt"
        },
        {
            "kanji": "和食",
            "hiragana": "わしょく",
            "nom": "HÒA THỰC",
            "meaning": "Món ăn Nhật"
        },
        {
            "kanji": "洋食",
            "hiragana": "ようしょく",
            "nom": "DƯƠNG THỰC",
            "meaning": "Món ăn Âu – Mỹ"
        },
        {
            "kanji": "量",
            "hiragana": "りょう",
            "nom": "LƯỢNG",
            "meaning": "Liều lượng, số lượng"
        },
        {
            "kanji": "～倍",
            "hiragana": "～ばい",
            "nom": "BỘI",
            "meaning": "Gấp ~ lần"
        },
        {
            "kanji": "半分",
            "hiragana": "はんぶん",
            "nom": "BÁN PHẦN ( PHÂN )",
            "meaning": "Một nửa"
        },
        {
            "kanji": "洗濯物",
            "hiragana": "せんたくもの",
            "nom": "TẨY TRẠC VẬT",
            "meaning": "Đồ giặt, quần áo dơ để giặt"
        },
        {
            "kanji": "理由",
            "hiragana": "りゆう",
            "nom": "LÝ DO",
            "meaning": "Lý do"
        },
        {
            "kanji": "嫌がる",
            "hiragana": "いやがる",
            "nom": "HIỀM",
            "meaning": "Không thích, không vừa"
        },
        {
            "kanji": "順序",
            "hiragana": "じゅんじょ",
            "nom": "THUẬN TỰ",
            "meaning": "Trình tự, thứ tự, theo thứ tự"
        },
        {
            "kanji": "表現",
            "hiragana": "ひょうげん",
            "nom": "BIỂU HIỆN",
            "meaning": "Cách nói, cách diễn đạt, bày"
        },
        {
            "kanji": "別れる",
            "hiragana": "わかれる",
            "nom": "BIỆT",
            "meaning": "Chia tay, từ biệt"
        },
        {
            "kanji": "縁起が悪い",
            "hiragana": "えんぎがわるい",
            "nom": "DUYÊN KHỞI ÁC",
            "meaning": "Không may mắn"
        },
        {
            "kanji": "縁起",
            "hiragana": "えんぎ",
            "nom": "DUYÊN KHỞI",
            "meaning": "Điềm ( lành , tốt )"
        },
        {
            "kanji": "悪い",
            "hiragana": "わるい",
            "nom": "ÁC",
            "meaning": "Không tốt"
        },
        {
            "kanji": "乾かす",
            "hiragana": "かわかす",
            "nom": "CAN",
            "meaning": "Sấy khô, phơi khô"
        },
        {
            "kanji": "濡らす",
            "hiragana": "ぬらす",
            "nom": "NHU",
            "meaning": "Ướt"
        },
        {
            "kanji": "滑らす",
            "hiragana": "すべらす",
            "nom": "HOẠT , CỐT",
            "meaning": "Trợt, trượt"
        }
    ],
    "45": [
        {
            "kanji": "謝る",
            "hiragana": "あやまる",
            "nom": "TẠ",
            "meaning": "Xin lỗi"
        },
        {
            "kanji": "遭う",
            "hiragana": "あう",
            "nom": "TAO",
            "meaning": "Gặp ( tai nạn , khó khăn )"
        },
        {
            "kanji": "信じる",
            "hiragana": "しんじる",
            "nom": "TÍN",
            "meaning": "Tin, tin tưởng"
        },
        {
            "kanji": "用意する",
            "hiragana": "よういする",
            "nom": "DỤNG Ý",
            "meaning": "Chuẩn bị"
        },
        {
            "kanji": "保険証",
            "hiragana": "ほけんしょう",
            "nom": "BẢO HIỂM CHỨNG",
            "meaning": "Sổ bảo hiểm, thẻ bảo hiểm"
        },
        {
            "kanji": "保証書",
            "hiragana": "ほしょうしょ",
            "nom": "BẢO CHỨNG THƯ",
            "meaning": "Phiếu bảo hành, thẻ bảo hành"
        },
        {
            "kanji": "領収書",
            "hiragana": "りょうしゅうしょ",
            "nom": "LÃNH THÂU THƯ",
            "meaning": "Hóa đơn"
        },
        {
            "kanji": "贈り物",
            "hiragana": "おくりもの",
            "nom": "TẶNG VẬT",
            "meaning": "Quà tặng"
        },
        {
            "kanji": "間違い電話",
            "hiragana": "まちがいでんわ",
            "nom": "GIAN VI ĐIỆN THOẠI",
            "meaning": "Cuộc gọi điện nhầm số"
        },
        {
            "kanji": "係り",
            "hiragana": "かなり",
            "nom": "HỆ",
            "meaning": "Người phụ trách, nhân viên"
        },
        {
            "kanji": "中止",
            "hiragana": "ちゅうし",
            "nom": "TRUNG CHỈ",
            "meaning": "Hoãn, hủy bỏ, dừng"
        },
        {
            "kanji": "点",
            "hiragana": "てん",
            "nom": "ĐIỂM",
            "meaning": "Điểm"
        },
        {
            "kanji": "急に",
            "hiragana": "きゅうに",
            "nom": "CẤP",
            "meaning": "Một cách đột ngột"
        },
        {
            "kanji": "楽しみにしています",
            "hiragana": "たのしみにしています",
            "nom": "LẠC",
            "meaning": "Mong chờ ( người, ngày"
        },
        {
            "kanji": "以上です",
            "hiragana": "いじょう",
            "nom": "DĨ THƯỢNG",
            "meaning": "Xin hết ( sau khi nói , viết )"
        },
        {
            "kanji": "係員",
            "hiragana": "かかりいん",
            "nom": "HỆ VIÊN",
            "meaning": "Nhân viên phụ trách một bộ"
        },
        {
            "kanji": "管理人",
            "hiragana": "かんりにん",
            "nom": "QUẢN LÝ NHÂN",
            "meaning": "Người quản lý ( nhà ở , ký"
        },
        {
            "kanji": "一位",
            "hiragana": "いちい",
            "nom": "NHẤT VỊ",
            "meaning": "Hạng nhất, đứng đầu"
        },
        {
            "kanji": "優勝する",
            "hiragana": "ゆうしょうする",
            "nom": "ƯU THẮNG",
            "meaning": "Vô địch, đạt được hạng nhất"
        },
        {
            "kanji": "悩み",
            "hiragana": "なやみ",
            "nom": "NÃO",
            "meaning": "Điều phiền muộn, điều phiền"
        },
        {
            "kanji": "目覚し時計",
            "hiragana": "めざましどけい",
            "nom": "MỤC GIÁC THỜI KẾ",
            "meaning": "Đồng hồ báo thức"
        },
        {
            "kanji": "眠る",
            "hiragana": "ねむる",
            "nom": "MIÊN",
            "meaning": "Ngủ"
        },
        {
            "kanji": "覚める",
            "hiragana": "さめる",
            "nom": "GIÁC",
            "meaning": "Tỉnh giấc"
        },
        {
            "kanji": "回答",
            "hiragana": "かいとう",
            "nom": "HỒI ĐÁP",
            "meaning": "Đáp án, câu trả lời"
        },
        {
            "kanji": "鳴る",
            "hiragana": "なる",
            "nom": "MINH",
            "meaning": "Reo, kêu ( đồng hồ, điện"
        },
        {
            "kanji": "美味く行く",
            "hiragana": "うまくいく",
            "nom": "MỸ VỊ HÀNH",
            "meaning": "Tiến hành thuận lợi"
        },
        {
            "kanji": "管理者",
            "hiragana": "かんりしゃ",
            "nom": "QUẢN LÝ GIẢ",
            "meaning": "Người quản lý trong công ty"
        },
        {
            "kanji": "保証金",
            "hiragana": "ほしょうきん",
            "nom": "BẢO CHỨNG KIM",
            "meaning": "Tiền đặt cọc, tiền bảo lãnh"
        },
        {
            "kanji": "保証期間",
            "hiragana": "ほしょうきかん",
            "nom": "BẢO CHỨNG KỲ HẠN",
            "meaning": "Thời hạn bảo hành, thời gian"
        },
        {
            "kanji": "レシート",
            "hiragana": "Hóa đơn",
            "nom": "",
            "meaning": ""
        },
        {
            "kanji": "セットする",
            "hiragana": "Hẹn giờ, đặt giờ đồng hồ báo",
            "nom": "thức",
            "meaning": ""
        },
        {
            "kanji": "レジ",
            "hiragana": "Quầy tính tiền",
            "nom": "",
            "meaning": ""
        }
    ],
    "46": [
        {
            "kanji": "焼く",
            "hiragana": "やく",
            "nom": "THIÊU",
            "meaning": "Nướng, quay, đốt ~"
        },
        {
            "kanji": "渡す",
            "hiragana": "わたす",
            "nom": "ĐỘ",
            "meaning": "Đưa cho, trao cho"
        },
        {
            "kanji": "帰って来る",
            "hiragana": "かえってくる",
            "nom": "QUY LAI",
            "meaning": "Về, trở lại"
        },
        {
            "kanji": "出る",
            "hiragana": "でる",
            "nom": "XUẤT",
            "meaning": "Khởi hành, xuất phát ( xe"
        },
        {
            "kanji": "留守",
            "hiragana": "るす",
            "nom": "LƯU THỦ",
            "meaning": "Vắng nhà"
        },
        {
            "kanji": "宅配便",
            "hiragana": "たくはいびん",
            "nom": "TRẠCH PHỐI TIỆN",
            "meaning": "Giao hàng tận nơi, tận nhà"
        },
        {
            "kanji": "原因",
            "hiragana": "げんいん",
            "nom": "NGUYÊN NHÂN",
            "meaning": "Nguyên nhân"
        },
        {
            "kanji": "注射",
            "hiragana": "ちゅうしゃ",
            "nom": "CHÚ XẠ",
            "meaning": "Việc tiêm thuốc, chích thuốc"
        },
        {
            "kanji": "食欲",
            "hiragana": "しょくよく",
            "nom": "THỰC DỤC",
            "meaning": "Cảm giác ngon miệng, cảm"
        },
        {
            "kanji": "丁度",
            "hiragana": "ちょうど",
            "nom": "ĐINH ĐỘ",
            "meaning": "Vừa vặn, đúng lúc, hợp, vừa"
        },
        {
            "kanji": "たった今",
            "hiragana": "たったいま",
            "nom": "KIM",
            "meaning": "Vừa mới đây, vừa mới, hồi"
        },
        {
            "kanji": "今良いでしょうか",
            "hiragana": "いまいいでしょうか",
            "nom": "KIM LƯƠNG",
            "meaning": "Bây giờ có được không"
        },
        {
            "kanji": "具合",
            "hiragana": "ぐあい",
            "nom": "CỤ HỢP",
            "meaning": "Tình trạng, trạng thái"
        },
        {
            "kanji": "向かう",
            "hiragana": "むかう",
            "nom": "HƯỚNG",
            "meaning": "Hướng đến ~, hướng về ~"
        },
        {
            "kanji": "お待たせしました",
            "hiragana": "おたませしました",
            "nom": "ĐÃI",
            "meaning": "Xin lỗi vì đã để bạn, anh, chị"
        },
        {
            "kanji": "知識",
            "hiragana": "ちしき",
            "nom": "TRI THỨC",
            "meaning": "Kiến thức, tri thức"
        },
        {
            "kanji": "一部分",
            "hiragana": "いちぶぶん",
            "nom": "NHẤT BỘ PHÂN",
            "meaning": "Một phần, một bộ phận"
        },
        {
            "kanji": "入力する",
            "hiragana": "にゅうりょくする",
            "nom": "NHẬP LỰC",
            "meaning": "Nhập dữ liệu"
        },
        {
            "kanji": "秒",
            "hiragana": "びょう",
            "nom": "MIỂU",
            "meaning": "Giây"
        },
        {
            "kanji": "焼ける",
            "hiragana": "やける",
            "nom": "THIÊU",
            "meaning": "~ nướng, ~ quay"
        },
        {
            "kanji": "渡る",
            "hiragana": "わたる",
            "nom": "ĐỘ",
            "meaning": "Băng qua ~"
        },
        {
            "kanji": "どちら様でしょうか",
            "hiragana": "どちらさまでしょうか",
            "nom": "DẠNG",
            "meaning": "Xin hỏi ai vậy Xin lỗi ai"
        },
        {
            "kanji": "宝庫",
            "hiragana": "ほうこ",
            "nom": "BẢO KHỐ",
            "meaning": "Kho báu"
        },
        {
            "kanji": "ガスレンジ",
            "hiragana": "Bếp ga",
            "nom": "",
            "meaning": ""
        }
    ],
    "47": [
        {
            "kanji": "集まる",
            "hiragana": "あつまる",
            "nom": "TẬP",
            "meaning": "Tập trung, tập hợp"
        },
        {
            "kanji": "別れる",
            "hiragana": "わかれる",
            "nom": "BIỆT",
            "meaning": "Chia tay"
        },
        {
            "kanji": "長生きする",
            "hiragana": "ながいきする",
            "nom": "TRƯỜNG SINH",
            "meaning": "Sống thọ, sống lâu"
        },
        {
            "kanji": "匂い",
            "hiragana": "におい",
            "nom": "CÁI",
            "meaning": "Mùi"
        },
        {
            "kanji": "傘",
            "hiragana": "かさ",
            "nom": "TÁN , TẢN",
            "meaning": "Cây dù, cái ô"
        },
        {
            "kanji": "怖い",
            "hiragana": "こわい",
            "nom": "BỐ",
            "meaning": "Đáng sợ, dữ tợn, hung dữ"
        },
        {
            "kanji": "天気予報",
            "hiragana": "てんきよほう",
            "nom": "THIÊN KHÍ DỰ BÁO",
            "meaning": "Dự báo thời tiết"
        },
        {
            "kanji": "発表",
            "hiragana": "はっぴょう",
            "nom": "PHÁT BIỂU",
            "meaning": "Phát biểu"
        },
        {
            "kanji": "実験",
            "hiragana": "じっけん",
            "nom": "THỰC NGHIỆM",
            "meaning": "Thí nghiệm, thực nghiệm"
        },
        {
            "kanji": "人口",
            "hiragana": "じんこう",
            "nom": "NHÂN KHẨU",
            "meaning": "Dân số"
        },
        {
            "kanji": "科学",
            "hiragana": "かがく",
            "nom": "KHOA HỌC",
            "meaning": "Khoa học"
        },
        {
            "kanji": "医学",
            "hiragana": "いがく",
            "nom": "Y HỌC",
            "meaning": "Y học"
        },
        {
            "kanji": "文学",
            "hiragana": "ぶんがく",
            "nom": "VĂN HỌC",
            "meaning": "Văn học"
        },
        {
            "kanji": "救急車",
            "hiragana": "きゅうきゅうしゃ",
            "nom": "CỨU CẤP XA",
            "meaning": "Xe cấp cứu"
        },
        {
            "kanji": "賛成",
            "hiragana": "さんせい",
            "nom": "TÁN THÀNH",
            "meaning": "Tán thành, đồng tình"
        },
        {
            "kanji": "反対",
            "hiragana": "はんたい",
            "nom": "PHẢN ĐỐI",
            "meaning": "Phản đối"
        },
        {
            "kanji": "男性",
            "hiragana": "だんせい",
            "nom": "NAM TÍNH",
            "meaning": "Nam giới, phái nam"
        },
        {
            "kanji": "女性",
            "hiragana": "じょせい",
            "nom": "NỮ TÍNH",
            "meaning": "Nữ giới, phái nữ"
        },
        {
            "kanji": "婚約する",
            "hiragana": "こんやくする",
            "nom": "HÔN ƯỚC",
            "meaning": "Đính hôn, đám hỏi"
        },
        {
            "kanji": "相手",
            "hiragana": "あいて",
            "nom": "TƯƠNG THỦ",
            "meaning": "Người kia, đối thủ, đối"
        },
        {
            "kanji": "～と知り合う",
            "hiragana": "～としりあう",
            "nom": "TRI HỢP",
            "meaning": "Biết nhau, quen nhau, quen"
        },
        {
            "kanji": "平均寿命",
            "hiragana": "へいきんじゅみょう",
            "nom": "BÌNH QUÂN THỌ MỆNH",
            "meaning": "Tuổi thọ trung bình"
        },
        {
            "kanji": "比べる",
            "hiragana": "くらべる",
            "nom": "So với",
            "meaning": "Màu xanh đậm"
        },
        {
            "kanji": "博士",
            "hiragana": "はかせ – はくし",
            "nom": "BÁC SĨ",
            "meaning": "Tiến sĩ"
        },
        {
            "kanji": "脳",
            "hiragana": "のう",
            "nom": "NÃO",
            "meaning": "Não, bộ não"
        },
        {
            "kanji": "化粧品",
            "hiragana": "けしょうひん",
            "nom": "HÓA TRANG PHẨM",
            "meaning": "Mỹ phẩm"
        },
        {
            "kanji": "調べ",
            "hiragana": "しらべ",
            "nom": "ĐIỀU",
            "meaning": "Cuộc điều tra, tìm hiểu, tra"
        },
        {
            "kanji": "化粧",
            "hiragana": "けしょう",
            "nom": "HÓA TRANG",
            "meaning": "Trang điểm"
        },
        {
            "kanji": "化粧室",
            "hiragana": "けしょうしつ",
            "nom": "HÓA TRANG THẤT",
            "meaning": "Nhà vệ sinh có gương lớn để"
        },
        {
            "kanji": "～と付き合う",
            "hiragana": "～とつきあう",
            "nom": "PHÓ HỢP",
            "meaning": "Quen nhau ( trong tình yêu )"
        },
        {
            "kanji": "指す",
            "hiragana": "さす",
            "nom": "CHỈ",
            "meaning": "Che ( dù )"
        },
        {
            "kanji": "酷い",
            "hiragana": "ひどい",
            "nom": "KHỐC",
            "meaning": "Khủng khiếp, kinh khủng"
        },
        {
            "kanji": "集める",
            "hiragana": "あつめる",
            "nom": "TẬP",
            "meaning": "Sưu tầm, tập hợp"
        },
        {
            "kanji": "香り",
            "hiragana": "かおり",
            "nom": "HƯƠNG",
            "meaning": "Hương thơm"
        },
        {
            "kanji": "感じ",
            "hiragana": "かんじ",
            "nom": "CẢM",
            "meaning": "Cảm giác"
        }
    ],
    "48": [
        {
            "kanji": "降ろす",
            "hiragana": "おろす",
            "nom": "GIÁNG",
            "meaning": "Dỡ hàng, thả khách, trả khách"
        },
        {
            "kanji": "下ろす",
            "hiragana": "おろす",
            "nom": "HẠ",
            "meaning": "Tháo xuống, gỡ xuống, lấy"
        },
        {
            "kanji": "届ける",
            "hiragana": "とどける",
            "nom": "GIỚI",
            "meaning": "Giao ,tới, chuyển , tới"
        },
        {
            "kanji": "A の世話をする",
            "hiragana": "A のせわをする",
            "nom": "THẾ THOẠI",
            "meaning": "Chăm sóc A"
        },
        {
            "kanji": "嫌",
            "hiragana": "いや",
            "nom": "HIỀM",
            "meaning": "Không thích, không ưa, bực"
        },
        {
            "kanji": "厳しい",
            "hiragana": "きびしい",
            "nom": "NGHIÊM",
            "meaning": "Khó, khó tính, kỹ, nghiêm"
        },
        {
            "kanji": "塾",
            "hiragana": "じゅく",
            "nom": "THỤC",
            "meaning": "Lớp học thêm"
        },
        {
            "kanji": "生徒",
            "hiragana": "せいと",
            "nom": "SINH ĐỒ",
            "meaning": "Học sinh ( cấp 2 – 3 )"
        },
        {
            "kanji": "入管",
            "hiragana": "にゅうかん",
            "nom": "NHẬP QUẢN",
            "meaning": "Cục quản lý xuất nhập cảnh"
        },
        {
            "kanji": "入国管理局",
            "hiragana": "にゅうこくかんりきょく",
            "nom": "NHẬP QUỐC QUẢN LÝ",
            "meaning": "CỤC"
        },
        {
            "kanji": "自由に",
            "hiragana": "じゆうに",
            "nom": "TỰ DO",
            "meaning": "Tự do"
        },
        {
            "kanji": "お忙しいですか",
            "hiragana": "おいそがしいですか",
            "nom": "MANG",
            "meaning": "Anh ( chị ) có bận không ạ"
        },
        {
            "kanji": "久しぶり",
            "hiragana": "ひさしぶり",
            "nom": "CỬU",
            "meaning": "Lâu ngày không gặp, lâu, thời"
        },
        {
            "kanji": "営業",
            "hiragana": "えいぎょう",
            "nom": "DOANH NGHIỆP",
            "meaning": "Kinh doanh"
        },
        {
            "kanji": "楽しむ",
            "hiragana": "たのしむ",
            "nom": "LẠC",
            "meaning": "Mong đợi , thư giản, giải"
        },
        {
            "kanji": "～世紀",
            "hiragana": "～せいき",
            "nom": "THẾ KỶ",
            "meaning": "Thế kỷ"
        },
        {
            "kanji": "A の代わりをする",
            "hiragana": "A のかわりをする",
            "nom": "ĐẠI",
            "meaning": "Thay thế cho A"
        },
        {
            "kanji": "競争する",
            "hiragana": "きょうそうする",
            "nom": "CẠNH TRANH",
            "meaning": "Cạnh tranh, thi đua"
        },
        {
            "kanji": "芸",
            "hiragana": "げい",
            "nom": "VÂN",
            "meaning": "Nghệ thuật, trình diễn"
        },
        {
            "kanji": "姿",
            "hiragana": "すがた",
            "nom": "TƯ",
            "meaning": "Hình dáng, bóng dáng"
        },
        {
            "kanji": "心",
            "hiragana": "こころ",
            "nom": "TÂM",
            "meaning": "Tấm lòng, trái tim"
        },
        {
            "kanji": "捕らえる",
            "hiragana": "とらえる",
            "nom": "BỘ",
            "meaning": "Bắt, nắm bắt"
        },
        {
            "kanji": "届く",
            "hiragana": "とどく",
            "nom": "GIỚI",
            "meaning": ", tới, , được giao tới"
        },
        {
            "kanji": "厳酷",
            "hiragana": "げんこく",
            "nom": "NGHIÊM KHỐC",
            "meaning": "Nghiêm khắc"
        },
        {
            "kanji": "再入国",
            "hiragana": "さいにゅうこく",
            "nom": "TÁI NHẬP CẢNH",
            "meaning": "Tái nhập cảnh, nhập cảnh lại"
        }
    ],
    "49": [
        {
            "kanji": "勤める",
            "hiragana": "つとめる",
            "nom": "CẦN",
            "meaning": "Làm việc cho"
        },
        {
            "kanji": "会社に勤める",
            "hiragana": "かいしゃにつとめる",
            "nom": "HỘI XÃ CẦN",
            "meaning": "Làm việc cho công ty"
        },
        {
            "kanji": "掛ける",
            "hiragana": "かける",
            "nom": "QUẢI",
            "meaning": "Ngồi"
        },
        {
            "kanji": "椅子に掛ける",
            "hiragana": "いすにかける",
            "nom": "Ỷ TỬ QUẢI",
            "meaning": "Ngồi trên ghê"
        },
        {
            "kanji": "過ごす",
            "hiragana": "すごす",
            "nom": "QUÁ",
            "meaning": "Trải qua, sống"
        },
        {
            "kanji": "寄る",
            "hiragana": "よる",
            "nom": "KÝ",
            "meaning": "Ghé qua, ghé vào"
        },
        {
            "kanji": "銀行に寄る",
            "hiragana": "ぎんこうによる",
            "nom": "NGÂN HÀNG KÝ",
            "meaning": "Ghé vào ngân hàng"
        },
        {
            "kanji": "召し上がる",
            "hiragana": "めしあがる",
            "nom": "TRIỆU THƯỢNG",
            "meaning": "Ăn uống ( kính ngữ của 食べ"
        },
        {
            "kanji": "ご覧になる",
            "hiragana": "ごらんになる",
            "nom": "LÃM",
            "meaning": "Xem ( kính ngữ của 見る )"
        },
        {
            "kanji": "ご存知です",
            "hiragana": "ごぞんじです",
            "nom": "TỒN TRI",
            "meaning": "Biết ( kính ngữ của 知る)"
        },
        {
            "kanji": "挨拶",
            "hiragana": "あいさつ",
            "nom": "AI TẠT",
            "meaning": "Chào hỏi"
        },
        {
            "kanji": "灰皿",
            "hiragana": "はいざら",
            "nom": "HÔI MÃNH",
            "meaning": "Cái gạt tàn thuốc"
        },
        {
            "kanji": "旅館",
            "hiragana": "りょかん",
            "nom": "LỮ QUÁN",
            "meaning": "Nhà trọ, nhà nghỉ kiểu Nhật"
        },
        {
            "kanji": "会場",
            "hiragana": "かいじょう",
            "nom": "HỘI TRƯỜNG",
            "meaning": "Hội trường"
        },
        {
            "kanji": "バス停",
            "hiragana": "ばすてい",
            "nom": "ĐÌNH",
            "meaning": "Trạm xe bus"
        },
        {
            "kanji": "貿易",
            "hiragana": "ぼうえき",
            "nom": "MẬU DỊCH",
            "meaning": "Thương mại"
        },
        {
            "kanji": "～様",
            "hiragana": "～さま",
            "nom": "DẠNG",
            "meaning": "Ngài"
        },
        {
            "kanji": "帰りに",
            "hiragana": "かえりに",
            "nom": "QUY",
            "meaning": "Trên đường về"
        },
        {
            "kanji": "遠慮なく",
            "hiragana": "えんりょなく",
            "nom": "VIỄN LỰ",
            "meaning": "Đừng có ngại, không khách"
        },
        {
            "kanji": "講師",
            "hiragana": "こうし",
            "nom": "GIẢNG SƯ",
            "meaning": "Giảng viên đại học"
        },
        {
            "kanji": "作品",
            "hiragana": "さくひん",
            "nom": "TÁC PHẨM",
            "meaning": "Tác phẩm nghệ thuật"
        },
        {
            "kanji": "受賞する",
            "hiragana": "じゅしょうする",
            "nom": "THỤ THƯỞNG",
            "meaning": "Nhận thưởng"
        },
        {
            "kanji": "世界的に",
            "hiragana": "せかいてきに",
            "nom": "THẾ GIỚI ĐÍCH",
            "meaning": "Phạm vi toàn cầu, tính toàn"
        },
        {
            "kanji": "作家",
            "hiragana": "さっか",
            "nom": "TÁC GIA",
            "meaning": "Tác giả, nhà văn"
        },
        {
            "kanji": "長男",
            "hiragana": "ちょうなん",
            "nom": "TRƯỞNG NAM",
            "meaning": "Trưởng nam"
        },
        {
            "kanji": "長女",
            "hiragana": "ちょうじょ",
            "nom": "TRƯỞNG NỮ",
            "meaning": "Trưởng nữ"
        },
        {
            "kanji": "障害",
            "hiragana": "しょうがい",
            "nom": "CHƯỚNG NGẠI",
            "meaning": "Có khuyết tật, tàn tật"
        },
        {
            "kanji": "作曲",
            "hiragana": "さっきょく",
            "nom": "TÁC KHÚC",
            "meaning": "Việc sáng tác nhạc"
        },
        {
            "kanji": "活動",
            "hiragana": "かつどう",
            "nom": "HOẠT ĐỘNG",
            "meaning": "Hoạt động"
        },
        {
            "kanji": "ノーベル文学賞",
            "hiragana": "ノーベルぶんがくしょう",
            "nom": "VĂN HỌC THƯỞNG",
            "meaning": "Giải thưởng Nobel về Văn"
        },
        {
            "kanji": "テトを過ごす",
            "hiragana": "テトをすごす",
            "nom": "QUÁ",
            "meaning": "Ăn Tết"
        },
        {
            "kanji": "吸殻",
            "hiragana": "すいがら",
            "nom": "HẤP XÁC",
            "meaning": "Tàn thuốc lá"
        },
        {
            "kanji": "障害者",
            "hiragana": "しょうがいしゃ",
            "nom": "CHƯỚNG NGẠI GIẢ",
            "meaning": "Người khuyết tật, người tàn"
        },
        {
            "kanji": "視覚障害者",
            "hiragana": "しかくしょうがいしゃ",
            "nom": "THỊ GIÁC CHƯỚNG HẠI GIẢ",
            "meaning": "Người khiếm thị"
        }
    ],
    "50": [
        {
            "kanji": "参る",
            "hiragana": "まいる",
            "nom": "THAM",
            "meaning": "Đi, đến ( khiêm nhường ngữ"
        },
        {
            "kanji": "頂く",
            "hiragana": "いただく",
            "nom": "ĐÍNH",
            "meaning": "Nhận, ăn, uống ( khiêm nhường ngữ"
        },
        {
            "kanji": "申す",
            "hiragana": "もうす",
            "nom": "THÂN",
            "meaning": "Nói ( khiêm nhường ngữ của"
        },
        {
            "kanji": "致す",
            "hiragana": "いたす",
            "nom": "TRÍ",
            "meaning": "Làm (khiêm nhường ngữ của"
        },
        {
            "kanji": "拝見する",
            "hiragana": "はいけんする",
            "nom": "BÁI KIẾN",
            "meaning": "Nhìn, xem ( khiêm nhường"
        },
        {
            "kanji": "私",
            "hiragana": "わたくし",
            "nom": "TƯ",
            "meaning": "Tôi ( khiêm nhường ngữ của"
        },
        {
            "kanji": "お宅",
            "hiragana": "おたく",
            "nom": "TRẠCH",
            "meaning": "Nhà ( nhà của người ta theo"
        },
        {
            "kanji": "郊外",
            "hiragana": "こうがい",
            "nom": "GIAO NGOẠI",
            "meaning": "Ngoại ô"
        },
        {
            "kanji": "再来週",
            "hiragana": "さらいしゅう",
            "nom": "TÁI LAI CHU",
            "meaning": "Tuần sau nữa, 2 tuần sau"
        },
        {
            "kanji": "再来月",
            "hiragana": "さらいげつ",
            "nom": "TÁI LAI NGUYỆT",
            "meaning": "Tháng sau nữa, 2 tháng sau"
        },
        {
            "kanji": "再来年",
            "hiragana": "さらいねん",
            "nom": "TÁI LAI NIÊN",
            "meaning": "Năm sau nữa, 2 năm sau"
        },
        {
            "kanji": "半年",
            "hiragana": "はんとし",
            "nom": "BÁN NIÊN",
            "meaning": "Nữa năm"
        },
        {
            "kanji": "最初に",
            "hiragana": "さいしょに",
            "nom": "TỐI SƠ",
            "meaning": "Trước tiên, trước hết, lúc đầu"
        },
        {
            "kanji": "最後に",
            "hiragana": "さいごに",
            "nom": "TỐI HẬU",
            "meaning": "Cuối cùng, sau cùng"
        },
        {
            "kanji": "ただ今",
            "hiragana": "ただいま",
            "nom": "KIM",
            "meaning": "Bây giờ, vừa tới, vừa ngay"
        },
        {
            "kanji": "緊張する",
            "hiragana": "きんちょうする",
            "nom": "KHẨN TRƯƠNG",
            "meaning": "Căng thẳng, hồi hộp, run"
        },
        {
            "kanji": "放送する",
            "hiragana": "ほうそうする",
            "nom": "PHÓNG TỐNG",
            "meaning": "Phát sóng ( tivi , radio )"
        },
        {
            "kanji": "撮る",
            "hiragana": "とる",
            "nom": "TOÁT",
            "meaning": "Thu âm, ghi hình, quay phim"
        },
        {
            "kanji": "賞金",
            "hiragana": "しょうきん",
            "nom": "THƯỞNG KIM",
            "meaning": "Tiền thưởng"
        },
        {
            "kanji": "像",
            "hiragana": "ぞう",
            "nom": "TƯỢNG",
            "meaning": "Con voi"
        },
        {
            "kanji": "叶う",
            "hiragana": "かなう",
            "nom": "HIỆP",
            "meaning": "Thành hiện thực, được thực"
        },
        {
            "kanji": "協力する",
            "hiragana": "きょうりょくする",
            "nom": "HIỆP LỰC",
            "meaning": "Hợp tác"
        },
        {
            "kanji": "一言よろしいですか",
            "hiragana": "ひとことよろしいですか",
            "nom": "NHẤT NGÔN",
            "meaning": "Xin phép cho tôi nói đôi lời"
        },
        {
            "kanji": "心から",
            "hiragana": "こころから",
            "nom": "TÂM",
            "meaning": "Từ cái tâm, từ đáy lòng, từ"
        },
        {
            "kanji": "感謝する",
            "hiragana": "かんしゃする",
            "nom": "CẢM TẠ",
            "meaning": "Cảm ơn"
        },
        {
            "kanji": "伺う",
            "hiragana": "うかがう",
            "nom": "TÝ , TỨ",
            "meaning": "Hỏi thăm"
        },
        {
            "kanji": "お目にかかる",
            "hiragana": "おめにかかる",
            "nom": "MỤC",
            "meaning": "Gặp ( khiêm nhường ngữ của"
        },
        {
            "kanji": "ビデオに撮る",
            "hiragana": "ビデオにとる",
            "nom": "TOÁT",
            "meaning": "Quay phim, ghi hình"
        },
        {
            "kanji": "一言",
            "hiragana": "ひとこと",
            "nom": "NHẤT NGÔN",
            "meaning": "Đôi lời, vài lời"
        },
        {
            "kanji": "放送時間",
            "hiragana": "ほうそうじかん",
            "nom": "PHÓNG TỐNG THỜI GIAN",
            "meaning": "Thời gian phát sóng"
        },
        {
            "kanji": "生放送",
            "hiragana": "なまほうそう",
            "nom": "SINH PHÓNG TỐNG",
            "meaning": "Phát sóng trực tiếp"
        },
        {
            "kanji": "半月",
            "hiragana": "はんつき",
            "nom": "BÁN NGUYỆT",
            "meaning": "Nửa tháng"
        },
        {
            "kanji": "半日",
            "hiragana": "はんにち",
            "nom": "BÁN NHẬT",
            "meaning": "Nửa ngày"
        },
        {
            "kanji": "博物館",
            "hiragana": "はくぶつかん",
            "nom": "BÁC VẬT QUÁN",
            "meaning": "Viện bảo tàng"
        }
    ]
}
//endregion
;
module && (module.exports = {
  LESSONS,
});
