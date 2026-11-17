# Nihongo Dōjō

Application web d'apprentissage du japonais, de zéro au JLPT N5.

Site : https://kirgnaar.github.io/Nihongo/

## Contenu

- 92 kana (hiragana et katakana) avec mnémoniques, dakuten et sons combinés
- 104 kanji N5 avec mnémoniques en français et exemples
- 10 leçons progressives : dialogue, vocabulaire, grammaire, mini-quiz à 4 niveaux (rédigé, reconnaissance, production, compréhension)
- Grammaire de référence : particules, comparaisons, conjugaison, adjectifs, nombres et compteurs, phrases de survie
- Quiz : 5 decks avec feedback d'erreur expliqué
- Révision espacée : Leitner 5 boîtes (intervalles 1, 2, 4, 8, 16 jours), 314 cartes, sessions quotidiennes et introduction automatique de nouvelles cartes
- Prononciation : synthèse vocale du navigateur, boutons sur les kana, kanji, vocabulaire, dialogues, phrases de survie et grammaire

## Structure

- index.html : squelette de la page
- css/styles.css : styles
- js/tts.js : synthèse vocale (Web Speech API)
- js/srs.js : moteur de révision espacée (Leitner)
- js/data/kana.js : kana (hiragana, katakana)
- js/data/kanji.js : 104 kanji N5 avec mnémoniques
- js/data/lecons.js : 10 leçons
- js/data/reference.js : grammaire de référence
- js/app.js : logique applicative

## Déploiement

GitHub Pages, branche main. Aucune étape de build. Après toute modification d'un fichier chargé, incrémenter le paramètre ?v=N dans index.html.

## Gouvernance

- Toute modification passe par une Pull Request.
- Le code applicatif est écrit par un agent local selon spécification ; le contenu pédagogique et les gros blocs de code sont rédigés et testés par l'examinateur, jamais par le modèle.
- Audit indépendant avant fusion : comparaison octet par octet, simulation Node complète, compteurs de contrôle (92 kana, 104 kanji, 10 leçons, 5 decks).
- Fusion manuelle par le propriétaire du dépôt.