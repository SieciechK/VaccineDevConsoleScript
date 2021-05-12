function getVaccineCountByName(vacName) {
	//xpath scraped with Inspect element
	//vacName is equal to what is displayed on the subpage
	var xpath = "count(//div[@class='timeline__item' and span/span/@class='presence-status green-icon'"
	xpath += vacName == "" ? "])" : " and span/span[3]/text()='"+vacName+"'])"
	return $x(xpath)
}
function getTotalFromElementNumber(containerNo) {
	//xpath scraped with Inspect element 
	var xpath = "//div[contains(@class,'MuiGrid-container')]/div[2]/div[" + containerNo + "]/text()"
	return $x(xpath)[0].textContent
}
function getPerc(done, total) {
	return "(" + (done == '0' ? 0 : Math.round(done/total*100)) + "%)"
}
function makeLogLine(vaccine, containerNo) {
	var done = getVaccineCountByName(vaccine)
	var total = getTotalFromElementNumber(containerNo)
	var output = vaccine == "" ? "\nRazem" : vaccine
	return output + " zaszczepiono: " + done + "/" + total + " " + getPerc(done,total) + ", pozostało do zaszczepienia: " + Math.round(total - done) + "\n"
}
var message = makeLogLine("Pfizer", 2) + 
makeLogLine("Moderna", 3) + 
makeLogLine("AstraZeneca", 4) + 
makeLogLine("Johnson&Johnson", 5) + 
makeLogLine("",6)

window.alert (message)
