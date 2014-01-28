var $form = $('.form-add')

function toggleForm() {
	$form.slideToggle()
	return false
}

function beforeSubmit(){
	//everything
}

$('#publicar_nav').on('click', toggleForm)
$form.on('submit', beforeSubmit)