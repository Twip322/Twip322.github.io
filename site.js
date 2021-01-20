function addThread(){
	const form = document.forms[0];
	
	form.addEventListener("submit", function(event){
	
		event.preventDefault();
         var data = new FormData(form);
         var str = 'Тред создан';
         var doRedirect = true;
         var icon = "success";
		 
		 if (data.get('name') == '') 
        {
			
            str ='Заполните название треда';
            icon = "error";
            doRedirect = false;
        }
		else if (data.get('content') == '') 
        {
            str ='Добавте описание треда';
            icon = "error";
            doRedirect = false;
        }
		Swal.fire({
            text: str,
            icon: icon,
            showConfirmButton: false
        });
		if (doRedirect) {
            setTimeout(function () {

                window.location.href = "addThread.html";
            }, 1800); 
        }
    });
	 form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}