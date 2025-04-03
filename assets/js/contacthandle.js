
const toggleOtherInput = (selectId, inputId) => {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);
  select.addEventListener("change", () => {
    input.classList.toggle("d-none", select.value !== "Other");
  });
};

toggleOtherInput("companySize", "companySizeOther");
toggleOtherInput("industry", "industryOther");
toggleOtherInput("timeline", "timelineOther");
toggleOtherInput("contactMethod", "contactMethodOther");

const form = document.getElementById("consultationForm");
const alertMsg = document.getElementById("alertMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    orgName: document.getElementById("orgName").value,
    companySize: document.getElementById("companySize").value === "Other" ? document.getElementById("companySizeOther").value : document.getElementById("companySize").value,
    industry: document.getElementById("industry").value === "Other" ? document.getElementById("industryOther").value : document.getElementById("industry").value,
    timeline: document.getElementById("timeline").value === "Other" ? document.getElementById("timelineOther").value : document.getElementById("timeline").value,
    contactMethod: document.getElementById("contactMethod").value === "Other" ? document.getElementById("contactMethodOther").value : document.getElementById("contactMethod").value,
    message: document.getElementById("message").value,
  };

  try {
    const res = await fetch("http://localhost:3000/send-consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alertMsg.innerHTML = `<div class="alert alert-success">${result.message}</div>`;
    form.reset();
  } catch (err) {
    alertMsg.innerHTML = `<div class="alert alert-danger">Failed to send. Try again.</div>`;
  }
});
