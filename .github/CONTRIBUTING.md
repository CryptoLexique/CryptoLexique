![Contributing](/assets/CONTRIBUTING.gif)

Pour contribuer à ce lexique, vous devez suivre les étapes suivantes :


### Contribution générale

Vous rendre sur le github du projet en [cliquant ici](https://github.com/CryptoLexique/CryptoLexique)
1. **Forker** le projet.

![Fork](/assets/tutorials/Fork.gif)

2. **Dirigez** vous vers le dépot que vous venez de forker.

2. **Créer** une branche pour votre contribution. (Optionnel)

3. **Ajouter** votre contribution avec comme template : 
    - Un fichier (nomElement)**.md** dans le dossier approprié :

```bash
    ./src
    ├── A
    │
    ├── B 
    │   ├── index.md
    │   └── <nom>.md
    ├── ...
```
- Le titre de votre Lexique avec 3 '**#**' (h3).
- Un saut de ligne puis la description de votre Lexique avec '**>**' au début de la description.
- Essayez d'ajouter des images pour que ce soit plus intuitif.
Exemple : 
```bash
###Binance

> Un exchange.
...
```
Puis n'oubliez pas de **commit** votre contribution.
![Create](/assets/tutorials/Create.gif)


4. **Créer** une pull request avec un titre correspondant aux [Normes de Commit](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13).

N'oubliez pas de choisir dans la section "head repository" votre fork et dans la section "base repository" le dépôt de CryptoLexique, vous devriez voir votre contribution s'afficher si tout est bon.


Assurez-vous de bien completer la description.

![PullRequest](/assets/tutorials/PR.gif)

> Prenez exemple avec [Binance](/src/B/binance.md).

Une fois ces étapes validées, vous devrez attendre que votre contribution soit validée par un membre de l'équipe.

Si vous avez des questions, n'hésitez pas à nous contacter sur le [Discord](https://discord.gg/crypto-fr-926375322293768213).

### Contribution pour les avancés


Vous pouvez contribuer à ce lexique en passant par notre **CLI**. Pour cela, vous devrez avoir [NodeJS](https://nodejs.org/en/) d'installé puis il vous suffit de suivre les étapes suivantes :

**Après avoir forké le repo** :

1. Clonez le dépôt sur votre machine.
2. Installez les dépendances avec `npm i` à la racine du projet.
3. Lancez la commande `npm run lexique` pour lancer l'invité de commande.
4. Suivez les instructions de l'invité de commande.
5. Une fois votre contribution validée, vous pouvez la soumettre à la communauté en faisant une pull request sur le dépôt.

/!\ Vous devez avoir **TypeScript** d'installé sur votre machine pour pouvoir utiliser notre CLI, faites `npm i -g typescript` pour l'installer.