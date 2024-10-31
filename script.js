document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupérer les valeurs des champs
    const fullName = document.querySelector('input[name="Full_Name"]').value;
    const address = document.querySelector('input[name="Adress"]').value;
    const phoneNumber = document.querySelector('input[name="Phone_number"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const date = document.querySelector('input[name="Date"]').value;
    const school = document.querySelector('input[name="School"]').value;
    const level = document.querySelector('input[name="Level"]').value;

    // Afficher le message de confirmation
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `
        <strong>Enregistrement réussi!</strong><br>
        Nom: ${fullName}<br>
        Adresse: ${address}<br>
        Téléphone: ${phoneNumber}<br>
        Email: ${email}<br>
        Date: ${date}<br>
        École: ${school}<br>
        Niveau: ${level}
    `;
    messageDiv.classList.remove('hidden');

    // Réinitialiser le formulaire
    document.getElementById('registration-form').reset();
});