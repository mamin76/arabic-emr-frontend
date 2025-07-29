export const patients = [
  {
    id: 1,
    name: "محمد الزهراني",
    age: 45,
    diagnosis: "السكري من النوع الثاني",
    medications: ["ميتافورمين", "أنسولين"],
  },
  {
    id: 2,
    name: "أحمد العمري",
    age: 32,
    diagnosis: "ارتفاع ضغط الدم",
    medications: ["أملوديبين", "لوسارتان"],
  },
];

export const getPatients = () =>
  new Promise((resolve) => setTimeout(() => resolve(patients), 500));

export const getPatientById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(patients.find((p) => p.id === id)), 500)
  );
