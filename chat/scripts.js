var messageOption = function (text, value){
	return{
		message : text,
		id : value
	};
};

var fullName = function (name, surname){
	return{
		name : name,
		surname : surname
	};
};

var listforSavingMessages = [];

function run(){
	var send = document.getElementById('send');
	var rename = document.getElementById('rename');
	var deletee = document.getElementById('delete');
	var inSelect = document.getElementById('select');
	var edit = document.getElementById('send_edit_message');
	var onOff = document.getElementById('OnOff');
	
	if (restoreMessages() != null){
		var allMessages = restoreMessages();
		createAllMessages(allMessages);
	}
	
	if (restoreName() != null){
		var nameAndSurname = restoreName();
		createNameSurname(nameAndSurname);
	}
	
	send.addEventListener('click', EventSend);
	rename.addEventListener('click', EventRename);
	deletee.addEventListener('click', EventDelete);
	inSelect.addEventListener('click', EventActionSelect);
	edit.addEventListener('click', EventActionEdit);
	onOff.addEventListener('click', EventOnOff);
}

function EventOnOff(evtObj){
	var onoff = document.getElementById('OnOff');
	if(onoff.className =='btn btn-danger'){
		onoff.className = 'btn btn-success';
		onoff.value = "ON";
	}
	else{
	    onoff.className = 'btn btn-danger';
	    onoff.value = "OFF";
	}
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
		
		listforSavingMessages.push(messageOption(option.text, option.value));
		storeMessages(listforSavingMessages);
		}
}

function EventRename(evnObj){
	var myName = document.getElementById('name');
	var mySurname = document.getElementById('surname');
	var textArea = document.getElementById('name_surname');
	if(myName.value&&mySurname.value){
		storeName(fullName(myName.value, mySurname.value));
		textArea.value = myName.value + " " + mySurname.value;
		myName.value = "";
		mySurname.value = "";
	   
	}
}

function EventDelete(evnObj){
	var n_s = document.getElementById('name_surname');
	var mySurname = document.getElementById('surname');
	var edit_text = document.getElementById('textformessage');
	var index = document.getElementById('select').selectedIndex;
	var select = document.getElementById('select')[index];
	select.text = '\u2421';
	listforSavingMessages[index] = messageOption(select.text, index);
	storeMessages(listforSavingMessages);
	edit_text.value = "";
}

function EventActionSelect(evnObj){
	var textarea = document.getElementById('textformessage');
	var index = document.getElementById('select').selectedIndex;
	var selected = document.getElementById('select')[index];
	if(selected.text != '\u2421'){
	var subindex = selected.text.indexOf(":");
	   if (selected.text.indexOf('\u270e')!=(-1)){
	    	var subindex2 = selected.text.indexOf('\u270e');
	    }
	textarea.value = selected.text.substring(subindex+1, subindex2);
	}
}

function EventActionEdit(evnObj){
	var n_s = document.getElementById('name_surname');
	var mySurname = document.getElementById('surname');
	var edit_text = document.getElementById('textformessage');
	var index = document.getElementById('select').selectedIndex;
	var select = document.getElementById('select')[index];
	if(select.text != '\u2421'){
	select.text = n_s.value + ": "+ edit_text.value+ " " + '\u270e';
	listforSavingMessages[index] = messageOption(select.text, index);
	storeMessages(listforSavingMessages);
	edit_text.value = "";
	}
}

function storeMessages(listforSavingMessages){
	if(typeof (Storage) == "undefined"){
		alert('local storage is not accessible');
		return;
	}
	localStorage.setItem("list messages", JSON.stringify(listforSavingMessages));
}

function restoreMessages(){
	if(typeof (Storage) == "undefined"){
		alert('local storage is not accessible');
		return;
	}
	var item = localStorage.getItem("list messages");
	return item && JSON.parse(item);
}

function createAllMessages(allMessages){
	for (var i = 0; i < allMessages.length; i++){
		listforSavingMessages.push(allMessages[i]);
		addMessage(allMessages[i]);
	}
}

function addMessage(message){
	var selected = document.getElementById('select');
	var option = document.createElement("option");
	option.text = message.message;
	option.value = message.id;
	
	selected.add(option);
}

function storeName(mystruct){
	if (typeof (Storage) == "undefined"){
		alert('local storage is not accessible');
		return;
	}
	localStorage.setItem("MyName", JSON.stringify(mystruct));
}

function restoreName(){
	if(typeof (Storage) == "undefined"){
		alert('local storage in not accessible');
		return;
	}
	var item = localStorage.getItem("MyName");
	return item && JSON.parse(item);
}

function createNameSurname(nameAndSurname){
	var textArea = document.getElementById('name_surname');
	textArea.value = nameAndSurname.name + " " + nameAndSurname.surname;
}