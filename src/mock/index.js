import axios from "axios";

// بيانات وهمية
let appointments = [];
let patients = [
  {
    id: 1,
    name: "أحمد محمد",
    age: 30,
    condition: "ضغط مرتفع",
    notes: "يتناول علاج يومي"
  },
  {
    id: 2,
    name: "سارة عبد الله",
    age: 25,
    condition: "سكري",
    notes: "تحتاج فحص شهري"
  }
];

// استجابة وهمية عند الطلب
axios.interceptors.request.use((config) => {
  const { method, url, data } = config;

  // حجز موعد
  if (url === "/api/mock/appointments" && method === "post") {
    appointments.push(JSON.parse(data));
    return Promise.resolve({
      data: { message: "تم حجز الموعد بنجاح" },
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    });
  }

  // جلب المرضى
  if (url === "/api/mock/patients" && method === "get") {
    return Promise.resolve({
      data: patients,
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    });
  }

  return config;
});
