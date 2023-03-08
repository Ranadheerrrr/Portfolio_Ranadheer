<script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxeqH71NRilCO4t66DCX9TQuRbqt8-vKPZ29wVQ0n20__GQ5oBwchkHYO1n6Gy_CtpCjg/exec'
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })
    </script>