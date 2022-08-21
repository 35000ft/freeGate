function getCookie(cname) {
    console.log("getting cookies......");
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function getInfo() {
    console.log("reading info......");
    console.log(document.cookie);
    const name = getCookie("name");
    const stuId = getCookie("stuId");
    const school = getCookie("school");
    const major = getCookie("major");
    const _class = getCookie("class");
    const phone = getCookie("phone");
    const teacher1 = getCookie("teacher1");
    const gender = getCookie("gender");
    const idCard = getCookie("idCard");
    const reason = getCookie("reason");

    console.log(reason);
    console.log(stuId);
    console.log(school);

    setInfo(name, stuId, school, major, _class, phone, teacher1, gender, idCard, reason);
}

function setInfo(name, stuId, school, major, _class, phone, teacher1, gender, idCard, reason) {
    console.log("setting info...");
    console.log(name);
    console.log(stuId);
    console.log(reason);
    //设置姓名
    document.getElementById("label_3cbdc3db-be2f-4adc-9ba9-8f8ce020e21b").innerText = name;
    document.getElementById("applicant_name").innerText = "学生请假申请:申请人(提交," + name + ")";
    document.getElementById("stu_b1_name").innerText = "您(" + name + ")";
    document.getElementById("stu_b2_name").innerText = "您(" + name + ")";

    //设置学号
    document.getElementById("label_bfa90b78-d8d8-4ac6-b467-3a6bbeef86c9").innerText = stuId;

    //设置性别
    if (gender == "男") {
        gender = "男（male）";
    } else {
        gender = "女（female）";
    }
    document.getElementById("label_8dd04f22-c5c1-495b-9e6d-d2a949001d49").innerText = gender;

    //设置联系方式
    document.getElementById("label_27ca43a8-329b-4ab9-a568-c7beab590d30").innerText = phone;

    //设置所在院系
    document.getElementById("label_b17c5c29-bc22-4c9f-b24d-ee34447b0ac2").innerText = school;

    //设置专业
    document.getElementById("label_30eb77ce-9909-4d93-aa15-5caf31dfca86").innerText = major;

    //设置班级
    document.getElementById("label_81a6170f-378e-440a-a468-261a68d7ce38").innerText = _class;

    //设置身份证号码
    document.getElementById("label_66880e77-d757-4e7b-a4e0-93ed4efa20d3").innerText = idCard;

    //设置辅导员姓名
    document.getElementById("label_12f8bfed-ad89-4141-b06b-ecf619db6238").innerText = teacher1;
    document.getElementById("label_f27754bc-9f93-49c7-b610-9e435a6c8bc4").innerText = teacher1;
    document.getElementById("t1_b_name").innerText = teacher1;

    //设置理由
    document.getElementById("label_b5771863-033b-4fcb-9b45-4426b4509e3b").innerText = reason;

    setTime();
}

function setTime() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();//时
    let minutes = today.getMinutes(); //分

    //设置日期
    let date1 = year + "-" + p(month) + "-" + p(day);
    let date2 = year + "/" + p(month) + "/" + p(day);

    //设置时间
    let outTime = p(hour) + ":00";
    let inTime = "22:00";
    let nowTime = p(hour) + ":" + p(minutes);

    document.getElementById("label_ecf369dc-3483-4332-a14a-b11cfbbe9b60").innerText = date1;
    document.getElementById("label_1b3ef7a5-5c59-4a3f-8e4f-543359df79e6").innerText = date1;
    document.getElementById("label_eceefeef-aca5-40d9-bdc0-d1a3e3d42616").innerText = date1;
    document.getElementById("label_2eec6805-4ecd-45fa-9f55-34055e7c92d2").innerText = date1;
    document.getElementById("span_date").innerText = date2 + " " + nowTime;
    document.getElementById("label_4b946588-0b8b-4952-8cab-2e3a92cbfdfe").innerText = outTime;
    document.getElementById("label_fa5d6d38-416a-4c81-a86c-7a24c0117482").innerText = inTime;

}

//月日时分秒小于10补0
function p(s) {
    return s < 10 ? '0' + s : s;
}