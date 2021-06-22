window.addEventListener("load", function () {
	let loader = document.getElementById("loader");
	setTimeout(() => {
		loader.style.display = "none";
	}, 180);
});

// Sidebar mobile
let sidebar = document.getElementById("sidebar");
let sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarHandler = (flag) => {
	if (flag) {
		sidebarOverlay.style.opacity = 1;
		sidebar.classList.add("slideIn");
		sidebar.classList.remove("slideOut");
	} else {
		sidebarOverlay.style.opacity = 0;
		sidebar.classList.remove("slideIn");
		sidebar.classList.add("slideOut");
	}
};
// Sidebar list dropdown
let sales = document.getElementById("sales");
let salesList = document.getElementById("salesList");
sales.onclick = function () {
	salesList.classList.toggle("max-h-0");
	salesList.classList.toggle("mt-24");
};
// tabs
const navigate = (dest) => {
	window.location.href = dest;
};

//header
let headerContent = document.getElementById("headerContent");
const headerHandler = (flag) => {
	if (flag) {
		headerContent.classList.remove("slide-out");
		headerContent.classList.add("slide-in");
		headerContent.style.marginLeft = "-5px";
	} else {
		headerContent.classList.add("slide-out");
		headerContent.classList.remove("slide-in");
		headerContent.style.marginLeft = "0px";
	}
};

// finance dropdown
let financeFlag = true;
let financeContent = document.getElementById("finance");
const financeDropdown = () => {
	if (financeFlag) {
		financeContent.classList.remove("max-h-0");
		financeContent.classList.add("max-h-ease");
		financeFlag = false;
		languagesContent.classList.add("max-h-0");
		languagesContent.classList.remove("max-h-ease");
		languagesFlag = true;
		userContent.classList.add("max-h-0");
		userContent.classList.remove("max-h-ease");
		userFlag = true;
		// financeContent.classList.add("reveal");
	} else {
		financeContent.classList.add("max-h-0");
		financeContent.classList.remove("max-h-ease");
		financeFlag = true;
		//  financeContent.classList.remove("reveal");
	}
};

// csv dropdown
let csvFlag = true;
let csvContent = document.getElementById("csv");
const csvHandler = () => {
	if (csvFlag) {
		csvContent.classList.remove("max-h-0");
		csvContent.classList.add("max-h-ease");
		csvFlag = false;
	} else {
		csvContent.classList.add("max-h-0");
		csvContent.classList.remove("max-h-ease");
		csvFlag = true;
	}
};

// user-settings dropdown
let userFlag = true;
let userContent = document.getElementById("userSettings");
const userHandler = () => {
	if (userFlag) {
		userContent.classList.remove("max-h-0");
		userContent.classList.add("max-h-ease");
		userFlag = false;
		languagesContent.classList.add("max-h-0");
		languagesContent.classList.remove("max-h-ease");
		languagesFlag = true;
		financeContent.classList.add("max-h-0");
		financeContent.classList.remove("max-h-ease");
		financeFlag = true;
	} else {
		userContent.classList.add("max-h-0");
		userContent.classList.remove("max-h-ease");
		userFlag = true;
	}
};

// languages dropdown
let languagesFlag = true;
let languagesContent = document.getElementById("languagesContent");
const languagesHandler = () => {
	if (languagesFlag) {
		languagesContent.classList.remove("max-h-0");
		languagesContent.classList.add("max-h-ease");
		languagesFlag = false;
		userContent.classList.add("max-h-0");
		userContent.classList.remove("max-h-ease");
		userFlag = true;
		financeContent.classList.add("max-h-0");
		financeContent.classList.remove("max-h-ease");
		financeFlag = true;
	} else {
		languagesContent.classList.add("max-h-0");
		languagesContent.classList.remove("max-h-ease");
		languagesFlag = true;
	}
};

//date dropdown
let dateDropdown = document.getElementById("dateDropdown");
let dateTrigger = document.getElementById("dateTrigger");
let monthTrigger = document.getElementById("monthTrigger");
let periodTrigger = document.getElementById("periodTrigger");
let dateContent = document.getElementById("dateContent");
let monthContent = document.getElementById("monthContent");
let periodContent = document.getElementById("periodContent");
let DatoinervalTrigger = document.getElementById("Datoinerval");
let DatoinervalContent = document.getElementById("DatoinervalContent");
let dateFlag = true;
const dateHandler = () => {
	if (dateFlag) {
		dateDropdown.classList.remove("max-h-0");
		dateDropdown.classList.add("max-h-ease");
		dateFlag = false;
	} else {
		dateDropdown.classList.add("max-h-0");
		dateDropdown.classList.remove("max-h-ease");
		dateFlag = true;
	}
};
const dateSwicher = (type) => {
	switch (type) {
		case "date":
			dateTrigger.classList.add("active-nav-item");
			monthTrigger.classList.remove("active-nav-item");
			periodTrigger.classList.remove("active-nav-item");
			dateContent.classList.remove("hidden");
			monthContent.classList.add("hidden");
			periodContent.classList.add("hidden");
			break;
		case "month":
			dateTrigger.classList.remove("active-nav-item");
			monthTrigger.classList.add("active-nav-item");
			periodTrigger.classList.remove("active-nav-item");
			dateContent.classList.add("hidden");
			monthContent.classList.remove("hidden");
			periodContent.classList.add("hidden");
			break;
		case "period":
			dateTrigger.classList.remove("active-nav-item");
			monthTrigger.classList.remove("active-nav-item");
			periodTrigger.classList.add("active-nav-item");
			dateContent.classList.add("hidden");
			monthContent.classList.add("hidden");
			periodContent.classList.remove("hidden");
			break;
		default:
			break;
	}
};
const filterData = (type) => {
	switch (type) {
		case "Mined":
			dateTrigger.classList.add("active-nav-item");
			monthTrigger.classList.remove("active-nav-item");
			periodTrigger.classList.remove("active-nav-item");
			dateContent.classList.remove("hidden");
			monthContent.classList.add("hidden");
			periodContent.classList.add("hidden");
			DatoinervalContent.classList.add("hidden");
			DatoinervalTrigger.classList.remove("active-nav-item");
			break;
		case "Kvarrtal":
			dateTrigger.classList.remove("active-nav-item");
			monthTrigger.classList.add("active-nav-item");
			periodTrigger.classList.remove("active-nav-item");
			dateContent.classList.add("hidden");
			monthContent.classList.remove("hidden");
			periodContent.classList.add("hidden");
			DatoinervalContent.classList.add("hidden");
			DatoinervalTrigger.classList.remove("active-nav-item");
			break;
		case "Haivdr":
			dateTrigger.classList.remove("active-nav-item");
			monthTrigger.classList.remove("active-nav-item");
			periodTrigger.classList.add("active-nav-item");
			dateContent.classList.add("hidden");
			monthContent.classList.add("hidden");
			periodContent.classList.remove("hidden");
			DatoinervalContent.classList.add("hidden");
			DatoinervalTrigger.classList.remove("active-nav-item");
			break;
		case "Datoinerval":
			dateTrigger.classList.remove("active-nav-item");
			monthTrigger.classList.remove("active-nav-item");
			periodTrigger.classList.remove("active-nav-item");
			DatoinervalTrigger.classList.add("active-nav-item");
			DatoinervalContent.classList.remove("hidden");
			dateContent.classList.add("hidden");
			monthContent.classList.add("hidden");
			periodContent.classList.add("hidden");
			break;
		default:
			break;
	}
};

// search results dropdown
let searchFlag = true;
let searchContent = document.getElementById("searchResults");
const searchHandler = () => {
	if (searchFlag) {
		searchContent.classList.remove("max-h-0");
		searchContent.classList.add("max-h-ease");
		searchFlag = false;
	} else {
		searchContent.classList.add("max-h-0");
		searchContent.classList.remove("max-h-ease");
		searchFlag = true;
	}
};
const closeSearchHandler = () => {
	searchContent.classList.add("max-h-0");
	searchContent.classList.remove("max-h-ease");
	searchFlag = true;
};

// select contacts dropdown
let contactFlag = true;
let contactContent = document.getElementById("contactContent");
const contactHandler = () => {
	if (contactFlag) {
		contactContent.classList.remove("max-h-0");
		contactContent.classList.add("max-h-ease");
		contactFlag = false;
	} else {
		contactContent.classList.add("max-h-0");
		contactContent.classList.remove("max-h-ease");
		contactFlag = true;
	}
};
const closeContactHandler = () => {
	contactContent.classList.add("max-h-0");
	contactContent.classList.remove("max-h-ease");
	contactFlag = true;
};

// For outside click
$(window).click(function () {
	// Hide the menus if visible
	userContent.classList.add("max-h-0");
	userContent.classList.remove("max-h-ease");
	userFlag = true;
	financeContent.classList.add("max-h-0");
	financeContent.classList.remove("max-h-ease");
	financeFlag = true;
	languagesContent.classList.add("max-h-0");
	languagesContent.classList.remove("max-h-ease");
	languagesFlag = true;
});

$("#userTrigger").click(function (event) {
	event.stopPropagation();
});
$("#financeTrigger").click(function (event) {
	event.stopPropagation();
});
$("#languagesTrigger").click(function (event) {
	event.stopPropagation();
});

// settings expand collapse
let settingsCard = document.getElementById("settingsCard");
let settingsContent = document.getElementById("settingsContent");
let settingsCollapse = document.getElementById("settingsCollapse");
let settingsExpand = document.getElementById("settingsExpand");
let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
const settingsHandler = (flag) => {
	if (flag) {
		settingsContent.classList.add("max-h-0");
		settingsContent.classList.remove("max-h-ease");
		settingsContent.classList.remove("mt-50");
		settingsExpand.classList.add("hidden");
		settingsCollapse.classList.remove("hidden");
		deviceWidth < 768 ? (settingsCard.style.padding = "12px 22px 12px 32px") : (settingsCard.style.padding = "23px 44px 23px 64px");
	} else {
		settingsContent.classList.remove("max-h-0");
		settingsContent.classList.add("max-h-ease");
		settingsContent.classList.add("mt-50");
		settingsExpand.classList.remove("hidden");
		settingsCollapse.classList.add("hidden");
		deviceWidth < 768 ? (settingsCard.style.padding = "12px 22px 26px 32px") : (settingsCard.style.padding = "23px 44px 52px 64px");
	}
};

// calendar popup
let calendarContent = document.getElementById("calendarContent");
const calendarHandler = (flag) => {
	if (flag) {
		calendarContent.classList.remove("off-screen");
		calendarContent.classList.add("max-h-ease");
	} else {
		calendarContent.classList.add("off-screen");
	}
};

// terms popup
let termsContent = document.getElementById("termsContent");
const termsHandler = (flag) => {
	if (flag) {
		termsContent.classList.remove("off-screen");
		termsContent.classList.add("max-h-ease");
		window.scrollTo(0, 0);
		$("body,html").css("overflow", "hidden");
	} else {
		termsContent.classList.add("off-screen");
		$("body,html").css("overflow", "auto");
	}
};

// footer popup
let footerContent = document.getElementById("footerContent");
const footerHandler = (flag) => {
	if (flag) {
		footerContent.classList.remove("off-screen");
		footerContent.classList.add("max-h-ease");
		window.scrollTo(0, 0);
		$("body,html").css("overflow", "hidden");
	} else {
		footerContent.classList.add("off-screen");
		$("body,html").css("overflow", "auto");
	}
};

// total popup
let totalContent = document.getElementById("totalContent");
const totalHandler = (flag) => {
	if (flag) {
		totalContent.classList.remove("off-screen");
		totalContent.classList.add("max-h-ease");
	} else {
		totalContent.classList.add("off-screen");
	}
};

//  Form data
const termsFormHandler = (event) => {
	event.preventDefault();
	console.log("Terms form data ", formToObject("termsForm"));
	termsHandler(false);
};

const footerFormHandler = (event) => {
	event.preventDefault();
	console.log("Footer form data ", formToObject("footerForm"));
	footerHandler(false);
};
$(document).ready(function () {
	$(".toggle-finance-8").click(function (e) {
		$(this).children(".dropwdown").toggleClass("d-none");
	});
	$(".filter-dropdown-opener").click(function (e) {
		$(this).children(".filter-dropdown").toggleClass("d-none");
	});
});
