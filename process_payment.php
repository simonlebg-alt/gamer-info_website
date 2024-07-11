<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $product_id = $_POST['product_id'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $carte_credit = $_POST['carte_credit'];
    $expiration = $_POST['expiration'];
    $cvv = $_POST['cvv'];

    // Ici, vous pourriez effectuer la validation des données et le traitement de paiement réel.
    // Pour cet exemple, nous allons simplement afficher les informations envoyées.
    echo "<h2>Merci pour votre paiement !</h2>";
    echo "<p>Produit ID: $product_id</p>";
    echo "<p>Nom: $nom</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Carte de crédit: $carte_credit</p>";
    echo "<p>Date d'expiration: $expiration</p>";
    echo "<p>CVV: $cvv</p>";
} else {
    // Redirection vers la page précédente si le formulaire n'a pas été soumis
    header("Location: " . $_SERVER["HTTP_REFERER"]);
    exit;
}
?>
