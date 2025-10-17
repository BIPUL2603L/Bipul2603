document.addeventListener("DOMContentLoaded",()=>{
const loginForm = document.getElementByID("loginForm");
if(loginForm){
	loginForm.addeventListener("submit",function (e){
		e.preventDefault();

	const name = document.getElementByID("studentName").value;
	const ID = document.getElementByID("studentID").value;
	const teacher = document.getElementByID("teacherName").value;
	const password = document.getElementByID("examPassword").value;
	
	if(password === "exam123"){
		sessionStorage.setItem("studentName",name);
		window.location.href = "exam.html";
	}else{
		alert("Invalid exam password!");
	}
	});
}
const examForm = document.getElementByID("examForm");
if(examForm){
	examForm.addeventListener("submit",function(e){
		e.preventDefault();
		let score = 0;
		if(document.querySelector('input[name="q1"]:checked')?.value === "Paris")score++;
		if(document.querySelector('input[name="q2"]:checked')?.value === "JavaScript")score++;
		window.location.href=result.`html?score=${score}`;
}});
}
});