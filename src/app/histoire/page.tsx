
"use client"

import React, { forwardRef, useState, useEffect, useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const HTMLFlipBook = dynamic(() => import('react-pageflip'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-gold/20 mb-6" />
      <span className="text-gold/20 text-[10px] tracking-[0.8em] uppercase font-bold text-glow-gold">Infiltration du Grimoire...</span>
    </div>
  )
})

// Data Structure for the Entire History
const HISTORY_DATA = [
  {
    tome: "TOME I",
    title: "LES PREMIERS ÂGES D'ASGARM",
    chapters: [
      { title: "Avant les Royaumes", content: "Bien avant que les Hommes ne bâtissent leurs cités. Bien avant que les Nains ne creusent leurs forteresses. Bien avant même que les premiers royaumes ne portent un nom. Asgarm existait déjà. À cette époque reculée, le continent était méconnaissable. D'immenses forêts recouvraient les terres jusqu'à l'horizon. Les montagnes étaient plus hautes. Les océans plus vastes. Les saisons elles-mêmes semblaient différentes. La magie parcourait librement le monde. Elle n'était enfermée dans aucune baguette. Elle n'obéissait à aucune loi. Elle coulait naturellement à travers chaque rivière, chaque arbre, chaque pierre. Les anciens textes désignent cette période sous le nom d'Ère Primordiale. Une époque où les frontières entre le monde matériel et les énergies magiques étaient extrêmement faibles. La nature elle-même possédait une conscience. Les montagnes murmuraient. Les vents répondaient aux voyageurs. Les océans semblaient vivants. Et certaines créatures dépassaient tout ce que les peuples modernes pourraient imaginer. Des dragons dont les ailes obscurcissaient le soleil. Des géants capables de déplacer des collines entières. Des esprits élémentaires naissant au cœur des tempêtes. Des créatures immortelles qui n'existent aujourd'hui que dans les légendes. À cette époque, aucune race intelligente ne dominait le monde. Asgarm appartenait à la nature. Et la nature appartenait à la magie." },
      { title: "La Naissance des Premiers Elfes", content: "Nul ne sait exactement comment apparurent les premiers Elfes. Certains affirment qu'ils furent créés par les étoiles. D'autres prétendent qu'ils naquirent directement des Veines Arcaniques qui traversent le monde. Les plus anciens récits racontent qu'un arbre gigantesque se dressait autrefois au centre du continent. Un arbre si immense que son sommet disparaissait dans les nuages. Ses racines s'étendaient sous les océans. Son feuillage brillait la nuit comme une constellation. Les Elfes l'appelaient Elarion. L'Arbre-Monde. Selon les légendes, les premiers Elfes émergèrent de ses racines. Ils furent les premiers êtres capables de comprendre le langage de la magie. Contrairement aux créatures primordiales, ils ne possédaient pas une force immense. Mais ils possédaient quelque chose de plus précieux. L'intelligence. La curiosité. Et la capacité d'apprendre. Pendant des siècles, ils observèrent le monde. Étudièrent les phénomènes naturels. Écoutèrent les murmures des courants magiques. Peu à peu, ils commencèrent à maîtriser ce que personne n'avait jamais contrôlé auparavant. Les arcanes." },
      { title: "Les Veines Arcaniques", content: "Les premiers érudits elfiques découvrirent rapidement que la magie ne se trouvait pas partout de manière égale. Sous la surface du monde circulaient d'immenses courants invisibles. Ils les appelèrent les Veines Arcaniques. Ces veines parcouraient tout Asgarm. Certaines traversaient les montagnes. D'autres serpentaient sous les océans. Quelques-unes convergaient en des points particuliers où la magie devenait extrêmement puissante. Ces lieux furent appelés Nœuds Arcaniques. Les premiers villages elfiques furent construits autour de ces nœuds. Les récoltes y poussaient plus vite. Les maladies y étaient rares. Les créatures magiques s'y rassemblaient naturellement. Grâce à cette découverte, les Elfes commencèrent à prospérer. Ils bâtirent leurs premières cités. Développèrent leurs premières écoles. Et créèrent les fondations de ce qui deviendrait plus tard la magie moderne." },
      { title: "Les Baguettes Anciennes", content: "Durant plusieurs générations, les Elfes utilisaient la magie uniquement par la pensée. Mais cette méthode présentait des limites. Les sortilèges les plus complexes demandaient une concentration immense. La moindre erreur pouvait provoquer une catastrophe. C'est alors qu'apparut le mage Aerendil. Considéré aujourd'hui comme le père de toutes les baguettes. Selon les chroniques, Aerendil passa plus de trente années à étudier les arbres magiques qui poussaient autour d'Elarion. Un jour, il remarqua que certains bois réagissaient naturellement aux flux arcaniques. Il façonna alors un simple bâton. Lorsqu'il lança un sort à travers celui-ci, la magie répondit avec une précision inégalée. La première baguette venait de naître. Cette invention transforma le monde. En quelques siècles, chaque mage elfe possédait sa propre baguette. L'enseignement magique se développa. Les connaissances se multiplièrent. Et l'âge d'or des Elfes commença." },
      { title: "Les Cités de Lumière", content: "Les siècles passèrent. Les villages devinrent des villes. Les villes devinrent des royaumes. Parmi elles, une cité surpassait toutes les autres. Val'Theris. La Cité de Lumière. Construite autour du plus grand Nœud Arcanique connu. Ses tours de cristal pouvaient être aperçues à plusieurs jours de voyage. Ses bibliothèques contenaient davantage de savoir que n'importe quel autre lieu du monde. Les plus grands mages y vivaient. Les plus grands artisans y travaillaient. Les plus grands érudits y enseignaient. Pour beaucoup, Val'Theris représentait le sommet de la civilisation. Les Elfes croyaient alors avoir atteint leur apogée. Ils ignoraient que leur plus grande épreuve approchait déjà." },
      { title: "Les Murmures de l'Ombre", content: "Parmi les érudits de Val'Theris se trouvait un groupe particulier. Des chercheurs fascinés par les aspects les moins connus de la magie. Ils ne s'intéressaient pas à la lumière. Ni à la guérison. Ni à l'harmonie. Ils étudiaient les rêves. Les cauchemars. La mort. Les ombres. Ils voulaient comprendre tout ce que les autres préféraient ignorer. Au début, leurs recherches furent encouragées. La connaissance était sacrée. Mais certaines expériences commencèrent à inquiéter les Hauts Mages. Des créatures étranges furent invoquées. Des accidents se multiplièrent. Des apprentis disparurent. Des phénomènes inexpliqués apparurent dans plusieurs quartiers de la cité. Peu à peu, la peur s'installa. Les débats devinrent des disputes. Les disputes devinrent des conflits. Et bientôt, le peuple elfe se retrouva divisé. Sans le savoir, les premières graines de la future séparation venaient d'être semées. Car les érudits des ombres refusaient d'abandonner leurs recherches. Et les défenseurs de la magie arcanique refusaient de les laisser continuer. L'histoire d'Asgarm s'apprêtait à changer pour toujours..." }
    ]
  },
  {
    tome: "TOME II",
    title: "LA SÉPARATION DES LUNES",
    chapters: [
      { title: "Les Deux Visions", content: "Durant plusieurs siècles, les Elfes vécurent dans une prospérité sans précédent. Les grandes cités illuminaient les forêts ancestrales. Les écoles de magie accueillaient des milliers d'apprentis. Les connaissances progressaient chaque année. Pour beaucoup, l'Âge d'Or semblait éternel. Mais sous cette apparente perfection, une fracture grandissait. À Val'Theris, les débats concernant l'étude des ombres devenaient de plus en plus violents. Deux visions du monde s'opposaient désormais. La première était portée par les Hauts Mages Arcaniques. Selon eux, la magie devait servir l'harmonie, la protection et la préservation du monde. La seconde était défendue par les Chercheurs du Voile. Pour eux, aucune connaissance ne devait être interdite. Même les forces les plus dangereuses méritaient d'être étudiées. Ils considéraient la peur comme le véritable ennemi. Les années passèrent. Les discussions se transformèrent en rivalités. Les rivalités devinrent des haines. Et les haines préparèrent une tragédie." },
      { title: "Le Cercle du Voile", content: "Parmi les Chercheurs du Voile se trouvait un mage exceptionnel. Son nom était Nyr'Vael. Même ses adversaires reconnaissaient son génie. Il maîtrisait les arcanes mieux que la plupart des maîtres de son époque. Mais sa curiosité dépassait toutes les limites. Nyr'Vael était convaincu qu'une immense partie de la magie restait inconnue. Selon lui, les Elfes vivaient dans l'ignorance. Ils refusaient de regarder au-delà de leurs propres peurs. Autour de lui se forma progressivement un cercle d'érudits partageant ses idées. Ce groupe prit le nom de Cercle du Voile. Leurs recherches devinrent de plus en plus secrètes. Ils explorèrent les rêves. Les esprits. Les dimensions invisibles. La mémoire. Le temps. Et finalement... La mort." },
      { title: "La Nuit des Miroirs Noirs", content: "L'événement qui changea tout survint durant ce que l'histoire nomme aujourd'hui la Nuit des Miroirs Noirs. Dans les profondeurs de Val'Theris, le Cercle du Voile réalisa une expérience interdite. Les textes anciens décrivent un immense rituel. Des centaines de mages. Des dizaines de cristaux arcaniques. Des semaines de préparation. Le but exact du rituel reste inconnu. Mais les conséquences furent immédiates. Une onde magique traversa toute la cité. Les cristaux explosèrent. Les tours tremblèrent. Le ciel devint noir. Pendant plusieurs heures, les habitants virent leurs propres reflets agir indépendamment d'eux. Certains reflets parlaient. D'autres souriaient. D'autres encore observaient simplement leurs propriétaires avec des yeux vides. Lorsque le phénomène prit fin, plusieurs centaines d'elfes avaient disparu. Sans laisser la moindre trace. Jamais ils ne furent retrouvés." },
      { title: "Le Jugement de Val'Theris", content: "La catastrophe provoqua une onde de choc à travers tout le peuple elfe. Les Hauts Mages exigèrent des réponses. Nyr'Vael fut convoqué devant le Conseil des Sages. Durant plusieurs jours, les débats se poursuivirent. Les témoignages furent recueillis. Les preuves étudiées. Finalement, le verdict tomba. Le Cercle du Voile était déclaré responsable. Toutes les recherches liées aux ombres furent interdites. Les laboratoires furent fermés. Les ouvrages confisqués. Les membres du Cercle furent bannis. Mais Nyr'Vael refusa d'accepter le jugement. Devant le Conseil réuni, il prononça des paroles qui allaient marké l'histoire : « Vous craignez ce que vous ne comprenez pas. Un jour, cette peur vous condamnera. » Puis il quitta Val'Theris. Et avec lui partirent des milliers de partisans." },
      { title: "L'Exode Argenté", content: "L'exil dura plusieurs années. Les bannis traversèrent les montagnes. Les marais. Les plaines sauvages. Finalement, ils atteignirent les régions septentrionales du continent. Là où les nuits étaient plus longues. Là où les étoiles semblaient plus proches. Là où la lumière du soleil se faisait rare. Ils y fondèrent leurs propres cités. Leurs propres écoles. Leurs propres traditions. Progressivement, leur apparence commença à changer. Leur peau prit une teinte bleutée. Leurs yeux devinrent argentés. Leurs cheveux perdirent leurs couleurs naturelles. Les générations suivantes furent différentes de leurs ancêtres. Un nouveau peuple venait de naître. Les Elfes de Lune." },
      { title: "Les Cités Lunaires", content: "Les siècles suivants furent consacrés à la construction d'une nouvelle civilisation. Les Elfes de Lune bâtirent de magnifiques cités sous les étoiles. Leurs palais étaient sculptés dans des cristaux sombres. Leurs bibliothèques contenaient des savoirs oubliés. Leurs observatoires étudiaient les mouvements du ciel. Contrairement aux rumeurs propagées par certains royaumes, ils ne devinrent pas des monstres. Ils restaient des érudits. Des artistes. Des philosophes. Mais leur magie était différente. Ils comprenaient des forces que les autres peuples préféraient ignorer. Et cette différence alimentait la méfiance." },
      { title: "La Guerre des Frères", content: "Malheureusement, la paix ne dura pas. Des incidents frontaliers éclatèrent. Des accusations furent lancées. Des espions disparurent. Des rumeurs se propagèrent. Bientôt, les tensions dégénérèrent. Une guerre éclata entre certains royaumes elfes et plusieurs cités lunaires. Pendant cinquante ans, les combats ravagèrent les frontières. Aucun camp ne parvint à prendre l'avantage. Les pertes furent immenses. Les forêts brûlèrent. Les villes tombèrent. Les familles furent séparées. Cette période fut baptisée la Guerre des Frères. Car pour la première fois de leur histoire, les Elfes combattaient leurs propres cousins." },
      { title: "Le Pacte de la Lune Blanche", content: "Après cinquante années de souffrance, les dirigeants comprirent qu'aucune victoire n'était possible. Une rencontre fut organisée sous la pleine lune la plus brillante du siècle. Les représentants des deux peuples négocièrent durant douze jours. Finalement, un accord fut signé. Le Pacte de la Lune Blanche. Les frontières furent reconnues. Les hostilités cessèrent. Les échanges reprirent progressivement. Même si la méfiance demeurait, la guerre prit fin. Le monde retrouva un équilibre fragile." },
      { title: "L'Héritage de Nyr'Vael", content: "Les siècles passèrent. Nyr'Vael mourut. Puis ses élèves. Puis les élèves de ses élèves. Mais son héritage demeura. Les Elfes de Lune devinrent les gardiens des connaissances obscures. Ils étudièrent les malédictions. Les rêves. Les esprits. Les dimensions cachées. Ils développèrent une sagesse différente. Une sagesse fondée sur la compréhension des ténèbres plutôt que leur rejet. De nombreux peuples les craignaient. Certains les admiraient. Mais tous reconnaissaient leur puissance. Ainsi naquirent les deux grandes traditions magiques du monde : La Voie Arcannique des Hauts Elfes. Et la Voie Lunaire des Elfes de Lune." },
      { title: "Les Premiers Présages", content: "Alors que les Elfes et les Elfes de Lune reconstruisaient leurs relations, des événements étranges commencèrent à apparaître dans le monde. Des étoiles disparaissaient du ciel. Des créatures inconnues étaient aperçues aux frontières du continent. Des marins rapportaient avoir vu des lumières noires au-dessus de l'océan. Des prophètes faisaient les mêmes cauchemars. Partout. Les mêmes visions. Le même ciel déchiré. La même ombre gigantesque. Personne ne comprenait encore leur signification. Mais les premiers signes étaient là. Quelque chose approchait. Quelque chose qui allait bouleverser l'ensemble du monde. L'histoire d'Asgarm entrait dans une nouvelle ère. Une ère qui conduirait, plusieurs siècles plus tard, à la plus grande guerre jamais connue. La guerre des Cavaliers de l'Apocalypse." }
    ]
  },
  {
    tome: "TOME III",
    title: "L'ÈRE DES ROYAUMES",
    chapters: [
      { title: "L'Aube des Mortels", content: "Alors que les Elfes et les Elfes de Lune reconstruisaient leur monde après la Guerre des Frères, une nouvelle époque commençait discrètement. Dans les plaines du sud apparurent les premiers peuples humains. Contrairement aux Elfes, leur existence était brève. Leur force physique restait limitée. Leur compréhension naturelle de la magie était inexistante. Pourtant, ils possédaient un don que les anciens peuples ne comprenaient pas encore. L'adaptation. Là où les Elfes mettaient des siècles à modifier leurs traditions, les Humains changeaient en quelques générations. Là où les anciens peuples conservaient leurs coutumes, les Humains inventaient constamment. Leurs villages se transformaient rapidement en cités. Leurs chefs devenaient des rois. Leurs royaumes grandissaient à une vitesse qui étonnait les observateurs elfiques. Aucun ne pouvait imaginer qu'ils deviendraient un jour la puissance dominante du continent." },
      { title: "Les Enfants des Montagnes", content: "À l'est d'Asgarm, sous les sommets enneigés des Montagnes Grises, une autre civilisation prenait forme. Les Nains. Leurs origines demeurent mystérieuses. Certaines légendes affirment qu'ils furent façonnés directement par les Titans de pierre. D'autres racontent qu'ils émergèrent des profondeurs de la terre elle-même. Quelle que soit la vérité, une chose était certaine. Les Nains étaient différents. Ils ne recherchaient pas les vastes royaumes. Ils ne rêvaient pas de conquêtes. Ils construisaient. Ils forgeaient. Ils créaient. Leur premier royaume fut Khaz'Tor. Une immense cité souterraine creusée au cœur d'une montagne gigantesque. Ses galeries s'étendaient sur des centaines de kilomètres. Ses forges brûlantes créaient déjà des œuvres impossibles à reproduire. Rapidement, les Nains gagnèrent une réputation unique. Ils étaient les meilleurs bâtisseurs du monde." },
      { title: "Le Domaine Carmin", content: "À l'ouest du continent, au-delà des forêts brumeuses, naquit une troisième civilisation. Le Domaine Carmin. Les Vampires étaient déjà entourés de mystères. Leur apparence fascinait autant qu'elle inquiétait. Leur longévité dépassait largement celle des Humains. Leur maîtrise du corps et de l'esprit semblait surnaturelle. Mais contrairement aux légendes modernes, ils n'étaient pas des monstres. Ils possédaient une société raffinée. Des bibliothèques immenses. Des universités prestigieuses. Des académies de médecine réputées. Le premier souverain vampirique connu fut Valerian le Sage. Son règne posa les fondations d'une culture fondée sur la connaissance, la discipline et l'équilibre. Durant plusieurs siècles, le Domaine Carmin demeura isolé du reste du monde. Ses habitants préféraient observer les autres peuples plutôt que s'y mêler." },
      { title: "Les Cinq Civilisations", content: "Le temps poursuivit son œuvre. Les siècles passèrent. Peu à peu, cinq grandes civilisations dominèrent Asgarm. Les Royaumes Humains. Les Forteresses Naines. Les Royaumes Elfiques. Les Cités Lunaires. Le Domaine Carmin. Pour la première fois dans l'histoire, plusieurs peuples intelligents partageaient le même continent. Les relations restaient prudentes. Parfois amicales. Parfois tendues. Mais globalement pacifiques. Des routes commerciales apparurent. Les marchandises circulaient. Les connaissances voyageaient. Les cultures s'influençaient mutuellement. Asgarm entra dans une longue période de prospérité." },
      { title: "Les Grandes Découvertes", content: "Cette époque fut marquée par de nombreuses avancées. Les Elfes perfectionnèrent l'étude des Veines Arcaniques. Les Elfes de Lune développèrent les premières cartes célestes. Les Nains construisirent des mécanismes capables de fonctionner pendant des siècles. Les Humains créèrent les premières grandes bibliothèques publiques. Les Vampires réalisèrent d'importantes découvertes médicales. Jamais auparavant autant de savoir n'avait été accumulé. Les érudits considèrent aujourd'hui cette période comme le Premier Âge de la Connaissance. Beaucoup pensaient alors que le monde avait atteint son apogée. Ils avaient tort." },
      { title: "Les Prophètes des Étoiles", content: "Parmi les Elfes de Lune existaient des observateurs appelés les Veilleurs Stellaires. Leur rôle consistait à étudier les mouvements célestes. Durant des générations, ils surveillèrent le ciel. Jusqu'au jour où ils remarquèrent quelque chose d'étrange. Certaines étoiles disparaissaient. D'autres changeaient de position. Des constellations entières semblaient se déformer. Au début, personne ne prit ces découvertes au sérieux. Puis les phénomènes s'intensifièrent. Les Veilleurs commencèrent à faire les mêmes rêves. Tous décrivaient une immense fissure dans le ciel. Une tempête noire. Et quatre silhouettes avançant à travers les flammes. Leurs avertissements furent ignorés. La paix semblait trop solide pour être menacée." },
      { title: "Les Guerres des Couronnes", content: "Malgré la prospérité générale, les royaumes humains commencèrent à se disputer. Leurs populations augmentaient rapidement. Leurs ambitions également. Des conflits éclatèrent. Des alliances furent brisées. Des guerres furent menées pour le contrôle des terres fertiles. Pendant près de deux siècles, les royaumes humains s'affrontèrent régulièrement. Les autres peuples observaient avec inquiétude. Les Elfes considéraient ces guerres comme absurdes. Les Nains refusaient d'y participer. Les Vampires restaient neutres. Mais ces conflits eurent une conséquence inattendue. Ils forgèrent de grands chefs. De grands stratèges. De futurs héros. Parmi les familles qui émergèrent durant cette période se trouvait la lignée des Arkanor. Une famille dont descendrait un jour un certain Alaric." },
      { title: "Les Profondeurs Interdites", content: "Pendant ce temps, dans les montagnes orientales, les Nains découvrirent quelque chose d'inquiétant. Des galeries inconnues. Plus anciennes que leurs propres royaumes. Plus anciennes même que les premières cités elfiques. Les explorateurs envoyés dans ces tunnels rapportèrent d'étranges observations. Des symboles inconnus. Des salles gigantesques. Des portes colossales impossibles à ouvrir. Et surtout... Des traces prouvant qu'une civilisation oubliée avait existé avant toutes les autres. Le Haut Conseil Nain décida de sceller ces découvertes. Les archives furent classées secrètes. Les tunnels condamnés. Mais certains érudits continuèrent leurs recherches. Et ce qu'ils découvrirent les terrifia." },
      { title: "Le Dernier Avertissement", content: "Un siècle avant la catastrophe, les Veilleurs Stellaires publièrent leur dernier rapport. Ils affirmèrent que quelque chose approchait du monde. Quelque chose d'immense. Quelque chose capable de traverser les frontières entre les dimensions. Le document fut envoyé à tous les royaumes. Peu de dirigeants y prêtèrent attention. Les peuples vivaient dans l'abondance. Les cités prospéraient. Les marchés étaient remplis. Pourquoi craindre un danger invisible ? Cette erreur allait coûter très cher." },
      { title: "Le Ciel se Déchire", content: "Puis vint le jour que l'histoire n'oublierait jamais. Le jour où le ciel se déchira. Une immense fissure apparut au-dessus du continent. Visible depuis chaque royaume. Les oiseaux cessèrent de chanter. Les océans devinrent agités. Et partout, les peuples levèrent les yeux vers les cieux. À travers la faille apparurent des tempêtes noires. Puis des armées. Puis des créatures inconnues. Et enfin... Quatre silhouettes montées sur des destriers d'ombre. Les prophéties des Veilleurs Stellaires se réalisaient. Les Cavaliers de l'Apocalypse étaient arrivés. L'Âge des Royaumes touchait à sa fin. L'Âge de la Guerre commençait. Et bientôt, le destin d'Asgarm allait reposer entre les mains de trois héros : Alaric, Thorgrim et Valerius." }
    ]
  },
  {
    tome: "TOME IV",
    title: "LA VENUE DES CAVALIERS",
    chapters: [
      { title: "Le Jour où le Ciel Mourut", content: "L'année qui suivit l'apparition de la Grande Faille fut gravée à jamais dans la mémoire des peuples d'Asgarm. Partout sur le continent, le monde semblait changer. Les saisons devenaient imprévisibles. Des tempêtes éclataient sans raison. Puis vint le jour que les chroniques nomment encore aujourd'hui : Le Jour où le Ciel Mourut. Au lever du soleil, les habitants observèrent un phénomène impossible. Le ciel avait perdu sa couleur. La lumière semblait plus faible. Puis un grondement traversa le continent entier. Les montagnes tremblèrent. Et la faille apparue dans les cieux s'ouvrit davantage. Une immense déchirure noire traversa les nuages. Alors... Quelque chose commença à sortir." },
      { title: "Les Armées de l'Abîme", content: "Les premiers à apparaître ne furent pas les Cavaliers. Mais leurs armées. Des milliers. Puis des dizaines de milliers. Des créatures inconnues envahirent Asgarm. Certaines ressemblaient à des guerriers. D'autres à des monstres. Leurs armures semblaient vivantes. Aucun peuple n'avait jamais vu de telles créatures. Elles ne parlaient pas. Ne négociaient pas. Ne reculaient jamais. Elles avançaient. Toujours. Partout où elles passaient, la mort suivait. Les premiers villages humains furent rasés en quelques heures. Les fortins frontaliers disparurent. Et ce n'était que le début." },
      { title: "Le Premier Cavalier", content: "Trois semaines après le début de l'invasion, les survivants aperçurent pour la première fois l'un des maîtres de cette armée. Un cavalier gigantesque. Monté sur un destrier noir aux yeux rouges. Son armure semblait absorber la lumière. Il traversa seul plusieurs villages. Et partout où il passait... Les morts se relevaient. Les soldats tombés durant les batailles se dressaient à nouveau. Mais leurs yeux étaient vides. Leur âme avait disparu. Ils servaient désormais le Cavalier. Les chroniqueurs lui donnèrent un nom. Le Cavalier de la Mort. Le premier des Quatre." },
      { title: "La Chute des Royaumes Humains", content: "Les royaumes humains furent les premiers touchés. Leur position géographique les plaçait directement sur la route des envahisseurs. Malgré leur courage, ils étaient dépassés. Leurs armées étaient nombreuses. Mais elles combattaient un ennemi qu'elles ne comprenaient pas. Chaque bataille aggravait leur situation. Chaque soldat tombé rejoignait les rangs adverses. Les grandes cités commencèrent à tomber. Aldor. Velmora. Kareth. L'une après l'autre. Des millions d'habitants prirent la fuite. Le continent sombra progressivement dans le chaos." },
      { title: "Le Dernier Conseil des Elfes", content: "À Val'Theris, les Hauts Mages comprirent rapidement la gravité de la situation. Jamais ils n'avaient affronté une telle menace. La reine Melfetys convoqua alors le plus grand conseil de l'histoire elfique. Tous les royaumes furent invités. Pendant plusieurs semaines, les débats se poursuivirent. Une conclusion s'imposa finalement. Les armées traditionnelles ne suffiraient pas. Les Cavaliers maîtrisaient une magie inconnue. Une magie capable de corrompre la vie elle-même. Pour espérer survivre, il faudrait accomplir l'impensable." },
      { title: "La Marche des Nains", content: "Pendant ce temps, dans les Montagnes Grises, les Nains se préparaient à la guerre. Le Haut Roi Durnak ordonna la mobilisation générale. Toutes les forges furent réquisitionnées. Tous les guerriers rappelés. Les montagnes résonnaient jour et nuit. Le fer coulait à flots. Les armes s'accumulaient. Jamais l'histoire naine n'avait connu une telle mobilisation. Même les plus anciens vétérans comprirent qu'ils affrontaient un ennemi différent. Un ennemi capable de détruire le monde." },
      { title: "Le Silence du Domaine Carmin", content: "Contrairement aux autres peuples, les Vampires restèrent mystérieusement silencieux. Pendant plusieurs mois, aucune armée ne quitta le Domaine Carmin. Les autres royaumes commencèrent à craindre une trahison. Mais la vérité était toute autre. Dans les profondeurs du Domaine, les plus grands érudits vampires étudiaient les blessés ramenés du front. Ils tentaient de comprendre la magie des Cavaliers. Et ce qu'ils découvrirent terrifia même les plus courageux. Les envahisseurs n'utilisaient pas simplement la mort. Ils manipulaient directement l'essence des âmes. Une forme de magie totalement inconnue." },
      { title: "Les Batailles de l'Ouest", content: "Les premières grandes offensives furent lancées durant la deuxième année de guerre. Partout, les peuples tentèrent de résister. Mais les résultats furent catastrophiques. Des armées entières disparurent. Des forteresses réputées imprenables tombèrent en quelques jours. Les Cavaliers semblaient toujours avoir un coup d'avance. Comme s'ils connaissaient déjà les plans de leurs ennemis. La peur commença à se répandre. Pour la première fois, certains pensèrent que la fin du monde était inévitable." },
      { title: "Les Quatre Cavaliers", content: "Au fil de la guerre, les survivants découvrirent l'existence des quatre chefs ennemis. Le Cavalier de la Mort. Le Cavalier de la Ruine. Le Cavalier de la Famine. Le Cavalier du Désespoir. Chacun possédait sa propre armée. Son propre territoire. Ses propres pouvoirs. Lorsqu'ils combattaient séparément, ils étaient déjà presque invincibles. Mais lorsqu'ils apparaissaient ensemble... Des villes entières disparaissaient. Aucun royaume ne pouvait leur résister. Même les plus grands mages elfiques étaient impuissants." },
      { title: "L'Aube des Héros", content: "Alors que les ténèbres gagnaient du terrain, trois destins commencèrent à se dessiner. Dans un royaume humain en ruine naquit un jeune capitaine nommé Alaric. Dans les profondeurs de Khaz'Tor travaillait un maître forgeron appelé Thorgrim Main-de-Pierre. Et dans le Domaine Carmin, un noble érudit du nom de Valerius étudiait sans relâche les mystères de la magie du sang. À cette époque, personne ne connaissait encore leurs noms. Mais bientôt... Leurs chemins allaient changer le destin d'Asgarm. Car la guerre ne faisait que commencer. Et les plus grandes batailles restaient encore à venir." }
    ]
  },
  {
    tome: "TOME V",
    title: "LE SACRIFICE DE MELFETYS",
    chapters: [
      { title: "La Chute de Val'Theris", content: "Trois années s'étaient écoulées depuis l'arrivée des Cavaliers. Trois années de guerre. Trois années de défaites. Partout, les royaumes reculaient. Les cités brûlaient. Même les immortels commençaient à perdre espoir. Puis vint le siège de Val'Theris. La Cité de Lumière. Le joyau des Elfes. Depuis des millénaires, ses tours de cristal dominaient le continent. Ses bibliothèques contenaient davantage de connaissances que toutes les autres cités réunies. Pourtant... Même Val'Theris ne pouvait arrêter les Cavaliers. Pendant cent jours, la cité résista. Mais chaque défense brisée renforçait l'ennemi. Et au cent-unième jour... Les remparts tombèrent." },
      { title: "Le Dernier Conseil", content: "Alors que les armées ennemies envahissaient les rues de Val'Theris, la reine Melfetys convoqua le dernier conseil. Les plus grands mages. Les généraux survivants. La situation était désespérée. Les Humains étaient proches de l'effondrement. Les Nains étaient assiégés dans leurs montagnes. Les Vampires luttaient pour protéger leurs frontières. Et les Cavaliers continuaient d'avancer. Une seule vérité demeurait. Si rien ne changeait... Asgarm disparaîtrait. À jamais." },
      { title: "Le Secret des Premiers Elfes", content: "Ce soir-là, Melfetys révéla un secret gardé depuis des milliers d'années. Un secret connu uniquement des souverains elfes. La magie n'avait jamais réellement appartenu aux Elfes. Ils n'en étaient que les gardiens. Depuis les premiers âges du monde, les Elfes protégeaient l'Essence Arcannique. Une source de pouvoir immense. Une énergie capable d'éveiller la magie chez n'importe quel être vivant. Les anciens souverains avaient juré de ne jamais la libérer. Mais désormais... Le choix n'existait plus." },
      { title: "Une Reine Face au Destin", content: "Durant toute la nuit, Melfetys resta seule au sommet de la Tour des Astres. Elle contempla les flammes qui dévoraient sa cité. Elle entendit les cris de son peuple. Elle savait ce qu'elle devait faire. Mais elle connaissait aussi le prix à payer. Libérer l'Essence Arcannique signifiait briser les fondations de l'ancien monde. Les Elfes perdraient leur monopole sur la magie. Leur héritage millénaire disparaîtrait. Et surtout... Le rituel exigerait sa propre vie. À l'aube, sa décision était prise." },
      { title: "Le Sacrifice", content: "Le soleil se levait lorsque la reine entra dans le Sanctuaire Originel. Au centre du sanctuaire reposait le Cœur Arcannique. Une sphère de lumière pure. Melfetys s'avança seule. Elle posa ses mains sur le Cœur. Puis commença le rituel. La lumière envahit immédiatement toute la salle. Les Veines Arcaniques d'Asgarm s'illuminèrent simultanément. Puis... Le monde entier fut submergé par une vague de magie. Une vague qui traversa montagnes, océans, forêts. L'Essence Arcannique venait d'être libérée." },
      { title: "L'Éveil des Humains", content: "À des centaines de kilomètres de là, un capitaine humain nommé Alaric combattait sur les lignes de front. Son armée reculait. L'espoir disparaissait. Puis la vague magique le traversa. Une chaleur immense envahit son corps. Son esprit sembla s'ouvrir. Il sentit soudain les flux invisibles qui parcouraient le monde. La magie. Pour la première fois. Il pouvait la voir. La ressentir. La comprendre. Et il n'était pas le seul. Partout, des milliers d'humains connaissaient le même éveil." },
      { title: "Le Premier Sorcier Humain", content: "Au cours de la bataille qui suivit, Alaric tenta instinctivement de contrôler cette énergie nouvelle. Cherchant un moyen de la canaliser, il saisit une branche de chêne brisée au sol. Par réflexe, il concentra son énergie à travers celle-ci. La branche s'illumina. Des runes apparurent. La première baguette humaine venait de naître. Dans un éclair de lumière, Alaric projeta un torrent de flammes qui balaya une ligne entière d'ennemis. Un nouvel âge venait de commencer." },
      { title: "Thorgrim Main-de-Pierre", content: "Dans les montagnes, la vague atteignit également les Nains. Parmi eux se trouvait Thorgrim. Déjà reconnu comme l'un des plus grands forgerons de son temps. Lorsque la magie s'éveilla en lui, il ne chercha pas à lancer des sorts. Il observa. Il comprit rapidement que le métal réagissait aux flux magiques. Pendant des semaines, il travailla sans relâche. Jusqu'à créer les premières baguettes forgées. Des chefs-d'œuvre capables de supporter une puissance bien supérieure. Ses créations allaient bientôt équiper les armées du monde entier." },
      { title: "Valerius et le Sang Vivant", content: "Au Domaine Carmin, l'éveil magique prit une forme différente. Les Vampires découvrirent une affinité naturelle avec les énergies vitales. Parmi eux, Valerius fut le premier à comprendre ce phénomène. Au lieu de développer des sorts destructeurs, il concentra ses recherches sur la guérison. La régénération. Ses découvertes sauvèrent des milliers de blessés. Pour la première fois, les royaumes réalisèrent que la magie pouvait servir autre chose que la guerre." },
      { title: "La Mort de la Reine", content: "Alors que le monde s'éveillait à sa nouvelle puissance, Val'Theris tombait. Le rituel de Melfetys avait accompli sa mission. Mais son prix devait être payé. Au sommet de la Tour des Astres, les derniers témoins observèrent leur souveraine disparaître dans une lumière éclatante. Son corps se dissipa. La reine des Elfes n'était plus. Mais grâce à elle... Les peuples d'Asgarm avaient reçu une dernière chance. La guerre n'était pas terminée. Mais désormais, les peuples possédaient une arme capable de rivaliser avec les ténèbres. Et parmi eux se trouvaient trois noms qui deviendraient légendaires : Alaric, Thorgrim et Valerius." }
    ]
  },
  {
    tome: "TOME VI",
    title: "LES HÉROS DE LA GRANDE GUERRE",
    chapters: [
      { title: "L'Éveil d'une Génération", content: "Le sacrifice de Melfetys avait changé le monde. Partout à travers Asgarm, des milliers d'individus découvraient leurs nouveaux pouvoirs. Certains furent terrifiés. D'autres fascinés. Beaucoup périrent en tentant de maîtriser des forces qu'ils ne comprenaient pas. La magie était un don. Mais également un danger. Les premiers mois furent chaotiques. Pourtant, au milieu de ce désordre, des figures exceptionnelles commencèrent à émerger. Des individus capables non seulement d'utiliser la magie... Mais de la comprendre. Et de la maîtriser." },
      { title: "Alaric, le Porte-Flamme", content: "Depuis son éveil, Alaric n'avait cessé de combattre. Chaque bataille renforçait sa compréhension des arcanes. Rapidement, les survivants commencèrent à parler de lui. D'abord comme d'un capitaine. Puis comme d'un héros. Sur les champs de bataille, il inspirait le courage. Les soldats racontaient qu'il pouvait transformer la nuit en jour grâce à ses flammes. L'espoir devenait une force redoutable dans une guerre où le désespoir était l'arme principale de l'ennemi." },
      { title: "Thorgrim, le Forge-Runes", content: "Dans les profondeurs de Khaz'Tor, Thorgrim poursuivait ses travaux. Là où les autres voyaient la magie comme une arme, lui y voyait une science. Chaque jour, il expérimentait. Chaque nuit, il forgeait. Progressivment, il développa les fondations de l'art runique moderne. Il découvrit que certaines inscriptions pouvaient stabiliser les flux magiques. Grâce à ces découvertes, les Nains produisirent les premières baguettes standardisées. Thorgrim venait de transformer une puissance chaotique en véritable outil de guerre." },
      { title: "Valerius, le Seigneur Écarlate", content: "Pendant ce temps, Valerius poursuivait ses recherches dans le Domaine Carmin. Les champs de bataille lui fournissaient un nombre infini de blessés. Au fil des années, ses techniques devinrent extraordinaires. Il pouvait refermer des blessures mortelles. Stabiliser des mourants. Très vite, ses disciples formèrent le premier Ordre des Guérisseurs Écarlates. Une organisation qui sauverait d'innombrables vies durant la guerre." },
      { title: "Le Retour des Elfes de Lune", content: "Jusqu'alors, les Elfes de Lune avaient combattu séparément. Leur peuple restait méfiant envers les autres royaumes. Mais la progression des Cavaliers menaçait désormais leurs propres cités. Le Haut Astromancien Elyndar convoqua alors un conseil exceptionnel. Finalement, une décision fut prise. Les Elfes de Lune rejoindraient officiellement la guerre. Leurs mages maîtrisaient des arts que les Cavaliers eux-mêmes semblaient craindre. Les ombres. Les illusions." },
      { title: "La Première Victoire", content: "La bataille de Nareth marqua un tournant. Les armées des ténèbres avançaient vers une importante cité humaine. Mais cette fois, quelque chose était différent. Les forces d'Alaric étaient présentes. Les forgerons de Thorgrim avaient équipé les défenseurs. Les guérisseurs de Valerius accompagnaient les soldats. Pour la première fois, toutes les races combattaient ensemble. Lorsque le soleil se leva au quatrième matin, les armées des ténèbres reculaient. La première grande victoire d'Asgarm venait d'être remportée." },
      { title: "La Naissance de l'Alliance", content: "Après Nareth, les dirigeants comprirent enfin une vérité fondamentale. Aucun peuple ne pouvait gagner seul. Une grande assemblée fut organisée dans les ruines sacrées de Val'Theris. Humains. Nains. Elfes. Elfes de Lune. Vampires. Tous envoyèrent leurs représentants. Après plusieurs semaines de négociations, un traité historique fut signé. L'Alliance de la Lumière était née. Pour la première fois dans l'histoire, les cinq peuples s'engageaient à combattre sous une même bannière." },
      { title: "Les Années de Feu", content: "Les années suivantes furent les plus violentes de toute l'histoire d'Asgarm. Des batailles éclatèrent sur chaque frontière. Des héros émergèrent. D'autres tombèrent. Les pertes étaient terribles. Mais contrairement aux premières années de guerre, les royaumes résistaient. Chaque victoire renforçait leur confiance. Peu à peu, les Cavaliers cessèrent d'avancer. Pour la première fois. Ils étaient bloqués." },
      { title: "Le Cinquième Cavalier", content: "C'est durant cette période qu'apparut une rumeur terrifiante. Des survivants affirmaient avoir aperçu une cinquième silhouette. Plus puissante encore que les Quatre Cavaliers. Une présence observant les batailles depuis les profondeurs de la faille. Personne ne connaissait la vérité. Mais une chose était certaine. Les Quatre Cavaliers n'étaient pas les véritables maîtres de cette invasion. Ils servaient quelqu'un. Et cette révélation terrifia même les plus grands mages." },
      { title: "Le Seigneur des Cavaliers", content: "La vérité éclata lors de la bataille de Varn'Haal. Le ciel s'ouvrit une nouvelle fois. Une tempête noire descendit sur le champ de bataille. Puis une silhouette apparut. Immense. Revêtue d'une armure plus sombre que la nuit. Les Quatre Cavaliers s'agenouillèrent devant elle. Les chroniqueurs lui donnèrent un nom : Le Seigneur des Cavaliers. Cette nuit-là, les héros comprirent que toutes leurs victoires n'avaient servi qu'à attirer l'attention du véritable ennemi." }
    ]
  },
  {
    tome: "TOME VII",
    title: "LES PLAINES CALCINÉES",
    chapters: [
      { title: "La Dernière Marche", content: "L'apparition du Seigneur des Cavaliers changea tout. La peur se répandit dans les royaumes. Pourtant... Alaric refusa d'abandonner. Il convoqua les dirigeants des cinq peuples dans les ruines de Val'Theris. Et devant eux, il prononça : « Nous avons déjà perdu nos royaumes. Si nous reculons encore... Nous perdrons notre monde. » Ce jour-là, les peuples choisirent de se battre. Jusqu'au bout." },
      { title: "L'Armée d'une Civilisation", content: "Jamais Asgarm n'avait connu une mobilisation aussi immense. Chaque peuple répondit à l'appel. Les Humains levèrent leurs dernières légions. Les Nains ouvrirent leurs arsenaux les plus anciens. Les Elfes mobilisèrent leurs archimages. Les Elfes de Lune révélèrent des savoirs interdits. Les Vampires envoyèrent l'intégralité de l'Ordre Écarlate. Tous marchaient vers un même objectif : mettre fin à la guerre." },
      { title: "Le Choix du Champ de Bataille", content: "Les stratèges de l'Alliance étudièrent chaque région. Il fallait choisir un lieu capable d'accueillir la plus grande bataille de l'histoire. Finalement, leur choix se porta sur une vaste région désertique située au centre du continent. Une terre déjà ravagée par des années de guerre. Une terre appelée : Les Plaines Calcinées. C'est là que l'Alliance établit ses fortifications. C'est là que le destin du monde allait être décidé." },
      { title: "Les Sept Jours de Guerre", content: "Lorsque les armées des ténèbres arrivèrent, l'horizon disparut. Puis la bataille commença. Chaque journée coûta des milliers de vies. Chaque victoire semblait temporaire. Chaque défaite paraissait définitive. Pourtant l'Alliance résistait. En tant que dernier rempart du monde matériel, les soldats se battaient avec la rage du désespoir. En tant que témoins de la fin possible, les mages déchaînaient des sorts d'une puissance interdite." },
      { title: "La Chute des Cavaliers", content: "Le septième jour marqua un tournant. Pour la première fois, les Quatre Cavaliers furent engagés simultanément. Face à eux se dressaient les plus grands héros d'Asgarm. La bataille fut si violente que des montagnes furent détruites. Mais peu à peu, les Cavaliers commencèrent à reculer. Leurs généraux tombaient. Alors... Le Seigneur des Cavaliers entra lui-même dans la bataille." },
      { title: "Le Maître de l'Apocalypse", content: "Aucun récit ne parvient réellement à décrire sa puissance. Partout où il avançait, la réalité semblait se déformer. Des milliers de soldats moururent simplement en se trouvant à proximité de lui. Même les plus grands archimages furent balayés. Les défenses de l'Alliance s'effondrèrent. Les lignes furent brisées. Le désespoir revint. Et cette fois... Même Alaric douta." },
      { title: "Le Sacrifice de Thorgrim", content: "Voyant son ami reculer, Thorgrim comprit une terrible vérité. La bataille était perdue. À moins qu'un miracle ne se produise. Le maître forgeron nain chargea seul l'entité. Il brandissait son marteau runique, le plus grand chef-d'œuvre qu'il ait jamais créé. Il frappa. Le choc fut si violent que le champ de bataille entier trembla. Le Seigneur des Cavaliers fut stoppé quelques secondes. L'ennemi riposta, et Thorgrim fut détruit. Mais son sacrifice offrit à l'Alliance l'opportunité dont elle avait besoin." },
      { title: "Le Dernier Duel", content: "Alaric observa la chute de son ami. Et quelque chose changea en lui. Il leva sa baguette et concentra tout ce qu'il possédait : sa magie, sa volonté, sa colère. Le duel qui suivit devint immédiatement une légende. Les deux adversaires s'affrontèrent pendant des heures. La lumière contre les ténèbres. Le monde entier semblait suspendu à leur combat." },
      { title: "La Fin de l'Apocalypse", content: "Dans un cri qui résonna à travers tout Asgarm, Alaric libéra sa puissance. Une colonne de lumière traversa le ciel. Le sort frappa directement le Seigneur des Cavaliers. Puis l'entité se brisa. Son armure éclata. Son corps se désintégra. Au même instant, les Quatre Cavaliers furent anéantis. Leurs armées s'effondrèrent. Le silence revint. Pour la première fois depuis des années. La guerre était terminée." },
      { title: "La Cicatrice du Monde", content: "Mais la victoire eut un prix. Une explosion gigantesque secoua le continent. La déchirure céleste demeura. Elle ne se referma pas. Jamais. Même aujourd'hui, elle reste visible. Une cicatrice traversant les cieux. Alaric avait survécu, mais il était changé. Brisé. Comme le monde qu'il venait de sauver. Thorgrim était mort. Mais Asgarm existait encore. L'Apocalypse avait été repoussée. L'Âge des Cendres venait de commencer." }
    ]
  },
  {
    tome: "TOME VIII",
    title: "L'ÂGE DES CENDRES",
    chapters: [
      { title: "Le Silence Après la Tempête", content: "Lorsque la bataille prit fin, un silence étrange s'abattit. Les armées des ténèbres avaient disparu. Mais personne ne célébra. Car le monde était méconnaissable. Des royaumes entiers avaient disparu. Des forêts ancestrales avaient brûlé. La victoire avait été obtenue, mais Asgarm était une blessure ouverte. Les survivants marchèrent à travers les décombres, cherchant des traces de leur passé dans les cendres du présent." },
      { title: "Des Héros aux Légendes", content: "Les mois suivants furent consacrés aux hommages. Partout, des monuments furent construits. Le nom de Thorgrim Main-de-Pierre devint immortel. Les Nains lui consacrèrent une salle immense à Khaz'Tor. Valerius fut honoré comme le Sauveur Écarlate. Quant à Alaric... Il était devenu bien plus qu'un homme. Pour beaucoup, il incarnait désormais l'espoir lui-même." },
      { title: "Le Roi-Mage", content: "Après la guerre, les royaumes humains se retrouvèrent sans dirigeants. Les survivants réclamèrent un guide. Un symbole. Le choix fut unanime : Alaric fut couronné. Non comme simple roi, mais comme Roi-Mage. Le premier de l'histoire. Son règne marqua le début d'une nouvelle époque où la magie faisait désormais partie intégrante de la civilisation." },
      { title: "La Reconstruction", content: "Pendant plus de cinquante ans, les peuples reconstruisirent le continent. Les Nains rebâtirent les routes commerciales. Les Elfes replantèrent les forêts. Les Vampires ouvrirent des centres de soins. Des villes nouvelles apparurent. Petit à petit, la vie reprit. Pour la première fois depuis des générations, des enfants grandissaient sans connaître la guerre. L'espoir revenait." },
      { title: "Les Cicatrices de la Magie", content: "Pourtant, le sacrifice de Melfetys avait laissé des traces. Des blessures invisibles. Partout, des phénomènes étranges commençaient à apparaître. Des tempêtes arcaniques surgissaient. Des créatures mutaient. Les érudits appelèrent ces anomalies : Les Cicatrices Magiques. Personne ne comprenait réellement leur origine, mais elles se multipliaient comme les symptômes d'une maladie cosmique." },
      { title: "Les Enfants de l'Éveil", content: "Une nouvelle génération naquit. Les premiers enfants issus du monde transformé. Leurs pouvoirs dépassaient souvent ceux de leurs parents. Jamais autant de sorciers n'avaient existé. Cette abondance inquiétait les anciens. Car beaucoup de jeunes mages manquaient de discipline. Ils possédaient la puissance, mais pas encore la sagesse nécessaire pour la contenir." },
      { title: "Les Premiers Corrompus", content: "La guerre avait laissé derrière elle de nombreuses reliques. Des fragments de magie noire. Des individus ambitieux commencèrent à les rechercher. Ils voulaient devenir plus puissants. Au début, leurs expériences semblaient inoffensives. Puis les accidents se multiplièrent. Pour la première fois depuis la chute des Cavaliers, le monde comprit que le danger pouvait venir de l'intérieur." },
      { title: "Le Crépuscule d'Alaric", content: "Les années passèrent. Le Roi-Mage vieillissait. Sa magie demeurait immense, mais son énergie diminuait. Pourtant, il continua de voyager. Les chroniques racontent qu'il visitait régulièrement les Plaines Calcinées. Comme s'il surveillait quelque chose. Personne ne connaissait la raison de ces visites. Pas même ses plus proches compagnons d'armes." },
      { title: "La Dernière Vision", content: "Alaric fit un rêve récurrent durant ses dernières années. Il voyait la faille dans le ciel, puis une silhouette cachée derrière celle-ci. Bien plus grande que les Cavaliers. Dans chacune de ses visions, cette présence observait Asgarm. Elle attendait. Patiemment. Le Roi-Mage ne révéla jamais publiquement ces rêves, mais ils influencèrent ses dernières décisions stratégiques." },
      { title: "La Mort du Sauveur", content: "L'an 78 après la Grande Guerre. Alaric mourut. Sa disparition plongea le continent entier dans le deuil. Avant de mourir, il laissa un dernier message : « Les ténèbres que nous avons vaincues ne sont pas les premières. Et elles ne seront pas les dernières. Protégez la paix. » L'Âge des Cendres touchait à sa fin. L'Âge des Conclaves allait commencer." }
    ]
  },
  {
    tome: "TOME IX",
    title: "L'ÂGE DES CONCLAVES",
    chapters: [
      { title: "Un Monde Sans Héros", content: "La mort d'Alaric marqua la fin d'une époque. Pour la première fois, aucune figure n'était capable d'unifier naturellement les royaumes. Les peuples devaient apprendre à se gouverner eux-mêmes. Et ce changement apporta autant d'espoir que de dangers. Les vieilles rancunes, mises de côté durant l'invasion, commençaient doucement à refaire surface dans les salons diplomatiques." },
      { title: "Héritiers de la Guerre", content: "Une nouvelle génération de sorciers dominait désormais Asgarm. Ils n'avaient pas connu l'invasion. Pour beaucoup d'entre eux, la magie représentait simplement un outil. Une ressource pour obtenir richesse ou influence. Cette différence inquiétait les anciens survivants. Car ils savaient ce que pouvait devenir un sorcier lorsqu'il oubliait les leçons du sang et des larmes." },
      { title: "Le Pacte des Cinq Couronnes", content: "L'année 87 après la Grande Guerre, les souverains se réunirent à Val'Theris. Une idée finit par s'imposer : la magie devait être surveillée. Non pour être contrôlée, mais pour être protégée des dérives de l'ambition pure. Ainsi fut signé le Pacte des Cinq Couronnes. Le plus important traité de l'époque moderne." },
      { title: "Le Conclave des Arcanes", content: "Du Pacte naquit une institution nouvelle : Le Conclave des Arcanes. Une organisation indépendante ne servant aucun royaume. Ses membres étaient choisis parmi les meilleurs mages de toutes les races. Leur mission était claire : préserver l'équilibre, maintenir la paix et faire respecter les lois magiques héritées d'Alaric." },
      { title: "Les Gardiens du Monde", content: "Au fil des décennies, le Conclave grandit. Des tours furent construites dans chaque royaume. Ses membres fermaient des failles, neutralisaient des créatures dangereuses et détruisaient des artefacts instables. Ils devinrent progressivement les gardiens officiels d'Asgarm, respectés et craints pour leur autorité absolue sur l'éther." },
      { title: "Les Ambitieux", content: "Mais la prospérité attire toujours l'ambition. Certains sorciers développaient des idées dangereuses. Ils considéraient les lois magiques comme des chaînes. Ils voulaient explorer des domaines interdits : manipuler les âmes, modifier la vie. Au début, leurs activités restaient discrètes. Mais avec le temps, ils commencèrent à se regrouper dans les ombres de la société." },
      { title: "Conclave des Ombres", content: "L'identité de son fondateur reste un mystère. On ne connaît que son titre : Le Premier Ombremage. C'est lui qui rassembla les sorciers dissidents et les chercheurs bannis. Peu à peu, une organisation secrète et dangereuse naquit : Le Conclave des Ombres. Contrairement aux Arcanes, ils ne cherchaient pas l'équilibre, mais le pouvoir absolu." },
      { title: "La Guerre Invisible", content: "Pendant près de deux siècles, les deux Conclaves s'affrontèrent dans l'ombre. Le peuple ignorait presque tout de ce conflit. C'était une guerre d'espions, de secrets et de manipulations. Des agents disparaissaient, des laboratoires étaient détruits. Cette période fut appelée la Guerre Invisible, car elle ne laissa aucune trace dans les registres civils, seulement dans les rapports occultes." },
      { title: "Les Lois Arcanniques", content: "Face à la montée des menaces, le Conclave des Arcanes adopta des lois fondamentales. Certaines pratiques furent strictement interdites : manipulation forcée des âmes, expériences sur les êtres vivants. Les artefacts les plus dangereux furent scellés. Le monde entrait dans une ère de vigilance accrue où chaque sort était scruté par les yeux du Conclave." },
      { title: "L'Héritage d'Alaric", content: "Deux cent cinquante années après la guerre, le monde semblait stable. Mais dans les salles du Conclave, certains continuaient d'étudier les prophéties d'Alaric. Pourquoi avait-il observé la faille jusqu'à sa mort ? Nul ne possédait les réponses, mais certains commençaient à croire que la Grande Guerre n'était qu'un prologue. L'Âge du Savoir approchait." }
    ]
  },
  {
    tome: "TOME X",
    title: "LA FONDATION D'ASCARNIA",
    chapters: [
      { title: "L'Héritage des Héros", content: "Près de trois siècles s'étaient écoulés. Chaque génération naissait avec davantage de magie. Les anciennes méthodes d'enseignement ne suffisaient plus. Le monde avait besoin d'un lieu unique capable de transmettre le savoir à toutes les races de manière structurée et sécurisée. L'éveil constant des jeunes talents exigeait une institution à la mesure de ce nouveau monde." },
      { title: "Le Grand Projet", content: "L'idée fut proposée par un Haut Arcaniste nommé Elyrion Vael. Il proposa de créer une institution unique, un lieu neutre où toutes les races apprendraient ensemble. Les débats durèrent des années, car céder la formation de sa jeunesse à une instance supranationale effrayait certains rois. Finalement, la nécessité l'emporta sur la méfiance. Le projet Ascarnia était lancé." },
      { title: "La Montagne d'Arcania", content: "Au centre du continent existait une montagne ancienne appelée Arcania. Elle reposait sur l'une des plus puissantes Veines Arcaniques du monde. Elyrion choisit cet endroit pour son projet, malgré l'instabilité de son éther. Les travaux commencèrent, mobilisant des milliers d'artisans de tous les peuples. C'était le plus grand chantier depuis la reconstruction." },
      { title: "L'Île des Cieux", content: "Puis survint le miracle. Les maîtres runiques et les archimages unirent leurs connaissances pour accomplir l'impossible : faire voler une montagne. Des milliers de runes furent gravées. Sous les yeux du monde entier, le sommet de la montagne s'arracha à la terre pour s'élever dans les airs. Portée par la magie, l'Île d'Ascarnia venait de naître." },
      { title: "Construction de l'École", content: "Pendant des décennies, les bâtisseurs poursuivirent leur œuvre. Des tours furent élevées, des bibliothèques construites. Chaque peuple contribua : les Nains pour les fondations, les Elfes pour les jardins, les Vampires pour les salles médicales. Peu à peu, une cité entière dédiée au savoir apparut au-dessus des nuages, défiant les lois de la pesanteur." },
      { title: "Les Quatre Maisons", content: "Pour accueillir les élèves, Elyrion créa quatre maisons basées sur le caractère plutôt que la race. Aetheris pour la sagesse, Drakarys pour le courage, Sylvaris pour l'équilibre, et Umbrael pour l'ambition. Cette décision mélangea les peuples dès leur plus jeune âge, transformant profondément la structure sociale d'Asgarm pour les siècles à venir." },
      { title: "Les Premiers Élèves", content: "L'année 145 après la Grande Guerre, les portes furent ouvertes. Des centaines de jeunes sorciers arrivèrent de tout le continent. Cette première promotion, la Génération Fondatrice, partageait le même rêve de découverte. Ils furent les premiers à vivre l'expérience de la fraternité arcanique, jetant les bases d'une paix qui durerait des siècles." },
      { title: "L'Âge du Savoir", content: "Les siècles passèrent et Ascarnia prospéra. L'école devint le centre intellectuel du continent. Son influence dépassait celle des capitales. Elle servait de terrain neutre lors des conflits et de laboratoire pour chaque découverte majeure. Pour beaucoup, Ascarnia était devenue le cœur battant de la civilisation magique, la gardienne de la flamme d'Alaric." },
      { title: "Huit Siècles de Paix", content: "Pendant plus de sept cents ans, Asgarm connut une prospérité sans précédent. Le souvenir des Cavaliers s'éloignait. Les anciennes légendes devenaient des mythes. Pourtant, certains membres du Conclave continuaient de surveiller la faille dans le ciel. Ils savaient que le silence ne signifiait pas la fin du danger, mais peut-être simplement son attente." },
      { title: "L'Année 876", content: "Nous sommes désormais en l'an 876. Asgarm est plus puissante que jamais. Une nouvelle année scolaire s'apprête à commencer à Ascarnia. Des milliers de jeunes sorciers s'apprêtent à quitter leur foyer pour rejoindre les tours dans le ciel. Ils ignorent les mystères qu'ils découvriront, mais leurs vies vont changer. Bienvenue à Ascarnia. Bienvenue dans votre histoire." }
    ]
  }
];

const MagicalText = ({ text, title, tome }: { text: string; title?: string; tome?: string }) => {
  const words = text.split(/\s+/);
  
  const getHighlightClass = (word: string) => {
    const cleanWord = word.replace(/[.,;!?()]/g, '');
    const goldKeywords = ['Asgarm', 'Elfes', 'Magie', 'Alaric', 'Thorgrim', 'Melfetys', 'Valerius', 'Alliance', 'Lumière', 'Roi-Mage', 'Grimoire', 'Souveraineté', 'Harmonie', 'Arcanique', 'Équilibre', 'Savoir', 'Rois', 'Ascarnia', 'Reliques', 'Prophétie', 'Sceau', 'Cristal', 'Aethel', 'Fer', 'Carmin', 'Val\'Theris', 'Aerendil', 'Elarion', 'Khaz\'Tor', 'Valerian', 'Arkanor', 'Aetheris', 'Drakarys', 'Sylvaris', 'Umbrael'];
    const blueKeywords = ['Abysses', 'Cavaliers', 'Apocalypse', 'Mort', 'Ténèbres', 'Chaos', 'Corruption', 'Ombres', 'Obscure', 'Nécromantique', 'Maléfique', 'Invasion', 'Destruction', 'Anéantissement', 'Obscura', 'Mal', 'Sang', 'Cendres', 'Faille', 'Monstres', 'Menace', 'Inquiétants', 'Prophète Noir', 'Nyr\'Vael', 'Abîme'];

    if (goldKeywords.some(k => cleanWord.toLowerCase().includes(k.toLowerCase()))) {
      return "text-[#b48d1d] font-bold";
    }
    if (blueKeywords.some(k => cleanWord.toLowerCase().includes(k.toLowerCase()))) {
      return "text-[#0c1b41] font-bold";
    }
    return "";
  };

  return (
    <div className="flex flex-col h-full">
      {tome && (
        <span className="text-[8px] text-[#b48d1d]/60 font-bold tracking-[0.4em] uppercase mb-1">
          {tome}
        </span>
      )}
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[14px] font-headline text-[#4a3721] mb-4 tracking-tight border-b border-[#4a3721]/15 pb-2 uppercase"
        >
          {title}
        </motion.h3>
      )}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-inner">
        <motion.p className="text-[#3d2b19] font-serif leading-[1.6] text-justify text-[10px] italic">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-1 transition-colors duration-1000 ${getHighlightClass(word)}`}
            >
              {word}
            </span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  ({ children, number }, ref) => (
    <div className="page shadow-2xl relative" ref={ref}>
      <div className="absolute inset-4 border-[0.5px] border-[#4a3721]/10 pointer-events-none z-20" />
      <div className="page-content relative z-10">
        <div className="page-inner-content flex flex-col h-full">
          {children}
          {number && (
            <div className="page-footer font-serif italic text-[#b48d1d] text-[10px] tracking-[0.4em] mt-auto pt-4 text-center font-bold text-glow-gold">
              — {number} —
            </div>
          )}
        </div>
      </div>
    </div>
  )
)
Page.displayName = 'Page'

export default function HistoirePage() {
  const [isClient, setIsClient] = useState(false)
  const bookRef = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create flat list for summary
  const summaryItems = useMemo(() => {
    const items: any[] = [];
    let currentPage = 2;
    HISTORY_DATA.forEach(tome => {
      tome.chapters.forEach(chapter => {
        items.push({
          tome: tome.tome,
          title: chapter.title,
          page: currentPage++
        });
      });
    });
    return items;
  }, []);

  if (!isClient) return null

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 pt-28 pb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }} 
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold/20" />
            <span className="text-gold text-[9px] tracking-[1em] uppercase font-bold text-glow-gold">Archives d'Asgarm</span>
            <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h1 className="text-4xl font-headline uppercase tracking-tighter mb-4 leading-tight block">
            <span className="shine-text">Les Annales de la Souveraineté</span>
          </h1>
          <p className="text-[10px] tracking-[0.6em] uppercase font-bold opacity-80 block">
            <span className="shine-text">Explorez le Grimoire pour révéler notre histoire</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="relative max-w-full"
        >
          <div className="flip-book-container bg-transparent flex justify-center">
            <HTMLFlipBook 
              width={450} 
              height={600} 
              size="fixed" 
              minWidth={250}
              maxWidth={450}
              minHeight={300}
              maxHeight={600}
              className="flip-book" 
              ref={bookRef} 
              showCover={false} 
              useMouseEvents={true}
              maxShadowOpacity={0.4}
              flippingTime={800}
              style={{ margin: '0 auto' }}
              startPage={0}
              drawShadow={true}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {/* PAGE 1 - SOMMAIRE */}
              <Page number={1}>
                <div className="h-full flex flex-col pt-6 px-10">
                  <h2 className="text-[18px] font-headline text-[#b48d1d] uppercase tracking-[0.2em] mb-4 border-b border-[#b48d1d]/20 pb-3 w-full text-center text-glow-gold">
                    Sommaire
                  </h2>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="flex flex-col gap-1 w-full pb-8">
                      {summaryItems.map((ch, i) => (
                        <div 
                          key={i} 
                          className="flex items-baseline justify-between group cursor-pointer py-1.5 border-b border-[#4a3721]/5 hover:bg-[#b48d1d]/5 px-3 transition-colors" 
                          onClick={() => bookRef.current.pageFlip().flip(ch.page - 1)}
                        >
                          <div className="flex flex-col">
                            <span className="text-[7px] text-[#b48d1d]/60 font-bold uppercase tracking-[0.1em]">{ch.tome}</span>
                            <span className="text-[9px] font-serif uppercase text-[#0c1b41] group-hover:text-[#b48d1d] truncate pr-4">{ch.title}</span>
                          </div>
                          <div className="flex-1 border-b border-dotted border-[#b48d1d]/20 mx-2" />
                          <span className="text-[9px] font-serif text-[#4a3721]/70">{ch.page}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pb-4 flex flex-col items-center">
                    <div className="h-[1px] w-16 bg-[#b48d1d]/30 mb-3" />
                    <p className="text-[#b48d1d] text-[10px] uppercase tracking-[0.4em] italic font-bold text-glow-gold">Archives Royales</p>
                  </div>
                </div>
              </Page>

              {/* DYNAMIC PAGES GENERATION */}
              {HISTORY_DATA.flatMap((tome, tomeIndex) => 
                tome.chapters.map((chapter, chapterIndex) => {
                  // Calculate page number correctly
                  let pageNum = 2;
                  for (let t = 0; t < tomeIndex; t++) {
                    pageNum += HISTORY_DATA[t].chapters.length;
                  }
                  pageNum += chapterIndex;

                  return (
                    <Page key={`${tome.tome}-${chapterIndex}`} number={pageNum}>
                      <div className="h-full px-10 pt-6">
                        <MagicalText 
                          tome={tome.tome} 
                          title={chapter.title} 
                          text={chapter.content} 
                        />
                      </div>
                    </Page>
                  );
                })
              )}
            </HTMLFlipBook>
          </div>
        </motion.div>
      </div>

      <footer className="h-16 border-t border-gold/10 flex items-center justify-center bg-black/60 relative z-20 w-full mt-auto">
        <span className="shine-text text-[10px] tracking-[0.8em] uppercase font-bold">CONCLAVE SUPRÊME — ÉQUILIBRE D'ASGARM</span>
      </footer>

      <style jsx global>{`
        .page { background-color: #f4ecd8; background-image: url("https://www.transparenttextures.com/patterns/papyrus.png"); width: 450px; height: 600px; }
        .page-content { padding: 1.5rem; height: 100%; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(180, 141, 29, 0.2); border-radius: 10px; }
        .custom-scrollbar-inner::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar-inner::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-inner::-webkit-scrollbar-thumb { background: rgba(180, 141, 29, 0.1); border-radius: 10px; }
        .flip-book { transform-origin: center center; margin: 0 auto; }
      `}</style>
    </main>
  )
}
