import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export let renderCkeditor = () => {

    ClassicEditor.create(document.querySelector( '#ckeditor' ))
    .then( editor => {
		window.editor = editor;
    })
    .catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
    });
}
