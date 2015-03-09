function run(){
	var Send = document.getElementById('send');
	var Rename = document.getElementById('rename');
	var Delete = document.getElementById('delete');
	var InSelect = document.getElementById('select');
	var Edit = document.getElementById('send_edit_message');
	
	Send.addEventListener('click', EventSend);
	Rename.addEventListener('click', EventRename);
	Delete.addEventListener('click', EventDelete);
	InSelect.addEventListener('click', EventActionSelect);
	Edit.addEventListener('click', EventActionEdit);
}

function EventSend(evtObj){
	var areatext = document.getElementById('textarea');
	var textArea = document.getElementById('name_surname');
	if(areatext.value&&textArea.value){
		var selected = document.getElementById('select');
		var option = document.createElement("option");
		option.text = textArea.value + ": " + areatext.value;
		option.value = select.length;
		select.add(option);
		areatext.value = "";
		}
}

function EventRename(evnObj){
	var myName = document.getElementById('name');
	var mySurname = document.getElementById('surname');
	var textArea = document.getElementById('name_surname');
	if(myName.value&&mySurname.value){
		textArea.value = myName.value + " " + mySurname.value;
	}
}

function EventDelete(evnObj){
	var select = document.getElementById('select');
	var edit_text = document.getElementById('textformessage');
	select.remove(select.selectedIndex);// удаляет выбранный индекс
	edit_text.value = "";
}

function EventActionSelect(evnObj){
	var textarea = document.getElementById('textformessage');
	var index = document.getElementById('select').selectedIndex;
	var selected = document.getElementById('select')[index];
	var subindex = selected.text.indexOf(":");
	textarea.value = selected.text.substring(subindex+1);
}

function EventActionEdit(evnObj){
	var myName = document.getElementById('name');
	var mySurname = document.getElementById('surname');
	var edit_text = document.getElementById('textformessage');
	var index = document.getElementById('select').selectedIndex;
	var select = document.getElementById('select')[index];
	select.text = myName.value+ " " + mySurname.value + ":" + edit_text.value;
	edit_text.value = "";
}
