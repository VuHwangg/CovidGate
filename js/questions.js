
// Chứa những câu hỏi và câu trả lời trên website 

let questions = [
    {
    numb: 1,
    question: "Số thời gian trung bình mà bạn rời khỏi nhà trong một ngày là bao nhiêu?",
    answer5: "Trong khoảng từ 30 phút tới 2 tiếng",
    answer7: "Trong khoảng từ 2 tiếng tới 4 tiếng",
    answer10: "Nhiều hơn 4 tiếng",
    answer2: "Tôi không bao giờ ra khỏi nhà",
    options: [
      "Trong khoảng từ 30 phút tới 2 tiếng",
      "Trong khoảng từ 2 tiếng tới 4 tiếng",
      "Nhiều hơn 4 tiếng",
      "Tôi không bao giờ ra khỏi nhà"
    ]
  },
    {
    numb: 2,
    question: "Bạn đã tiêm bao nhiêu mũi Vaccine COVID-19?",
    answer10: "Chưa tiêm mũi nào",
    answer7: "Đã tiêm 1 mũi",
    answer4: "Đã tiêm 2 mũi",
    answer1: "Đã tiêm đủ 3 mũi",
    options: [
      "Chưa tiêm mũi nào",
      "Đã tiêm 1 mũi",
      "Đã tiêm 2 mũi",
      "Đã tiêm đủ 3 mũi"
    ]
  },
    {
    numb: 3,
    question: "Trong khoảng 2 tuần trở lại đây bạn có tiếp xúc với người nào được báo cáo là nghi nhiễm COVID-19 chưa?",
    answer10: "Đã từng tiếp xúc với F0",
    answer8: "Đã từng tiếp xúc với F1, F2",
    answer5: "Đã từng tiếp xúc với F3, F4, F5,..",
    answer1: "Chưa từng tiếp xúc",
    options: [
      "Đã từng tiếp xúc với F0",
      "Đã từng tiếp xúc với F1, F2",
      "Đã từng tiếp xúc với F3, F4, F5,..",
      "Chưa từng tiếp xúc"
    ]
  },
    {
    numb: 4,
    question: "Nơi bạn đang ở thuộc cấp độ dịch nào?",
    answer1: "Vùng Xanh (Nguy cơ thấp)",
    answer4: "Vùng Vàng (Nguy cơ trung bình)",
    answer7: "Vùng Cam (Nguy cơ cao)",
    answer10: "Vùng Đỏ (Nguy cơ rất cao)",
    options: [
      "Vùng Xanh (Nguy cơ thấp)",
      "Vùng Vàng (Nguy cơ trung bình)",
      "Vùng Cam (Nguy cơ cao)",
      "Vùng Đỏ (Nguy cơ rất cao)",
    ]
  },
    {
    numb: 5,
    question: "Trong khoảng 1 tuần trở lại đây bạn (hay người thân của bạn) có xuất hiện bất kỳ triệu chứng nào dưới đây không?",
    answer6: "Ngạt mũi, có dấu hiệu ho nhẹ, rát nhẹ ở cổ, đau tức ngực",
    answer8: "Ho nhiều, rát họng, ù tai, hụt hơi hoặc khó thở, mỏi cơ, chân tay lạnh, tiêu chảy",
    answer10: "Sốt và ớn lạnh, buồn nôn, mệt mỏi, đau đầu, rát họng, mất vị giác hoặc khứu giác",
    answer0: "Hoàn toàn khỏe mạnh",
    options: [
      "Ngạt mũi, có dấu hiệu ho nhẹ, rát nhẹ ở cổ, đau tức ngực",
      "Ho nhiều, rát họng, ù tai, hụt hơi hoặc khó thở, mỏi cơ, chân tay lạnh, tiêu chảy",
      "Sốt và ớn lạnh, buồn nôn, mệt mỏi, đau đầu, rát họng, mất vị giác hoặc khứu giác",
      "Hoàn toàn khỏe mạnh"
    ]
  },
    {
    numb: 6,
    question: "Bạn có suy nghĩ gì về quy tắc 5k cũng như những biện pháp phòng chống dịch trong thời điểm hiện nay?",
    answer0: "Tôi tự tìm hiểu và làm theo những biện pháp để phòng dịch một cách hiệu quả nhất, chia sẻ những thông tin đó cho gia đình và người thân, luôn tuân thủ theo quy tắc 5k",
    answer2: "Tôi không tự tìm hiểu những vẫn nắm được những biện pháp đó và luôn tuân thủ cũng như cảnh giác trước dịch bệnh trong mọi trường hợp",
    answer7: "Tôi không nắm được những thông tin trong việc phòng dịch, mặc dù vậy tôi luôn đeo khẩu trang khi ra khỏi nhà hay khi giao tiếp với người ngoài, hạn chế tiếp xúc quá gần với họ",
    answer10: "Mọi người hầu như đều đã được tiêm Vaccine ít nhất là 2 mũi, vì vậy dịch bệnh hiện tại không còn là một vấn đề đáng lo ngại nữa. F0, F1 bây giờ chỉ còn là chuyện thường ngày thôi",
    options: [
      "Tôi tự tìm hiểu và làm theo những biện pháp để phòng dịch một cách hiệu quả nhất, chia sẻ những thông tin đó cho gia đình và người thân, luôn tuân thủ theo quy tắc 5k",
      "Tôi không tự tìm hiểu những vẫn nắm được những biện pháp đó và luôn tuân thủ cũng như cảnh giác trước dịch bệnh trong mọi trường hợp",
      "Tôi không nắm được những thông tin trong việc phòng dịch, mặc dù vậy tôi luôn đeo khẩu trang khi ra khỏi nhà hay khi giao tiếp với người ngoài, hạn chế tiếp xúc quá gần với họ",
      "Mọi người hầu như đều đã được tiêm Vaccine ít nhất là 2 mũi, vì vậy dịch bệnh hiện tại không còn là một vấn đề đáng lo ngại nữa. F0, F1 bây giờ chỉ còn là chuyện thường ngày thôi"
    ]
  },
    {
    numb: 7,
    question: "Bạn thường xuyên giữ khoảng cách bao nhiêu với những người xung quanh ở nơi công cộng?",
    answer10: "Dưới 1 mét",
    answer3: "Từ 1 đến 2 mét",
    answer0: "Trên 2 mét",
    answer7: "Tôi không biết!!",
    options: [
      "Dưới 1 mét",
      "Từ 1 đến 2 mét",
      "Trên 2 mét",
      "Tôi không biết!!"
    ]
  },
    {
    numb: 8,
    question: "Bạn đang sống chung với bao nhiêu người?",
    answer1: "Tôi sống một mình",
    answer4: "Từ 2 đến 3 người",
    answer6: "Từ 4 đến 5 người",
    answer9: "Từ 6 người trở lên",
    options: [
      "Tôi sống một mình",
      "Từ 2 đến 3 người",
      "Từ 4 đến 5 người",
      "Từ 6 người trở lên"
    ]
  },
    {
    numb: 9,
    question: "Trong khoảng 2 tuần trở lại đây bạn có tham gia bất kỳ hoạt động nào có trên 10 người không?",
    answer2: "Tôi không tham gia bất kỳ hoạt động nào (tiếp xúc từ 1 tới 10 người)",
    answer5: "Tôi tham gia trực tiếp việc học tập, làm việc tại trường học hoặc cơ quan, tham gia buôn bán trao đổi hàng hóa (tiếp xúc từ 30 tới 50 người)",
    answer8: "Tôi tham gia và ăn uống trực tiếp tại các buổi tiệc nhỏ, họp lớp, họp clb, hoạt động nhóm nhỏ và vừa (tiếp xúc từ 20 tới 60 người)",
    answer10: "Tôi tham gia và ăn uống trực tiếp tại các buổi tiệc lớn, đám cưới, đám ma, lễ hội, du lịch, hoạt động nhóm lớn (tiếp xúc nhiều hơn 80 người)",
    options: [
      "Tôi không tham gia bất kỳ hoạt động nào (tiếp xúc từ 1 tới 10 người)",
      "Tôi tham gia trực tiếp việc học tập, làm việc tại trường học hoặc cơ quan, tham gia buôn bán trao đổi hàng hóa (tiếp xúc từ 30 tới 50 người)",
      "Tôi tham gia và ăn uống trực tiếp tại các buổi tiệc nhỏ, họp lớp, họp clb, hoạt động nhóm nhỏ và vừa (tiếp xúc từ 20 tới 60 người)",
      "Tôi tham gia và ăn uống trực tiếp tại các buổi tiệc lớn, đám cưới, đám ma, lễ hội, du lịch, hoạt động nhóm lớn (tiếp xúc nhiều hơn 80 người)"
    ]
  },
    {
    numb: 10,
    question: "Cuối cùng hãy cho chúng tôi biết độ tuổi của bạn?",
    answer4: "Trong khoảng từ 10 đến dưới 20 tuổi",
    answer10: "Trong khoảng từ 20 đến dưới 40 tuổi",
    answer7: "Trong khoảng từ 40 đến dưới 60 tuổi",
    answer1: "Trong khoảng từ dưới 10 hoặc trên 60 tuổi",
    options: [
      "Trong khoảng từ 10 đến dưới 20 tuổi",
      "Trong khoảng từ 20 đến dưới 40 tuổi",
      "Trong khoảng từ 40 đến dưới 60 tuổi",
      "Trong khoảng từ dưới 10 hoặc trên 60 tuổi"
    ]
  },
];