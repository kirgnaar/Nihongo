Nihongo Dōjō
Application web d'apprentissage du japonais, de zéro au JLPT N5.
Site : https://kirgnaar.github.io/Nihongo/
Structure
index.html : squelette de la page
css/styles.css : styles
js/data/kana.js : kana (hiragana, katakana)
js/data/kanji.js : 104 kanji N5 avec mnémoniques
js/data/lecons.js : 10 leçons
js/data/reference.js : grammaire de référence
js/app.js : logique applicative
Déploiement
GitHub Pages, branche main. Aucune étape de build. Après toute modification d'un fichier chargé, incrémenter le paramètre ?v=N dans index.html.
Gouvernance
Toute modification passe par une Pull Request.
Les extractions de code sont faites par un agent local avec vérification par somme SHA-256 ; le contenu pédagogique n'est jamais écrit par le modèle.
Audit indépendant avant fusion : comparaison octet par octet et compteurs de contrôle (92 kana, 104 kanji, 10 leçons, 5 decks).
Fusion manuelle par le propriétaire du dépôt.
Somme de contrôle SHA-256 de chaque fichier modifié dans le rapport. Pull Request.
