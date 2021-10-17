// 数据
const mockData = 
{
  "name":"中国",
  "children":
  [
    { 
      "name":"浙江" , 
        "children":
        [
            {"name":"杭州" },
            {"name":"宁波" },
            {"name":"温州" },
            {"name":"绍兴" }
        ] 
      },
    { 
      "name":"广西" , 
      "children":
      [
        {"name":"桂林"},
        {"name":"南宁"},
      ]
    },
    { 
      "name":"湖北" , 
      "children":
      [
        {"name":"武汉"},
        {"name":"宜昌"},
        {"name":"荆门"},
        {"name":"襄阳"},
        {"name":"黄石"},
        {"name":"鄂州"},
        {"name":"孝感"},
        {"name":"黄冈"},
         
      ]
    }
  ]
}

export {
  mockData
};
