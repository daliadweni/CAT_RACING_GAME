var s1=0;
var s2=0;
var person = prompt("name of first player");
var person2 = prompt("name of second player");
function players(){
   
document.getElementById("p1").innerHTML=person.toUpperCase();
document.getElementById("s2").innerHTML=person2.toUpperCase();
document.getElementById("s1").innerHTML=person.toUpperCase();
document.getElementById("s2").innerHTML=person2.toUpperCase();
document.getElementById("res").innerHTML=0+ " - "+ 0;



}
function val(){
document.getElementById("longcat1").value++;
var x=document.getElementById("longcat1").value;
var y=document.getElementById("tacgnol2").value;

verif(x,y);
}
function val2(){
    document.getElementById("tacgnol2").value++;
var x1=document.getElementById("longcat1").value;
var y1=document.getElementById("tacgnol2").value;

verif(x1,y1);
    }
function verif(v1,v2){
    if(v1==100 && v2!=100){
        alert("GREAAAT"+person.toUpperCase()+" IS WINNNN ");
        document.getElementById("longcat1").value=0;
document.getElementById("tacgnol2").value=0;
s1++;
document.getElementById("res").innerHTML=s1+" - " +s2;
    }
    if(v2==100 && v1!=100){
        alert("GREAAAT "+person2.toUpperCase()+" IS WINNNN ");
        document.getElementById("longcat1").value=0;
        document.getElementById("tacgnol2").value=0;
        s2++;
        document.getElementById("res").innerHTML= s1 + " - " + s2;
    }
}
document.addEventListener("DOMContentLoaded",function(){
	let longcat1 = new LongcatRange("#longcat1"),
		tacgnol1 = new LongcatRange("#tacgnol1",true),
		longcat2 = new LongcatRange("#longcat2"),
		tacgnol2 = new LongcatRange("#tacgnol2",true);
});

class LongcatRange {
	constructor(qs,isDark) {
		this.el = document.querySelector(qs);
		this.sr = null;
		this.fill = null;
		this.value = null;

		if (this.el) {
			this.buildSlider(isDark);
			this.el.addEventListener("input",this.changeValue.bind(this));
		}
	}
	buildSlider(isDark) {
		this.el.className = "longcat__input";
		// create a div to contain the <input> and screen reader label
		let rangeWrap = document.createElement("div");
		rangeWrap.className = "longcat";
		rangeWrap.classList.add(`longcat--${isDark === true ? "dark" : "light"}`);
		this.el.parentElement.insertBefore(rangeWrap,this.el);
		// screen reader label
		this.sr = document.querySelector(`[for='${this.el.id}']`);
		if (this.sr) {
			this.sr.className = "longcat__sr";
			rangeWrap.appendChild(this.sr);
		}
		// input after screen reader label
		rangeWrap.appendChild(this.el);
		// range fill
		let rangeFill = document.createElement("span");
		rangeFill.className = "longcat__torso";
		rangeWrap.appendChild(rangeFill);
		// range value
		let rangeValue = document.createElement("span");
		rangeValue.className = "longcat__value";
		rangeValue.textContent = this.el.value;
		rangeWrap.appendChild(rangeValue);
		// initial value
		this.fill = rangeFill;
		this.value = rangeValue;
		this.changeValue();
	}
	changeValue() {
		// keep the value within range
		if (+this.el.value > this.el.max)
			this.el.value = this.el.max;
		else if (+this.el.value < this.el.min)
			this.el.value = this.el.min;
		// width of fill
		if (this.fill) {
			let pct = (this.el.value - this.el.min) / (this.el.max - this.el.min),
				fillWidth = pct * 100,
				thumbEm = 1,
				thumbEmPct = thumbEm * pct;

			this.fill.style.width = `calc(${fillWidth}% - ${thumbEmPct}em)`;
		}
		// value
		if (this.value)
			this.value.textContent = this.el.value;
	}
}
