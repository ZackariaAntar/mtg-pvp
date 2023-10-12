const searchResults = (
	state = [],
	action
) => {
	switch (action.type) {
		case "SET_SEARCH_RESULTS":
			return action.payload;
		default:
			return state;
	}
};

export default searchResults;

		// {
		// 	name: "Legion's Initiative",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Enchantment",
		// 	types: ["Enchantment"],
		// 	rarity: "Rare",
		// 	set: "2X2",
		// 	setName: "Double Masters 2022",
		// 	text: "Red creatures you control get +1/+0.\nWhite creatures you control get +0/+1.\n{R}{W}, Exile Legion's Initiative: Exile all creatures you control. At the beginning of the next combat, return those cards to the battlefield under their owner's control and those creatures gain haste until end of turn.",
		// 	artist: "Jaime Jones",
		// 	number: "242",
		// 	layout: "normal",
		// 	multiverseid: "571575",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571575&type=card",
		// 	variations: ["c5e749f6-ad3e-59d8-890a-78ae253e96cb"],
		// 	rulings: [
		// 		{
		// 			date: "2013-04-15",
		// 			text: "The beginning of the next combat will happen even if the player whose turn it is doesn’t intend to attack with any creatures.",
		// 		},
		// 		{
		// 			date: "2013-04-15",
		// 			text: "A creature that’s both red and white will get +1/+1 from Legion’s Initiative.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Initiative der Legion",
		// 			text: "Rote Kreaturen, die du kontrollierst, erhalten +1/+0.\nWeiße Kreaturen, die du kontrollierst, erhalten +0/+1.\n{R}{W}, schicke die Initiative der Legion ins Exil: Schicke alle Kreaturen, die du kontrollierst, ins Exil. Bringe sie zu Beginn des nächsten Kampfes unter der Kontrolle ihres Besitzers ins Spiel zurück. Sie erhalten Eile bis zum Ende des Zuges.",
		// 			type: "Verzauberung",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571906&type=card",
		// 			language: "German",
		// 			multiverseid: 571906,
		// 		},
		// 		{
		// 			name: "Initiative pour la légion",
		// 			text: "Les créatures rouges que vous contrôlez gagnent +1/+0.\nLes créatures blanches que vous contrôlez gagnent +0/+1.\n{R}{W}, exilez l'Initiative pour la légion : Exilez toutes les créatures que vous contrôlez. Au début du prochain combat, renvoyez ces cartes sur le champ de bataille sous le contrôle de leur propriétaire, et ces créatures acquièrent la célérité jusqu'à la fin du tour.",
		// 			type: "Enchantement",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572237&type=card",
		// 			language: "French",
		// 			multiverseid: 572237,
		// 		},
		// 		{
		// 			name: "軍団の戦略",
		// 			text: "あなたがコントロールしているすべての赤のクリーチャーは＋１/＋０の修整を受ける。\nあなたがコントロールしているすべての白のクリーチャーは＋０/＋１の修整を受ける。\n{R}{W}, 軍団の戦略を追放する：あなたがコントロールしているすべてのクリーチャーを追放する。次の戦闘の開始時に、それらの追放されたカードをオーナーのコントロール下で戦場に戻す。それらのクリーチャーはターン終了時まで速攻を得る。",
		// 			type: "エンチャント",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572568&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 572568,
		// 		},
		// 		{
		// 			name: "教团先击",
		// 			text: "由你操控的红色生物得+1/+0。\n由你操控的白色生物得+0/+1。\n{R}{W}，放逐教团先击：放逐所有由你操控的生物。在下一次战斗开始时，将这些牌在其拥有者的操控下移回战场，且这些生物获得敏捷异能直到回合结束。",
		// 			type: "结界",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572899&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 572899,
		// 		},
		// 	],
		// 	printings: ["2X2", "DGM"],
		// 	originalText:
		// 		"Red creatures you control get +1/+0.\nWhite creatures you control get +0/+1.\n{R}{W}, Exile Legion's Initiative: Exile all creatures you control. At the beginning of the next combat, return those cards to the battlefield under their owner's control and those creatures gain haste until end of turn.",
		// 	originalType: "Enchantment",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "f4ca29b1-6047-59cc-927f-2d02c5deba0b",
		// },
		// {
		// 	name: "Lightning Helix",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "2X2",
		// 	setName: "Double Masters 2022",
		// 	text: "Lightning Helix deals 3 damage to any target and you gain 3 life.",
		// 	flavor: '"Rage is not the answer. Rage followed by fitting vengeance is the answer."\n—Ajani Goldmane',
		// 	artist: "Raymond Swanland",
		// 	number: "243",
		// 	layout: "normal",
		// 	multiverseid: "571576",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571576&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2017-11-17",
		// 			text: "If the chosen target is illegal when Lightning Helix tries to resolve, it won't resolve and none of its effects will happen. You won't gain 3 life.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Blitzhelix",
		// 			text: "Die Blitzhelix fügt einem Ziel deiner Wahl 3 Schadenspunkte zu und du erhältst 3 Lebenspunkte dazu.",
		// 			type: "Spontanzauber",
		// 			flavor: '„Zorn ist nicht die Antwort. Zorn und passende Vergeltung ist richtig."\n—Ajani Goldmähne',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571907&type=card",
		// 			language: "German",
		// 			multiverseid: 571907,
		// 		},
		// 		{
		// 			name: "Hélice d'éclairs",
		// 			text: "L'Hélice d'éclairs inflige 3 blessures à n'importe quelle cible et vous gagnez 3 points de vie.",
		// 			type: "Éphémère",
		// 			flavor: "« La rage ne résout jamais rien. Par contre, la rage suivie d'une juste vengeance résout tout. »\n—Ajani Crinièredor",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572238&type=card",
		// 			language: "French",
		// 			multiverseid: 572238,
		// 		},
		// 		{
		// 			name: "稲妻のらせん",
		// 			text: "クリーチャーやプレインズウォーカーやプレイヤーのうち１つを対象とする。稲妻のらせんはそれに３点のダメージを与え、あなたは３点のライフを得る。",
		// 			type: "インスタント",
		// 			flavor: "「怒りは答とならない。怒りにふさわしい復讐が伴えば、それが答だ。」\n――黄金のたてがみのアジャニ",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572569&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 572569,
		// 		},
		// 		{
		// 			name: "闪电螺旋",
		// 			text: "闪电螺旋对任意一个目标造成3点伤害，且你获得3点生命。",
		// 			type: "瞬间",
		// 			flavor: "「怒火不是回应。怒火之后的复仇才是回应。」\n～金鬃阿耶尼",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572900&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 572900,
		// 		},
		// 	],
		// 	printings: [
		// 		"2X2",
		// 		"DDH",
		// 		"DDN",
		// 		"E02",
		// 		"GK1",
		// 		"HOP",
		// 		"IMA",
		// 		"MB1",
		// 		"MMA",
		// 		"P06",
		// 		"PRM",
		// 		"RAV",
		// 		"SLC",
		// 		"STA",
		// 	],
		// 	originalText:
		// 		"Lightning Helix deals 3 damage to any target and you gain 3 life.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "ca1f16f9-50f5-5d59-aa31-30df5e641ba3",
		// },
		// {
		// 	name: "Martial Glory",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Common",
		// 	set: "2X2",
		// 	setName: "Double Masters 2022",
		// 	text: "Target creature gets +3/+0 until end of turn.\nTarget creature gets +0/+3 until end of turn.",
		// 	flavor: '"Yes, Boros tactics are unparalleled. But when your comrades are dying around you, inner strength must carry the day."\n—Gideon Jura, to Aurelia',
		// 	artist: "Raymond Swanland",
		// 	number: "249",
		// 	layout: "normal",
		// 	multiverseid: "571582",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571582&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2013-01-24",
		// 			text: "You may choose the same creature for both targets since the card says “target creature” multiple times. You may also choose two different creatures.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Soldatische Pracht",
		// 			text: "Eine Kreatur deiner Wahl erhält +3/+0 bis zum Ende des Zuges.\nEine Kreatur deiner Wahl erhält +0/+3 bis zum Ende des Zuges.",
		// 			type: "Spontanzauber",
		// 			flavor: '„Ja, die Boros-Taktiken sind unerreicht. Aber wenn deine Kameraden rund um dich herum sterben, kommt es vor allem auf die innere Stärke an."\n—Gideon Jura zu Aurelia',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571913&type=card",
		// 			language: "German",
		// 			multiverseid: 571913,
		// 		},
		// 		{
		// 			name: "Gloire martiale",
		// 			text: "Une créature ciblée gagne +3/+0 jusqu'à la fin du tour.\nUne créature ciblée gagne +0/+3 jusqu'à la fin du tour.",
		// 			type: "Éphémère",
		// 			flavor: "« Certes, les Boros sont des tacticiens hors pair. Mais quand on voit ses frères d'armes mourir alentour, c'est la force intérieure qui doit primer. »\n—Gideon Jura, à Aurélia",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572244&type=card",
		// 			language: "French",
		// 			multiverseid: 572244,
		// 		},
		// 		{
		// 			name: "軍部の栄光",
		// 			text: "クリーチャー１体と、クリーチャー１体を対象とする。ターン終了時まで、その前者は＋３/＋０の修整を受ける。\nターン終了時まで、その後者は＋０/＋３の修整を受ける。",
		// 			type: "インスタント",
		// 			flavor: "「確かにボロスの戦術は比類のないものだ。しかし仲間が自分の周りで命の危機に瀕しているときは、内なる力で乗り越えねばならない。」\n――ギデオン・ジュラからオレリアへ",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572575&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 572575,
		// 		},
		// 		{
		// 			name: "尚武荣光",
		// 			text: "目标生物得+3/+0直到回合结束。\n目标生物得+0/+3直到回合结束。",
		// 			type: "瞬间",
		// 			flavor: "「没错，波洛斯的战术无与伦比。但当身边的战友纷纷倒下，就得靠着内心力量支撑下去。」\n～基定尤拉告诉欧瑞梨",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572906&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 572906,
		// 		},
		// 	],
		// 	printings: ["2X2", "GK1", "GTC", "MB1"],
		// 	originalText:
		// 		"Target creature gets +3/+0 until end of turn.\nTarget creature gets +0/+3 until end of turn.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "e8fdb3b6-7a50-5d90-92fc-03d33377bdf7",
		// },
		// {
		// 	name: "Tenth District Legionnaire",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Common",
		// 	set: "2X2",
		// 	setName: "Double Masters 2022",
		// 	text: "Haste\nWhenever you cast a spell that targets Tenth District Legionnaire, put a +1/+1 counter on Tenth District Legionnaire, then scry 1.",
		// 	flavor: '"The Tenth is under heavy attack, but it\'s being handled. I sent Mileva."\n—Tajic',
		// 	artist: "Victor Adame Minguez",
		// 	number: "283",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "571616",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571616&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2019-05-03",
		// 			text: "Tenth District Legionnaire’s ability resolves before the spell that caused it to trigger. It resolves even if that spell is countered.",
		// 		},
		// 		{
		// 			date: "2019-05-03",
		// 			text: "You scry 1 even if you can’t put a +1/+1 counter on Tenth District Legionnaire, most likely because it has left the battlefield.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Legionärin des zehnten Distrikts",
		// 			text: "Eile\nImmer wenn du einen Zauberspruch wirkst, der die Legionärin des zehnten Distrikts als Ziel hat, lege eine +1/+1-Marke auf die Legionärin des zehnten Distrikts und wende dann Hellsicht 1 an.",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: '„Der Zehnte wird heftig angegriffen, aber keine Sorge. Ich habe Mileva geschickt."\n—Tajic',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=571947&type=card",
		// 			language: "German",
		// 			multiverseid: 571947,
		// 		},
		// 		{
		// 			name: "Légionnaire de la dixième circonscription",
		// 			text: "Célérité\nÀ chaque fois que vous lancez un sort qui cible la Légionnaire de la dixième circonscription, mettez un marqueur +1/+1 sur la Légionnaire de la dixième circonscription, puis regard 1.",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "« La Dixième subit une attaque brutale, mais tout va bien. J'ai envoyé Mileva. »\n—Tajic",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572278&type=card",
		// 			language: "French",
		// 			multiverseid: 572278,
		// 		},
		// 		{
		// 			name: "第10管区の軍団兵",
		// 			text: "速攻\nあなたが第10管区の軍団兵を対象とする呪文を唱えるたび、第10管区の軍団兵の上に＋１/＋１カウンター１個を置き、その後、占術１を行う。",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "「第10管区は激しい攻撃に曝されているが、対処できるだろう。ミレヴァを派遣した。」\n――タージク",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572609&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 572609,
		// 		},
		// 		{
		// 			name: "第十区军团兵",
		// 			text: "敏捷\n每当你施放以第十区军团兵为目标的咒语时，在第十区军团兵上放置一个+1/+1指示物，然后占卜1。",
		// 			type: "生物 ～人类／士兵",
		// 			flavor: "「第十区正遭受猛烈袭击，但一切尽在掌控。我派了米勒娃。」\n～塔疾克",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=572940&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 572940,
		// 		},
		// 	],
		// 	printings: ["2X2", "WAR"],
		// 	originalText:
		// 		"Haste\nWhenever you cast a spell that targets Tenth District Legionnaire, put a +1/+1 counter on Tenth District Legionnaire, then scry 1.",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "ea001a1e-07b9-516c-b7d2-a1b48ecb2001",
		// },
		// {
		// 	name: "Swiftblade Vindicator",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Rare",
		// 	set: "2XM",
		// 	setName: "Double Masters",
		// 	text: "Double strike, vigilance, trample",
		// 	flavor: "A swiftblade is an artist, each fiery trail of their blades a fleeting masterpiece traced on the air.",
		// 	artist: "Viktor Titov",
		// 	number: "221",
		// 	power: "1",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "489894",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489894&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2020-08-07",
		// 			text: "If an attacking creature with double strike and trample destroys all of its blocking creatures with first-strike combat damage, all of its normal combat damage is assigned to the player or planeswalker that creature's attacking.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Blitzklingen-Verfechterin",
		// 			text: "Doppelschlag, Wachsamkeit, verursacht Trampelschaden",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: "Die Kampfkunst einer Blitzklinge ist ein wahres Schauspiel und jede feurige Schneise ihrer Klingen ein flüchtiges Meisterwerk.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490226&type=card",
		// 			language: "German",
		// 			multiverseid: 490226,
		// 		},
		// 		{
		// 			name: "Justificatrice filelame",
		// 			text: "Double initiative, vigilance, piétinement",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "Un filelame est un artiste, chaque trace enflammée de ses lames est un chef d'œuvre éphémère qui fend l'air.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490558&type=card",
		// 			language: "French",
		// 			multiverseid: 490558,
		// 		},
		// 		{
		// 			name: "速太刀の擁護者",
		// 			text: "二段攻撃、警戒、トランプル",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "速太刀は芸術家だ。剣が描く炎の軌跡ひとつひとつが、空中に一瞬の名作を描いている。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490890&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 490890,
		// 		},
		// 		{
		// 			name: "雪恨快剑手",
		// 			text: "连击，警戒，践踏",
		// 			type: "生物 ～人类／士兵",
		// 			flavor: "快剑手挥洒如艺师，每道迅猛的剑光都会在空中留下一副转瞬即逝的杰作。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=491222&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 491222,
		// 		},
		// 	],
		// 	printings: ["2XM", "GRN", "PGRN"],
		// 	originalText: "Double strike, vigilance, trample",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "174fbff1-7570-5087-86d0-d6a4c700d583",
		// },
		// {
		// 	name: "Weapons Trainer",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier Ally",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier", "Ally"],
		// 	rarity: "Uncommon",
		// 	set: "2XM",
		// 	setName: "Double Masters",
		// 	text: "Other creatures you control get +1/+0 as long as you control an Equipment.",
		// 	flavor: '"When I\'m done training you, anything will be a deadly weapon."',
		// 	artist: "Greg Opalinski",
		// 	number: "228",
		// 	power: "3",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "489901",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489901&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2020-08-07",
		// 			text: "Weapons Trainer's ability gives just +1/+0, no matter how many Equipment you control beyond the first.",
		// 		},
		// 		{
		// 			date: "2020-08-07",
		// 			text: "Weapons Trainer's ability applies even if the Equipment you control isn't attached to any creature.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Waffentrainer",
		// 			text: "Andere Kreaturen, die du kontrollierst, erhalten +1/+0, solange du eine Ausrüstung kontrollierst.",
		// 			type: "Kreatur — Mensch, Soldat, Verbündeter",
		// 			flavor: '„Wenn wir mit deinem Training fertig sind, wird für dich alles eine tödliche Waffe sein."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490233&type=card",
		// 			language: "German",
		// 			multiverseid: 490233,
		// 		},
		// 		{
		// 			name: "Instructrice d'armes",
		// 			text: "Les autres créatures que vous contrôlez gagne +1/+0 tant que vous contrôlez un équipement.",
		// 			type: "Créature : humain et soldat et allié",
		// 			flavor: "« Quand j'en aurai fini avec ton entraînement, tout ce que tu auras entre les mains deviendra une arme mortelle. »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490565&type=card",
		// 			language: "French",
		// 			multiverseid: 490565,
		// 		},
		// 		{
		// 			name: "武器の教練者",
		// 			text: "あなたが装備品をコントロールしているかぎり、他の、あなたがコントロールしているクリーチャーは＋１/＋０の修整を受ける。",
		// 			type: "クリーチャー — 人間・兵士・同盟者",
		// 			flavor: "「訓練が終わる頃には、すべてが強力な武器に変わるだろう。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=490897&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 490897,
		// 		},
		// 		{
		// 			name: "武器训练师",
		// 			text: "只要你操控武具，由你操控的其他生物便得+1/+0。",
		// 			type: "生物 ～人类／士兵／伙伴",
		// 			flavor: "「你完成训练之后，任何东西都能成为致命兵器。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=491229&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 491229,
		// 		},
		// 	],
		// 	printings: ["2XM", "MB1", "OGW"],
		// 	originalText:
		// 		"Other creatures you control get +1/+0 as long as you control an Equipment.",
		// 	originalType: "Creature — Human Soldier Ally",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "d86e7f2e-67d1-5dcb-83ab-2ebb91055cc3",
		// },
		// {
		// 	name: "Boros Charm",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "A25",
		// 	setName: "Masters 25",
		// 	text: "Choose one —\n• Boros Charm deals 4 damage to target player or planeswalker.\n• Permanents you control gain indestructible until end of turn.\n• Target creature gains double strike until end of turn.",
		// 	artist: "Zoltan Boros",
		// 	number: "199",
		// 	layout: "normal",
		// 	multiverseid: "442188",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442188&type=card",
		// 	watermark: "set (GTC)",
		// 	rulings: [
		// 		{
		// 			date: "2013-07-01",
		// 			text: "If you choose the second mode, permanents that come under your control later in the turn will not have indestructible.",
		// 		},
		// 		{
		// 			date: "2013-07-01",
		// 			text: "Planeswalkers with indestructible will still have loyalty counters removed from them as they are dealt damage. If planeswalker with indestructible has no loyalty counters, it will still be put into its owner's graveyard, as the rule that does this doesn't destroy the planeswalker.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "ボロスの魔除け",
		// 			text: "以下から１つを選ぶ。\n• プレイヤー１人を対象とする。ボロスの魔除けはそのプレイヤーに４点のダメージを与える。\n• ターン終了時まで、あなたがコントロールしているパーマネントは破壊不能を得る。\n• クリーチャー１体を対象とする。ターン終了時まで、それは二段攻撃を得る。",
		// 			type: "インスタント",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442437&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 442437,
		// 		},
		// 		{
		// 			name: "波洛斯护符",
		// 			text: "选择一项～\n•波洛斯护符对目标牌手造成4点伤害。\n•由你操控的永久物获得不灭异能直到回合结束。\n•目标生物获得连击异能直到回合结束。",
		// 			type: "瞬间",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442686&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 442686,
		// 		},
		// 	],
		// 	printings: [
		// 		"A25",
		// 		"C13",
		// 		"C16",
		// 		"C21",
		// 		"CMR",
		// 		"GK1",
		// 		"GTC",
		// 		"NCC",
		// 		"ONC",
		// 		"PRM",
		// 		"SLD",
		// 	],
		// 	originalText:
		// 		"Choose one —\n• Boros Charm deals 4 damage to target player.\n• Permanents you control gain indestructible until end of turn.\n• Target creature gains double strike until end of turn.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "1d3895f6-fc93-5387-825e-ad75a1d761d5",
		// },
		// {
		// 	name: "Fighter Class",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Enchantment — Class",
		// 	types: ["Enchantment"],
		// 	subtypes: ["Class"],
		// 	rarity: "Rare",
		// 	set: "AFR",
		// 	setName: "Adventures in the Forgotten Realms",
		// 	text: "(Gain the next level as a sorcery to add its ability.)\nWhen Fighter Class enters the battlefield, search your library for an Equipment card, reveal it, put it into your hand, then shuffle.\n{1}{R}{W}: Level 2\nEquip abilities you activate cost {2} less to activate.\n{3}{R}{W}: Level 3\nWhenever a creature you control attacks, up to one target creature blocks it this combat if able.",
		// 	artist: "Volkan Baǵa",
		// 	number: "222",
		// 	layout: "class",
		// 	multiverseid: "527509",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=527509&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2021-07-23",
		// 			text: "The discount to equip abilities applies only to generic mana requirements. If you control multiple Fighter Classes that are level 2 or higher, equip abilities cost {2} less for each one. This can't make an ability cost less than {0}.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "For the last triggered ability, if the target creature is tapped or is affected by a spell or ability that says it can't block, then it doesn't block. If there's a cost associated with having that creature block, its controller isn't forced to pay that cost, so it doesn't have to block in that case either.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "If the last triggered ability triggers more than once in the same combat, a single creature may be required to block more than one creature. As long as it doesn't have an ability that would allow that, its controller choose which attacking creature it blocks.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "Each Class has five abilities. The three in the major sections of its text box are class abilities. Class abilities can be static, activated, or triggered abilities. The other two are level abilities, one activated ability to advance the Class to level 2 and another to advance the Class to level 3.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "Each Class starts with only the first of three class abilities. As the first level ability resolves, the Class becomes level 2 and gains the second class ability. As the second level ability resolves, the Class becomes level 3 and gains the third class ability.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "Gaining a level won't remove abilities that a Class had at a previous level.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "Gaining a level is a normal activated ability. It uses the stack and can be responded to.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "You can't activate the first level ability of a Class unless that Class is level 1. Similarly, you can't activate the second level ability of a Class unless that Class is level 2.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "You can multiclass or even control multiple Class enchantments of the same class. Each Class permanent tracks its own level separately.",
		// 		},
		// 		{
		// 			date: "2021-07-23",
		// 			text: "Some Class cards have an effect that increases when more are under your control. For example, if you have multiple Barbarian Class cards, you roll that many additional dice and ignore that many of the lowest rolls.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Klasse der Kämpfer",
		// 			text: "(Erhöhe die Stufe wie eine Hexerei, um ihre Fähigkeit freizuschalten.)\nWenn die Klasse der Kämpfer ins Spiel kommt, durchsuche deine Bibliothek nach einer Ausrüstung-Karte, zeige sie offen vor, nimm sie auf deine Hand und mische danach.\n{1}{R}{W}: Stufe 2\n//Level_2//\nAusrüsten-Fähigkeiten, die du aktivierst, kosten beim Aktivieren {2} weniger.\n{3}{R}{W}: Stufe 3\n//Level_3//\nImmer wenn eine Kreatur, die du kontrollierst, angreift, wird sie in diesem Kampf von bis zu einer Kreatur deiner Wahl geblockt, falls möglich..",
		// 			type: "Verzauberung — Klasse",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=527769&type=card",
		// 			language: "German",
		// 			multiverseid: 527769,
		// 		},
		// 		{
		// 			name: "Clase: guerrero",
		// 			text: "(Gana un nivel como un conjuro para agregar su habilidad.)\nCuando la Clase: guerrero entre al campo de batalla, busca en tu biblioteca una carta de Equipo, muéstrala, ponla en tu mano y luego baraja.\n{1}{R}{W}: Nivel 2\n//Level_2//\nTe cuesta {2} menos activar las habilidades de equipar.\n{3}{R}{W}: Nivel 3\n//Level_3//\nSiempre que una criatura que controlas ataque, hasta una criatura objetivo la bloquea este combate si puede.",
		// 			type: "Encantamiento — Clase",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=528030&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 528030,
		// 		},
		// 		{
		// 			name: "Classe : guerrier",
		// 			text: "(Acquérez le prochain niveau lorsque vous pourriez lancer un rituel pour ajouter sa capacité.)\nQuand la Classe : guerrier arrive sur le champ de bataille, cherchez dans votre bibliothèque une carte d'équipement, révélez-la, mettez-la dans votre main, puis mélangez.\n{1}{R}{W} : Niveau 2\n//Level_2//\nLes capacités d'équipement que vous activez coûtent {2} de moins à activer.\n{3}{R}{W} : Niveau 3\n//Level_3//\nÀ chaque fois qu'une créature que vous contrôlez attaque, jusqu'à une créature ciblée la bloque pendant ce combat si possible.",
		// 			type: "Enchantement : classe",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=528291&type=card",
		// 			language: "French",
		// 			multiverseid: 528291,
		// 		},
		// 		{
		// 			name: "Classe del Guerriero",
		// 			text: "(Guadagni il livello successivo come una stregoneria per aggiungerne l'abilità.)\nQuando la Classe del Guerriero entra nel campo di battaglia, passa in rassegna il tuo grimorio per una carta Equipaggiamento, rivelala e aggiungila alla tua mano, poi rimescola.\n{1}{R}{W}: Livello 2\n//Level_2//\nLe abilità equipaggiare che attivi costano {2} in meno per essere attivate.\n{3}{R}{W}: Livello 3\n//Level_3//\nOgniqualvolta una creatura che controlli attacca, fino a una creatura bersaglio la blocca in questo combattimento, se può farlo.",
		// 			type: "Incantesimo — Classe",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=528552&type=card",
		// 			language: "Italian",
		// 			multiverseid: 528552,
		// 		},
		// 		{
		// 			name: "ファイター・クラス",
		// 			text: "（次のレベルになることはソーサリーとして行う。そのレベルの能力を得る。）\nファイター・クラスが戦場に出たとき、あなたのライブラリーから装備品・カード１枚を探し、公開し、あなたの手札に加える。その後、ライブラリーを切り直す。\n{1}{R}{W}：レベル２\n//Level_2//\nあなたが装備能力を起動するためのコストは{2}少なくなる。\n{3}{R}{W}：レベル３\n//Level_3//\nあなたがコントロールしているクリーチャー１体が攻撃するたび、クリーチャー最大１体を対象とする。この戦闘で、それは可能ならその攻撃したクリーチャーをブロックする。",
		// 			type: "エンチャント — クラス",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=528813&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 528813,
		// 		},
		// 		{
		// 			name: "투사 직업",
		// 			text: "(집중마법 시기에 다음 레벨을 얻어 자신의 능력에 추가한다.)\n투사 직업이 전장에 들어올 때, 당신의 서고에서 장비 카드를 찾아, 공개하고, 당신의 손에 넣은 후, 서고를 섞는다.\n{1}{R}{W}: 2레벨\n//Level_2//\n당신이 활성화하는 장착 능력은 활성화하는 데 {2}가 덜 든다.\n{3}{R}{W}: 3레벨\n//Level_3//\n당신이 조종하는 생물이 공격할 때마다, 생물을 최대 한 개까지 목표로 정한다. 목표 생물은 가능하면 그 전투에서 이 생물을 방어해야 한다.",
		// 			type: "부여마법 — 직업",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=529073&type=card",
		// 			language: "Korean",
		// 			multiverseid: 529073,
		// 		},
		// 		{
		// 			name: "Classe: Guerreiro",
		// 			text: "(Ganhe o próximo nível como um feitiço para adicionar sua habilidade.)\nQuando Classe: Guerreiro entrar no campo de batalha, procure em seu grimório um card de Equipamento, revele-o, coloque-o em sua mão e depois embaralhe.\n{1}{R}{W}: Nível 2\n//Level_2//\nAs habilidades equipar que você ativa custam {2} a menos para serem ativadas.\n{3}{R}{W}: Nível 3\n//Level_3//\nToda vez que uma criatura que você controla ataca, até uma criatura alvo bloqueia neste combate se estiver apta.",
		// 			type: "Encantamento — Classe",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=529334&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 529334,
		// 		},
		// 		{
		// 			name: "Класс: Воин",
		// 			text: "(Получите следующий уровень как волшебство, чтобы добавить его способность.)\nКогда Класс: Воин выходит на поле битвы, найдите в вашей библиотеке карту Снаряжения, покажите ее, положите ее в вашу руку, затем перетасуйте библиотеку.\n{1}{R}{W}: Уровень 2\n//Level_2//\nСтоимость активации способностей «Снарядить», которые вы активируете, снижается на {2}.\n{3}{R}{W}: Уровень 3\n//Level_3//\nКаждый раз, когда существо под вашим контролем атакует, не более одного целевого существа блокирует его в этом бою, если может.",
		// 			type: "Чары — Класс",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=529595&type=card",
		// 			language: "Russian",
		// 			multiverseid: 529595,
		// 		},
		// 		{
		// 			name: "职业：战士",
		// 			text: "（获得下一等级便能新增相应异能；只能于法术时机如此作。）\n当职业：战士进战场时，从你的牌库中搜寻一张武具牌，展示该牌，将它置于你手上，然后洗牌。\n{1}{R}{W}：等级2\n//Level_2//\n你起动的佩带异能减少{2}来起动。\n{3}{R}{W}：等级3\n//Level_3//\n每当一个由你操控的生物攻击时，至多一个目标生物本次战斗若能阻挡它，则须如此作。",
		// 			type: "结界 ～职业",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=529855&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 529855,
		// 		},
		// 		{
		// 			name: "職業：戰士",
		// 			text: "（獲得下一等級便能新增相應異能；只能於巫術時機如此作。）\n當職業：戰士進戰場時，從你的牌庫中搜尋一張武具牌，展示該牌，將它置於你手上，然後洗牌。\n{1}{R}{W}：等級2\n//Level_2//\n你起動的佩帶異能減少{2}來起動。\n{3}{R}{W}：等級3\n//Level_3//\n每當一個由你操控的生物攻擊時，至多一個目標生物本次戰鬥若能阻擋它，則須如此作。",
		// 			type: "結界 ～職業",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=530115&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 530115,
		// 		},
		// 	],
		// 	printings: ["AFR", "PAFR"],
		// 	originalText:
		// 		"(Gain the next level as a sorcery to add its ability.)\nWhen Fighter Class enters the battlefield, search your library for an Equipment card, reveal it, put it into your hand, then shuffle.\n{1}{R}{W}: Level 2\n//Level_2//\nEquip abilities you activate cost {2} less to activate.\n{3}{R}{W}: Level 3\n//Level_3//\nWhenever a creature you control attacks, up to one target creature blocks it this combat if able.",
		// 	originalType: "Enchantment — Class",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "f3b2af35-b189-525a-80f0-06c8628d863c",
		// },
		// {
		// 	name: "Honored Crop-Captain",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Warrior",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Warrior"],
		// 	rarity: "Uncommon",
		// 	set: "AKH",
		// 	setName: "Amonkhet",
		// 	text: "Whenever Honored Crop-Captain attacks, other attacking creatures get +1/+0 until end of turn.",
		// 	flavor: "Her words inspire action. Her actions inspire victory.",
		// 	artist: "Sara Winters",
		// 	number: "200",
		// 	power: "3",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "426902",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426902&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Verehrte Saatführerin",
		// 			text: "Immer wenn die Verehrte Saatführerin angreift, erhalten andere angreifende Kreaturen +1/+0 bis zum Ende des Zuges.",
		// 			type: "Kreatur — Mensch, Krieger",
		// 			flavor: "Ihre Worte regen zu Taten an. Ihre Taten regen zum Siegen an.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427171&type=card",
		// 			language: "German",
		// 			multiverseid: 427171,
		// 		},
		// 		{
		// 			name: "Capitana de simiente alabada",
		// 			text: "Siempre que la Capitana de simiente alabada ataque, las otras criaturas atacantes obtienen +1/+0 hasta el final del turno.",
		// 			type: "Criatura — Guerrero humano",
		// 			flavor: "Sus palabras llevan a la acción. Sus acciones llevan a la victoria.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427440&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 427440,
		// 		},
		// 		{
		// 			name: "Capitaine de moisson honorée",
		// 			text: "À chaque fois que la Capitaine de moisson honorée attaque, les autres créatures attaquantes gagnent +1/+0 jusqu'à la fin du tour.",
		// 			type: "Créature : humain et guerrier",
		// 			flavor: "Ses paroles inspirent à l'action. Ses actions inspirent à la victoire.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427709&type=card",
		// 			language: "French",
		// 			multiverseid: 427709,
		// 		},
		// 		{
		// 			name: "Capomesse Venerata",
		// 			text: "Ogniqualvolta la Capomesse Venerata attacca, le altre creature attaccanti prendono +1/+0 fino alla fine del turno.",
		// 			type: "Creatura — Guerriero Umano",
		// 			flavor: "Le sue parole ispirano ad agire. Le sue azioni ispirano a vincere.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427978&type=card",
		// 			language: "Italian",
		// 			multiverseid: 427978,
		// 		},
		// 		{
		// 			name: "名誉ある門長",
		// 			text: "名誉ある門長が攻撃するたび、ターン終了時まで、他の攻撃クリーチャーは＋１/＋０の修整を受ける。",
		// 			type: "クリーチャー — 人間・戦士",
		// 			flavor: "彼女の言葉は行動を呼ぶ。彼女の行動は勝利を呼ぶ。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428247&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 428247,
		// 		},
		// 		{
		// 			name: "영예로운 입문자 대장",
		// 			text: "영예로운 입문자 대장이 공격할 때마다, 다른 공격생물들은 턴종료까지 +1/+0을 받는다.",
		// 			type: "생물 — 인간 전사",
		// 			flavor: "그녀의 말은 행동을 부르고, 그녀의 행동은 승리를 부른다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428516&type=card",
		// 			language: "Korean",
		// 			multiverseid: 428516,
		// 		},
		// 		{
		// 			name: "Capitã de Safra Honrada",
		// 			text: "Toda vez que Capitã de Safra Honrada ataca, as outras criaturas atacantes recebem +1/+0 até o final do turno.",
		// 			type: "Criatura — Humano Guerreiro",
		// 			flavor: "Suas palavras levam à ação. Suas ações levam à vitória.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428785&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 428785,
		// 		},
		// 		{
		// 			name: "Почтенный Капитан Снопа",
		// 			text: "Каждый раз, когда Почтенный Капитан Снопа атакует, другие атакующие существа получают +1/+0 до конца хода.",
		// 			type: "Существо — Человек Воин",
		// 			flavor: "Ее слова вдохновляют на действие. Ее действия вдохновляют на победу.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429054&type=card",
		// 			language: "Russian",
		// 			multiverseid: 429054,
		// 		},
		// 		{
		// 			name: "荣耀群长",
		// 			text: "每当荣耀群长攻击时，其他进行攻击的生物得+1/+0直到回合结束。",
		// 			type: "生物～人类／战士",
		// 			flavor: "言语励行，出击致胜。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429323&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 429323,
		// 		},
		// 		{
		// 			name: "榮耀群長",
		// 			text: "每當榮耀群長攻擊時，其他進行攻擊的生物得+1/+0直到回合結束。",
		// 			type: "生物～人類／戰士",
		// 			flavor: "言語勵行，出擊致勝。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429592&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 429592,
		// 		},
		// 	],
		// 	printings: ["AKH", "AKR"],
		// 	originalText:
		// 		"Whenever Honored Crop-Captain attacks, other attacking creatures get +1/+0 until end of turn.",
		// 	originalType: "Creature - Human Warrior",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "33aff80b-017a-54f7-b7b2-e9e967eb8e7c",
		// },
		// {
		// 	name: "Captain's Maneuver",
		// 	manaCost: "{X}{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "APC",
		// 	setName: "Apocalypse",
		// 	text: "The next X damage that would be dealt to target creature, planeswalker, or player this turn is dealt to another target creature, planeswalker, or player instead.",
		// 	flavor: "Sisay discovered that the mirrored hull of the *Weatherlight* could be used as a defensive weapon.",
		// 	artist: "Ben Thompson",
		// 	number: "92",
		// 	layout: "normal",
		// 	multiverseid: "25828",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=25828&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2004-10-04",
		// 			text: "If the second target is no longer on the battlefield, or if the second target is no longer a creature, player, or planeswalker when the damage would be redirected, the damage is dealt to the first target as if this spell was not cast.",
		// 		},
		// 		{
		// 			date: "2004-10-04",
		// 			text: "If the first target is no longer on the battlefield, then the damage will not be dealt at all, so it can’t be redirected by this ability.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Manöver des Kapitäns",
		// 			text: "Die nächsten X Schadenspunkte, die in diesem Zug einer Kreatur oder einem Spieler deiner Wahl zugefügt würden, werden stattdessen einer anderen Kreatur oder einem anderen Spieler deiner Wahl zugefügt.",
		// 			type: "Spontanzauber",
		// 			flavor: "Sisay entdeckte, dass die verspiegelte Hülle der Wetterlicht als defensive Waffe verwendet werden kann.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179028&type=card",
		// 			language: "German",
		// 			multiverseid: 179028,
		// 		},
		// 		{
		// 			name: "Maniobra de la capitana",
		// 			flavor: null,
		// 			language: "Spanish",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Manœuvre du capitaine",
		// 			text: "Les prochaines X blessures qui devraient être infligées ce tour-ci à une cible, créature ou joueur, sont infligées à une autre cible, créature ou joueur, à la place.",
		// 			type: "Éphémère",
		// 			flavor: "Sissay découvrit que la coque réfléchissante de l'Aquilon pouvait être utilisée comme une arme défensive.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179176&type=card",
		// 			language: "French",
		// 			multiverseid: 179176,
		// 		},
		// 		{
		// 			name: "Manovra del Capitano",
		// 			text: "I prossimi X danni che verrebbero inflitti a una creatura o a un giocatore bersaglio in questo turno vengono invece inflitti a un'altra creatura o a un altro giocatore bersaglio.",
		// 			type: "Istantaneo",
		// 			flavor: "Sisay scoprì che lo scafo riflesso della Cavalcavento poteva essere usato come arma difensiva.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179349&type=card",
		// 			language: "Italian",
		// 			multiverseid: 179349,
		// 		},
		// 		{
		// 			name: "艦長の操艦",
		// 			flavor: null,
		// 			language: "Japanese",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Manobra do Capitão",
		// 			flavor: null,
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: null,
		// 		},
		// 	],
		// 	printings: ["APC", "HOP"],
		// 	originalText:
		// 		"The next X damage that would be dealt to target creature or player this turn is dealt to another target creature or player instead.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Premodern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "d04846b3-96f1-582c-a481-ebdc68c2acfe",
		// },
		// {
		// 	name: "Goblin Legionnaire",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Goblin Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Goblin", "Soldier"],
		// 	rarity: "Common",
		// 	set: "APC",
		// 	setName: "Apocalypse",
		// 	text: "{R}, Sacrifice Goblin Legionnaire: It deals 2 damage to any target.\n{W}, Sacrifice Goblin Legionnaire: Prevent the next 2 damage that would be dealt to any target this turn.",
		// 	artist: "Mark Romanoski",
		// 	number: "103",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "26760",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=26760&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Goblin-Legionär",
		// 			text: "{R}, opfere den Goblin-Legionär: Der Goblin-Legionär fügt einer Kreatur oder einem Spieler deiner Wahl 2 Schadenspunkte zu.\n{W}, opfere den Goblin-Legionär: Verhindere die nächsten 2 Schadenspunkte, die einer Kreatur oder einem Spieler deiner Wahl in diesem Zug zugefügt werden.",
		// 			type: "Kreatur — Goblin, Soldat",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179039&type=card",
		// 			language: "German",
		// 			multiverseid: 179039,
		// 		},
		// 		{
		// 			name: "Legionario trasgo",
		// 			flavor: null,
		// 			language: "Spanish",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Légionnaire gobelin",
		// 			text: "{R}, sacrifiez le Légionnaire gobelin : Le Légionnaire gobelin inflige 2 blessures à une cible, créature ou joueur.\n{W}, sacrifiez le Légionnaire gobelin : Prévenez, ce tour-ci, les prochaines 2 blessures qui devraient être infligées à une cible, créature ou joueur.",
		// 			type: "Créature : gobelin et soldat",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179187&type=card",
		// 			language: "French",
		// 			multiverseid: 179187,
		// 		},
		// 		{
		// 			name: "Legionario Goblin",
		// 			text: "{R}, Sacrifica il Legionario Goblin: Il Legionario Goblin infligge 2 danni a una creatura o a un giocatore bersaglio.\n{W}, Sacrifica il Legionario Goblin: Previeni i prossimi 2 danni che verrebbero inflitti a una creatura o a un giocatore bersaglio in questo turno.",
		// 			type: "Creatura — Soldato Goblin",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179360&type=card",
		// 			language: "Italian",
		// 			multiverseid: 179360,
		// 		},
		// 		{
		// 			name: "ゴブリンの軍団兵",
		// 			flavor: null,
		// 			language: "Japanese",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Legionário Goblin",
		// 			flavor: null,
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: null,
		// 		},
		// 	],
		// 	printings: ["APC", "F07", "PRM"],
		// 	originalText:
		// 		"o\nR, Sacrifice Goblin Legionnaire: Goblin Legionnaire deals 2 damage to target creature or player.\no\nW, Sacrifice Goblin Legionnaire: Prevent the next 2 damage that would be dealt to target creature or player this turn.",
		// 	originalType: "Creature - Goblin Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Premodern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "855a67eb-5387-54b4-af62-3f4c0f96bf76",
		// },
		// {
		// 	name: "Squee's Embrace",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Enchantment — Aura",
		// 	types: ["Enchantment"],
		// 	subtypes: ["Aura"],
		// 	rarity: "Common",
		// 	set: "APC",
		// 	setName: "Apocalypse",
		// 	text: "Enchant creature\nEnchanted creature gets +2/+2.\nWhen enchanted creature dies, return that card to its owner's hand.",
		// 	artist: "Rebecca Guay",
		// 	number: "122",
		// 	layout: "normal",
		// 	multiverseid: "26785",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=26785&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Squees Umarmung",
		// 			text: "Die verzauberte Kreatur erhält +2/+2.\nWenn die verzauberte Kreatur in einen Friedhof gelegt wird, bringe die Kreaturenkarte auf die Hand ihres Besitzers zurück.",
		// 			type: "Kreaturenverzauberung",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179058&type=card",
		// 			language: "German",
		// 			multiverseid: 179058,
		// 		},
		// 		{
		// 			name: "Abrazo de Squee",
		// 			flavor: null,
		// 			language: "Spanish",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Étreinte de Skwi",
		// 			text: "La créature enchantée gagne +2/+2.\nQuand la créature enchantée est mise dans un cimetière, renvoyez cette carte de créature dans la main de son propriétaire.",
		// 			type: "Enchanter : créature",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179206&type=card",
		// 			language: "French",
		// 			multiverseid: 179206,
		// 		},
		// 		{
		// 			name: "Abbraccio di Squee",
		// 			text: "La creatura incantata prende +2/+2.\nQuando la creatura incantata viene messa in un cimitero, il proprietario riprende in mano quella carta creatura.",
		// 			type: "Incanta Creatura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179379&type=card",
		// 			language: "Italian",
		// 			multiverseid: 179379,
		// 		},
		// 		{
		// 			name: "スクイーの抱擁",
		// 			flavor: null,
		// 			language: "Japanese",
		// 			multiverseid: null,
		// 		},
		// 		{
		// 			name: "Abraço de Squee",
		// 			flavor: null,
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: null,
		// 		},
		// 	],
		// 	printings: ["APC"],
		// 	originalText:
		// 		"Enchanted creature gets +2/+2.\nWhen enchanted creature is put into a graveyard, return that creature card to its owner's hand.",
		// 	originalType: "Enchant Creature",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Premodern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "c928f9c1-7f97-58f8-a42c-2b3dc7f891ce",
		// },
		// {
		// 	name: "Cerodon Yearling",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Beast",
		// 	types: ["Creature"],
		// 	subtypes: ["Beast"],
		// 	rarity: "Common",
		// 	set: "ARB",
		// 	setName: "Alara Reborn",
		// 	text: "Vigilance, haste",
		// 	flavor: 'The unit of measurement used to chart a cerodon\'s growth is "persons consumed."',
		// 	artist: "Christopher Moeller",
		// 	number: "96",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "180604",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180604&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Cerodon-Jährling",
		// 			text: "Wachsamkeit, Eile",
		// 			type: "Kreatur — Bestie",
		// 			flavor: 'Die Maßeinheit, in der das Wachstum der Cerodons gemessen wird, ist „gefressene Personen".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196918&type=card",
		// 			language: "German",
		// 			multiverseid: 196918,
		// 		},
		// 		{
		// 			name: "Primal cerodonte",
		// 			text: "Vigilancia, prisa.",
		// 			type: "Criatura — Bestia",
		// 			flavor: 'La unidad de medida para registrar el crecimiento de un cerodonte es "personas consumidas".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196773&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 196773,
		// 		},
		// 		{
		// 			name: "Jeune cérodon",
		// 			text: "Vigilance, célérité",
		// 			type: "Créature : bête",
		// 			flavor: "L'unité de mesure utilisée pour suivre la croissance d'un cérodon est « nombre de personnes dévorées ».",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196338&type=card",
		// 			language: "French",
		// 			multiverseid: 196338,
		// 		},
		// 		{
		// 			name: "Cucciolo di Cornodonte",
		// 			text: "Cautela, rapidità",
		// 			type: "Creatura — Bestia",
		// 			flavor: 'L\'unità di misura usata per la crescita del cornodonte è espressa in "persone divorate".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=195903&type=card",
		// 			language: "Italian",
		// 			multiverseid: 195903,
		// 		},
		// 		{
		// 			name: "セロドンの一年仔",
		// 			text: "警戒、速攻",
		// 			type: "クリーチャー — ビースト",
		// 			flavor: "セロドンの成長を測る単位は、「何人食ったか」だ。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196193&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 196193,
		// 		},
		// 		{
		// 			name: "Dentócero Neonato",
		// 			text: "Vigilância, ímpeto",
		// 			type: "Criatura — Besta",
		// 			flavor: 'A unidade de medida usada para calcular o crescimento de um dentócero é "número de pessoas consumidas".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196628&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 196628,
		// 		},
		// 		{
		// 			name: "Годовичок Рогозуба",
		// 			text: "Бдительность, Ускорение",
		// 			type: "Существо — Зверь",
		// 			flavor: "Единицей измерения возраста рогозуба является количество поглощенных им людей.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196048&type=card",
		// 			language: "Russian",
		// 			multiverseid: 196048,
		// 		},
		// 		{
		// 			name: "初年角牙兽",
		// 			text: "警戒，敏捷",
		// 			type: "生物～野兽",
		// 			flavor: "用来描述角牙兽成长程度的测量单位是「吃过几个人」。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196483&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 196483,
		// 		},
		// 	],
		// 	printings: ["ARB", "HOP"],
		// 	originalText: "Vigilance, haste",
		// 	originalType: "Creature — Beast",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "8e39ab08-7028-5a0a-9645-e0e64a1a5148",
		// },
		// {
		// 	name: "Fight to the Death",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Rare",
		// 	set: "ARB",
		// 	setName: "Alara Reborn",
		// 	text: "Destroy all blocking creatures and all blocked creatures.",
		// 	flavor: "When a battlefield falls silent, it's rarely due to a cease-fire.",
		// 	artist: "Michael Komarck",
		// 	number: "97",
		// 	layout: "normal",
		// 	multiverseid: "179562",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179562&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2009-05-01",
		// 			text: "A “blocking creature” is one that has been declared as a blocker this combat, or one that was put onto the battlefield blocking this combat. Unless that creature leaves combat, it continues to be a blocking creature through the end of combat step, even if the creature or creatures that it was blocking are no longer on the battlefield or have otherwise left combat by then.",
		// 		},
		// 		{
		// 			date: "2009-05-01",
		// 			text: "A “blocked creature” is an attacking creature that has been blocked by a creature this combat, or has become blocked as the result of a spell or ability this combat. Unless the attacking creature leaves combat, it continues to be a blocked creature through the end of combat step, even if the creature or creatures that blocked it are no longer on the battlefield or have otherwise left combat by then.",
		// 		},
		// 		{
		// 			date: "2009-05-01",
		// 			text: "Attacking creatures that haven’t been blocked are unaffected by Fight to the Death.",
		// 		},
		// 		{
		// 			date: "2009-05-01",
		// 			text: "If Fight to the Death is cast before blockers are declared or after combat ends, it won’t do anything.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Kampf bis zum Tod",
		// 			text: "Zerstöre alle blockenden und alle geblockten Kreaturen.",
		// 			type: "Spontanzauber",
		// 			flavor: "Wenn es auf einem Schlachtfeld still wird, dann liegt das nur selten an einer Waffenruhe.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196919&type=card",
		// 			language: "German",
		// 			multiverseid: 196919,
		// 		},
		// 		{
		// 			name: "Pelear a muerte",
		// 			text: "Destruye todas las criaturas bloqueadoras y todas las criaturas bloqueadas.",
		// 			type: "Instantáneo",
		// 			flavor: "Cuando se hace silencio en un campo de batalla, rara vez es por un alto el fuego.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196774&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 196774,
		// 		},
		// 		{
		// 			name: "Combat à mort",
		// 			text: "Détruisez toutes les créatures bloqueuses et toutes les créatures bloquées.",
		// 			type: "Éphémère",
		// 			flavor: "Quand le silence tombe sur le champ de bataille, c'est rarement à cause d'un cessez-le-feu.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196339&type=card",
		// 			language: "French",
		// 			multiverseid: 196339,
		// 		},
		// 		{
		// 			name: "Fino alla Morte",
		// 			text: "Distruggi tutte le creature bloccanti e tutte le creature bloccate.",
		// 			type: "Istantaneo",
		// 			flavor: 'Quando cala il silenzio sul campo di battaglia, difficilmente la causa è un "cessate il fuoco".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=195904&type=card",
		// 			language: "Italian",
		// 			multiverseid: 195904,
		// 		},
		// 		{
		// 			name: "死ぬまでの戦い",
		// 			text: "すべてのブロックしているクリーチャーとすべてのブロックされているクリーチャーを破壊する。",
		// 			type: "インスタント",
		// 			flavor: "戦場に静寂が訪れるとき、休戦によるものであることはめったにない。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196194&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 196194,
		// 		},
		// 		{
		// 			name: "Lutar até a Morte",
		// 			text: "Destrua todas as criaturas bloqueadoras e todas as criaturas bloqueadas.",
		// 			type: "Mágica Instantânea",
		// 			flavor: "Quando o campo de batalha fica silencioso, raramente é devido a um cessar-fogo.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196629&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 196629,
		// 		},
		// 		{
		// 			name: "Не на Жизнь, а на Смерть",
		// 			text: "Уничтожьте все блокирующие и заблокированные существа.",
		// 			type: "Мгновенное заклинание",
		// 			flavor: "Шум битвы редко затихает из-за перемирия.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196049&type=card",
		// 			language: "Russian",
		// 			multiverseid: 196049,
		// 		},
		// 		{
		// 			name: "奋战至死",
		// 			text: "消灭所有进行阻挡的生物与所有被阻挡的生物。",
		// 			type: "瞬间",
		// 			flavor: "若战场归于沉寂，其因通常不是停火。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196484&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 196484,
		// 		},
		// 	],
		// 	printings: ["ARB"],
		// 	originalText:
		// 		"Destroy all blocking creatures and all blocked creatures.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "b869023b-921c-5471-8489-4d2b2bbd85da",
		// },
		// {
		// 	name: "Stun Sniper",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Archer",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Archer"],
		// 	rarity: "Uncommon",
		// 	set: "ARB",
		// 	setName: "Alara Reborn",
		// 	text: "{1}, {T}: Stun Sniper deals 1 damage to target creature. Tap that creature.",
		// 	flavor: "The tips of her bolts are blunt, but her aim is deadly sharp.",
		// 	artist: "Steve Prescott",
		// 	number: "100",
		// 	power: "1",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "179589",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=179589&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Betäubende Heckenschützin",
		// 			text: "{1}, {T}: Die Betäubende Heckenschützin fügt einer Kreatur deiner Wahl 1 Schadenspunkt zu. Tappe diese Kreatur.",
		// 			type: "Kreatur — Mensch, Bogenschütze",
		// 			flavor: "Die Spitzen ihre Bolzen sind stumpf, aber sie trifft immer mitten ins Schwarze.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196922&type=card",
		// 			language: "German",
		// 			multiverseid: 196922,
		// 		},
		// 		{
		// 			name: "Francotiradora aturdidora",
		// 			text: "{1}, {T}: La Francotiradora aturdidora hace 1 punto de daño a la criatura objetivo. Gira esa criatura.",
		// 			type: "Criatura — Arquero humano",
		// 			flavor: "Las puntas de sus pivotes son romas, pero su puntería es afiladísima.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196777&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 196777,
		// 		},
		// 		{
		// 			name: "Franc-tireuse étourdissante",
		// 			text: "{1}, {T} : La Franc-tireuse étourdissante inflige 1 blessure à la créature ciblée. Engagez cette créature.",
		// 			type: "Créature : humain et archer",
		// 			flavor: "La pointe de ses carreaux a beau être émoussée, la précision de son tir est hors pair.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196342&type=card",
		// 			language: "French",
		// 			multiverseid: 196342,
		// 		},
		// 		{
		// 			name: "Cecchina Stordente",
		// 			text: "{1}, {T}: La Cecchina Stordente infligge 1 danno a una creatura bersaglio. TAPpa quella creatura.",
		// 			type: "Creatura — Arciere Umano",
		// 			flavor: "Le punte delle sue frecce sono smussate, ma la sua mira è dannatamente precisa.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=195907&type=card",
		// 			language: "Italian",
		// 			multiverseid: 195907,
		// 		},
		// 		{
		// 			name: "気絶の狙撃者",
		// 			text: "{1}, {T}：クリーチャー１体を対象とする。気絶の狙撃者はそれに１点のダメージを与える。 そのクリーチャーをタップする。",
		// 			type: "クリーチャー — 人間・射手",
		// 			flavor: "彼女の鏃の先は鈍いが、彼女の狙いは恐ろしく鋭い。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196197&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 196197,
		// 		},
		// 		{
		// 			name: "Atirador Atordoante",
		// 			text: "{1}, {T}: Atirador Atordoante causa 1 ponto de dano à criatura alvo. Vire aquela criatura.",
		// 			type: "Criatura — Humano Arqueiro",
		// 			flavor: "As pontas de suas flechas são cegas, mas sua mira é mortalmente afiada.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196632&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 196632,
		// 		},
		// 		{
		// 			name: "Оглушающий Снайпер",
		// 			text: "{1}, {T}: Оглушающий Снайпер наносит 1 повреждение целевому существу. Поверните то существо.",
		// 			type: "Существо — Человек Лучник",
		// 			flavor: "Наконечники ее стрел затупились, но прицел смертельно точен.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196052&type=card",
		// 			language: "Russian",
		// 			multiverseid: 196052,
		// 		},
		// 		{
		// 			name: "晕击神箭手",
		// 			text: "{1}，{T}：晕击神箭手对目标生物造成1点伤害。 横置该生物。",
		// 			type: "生物～人类／弓箭手",
		// 			flavor: "她箭尖虽钝，准头可犀利无比。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196487&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 196487,
		// 		},
		// 	],
		// 	printings: ["ARB", "DDL"],
		// 	originalText:
		// 		"{1}, {T}: Stun Sniper deals 1 damage to target creature. Tap that creature.",
		// 	originalType: "Creature — Human Archer",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "64b23a0b-b9d4-5240-b354-b985c66cf04a",
		// },
		// {
		// 	name: "Naya Hushblade",
		// 	manaCost: "{R/W}{G}",
		// 	cmc: 2,
		// 	colors: ["G", "R", "W"],
		// 	colorIdentity: ["G", "R", "W"],
		// 	type: "Creature — Elf Rogue",
		// 	types: ["Creature"],
		// 	subtypes: ["Elf", "Rogue"],
		// 	rarity: "Common",
		// 	set: "ARB",
		// 	setName: "Alara Reborn",
		// 	text: "As long as you control another multicolored permanent, Naya Hushblade gets +1/+1 and has shroud. (It can't be the target of spells or abilities.)",
		// 	artist: "Jason Chan",
		// 	number: "141",
		// 	power: "2",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "188969",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=188969&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Schweigender Kämpfer aus Naya",
		// 			text: "Solange du eine andere mehrfarbige bleibende Karte kontrollierst, erhält der Schweigende Kämpfer aus Naya +1/+1 und ist verhüllt. (Er kann nicht das Ziel von Zaubersprüchen oder Fähigkeiten sein.)",
		// 			type: "Kreatur — Elf, Räuber",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196963&type=card",
		// 			language: "German",
		// 			multiverseid: 196963,
		// 		},
		// 		{
		// 			name: "Espada susurrante nayana",
		// 			text: "Mientras controles otro permanente multicolor, la Espada susurrante nayana obtiene +1/+1 y tiene la habilidad de velo. (No puede ser objetivo de hechizos o habilidades.)",
		// 			type: "Criatura — Bribón elfo",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196818&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 196818,
		// 		},
		// 		{
		// 			name: "Muetalfange de Naya",
		// 			text: "Tant que vous contrôlez un autre permanent multicolore, la Muetalfange de Naya gagne +1/+1 et a le linceul. (Elle ne peut pas être la cible de sorts ou de capacités.)",
		// 			type: "Créature : elfe et gredin",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196383&type=card",
		// 			language: "French",
		// 			multiverseid: 196383,
		// 		},
		// 		{
		// 			name: "Lama Silenziosa di Naya",
		// 			text: "Fintanto che controlli un altro permanente multicolore, la Lama Silenziosa di Naya prende +1/+1 e ha velo. (Non può essere bersaglio di magie o abilità.)",
		// 			type: "Creatura — Farabutto Elfo",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=195948&type=card",
		// 			language: "Italian",
		// 			multiverseid: 195948,
		// 		},
		// 		{
		// 			name: "ナヤの静刃",
		// 			text: "あなたが他の多色のパーマネントをコントロールしているかぎり、ナヤの静刃は＋１/＋１の修整を受けるとともに被覆を持つ。 （それは呪文や能力の対象にならない。）",
		// 			type: "クリーチャー — エルフ・ならず者",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196238&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 196238,
		// 		},
		// 		{
		// 			name: "Lâmina Silenciosa de Naya",
		// 			text: "Enquanto você controlar outra permanente multicolorida, Lâmina Silenciosa de Naya receberá +1/+1 e terá manto. (Ela não pode ser alvo de mágicas nem de habilidades.)",
		// 			type: "Criatura — Elfo Ladino",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196673&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 196673,
		// 		},
		// 		{
		// 			name: "Бесшумный Палач из Найи",
		// 			text: "Пока вы контролируете другой многоцветный перманент, Бесшумный Палач из Найи получает +1/+1 и имеет Пелену. (Он не может быть целью заклинаний или способностей.)",
		// 			type: "Существо — Эльф Бродяга",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196093&type=card",
		// 			language: "Russian",
		// 			multiverseid: 196093,
		// 		},
		// 		{
		// 			name: "纳雅宁锋兵",
		// 			text: "只要你操控另一个多色永久物，纳雅宁锋兵便得+1/+1且具有帷幕异能。 （它不能成为咒语或异能的目标。）",
		// 			type: "生物～地精／浪客",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196528&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 196528,
		// 		},
		// 	],
		// 	printings: ["ARB"],
		// 	originalText:
		// 		"As long as you control another multicolored permanent, Naya Hushblade gets +1/+1 and has shroud. (It can't be the target of spells or abilities.)",
		// 	originalType: "Creature — Elf Rogue",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "e088c95d-7a75-5ffe-985f-58a936e4f4e7",
		// },
		// {
		// 	name: "Trace of Abundance",
		// 	manaCost: "{R/W}{G}",
		// 	cmc: 2,
		// 	colors: ["G", "R", "W"],
		// 	colorIdentity: ["G", "R", "W"],
		// 	type: "Enchantment — Aura",
		// 	types: ["Enchantment"],
		// 	subtypes: ["Aura"],
		// 	rarity: "Common",
		// 	set: "ARB",
		// 	setName: "Alara Reborn",
		// 	text: "Enchant land\nEnchanted land has shroud. (It can't be the target of spells or abilities.)\nWhenever enchanted land is tapped for mana, its controller adds an additional one mana of any color.",
		// 	artist: "Dave Kendall",
		// 	number: "142",
		// 	layout: "normal",
		// 	multiverseid: "161292",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=161292&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Spur des Überflusses",
		// 			text: "Landverzauberung\nDas verzauberte Land ist verhüllt. (Es kann nicht das Ziel von Zaubersprüchen oder Fähigkeiten sein.)\nImmer wenn das verzauberte Land für Mana getappt wird, erhöht sein Beherrscher seinen Manavorrat um ein Mana einer beliebigen Farbe (zusätzlich zu dem Mana, das dieses Land erzeugt).",
		// 			type: "Verzauberung — Aura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196964&type=card",
		// 			language: "German",
		// 			multiverseid: 196964,
		// 		},
		// 		{
		// 			name: "Huellas de la abundancia",
		// 			text: "Encantar tierra.\nLa tierra encantada tiene la habilidad de velo. (No puede ser objetivo de hechizos o habilidades.)\nSiempre que la tierra encantada se gire para obtener maná, su controlador agrega un maná de cualquier color a su reserva de maná (además del maná que produce la tierra).",
		// 			type: "Encantamiento — Aura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196819&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 196819,
		// 		},
		// 		{
		// 			name: "Trace d'abondance",
		// 			text: "Enchanter : terrain\nLe terrain enchanté a le linceul. (Il ne peut pas être la cible de sorts ou de capacités.)\nÀ chaque fois que le terrain enchanté est engagé pour du mana, son contrôleur ajoute un mana de la couleur de son choix à sa réserve (en plus du mana produit par le terrain).",
		// 			type: "Enchantement : aura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196384&type=card",
		// 			language: "French",
		// 			multiverseid: 196384,
		// 		},
		// 		{
		// 			name: "Tracce di Abbondanza",
		// 			text: "Incanta terra\nLa terra incantata ha velo. (Non può essere bersaglio di magie o abilità.)\nOgniqualvolta la terra incantata viene TAPpata per attingere mana, il suo controllore aggiunge un mana di qualsiasi colore alla sua riserva di mana (in aggiunta al mana prodotto dalla terra incantata).",
		// 			type: "Incantesimo — Aura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=195949&type=card",
		// 			language: "Italian",
		// 			multiverseid: 195949,
		// 		},
		// 		{
		// 			name: "豊穣の痕跡",
		// 			text: "エンチャント（土地）\nエンチャントされている土地は被覆を持つ。 （それは呪文や能力の対象にならない。）\nエンチャントされている土地がマナを引き出す目的でタップされるたび、それのコントローラーは自分のマナ・プールに好きな色１色のマナ１点を加える。 （これはその土地が生みだすマナに追加される。）",
		// 			type: "エンチャント — オーラ",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196239&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 196239,
		// 		},
		// 		{
		// 			name: "Vestígio de Abundância",
		// 			text: "Encantar terreno\nO terreno encantado tem manto. (Ele não pode ser alvo de mágicas nem de habilidades.)\nToda vez que o terreno encantado for virado para gerar mana, seu controlador adicionará um mana de qualquer cor à sua própria reserva de mana (além do mana gerado pelo terreno).",
		// 			type: "Encantamento — Aura",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196674&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 196674,
		// 		},
		// 		{
		// 			name: "Былое Изобилие",
		// 			text: "Зачаровать землю\nЗачарованная земля имеет Пелену. (Он не может быть целью заклинаний или способностей.)\nКаждый раз, когда зачарованная земля поворачивается для получения маны, контролирующий ее игрок добавляет одну ману любого цвета в свое хранилище маны (в дополнение к производимой этой землей мане).",
		// 			type: "Чары — Аура",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196094&type=card",
		// 			language: "Russian",
		// 			multiverseid: 196094,
		// 		},
		// 		{
		// 			name: "丰足遗风",
		// 			text: "地结界\n受此结界的地具有帷幕异能。 （它不能成为咒语或异能的目标。）\n每当受此结界的地横置以产生法术力时，其操控者加一点任意颜色的法术力到他的法术力池中 （该牌手会得到原本该有的法术力，并加上此份法术力）。",
		// 			type: "结界～灵气",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=196529&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 196529,
		// 		},
		// 	],
		// 	printings: ["ARB"],
		// 	originalText:
		// 		"Enchant land\nEnchanted land has shroud. (It can't be the target of spells or abilities.)\nWhenever enchanted land is tapped for mana, its controller adds one mana of any color to his or her mana pool (in addition to the mana the land produces).",
		// 	originalType: "Enchantment — Aura",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "468da9c7-a72f-5fdc-8aa8-df6edc9e3b62",
		// },
		// {
		// 	name: "Akiri, Line-Slinger",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Kor Soldier Ally",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Kor", "Soldier", "Ally"],
		// 	rarity: "Rare",
		// 	set: "C16",
		// 	setName: "Commander 2016",
		// 	text: "First strike, vigilance\nAkiri, Line-Slinger gets +1/+0 for each artifact you control.\nPartner (You can have two commanders if both have partner.)",
		// 	flavor: "Her bold movements are anchored in the careful precision of each rope.",
		// 	artist: "David Gaillet",
		// 	number: "26",
		// 	power: "0",
		// 	toughness: "3",
		// 	layout: "normal",
		// 	multiverseid: "420643",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420643&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2020-11-10",
		// 			text: "If your Commander deck has two commanders, you can only include cards whose own color identities are also found in your commanders’ combined color identities. If Falthis and Kediss are your commanders, your deck may contain cards with black and/or red in their color identity, but not cards with green, white, or blue.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "Both commanders start in the command zone, and the remaining 98 cards (or 58 cards in a Commander Draft game) of your deck are shuffled to become your library.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "To have two commanders, both must have the partner ability as the game begins. Losing the ability during the game doesn’t cause either to cease to be your commander.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "Once the game begins, your two commanders are tracked separately. If you cast one, you won’t have to pay an additional {2} the first time you cast the other. A player loses the game after having been dealt 21 damage from any one of them, not from both of them combined.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "If something refers to your commander while you have two commanders, it refers to one of them of your choice. If you are instructed to perform an action on your commander (e.g. put it from the command zone into your hand due to Command Beacon), you choose one of your commanders at the time the effect happens.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "An effect that checks whether you control your commander is satisfied if you control one or both of your two commanders.",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "You can choose two commanders with partner that are the same color or colors. In Commander Draft, you can even choose two of the same commander with partner if you drafted them. If you do this, make sure you keep the number of times you’ve cast each from the command zone clear for “commander tax” purposes.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Akiri, Seilschleuderin",
		// 			text: "Erstschlag, Wachsamkeit\nAkiri, Seilschleuderin, erhält +1/+0 für jedes Artefakt, das du kontrollierst.\nPartner (Du kannst zwei Kommandeure haben, falls beide Partner haben.)",
		// 			type: "Legendäre Kreatur — Kor, Soldat, Verbündeter",
		// 			flavor: "Der präzise Einsatz jedes Seils ermöglicht ihr ihre waghalsigen Manöver.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=421345&type=card",
		// 			language: "German",
		// 			multiverseid: 421345,
		// 		},
		// 		{
		// 			name: "Akiri, lanzacuerdas",
		// 			text: "Daña primero, vigilancia.\nAkiri, lanzacuerdas obtiene +1/+0 por cada artefacto que controlas.\nCamarada. (Puedes tener dos comandantes si ambos tienen camarada.)",
		// 			type: "Criatura legendaria — Soldado kor aliado",
		// 			flavor: "Sus osados movimientos están ligados a la cuidada precisión de cada cuerda.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423100&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 423100,
		// 		},
		// 		{
		// 			name: "Akiri, élingueuse de filins",
		// 			text: "Initiative, vigilance\nAkiri, élingueuse de filins gagne +1/+0 pour chaque artefact que vous contrôlez.\nPartenariat (Vous pouvez avoir deux commandants si les deux ont le partenariat.)",
		// 			type: "Créature légendaire : kor et soldat et allié",
		// 			flavor: "Ses mouvements audacieux sont ancrés dans la précision minutieuse de chaque corde.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=421696&type=card",
		// 			language: "French",
		// 			multiverseid: 421696,
		// 		},
		// 		{
		// 			name: "Akiri, Lanciafuni",
		// 			text: "Attacco improvviso, cautela\nAkiri, Lanciafuni prende +1/+0 per ogni artefatto che controlli.\nPartner (Puoi avere due comandanti se entrambi hanno partner.)",
		// 			type: "Creatura Leggendaria — Alleato Soldato Kor",
		// 			flavor: "I suoi audaci movimenti sono ancorati nell'attenta precisione di ogni fune.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422047&type=card",
		// 			language: "Italian",
		// 			multiverseid: 422047,
		// 		},
		// 		{
		// 			name: "綱投げ、アキリ",
		// 			text: "先制攻撃、警戒\n綱投げ、アキリは、あなたがコントロールするアーティファクト１つにつき＋１/＋０の修整を受ける。\n共闘（両方が共闘を持つなら、あなたは２体の統率者を使用できる。）",
		// 			type: "伝説のクリーチャー — コー・兵士・同盟者",
		// 			flavor: "注意深く正確な綱捌きが、大胆な動作を支えている。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422398&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 422398,
		// 		},
		// 		{
		// 			name: "Akiri, Fundeira de Linha",
		// 			text: "Iniciativa, vigilância\nAkiri, Fundeira de Linha, recebe +1/+0 para cada artefato que você controla.\nParceiro (Você pode ter dois comandantes se ambos tiverem parceiro.)",
		// 			type: "Criatura Lendária — Kor Soldado Aliado",
		// 			flavor: "Seus movimentos ousados estão ancorados na cuidadosa precisão de cada corda.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=422749&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 422749,
		// 		},
		// 		{
		// 			name: "掷索人娅奇丽",
		// 			text: "先攻，警戒\n你每操控一个神器，掷索人娅奇丽便得+1/+0。\n拍档（你可将两个具有拍档异能的生物共同用作指挥官。）",
		// 			type: "传奇生物～寇族／士兵／伙伴",
		// 			flavor: "每根绳索的谨慎精准，奠定了她每次行动的大胆无畏。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420994&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 420994,
		// 		},
		// 	],
		// 	printings: ["C16", "CMR", "PRM", "PZ2"],
		// 	originalText:
		// 		"First strike, vigilance\nAkiri, Line-Slinger gets +1/+0 for each artifact you control.\nPartner (You can have two commanders if both have partner.)",
		// 	originalType: "Legendary Creature — Kor Soldier Ally",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "ff4cc9c8-2b05-5237-af1c-2095ca3e5383",
		// },
		// {
		// 	name: "Boros Guildmage",
		// 	manaCost: "{R/W}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Wizard",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Wizard"],
		// 	rarity: "Uncommon",
		// 	set: "CMA",
		// 	setName: "Commander Anthology",
		// 	text: "{1}{R}: Target creature gains haste until end of turn.\n{1}{W}: Target creature gains first strike until end of turn.",
		// 	artist: "Paolo Parente",
		// 	number: "199",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "430418",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=430418&type=card",
		// 	printings: ["CMA", "CMD", "HOP", "RAV"],
		// 	originalText:
		// 		"{1}{R}: Target creature gains haste until end of turn.\n{1}{W}: Target creature gains first strike until end of turn.",
		// 	originalType: "Creature — Human Wizard",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "cafc7fea-038d-5902-8e35-d67461c00d71",
		// },
		// {
		// 	name: "Evil Boros Charm",
		// 	manaCost: "{B/R}{W/B}",
		// 	cmc: 2,
		// 	colors: ["B", "R", "W"],
		// 	colorIdentity: ["B", "R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Rare",
		// 	set: "CMB1",
		// 	setName: "Mystery Booster Playtest Cards 2019",
		// 	text: "Choose one —\n• Evil Boros Charm deals 2 damage to any target and you gain 2 life.\n• Unblocked attacking creatures get +1/+0 until end of turn.\n• Create a 1/1 colorless Spirit creature token with lifelink and haste.",
		// 	artist: "Mark Purvis",
		// 	number: "90",
		// 	layout: "normal",
		// 	multiverseid: "476220",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476220&type=card",
		// 	printings: ["CMB1", "CMB2"],
		// 	originalText:
		// 		"Choose one —\n• CARDNAME deals 2 damage to any target and you gain 2 life.\n• Unblocked attacking creatures get +1/+0 until end of turn.\n• Create a 1/1 colorless Spirit creature token with lifelink and haste.",
		// 	originalType: "Instant",
		// 	id: "b063ce66-934a-5f9d-aa2c-042386750404",
		// },
		// {
		// 	name: "Reyav, Master Smith",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Dwarf Artificer",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Dwarf", "Artificer"],
		// 	rarity: "Uncommon",
		// 	set: "CMR",
		// 	setName: "Commander Legends",
		// 	text: "Whenever a creature you control that's enchanted or equipped attacks, that creature gains double strike until end of turn.",
		// 	flavor: '"There\'s always room for improvement."',
		// 	artist: "Scott Murphy",
		// 	number: "290",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "497810",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=497810&type=card",
		// 	variations: ["be8d49a5-7c34-51c9-b291-5d72d599a3ef"],
		// 	rulings: [
		// 		{
		// 			date: "2020-11-10",
		// 			text: "If a creature you control that's enchanted and equipped attacks, Reyav's ability will trigger only once for that creature. (Don't worry. Multiple instances of double strike are redundant. You're not missing much.)",
		// 		},
		// 		{
		// 			date: "2020-11-10",
		// 			text: "The creature needs to be enchanted or equipped at the moment it's declared as an attacker to cause Reyav's ability to trigger. If the creature is no longer enchanted or equipped (or no longer attacking) as the ability tries to resolve, the ability still resolves.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Reyav der Meisterschmied",
		// 			text: "Immer wenn eine Kreatur, die du kontrollierst und die verzaubert oder ausgerüstet ist, angreift, erhält sie Doppelschlag bis zum Ende des Zuges.",
		// 			type: "Legendäre Kreatur — Zwerg, Handwerker",
		// 			flavor: '„Es gibt immer Potenzial für Verbesserungen."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=498171&type=card",
		// 			language: "German",
		// 			multiverseid: 498171,
		// 		},
		// 		{
		// 			name: "Reyav, maestro herrero",
		// 			text: "Siempre que una criatura que controlas que esté encantada o equipada ataque, esa criatura gana la habilidad de dañar dos veces hasta el final del turno.",
		// 			type: "Criatura legendaria — Artífice enano",
		// 			flavor: '"Siempre se puede mejorar".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=498532&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 498532,
		// 		},
		// 		{
		// 			name: "Reyav, maitre-forgeur",
		// 			text: "À chaque fois qu'une créature que vous contrôlez qui est enchantée ou équipée attaque, cette créature acquiert la double initiative jusqu'à la fin du tour.",
		// 			type: "Créature légendaire : nain et artificier",
		// 			flavor: "« Il y a toujours matière à s'améliorer. »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=498893&type=card",
		// 			language: "French",
		// 			multiverseid: 498893,
		// 		},
		// 		{
		// 			name: "Reyav, Mastro Fabbro",
		// 			text: "Ogniqualvolta una creatura incantata o equipaggiata che controlli attacca, quella creatura ha doppio attacco fino alla fine del turno.",
		// 			type: "Creatura Leggendaria — Artefice Nano",
		// 			flavor: '"Si può sempre fare di meglio."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=499254&type=card",
		// 			language: "Italian",
		// 			multiverseid: 499254,
		// 		},
		// 		{
		// 			name: "練達の職人、レヤブ",
		// 			text: "あなたがコントロールしていて、オーラや装備品がついているクリーチャー１体が攻撃するたび、ターン終了時まで、そのクリーチャーは二段攻撃を得る。",
		// 			type: "伝説のクリーチャー — ドワーフ・工匠",
		// 			flavor: "「改良の余地は常にある。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=499615&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 499615,
		// 		},
		// 		{
		// 			name: "Reyav, Ferreiro Mestre",
		// 			text: "Toda vez que uma criatura encantada ou equipada que você controla ataca, aquela criatura ganha golpe duplo até o final do turno.",
		// 			type: "Criatura Lendária — Anão Artesão",
		// 			flavor: '"É sempre possível melhorar."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=499976&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 499976,
		// 		},
		// 		{
		// 			name: "铸匠大师雷雅夫",
		// 			text: "每当一个由你操控且已结附灵气或已佩带武具的生物攻击时，该生物获得连击异能直到回合结束。",
		// 			type: "传奇生物 ～矮人／神器师",
		// 			flavor: "「总是会有改进空间。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=500337&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 500337,
		// 		},
		// 		{
		// 			name: "鑄匠大師雷雅夫",
		// 			text: "每當一個由你操控且已結附靈氣或已佩帶武具的生物攻擊時，該生物獲得連擊異能直到回合結束。",
		// 			type: "傳奇生物 ～矮人／神器師",
		// 			flavor: "「總是會有改進空間。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=500698&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 500698,
		// 		},
		// 	],
		// 	printings: ["CMR", "MUL", "PLIST", "PRM"],
		// 	originalText:
		// 		"Whenever a creature you control that's enchanted or equipped attacks, that creature gains double strike until end of turn.",
		// 	originalType: "Legendary Creature — Dwarf Artificer",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "5d5612f7-e556-550a-9de9-8ed745b35f46",
		// },
		// {
		// 	name: "Deflecting Palm",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Rare",
		// 	set: "CMR",
		// 	setName: "Commander Legends",
		// 	text: "The next time a source of your choice would deal damage to you this turn, prevent that damage. If damage is prevented this way, Deflecting Palm deals that much damage to that source's controller.",
		// 	artist: "Eric Deschamps",
		// 	number: "444",
		// 	layout: "normal",
		// 	multiverseid: "500924",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=500924&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2014-09-20",
		// 			text: "Deflecting Palm doesn’t target any permanent or player. You choose a source of damage as Deflecting Palm resolves.",
		// 		},
		// 		{
		// 			date: "2014-09-20",
		// 			text: "If multiple prevention and/or replacement effects are trying to apply to the same damage, the player who would be dealt damage chooses the order in which to apply them.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Abwehrende Hand",
		// 			text: "Das nächste Mal, dass dir eine Quelle, die du bestimmst, in diesem Zug Schaden zufügen würde, verhindere diesen Schaden. Falls auf diese Weise Schaden verhindert wurde, fügt die Abwehrende Hand dem Beherrscher der Quelle entsprechend viele Schadenspunkte zu.",
		// 			type: "Spontanzauber",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501068&type=card",
		// 			language: "German",
		// 			multiverseid: 501068,
		// 		},
		// 		{
		// 			name: "Palma bloqueadora",
		// 			text: "La próxima vez que una fuente de tu elección fuera a hacerte daño este turno, prevén ese daño. Si se previene daño de esta manera, la Palma bloqueadora hace esa misma cantidad de daño al controlador de esa fuente.",
		// 			type: "Instantáneo",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501212&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 501212,
		// 		},
		// 		{
		// 			name: "Paume déflectrice",
		// 			text: "La prochaine fois qu'une source de votre choix devrait vous infliger des blessures ce tour-ci, prévenez ces blessures. Si des blessures sont prévenues de cette manière, la Paume déflectrice inflige autant de blessures au contrôleur de cette source.",
		// 			type: "Éphémère",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501356&type=card",
		// 			language: "French",
		// 			multiverseid: 501356,
		// 		},
		// 		{
		// 			name: "Palmo della Deviazione",
		// 			text: "La prossima volta che una fonte a tua scelta ti sta per infliggere danno in questo turno, previeni quel danno. Se viene prevenuto danno in questo modo, il Palmo della Deviazione infligge altrettanti danni al controllore di quella fonte.",
		// 			type: "Istantaneo",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501500&type=card",
		// 			language: "Italian",
		// 			multiverseid: 501500,
		// 		},
		// 		{
		// 			name: "跳ね返す掌",
		// 			text: "このターン、あなたが選んだ発生源１つが次にあなたに与えるダメージを軽減する。これによりダメージが軽減されたなら、跳ね返す掌はその発生源のコントローラーに同じ点数のダメージを与える。",
		// 			type: "インスタント",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501644&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 501644,
		// 		},
		// 		{
		// 			name: "Palma Defletora",
		// 			text: "Na próxima vez que uma fonte de sua escolha for lhe causar dano neste turno, previna aquele dano. Se o dano for prevenido desta maneira, Palma Defletora causará uma quantidade equivalente de dano ao controlador daquela fonte.",
		// 			type: "Mágica Instantânea",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501788&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 501788,
		// 		},
		// 		{
		// 			name: "Отражающая Ладонь",
		// 			text: "В следующий раз, когда выбранный вами источник должен будет нанести вам повреждения в этом ходу, предотвратите те повреждения. Если повреждения предотвращаются таким образом, Отражающая Ладонь наносит столько же повреждений игроку, контролирующему тот источник.",
		// 			type: "Мгновенное заклинание",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=501932&type=card",
		// 			language: "Russian",
		// 			multiverseid: 501932,
		// 		},
		// 		{
		// 			name: "馈击掌",
		// 			text: "选择一个来源。于本回合中，防止该来源下一次将对你造成的伤害。如果以此法防止伤害，则馈击掌对该来源的操控者造成等量的伤害。",
		// 			type: "瞬间",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=502076&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 502076,
		// 		},
		// 		{
		// 			name: "饋擊掌",
		// 			text: "選擇一個來源。於本回合中，防止該來源下一次將對你造成的傷害。如果以此法防止傷害，則饋擊掌對該來源的操控者造成等量的傷害。",
		// 			type: "瞬間",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=502220&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 502220,
		// 		},
		// 	],
		// 	printings: ["CMR", "KTK", "PKTK"],
		// 	originalText:
		// 		"The next time a source of your choice would deal damage to you this turn, prevent that damage. If damage is prevented this way, Deflecting Palm deals that much damage to that source's controller.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "79bc5dcc-c731-5d52-bf7b-62762b5da28a",
		// },
		// {
		// 	name: "Akroan Hoplite",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Uncommon",
		// 	set: "CN2",
		// 	setName: "Conspiracy: Take the Crown",
		// 	text: "Whenever Akroan Hoplite attacks, it gets +X/+0 until end of turn, where X is the number of attacking creatures you control.",
		// 	flavor: "\"Fair fight? How could it be a fair fight? We're Akroans. They're not.\"",
		// 	artist: "Igor Kieryluk",
		// 	number: "197",
		// 	power: "1",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "416954",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416954&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2013-09-15",
		// 			text: "Count the number of attacking creatures you control when the ability resolves to determine the value of X.",
		// 		},
		// 		{
		// 			date: "2013-09-15",
		// 			text: "Once the ability resolves, the bonus won't change even if the number of attacking creatures you control does.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "アクロスの重装歩兵",
		// 			text: "アクロスの重装歩兵が攻撃するたび、ターン終了時まで、これは＋Ｘ/＋０の修整を受ける。Ｘはあなたがコントロールする攻撃クリーチャーの総数に等しい。",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "「正々堂々と戦うだと？正々堂々な戦いもなにもあるか。我々はアクロス人で、奴らは違う。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417396&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 417396,
		// 		},
		// 		{
		// 			name: "阿喀洛斯重装步兵",
		// 			text: "每当阿喀洛斯重装步兵攻击时，它得+X/+0直到回合结束，X为由你操控且进行攻击的生物数量。",
		// 			type: "生物～人类／士兵",
		// 			flavor: "「公平？这怎么可能公平？我们是阿喀洛斯人。他们不是。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417175&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 417175,
		// 		},
		// 	],
		// 	printings: ["CN2", "MB1", "THS"],
		// 	originalText:
		// 		"Whenever Akroan Hoplite attacks, it gets +X/+0 until end of turn, where X is the number of attacking creatures you control.",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "b8d38cdc-e8ca-549a-8af7-1457462ef2de",
		// },
		// {
		// 	name: "Flamewright",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Artificer",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Artificer"],
		// 	rarity: "Uncommon",
		// 	set: "CNS",
		// 	setName: "Conspiracy",
		// 	text: "{1}, {T}: Create a 1/1 colorless Construct artifact creature token with defender.\n{T}, Sacrifice a creature with defender: Flamewright deals 1 damage to any target.",
		// 	flavor: "Those who can't conspire, create.",
		// 	artist: "Mathias Kollros",
		// 	number: "46",
		// 	power: "1",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "382269",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382269&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "火炎職人",
		// 			text: "{1}, {T}：防衛を持つ無色の１/１の構築物・アーティファクト・クリーチャー・トークンを１体戦場に出す。\n{T}, 防衛を持つクリーチャーを１体生け贄に捧げる：クリーチャー１体かプレイヤー１人を対象とする。火炎職人はそれに１点のダメージを与える。",
		// 			type: "クリーチャー — 人間・工匠",
		// 			flavor: "共謀できない者は、創造する。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382689&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 382689,
		// 		},
		// 		{
		// 			name: "炎铸匠",
		// 			text: "{1}，{T}：将一个1/1无色，具守军异能的组构体衍生神器生物放进战场。\n{T}，牺牲一个具守军异能的生物：炎铸匠对目标生物或牌手造成1点伤害。",
		// 			type: "生物～人类／神器师",
		// 			flavor: "欠权谋者多创力。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382479&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 382479,
		// 		},
		// 	],
		// 	printings: ["CNS"],
		// 	originalText:
		// 		"{1}, {T}: Put a 1/1 colorless Construct artifact creature token with defender onto the battlefield.\n{T}, Sacrifice a creature with defender: Flamewright deals 1 damage to target creature or player.",
		// 	originalType: "Creature — Human Artificer",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "2411b68b-58ba-5d9e-a63a-af241c0d4582",
		// },
		// {
		// 	name: "Sacred Fire",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "DBL",
		// 	setName: "Innistrad: Double Feature",
		// 	text: "Sacred Fire deals 2 damage to any target and you gain 2 life.\nFlashback {4}{R}{W} (You may cast this card from your graveyard for its flashback cost. Then exile it.)",
		// 	flavor: '"Do not confuse justice with mercy."\n—Odric, Order of Saint Traft',
		// 	artist: "Svetlin Velinov",
		// 	number: "239",
		// 	layout: "normal",
		// 	rulings: [
		// 		{
		// 			date: "2021-09-24",
		// 			text: "“Flashback [cost]” means “You may cast this card from your graveyard by paying [cost] rather than paying its mana cost” and “If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack.”",
		// 		},
		// 		{
		// 			date: "2021-09-24",
		// 			text: "You must still follow any timing restrictions and permissions, including those based on the card's type. For instance, you can cast a sorcery using flashback only when you could normally cast a sorcery.",
		// 		},
		// 		{
		// 			date: "2021-09-24",
		// 			text: "To determine the total cost of a spell, start with the mana cost or alternative cost (such as a flashback cost) you're paying, add any cost increases, then apply any cost reductions. The mana value of the spell is determined only by its mana cost, no matter what the total cost to cast the spell was.",
		// 		},
		// 		{
		// 			date: "2021-09-24",
		// 			text: "A spell cast using flashback will always be exiled afterward, whether it resolves, is countered, or leaves the stack in some other way.",
		// 		},
		// 		{
		// 			date: "2021-09-24",
		// 			text: "You can cast a spell using flashback even if it was somehow put into your graveyard without having been cast.",
		// 		},
		// 		{
		// 			date: "2021-09-24",
		// 			text: "If a card with flashback is put into your graveyard during your turn, you can cast it if it's legal to do so before any other player can take any actions.",
		// 		},
		// 	],
		// 	printings: ["DBL", "MID"],
		// 	legalities: [
		// 		{
		// 			format: "Alchemy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Brawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Future",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Standard",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "bfd38140-3e0e-518c-bdbe-59550fa3cfdb",
		// },
		// {
		// 	name: "Truefire Paladin",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Knight",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Knight"],
		// 	rarity: "Uncommon",
		// 	set: "DDL",
		// 	setName: "Duel Decks: Heroes vs. Monsters",
		// 	text: "Vigilance\n{R}{W}: Truefire Paladin gets +2/+0 until end of turn.\n{R}{W}: Truefire Paladin gains first strike until end of turn.",
		// 	artist: "Michael C. Hayes",
		// 	number: "8",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "373395",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373395&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "真火の聖騎士",
		// 			text: "警戒{R}{W}：真火の聖騎士はターン終了時まで＋２/＋０の修整を受ける。{R}{W}：真火の聖騎士はターン終了時まで先制攻撃を得る。",
		// 			type: "クリーチャー — 人間・騎士",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373476&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 373476,
		// 		},
		// 	],
		// 	printings: ["DDL", "GTC"],
		// 	originalText:
		// 		"Vigilance{R}{W}: Truefire Paladin gets +2/+0 until end of turn.{R}{W}: Truefire Paladin gains first strike until end of turn.",
		// 	originalType: "Creature — Human Knight",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "8f9fdf98-1fc4-5af3-a3e2-dc3998f77cd9",
		// },
		// {
		// 	name: "Baird, Argivian Recruiter",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Human Soldier",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Uncommon",
		// 	set: "DMU",
		// 	setName: "Dominaria United",
		// 	text: "At the beginning of your end step, if you control a creature with power greater than its base power, create a 1/1 white Soldier creature token.",
		// 	flavor: '"Fear doesn\'t make you a coward; giving in to it does. Now take up your sword and fight!"',
		// 	artist: "Jarel Threat",
		// 	number: "195",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "574675",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=574675&type=card",
		// 	variations: [
		// 		"f3ebeb9f-e5f5-561a-aba2-a8abcecd8afb",
		// 		"823cac09-cb3c-549d-a127-454f38e922d7",
		// 	],
		// 	rulings: [
		// 		{
		// 			date: "2022-09-09",
		// 			text: "Normally, a creature’s base power and toughness are the power and toughness printed on the card or, for a token, the power and toughness set by the effect that created it. If another effect sets a creature’s power and toughness to specific numbers or values, those become its base power and toughness. If an effect modifies a creature’s power and/or toughness without setting them, that is not included when determining its base power and toughness.",
		// 		},
		// 		{
		// 			date: "2022-09-09",
		// 			text: "If a creature has a characteristic-defining ability that sets its power and toughness, indicated with a */* or similar in the power and toughness box, that ability is taken into account when determining its base power and toughness.",
		// 		},
		// 		{
		// 			date: "2022-09-09",
		// 			text: "Some creatures have base power and toughness 0/0 and an ability that gives them a bonus based on some criteria. Those are not characteristic-defining abilities, and that ability doesn’t change its base power and toughness.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Baird, argivischer Anwerber",
		// 			text: "Zu Beginn deines Endsegments und falls du eine Kreatur kontrollierst, deren Stärke größer ist als ihre Basis-Stärke, erzeuge einen 1/1 weißen Soldat-Kreaturenspielstein.",
		// 			type: "Legendäre Kreatur — Mensch, Soldat",
		// 			flavor: '„Angst macht dich nicht zum Feigling, vor der Angst zu kapitulieren schon. Jetzt nimm dein Schwert und kämpfe!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=574936&type=card",
		// 			language: "German",
		// 			multiverseid: 574936,
		// 		},
		// 		{
		// 			name: "Baird, reclutador argiviano",
		// 			text: "Al comienzo de tu paso final, si controlas una criatura con una fuerza mayor que su fuerza base, crea una ficha de criatura Soldado blanca 1/1.",
		// 			type: "Criatura legendaria — Soldado humano",
		// 			flavor: '"El miedo no te hace cobarde; sucumbir a él, sí. ¡Empuña tu espada y lucha!".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=575197&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 575197,
		// 		},
		// 		{
		// 			name: "Baird, recruteur argivian",
		// 			text: "Au début de votre étape de fin, si vous contrôlez une créature avec une force supérieure à sa force de base, créez un jeton de créature 1/1 blanche Soldat.",
		// 			type: "Créature légendaire : humain et soldat",
		// 			flavor: "« La peur ne fait pas de vous des couards ; lui accorder la victoire le fait. Maintenant, prenez votre épée et battez-vous ! »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=575458&type=card",
		// 			language: "French",
		// 			multiverseid: 575458,
		// 		},
		// 		{
		// 			name: "Baird, Reclutatore di Argivia",
		// 			text: "All'inizio della tua sottofase finale, se controlli una creatura con forza superiore alla sua forza base, crea una pedina creatura Soldato 1/1 bianca.",
		// 			type: "Creatura Leggendaria — Soldato Umano",
		// 			flavor: '"La paura non ti rende un codardo; arrendersi ad essa sì. Ora prendi la tua spada e combatti!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=575719&type=card",
		// 			language: "Italian",
		// 			multiverseid: 575719,
		// 		},
		// 		{
		// 			name: "アルガイヴの徴募人、ベイルド",
		// 			text: "あなたの終了ステップの開始時に、あなたがそれの基本のパワーより大きいパワーを持つクリーチャーをコントロールしている場合、白の１/１の兵士・クリーチャー・トークン１体を生成する。",
		// 			type: "伝説のクリーチャー — 人間・兵士",
		// 			flavor: "「恐怖が臆病者を生むのではない。恐怖に屈したとき臆病者が生まれるのだ。さあ、剣を取って戦え！」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=575980&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 575980,
		// 		},
		// 		{
		// 			name: "Baird, Recrutador Argiviano",
		// 			text: "No início de sua etapa final, se você controlar uma criatura com poder maior que o próprio poder básico, crie uma ficha de criatura Soldado branca 1/1.",
		// 			type: "Criatura Lendária — Humano Soldado",
		// 			flavor: '"O medo não faz de você um covarde; sucumbir a ele, sim. Agora pegue sua espada e lute!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=576502&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 576502,
		// 		},
		// 		{
		// 			name: "阿基夫募兵官贝尔德",
		// 			text: "在你的结束步骤开始时，若你操控其力量比其基础力量大的生物，则派出一个1/1白色士兵衍生生物。",
		// 			type: "传奇生物 ～人类／士兵",
		// 			flavor: "「心生恐惧并非懦弱；屈从恐惧才是。挥舞长剑，奋勇战斗！」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=577024&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 577024,
		// 		},
		// 	],
		// 	printings: ["DMU"],
		// 	originalText:
		// 		"At the beginning of your end step, if you control a creature with power greater than its base power, create a 1/1 white Soldier creature token.",
		// 	originalType: "Legendary Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Alchemy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Brawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Future",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Standard",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "96bf94ee-ffd3-5289-8649-e6fb52edb8b9",
		// },
		// {
		// 	name: "Inspiring Veteran",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Knight",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Knight"],
		// 	rarity: "Uncommon",
		// 	set: "ELD",
		// 	setName: "Throne of Eldraine",
		// 	text: "Other Knights you control get +1/+1.",
		// 	flavor: '"I fight for my daughter, who may not set foot on a battlefield for many years. Remember who you fight for."',
		// 	artist: "Scott Murphy",
		// 	number: "194",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "473156",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473156&type=card",
		// 	variations: ["5ee49684-4bbd-5888-803e-fa1f36612cdf"],
		// 	foreignNames: [
		// 		{
		// 			name: "Inspirierender Veteran",
		// 			text: "Andere Ritter, die du kontrollierst, erhalten +1/+1.",
		// 			type: "Kreatur — Mensch, Ritter",
		// 			flavor: '„Ich kämpfe für meine Tochter, die noch viele Jahre lang kein Schlachtfeld betreten wird. Vergiss nie, für wen du kämpfst."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473425&type=card",
		// 			language: "German",
		// 			multiverseid: 473425,
		// 		},
		// 		{
		// 			name: "Veterano inspirador",
		// 			text: "Los otros Caballeros que controlas obtienen +1/+1.",
		// 			type: "Criatura — Caballero humano",
		// 			flavor: '"Yo lucho por mi hija, que no pondrá un pie en el campo de batalla hasta dentro de muchos años. Recuerda por quién luchas tú".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473694&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 473694,
		// 		},
		// 		{
		// 			name: "Vétéran inspirateur",
		// 			text: "Les autres chevaliers que vous contrôlez gagnent +1/+1.",
		// 			type: "Créature : humain et chevalier",
		// 			flavor: "« Je me bats pour ma fille, qui ne mettra pas le pied sur un champ de bataille avant bien des années. N'oubliez pas pour qui vous vous battez. »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473963&type=card",
		// 			language: "French",
		// 			multiverseid: 473963,
		// 		},
		// 		{
		// 			name: "Veterano Ispiratore",
		// 			text: "Gli altri Cavalieri che controlli prendono +1/+1.",
		// 			type: "Creatura — Cavaliere Umano",
		// 			flavor: '"Combatto per mia figlia, che non potrà calpestare il campo di battaglia per molti anni. Ricorda per chi combatti."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=474232&type=card",
		// 			language: "Italian",
		// 			multiverseid: 474232,
		// 		},
		// 		{
		// 			name: "鼓舞する古参",
		// 			text: "他の、あなたがコントロールしている騎士は＋１/＋１の修整を受ける。",
		// 			type: "クリーチャー — 人間・騎士",
		// 			flavor: "「私は我が娘のために戦う。この子が戦場に立つのは、まだ何年も先だろう。自分が誰のために戦うのか忘れてはならない。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=474501&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 474501,
		// 		},
		// 		{
		// 			name: "용기를 북돋는 숙련병",
		// 			text: "당신이 조종하는 다른 기사들은 +1/+1을 받는다.",
		// 			type: "생물 — 인간 기사",
		// 			flavor: '"나는 내 딸이 전장에 발을 들이지 않기 위해 싸운다. 네가 누구를 위해 싸우는지를 명심해라."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=474770&type=card",
		// 			language: "Korean",
		// 			multiverseid: 474770,
		// 		},
		// 		{
		// 			name: "Veterano Inspirador",
		// 			text: "Os outros Cavaleiros que você controla recebem +1/+1.",
		// 			type: "Criatura — Humano Cavaleiro",
		// 			flavor: '"Eu luto por minha filha, que não poderá pisar num campo de batalha por muitos anos ainda. Lembre-se por quem você luta."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=475039&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 475039,
		// 		},
		// 		{
		// 			name: "Вдохновляющий Ветеран",
		// 			text: "Другие Рыцари под вашим контролем получают +1/+1.",
		// 			type: "Существо — Человек Рыцарь",
		// 			flavor: "«Я сражаюсь ради своей дочери, которой еще много лет не доведется выйти на поле битвы. Не забывайте, ради кого сражаетесь вы».",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=475308&type=card",
		// 			language: "Russian",
		// 			multiverseid: 475308,
		// 		},
		// 		{
		// 			name: "励志老兵",
		// 			text: "由你操控的其他骑士得+1/+1。",
		// 			type: "生物 ～人类／骑士",
		// 			flavor: "「我奋勇征战全是为了我的女儿，好让她将来多年都不用踏足沙场。问问自己你是为谁而战。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=475577&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 475577,
		// 		},
		// 		{
		// 			name: "勵志老兵",
		// 			text: "由你操控的其他騎士得+1/+1。",
		// 			type: "生物 ～人類／騎士",
		// 			flavor: "「我奮勇征戰全是為了我的女兒，好讓她將來多年都不用踏足沙場。問問自己你是為誰而戰。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=475846&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 475846,
		// 		},
		// 	],
		// 	printings: ["ELD"],
		// 	originalText: "Other Knights you control get +1/+1.",
		// 	originalType: "Creature — Human Knight",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "3a6f5d81-0f85-5718-ba57-077df1d3f93b",
		// },
		// {
		// 	name: "Ride Down",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "EMN",
		// 	setName: "Eldritch Moon",
		// 	text: "Destroy target blocking creature. Creatures that were blocked by that creature this combat gain trample until end of turn.",
		// 	flavor: "The Order of Saint Traft cleared the roads of cultists and horrors, opening the way for the villagers to flee Thraben.",
		// 	artist: "David Gaillet",
		// 	number: "188",
		// 	layout: "normal",
		// 	multiverseid: "414493",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414493&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2014-09-20",
		// 			text: "The attacking creatures that the destroyed creature was blocking remain blocked (even if no other creatures were blocking them). An attacking creature with trample that has no creature blocking it can deal its combat damage to the defending player or planeswalker.",
		// 		},
		// 		{
		// 			date: "2014-09-20",
		// 			text: "In some rare cases, the blocking creature wasn’t declared as a blocking creature that combat (for example, if it entered the battlefield blocking). In that case, the attacking creatures it was blocking won’t gain trample even though the blocking creature is destroyed.",
		// 		},
		// 		{
		// 			date: "2016-07-13",
		// 			text: "The attacking creatures that the destroyed creature was blocking remain blocked (even if no other creatures were blocking them). An attacking creature with trample that has no creature blocking it will deal its combat damage to the defending player or planeswalker.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Niedertrampeln",
		// 			text: "Zerstöre eine blockende Kreatur deiner Wahl. Kreaturen, die in diesem Kampf von dieser Kreatur geblockt wurden, verursachen Trampelschaden bis zum Ende des Zuges.",
		// 			type: "Spontanzauber",
		// 			flavor: "Der Orden von Sankt Traft hat die Straßen von Kultisten und Schrecken gesäubert und den Dörflern somit einen Fluchtweg aus Thraben gebahnt.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=415162&type=card",
		// 			language: "German",
		// 			multiverseid: 415162,
		// 		},
		// 		{
		// 			name: "Derribo",
		// 			text: "Destruye la criatura bloqueadora objetivo. Las criaturas que fueron bloqueadas por esa criatura este combate ganan la habilidad de arrollar hasta el final del turno.",
		// 			type: "Instantáneo",
		// 			flavor: "La Orden de San Traft despejó los caminos de cultistas y horrores para que los aldeanos pudieran huir de Thraben.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416723&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 416723,
		// 		},
		// 		{
		// 			name: "Piétiner",
		// 			text: "Détruisez la créature bloqueuse ciblée. Les créatures qui ont été bloquées par cette créature pendant ce combat acquièrent le piétinement jusqu'à la fin du tour.",
		// 			type: "Éphémère",
		// 			flavor: "L'Ordre de Saint Traft chassa les cultistes et les horreurs des routes, libérant la voie aux villageois qui fuyaient Thraben.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=415385&type=card",
		// 			language: "French",
		// 			multiverseid: 415385,
		// 		},
		// 		{
		// 			name: "Calpestare col Cavallo",
		// 			text: "Distruggi una creatura bloccante bersaglio. Le creature che erano bloccate da quella creatura in questo combattimento hanno travolgere fino alla fine del turno.",
		// 			type: "Istantaneo",
		// 			flavor: "L'Ordine di San Traft ripulì le strade da cultisti e orrori, aprendo un varco per la fuga dei contadini da Thraben.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=415608&type=card",
		// 			language: "Italian",
		// 			multiverseid: 415608,
		// 		},
		// 		{
		// 			name: "騎乗追撃",
		// 			text: "ブロック・クリーチャー１体を対象とし、それを破壊する。ターン終了時まで、この戦闘でそのクリーチャーにブロックされていたクリーチャーはトランプルを得る。",
		// 			type: "インスタント",
		// 			flavor: "スレイベンから逃げる村人のために、聖トラフト騎士団は道という道から狂信者や化け物を一掃した。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=415831&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 415831,
		// 		},
		// 		{
		// 			name: "짓밟기",
		// 			text: "방어생물을 목표로 정한다. 그 생물을 파괴한다. 이 전투에서 그 생물이 방어했던 생물들은 턴종료까지 돌진을 얻는다.",
		// 			type: "순간마법",
		// 			flavor: "성 트라프트 교단은 거리에 가득 찬 광신도와 괴수 무리들을 쓸어버리고 마을 주민들이 트레이벤을 탈출하는 길을 열어 주었다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416054&type=card",
		// 			language: "Korean",
		// 			multiverseid: 416054,
		// 		},
		// 		{
		// 			name: "Pisotear",
		// 			text: "Destrua a criatura bloqueadora alvo. As criaturas que foram bloqueadas por aquela criatura neste combate ganham atropelar até o final do turno.",
		// 			type: "Mágica Instantânea",
		// 			flavor: "A Ordem de Santo Traft varreu os cultistas e horrores das estradas, abrindo caminho para que os aldeões fugissem de Thraben.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416277&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 416277,
		// 		},
		// 		{
		// 			name: "Задавить Конем",
		// 			text: "Уничтожьте целевое блокирующее существо. Существа, которые были заблокированы тем существом в этом бою, получают Пробивной удар до конца хода.",
		// 			type: "Мгновенное заклинание",
		// 			flavor: "Орден святого Трафта очистил дороги от сектантов и чудовищ, чтобы трейбенцы могли бежать из города.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416500&type=card",
		// 			language: "Russian",
		// 			multiverseid: 416500,
		// 		},
		// 		{
		// 			name: "踏平",
		// 			text: "消灭目标进行阻挡的生物。本次战斗中被该生物阻挡的生物获得践踏异能直到回合结束。",
		// 			type: "瞬间",
		// 			flavor: "圣沙弗骑士团清除了道路上的教众和邪物，让村民得以逃离瑟班。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414716&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 414716,
		// 		},
		// 		{
		// 			name: "踏平",
		// 			text: "消滅目標進行阻擋的生物。本次戰鬥中被該生物阻擋的生物獲得踐踏異能直到回合結束。",
		// 			type: "瞬間",
		// 			flavor: "聖沙弗騎士團清除了道路上的教眾和邪物，讓村民得以逃離瑟班。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=414939&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 414939,
		// 		},
		// 	],
		// 	printings: ["EMN", "KTK", "SIR"],
		// 	originalText:
		// 		"Destroy target blocking creature. Creatures that were blocked by that creature this combat gain trample until end of turn.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "c42ee763-b449-5746-822c-106fa03c5946",
		// },
		// {
		// 	name: "Battlegate Mimic",
		// 	manaCost: "{1}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Shapeshifter",
		// 	types: ["Creature"],
		// 	subtypes: ["Shapeshifter"],
		// 	rarity: "Common",
		// 	set: "EVE",
		// 	setName: "Eventide",
		// 	text: "Whenever you cast a spell that's both red and white, Battlegate Mimic has base power and toughness 4/2 until end of turn and gains first strike until end of turn.",
		// 	flavor: "Mimics don't need perfect disguises. They need only the perfect victims: the naive, the young, or the poor of sight.",
		// 	artist: "Franz Vohwinkel",
		// 	number: "133",
		// 	power: "2",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "151165",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=151165&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2008-08-01",
		// 			text: "The ability triggers whenever you cast a spell that’s both of its listed colors. It doesn’t matter whether that spell also happens to be any other colors.",
		// 		},
		// 		{
		// 			date: "2008-08-01",
		// 			text: "If you cast a spell that’s the two appropriate colors for the second time in a turn, the ability triggers again. The Mimic will once again become the power and toughness stated in its ability, which could overwrite power- and toughness-setting effects that have been applied to it in the meantime.",
		// 		},
		// 		{
		// 			date: "2008-08-01",
		// 			text: "Any other abilities the Mimic may have gained are not affected.",
		// 		},
		// 		{
		// 			date: "2009-10-01",
		// 			text: "The effect from the ability overwrites other effects that set power and/or toughness if and only if those effects existed before the ability resolved. It will not overwrite effects that modify power or toughness (whether from a static ability, counters, or a resolved spell or ability), nor will it overwrite effects that set power and toughness which come into existence after the ability resolves. Effects that switch the creature’s power and toughness are always applied after any other power or toughness changing effects, including this one, regardless of the order in which they are created.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Ausfalltor-Nachäffer",
		// 			text: "Immer wenn du einen Zauberspruch spielst, der sowohl rot als auch weiß ist, wird der Ausfalltor-Nachäffer 4/2 und erhält Erstschlag (beides bis zum Ende des Zuges).",
		// 			type: "Kreatur — Gestaltwandler",
		// 			flavor: "Nachäffer benötigen keine perfekte Tarnung. Sie müssen sich nur perfekte Opfer suchen: die Naiven, die Heranwachsenden oder die Halbblinden.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181661&type=card",
		// 			language: "German",
		// 			multiverseid: 181661,
		// 		},
		// 		{
		// 			name: "Mímico del portal",
		// 			text: "Siempre que juegues un hechizo que sea tanto rojo como blanco el Mímico del portal se convierte en 4/2 y gana la habilidad de dañar primero hasta el final del turno.",
		// 			type: "Criatura — Metamorfo",
		// 			flavor: "Los mímicos no necesitan disfraces perfectos. Sólo necesitan las víctimas perfectas: los ingenuos, jóvenes o miopes.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180761&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 180761,
		// 		},
		// 		{
		// 			name: "Mimique de la porte de guerre",
		// 			text: "À chaque fois que vous jouez un sort qui est à la fois rouge et blanc, le Mimique de la porte de guerre devient 4/2 et acquiert l'initiative jusqu'à la fin du tour.",
		// 			type: "Créature : changeforme",
		// 			flavor: "Les mimiques n'ont pas besoin d'un déguisement parfait. Il leur suffit de trouver les victimes parfaites : les jeunes, les naïfs ou les mal-voyants.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181841&type=card",
		// 			language: "French",
		// 			multiverseid: 181841,
		// 		},
		// 		{
		// 			name: "Mimic del Cancello",
		// 			text: "Ogniqualvolta giochi una magia rossa e bianca, il Mimic del Cancello diventa 4/2 e ha attacco improvviso fino alla fine del turno.",
		// 			type: "Creatura — Polimorfo",
		// 			flavor: "I mimic non hanno bisogno di mascheramenti perfetti. Hanno solo bisogno delle vittime perfette: gli ingenui, i giovani o i miopi.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181481&type=card",
		// 			language: "Italian",
		// 			multiverseid: 181481,
		// 		},
		// 		{
		// 			name: "戦門のミミック",
		// 			text: "あなたが赤であり白である呪文をプレイするたび、戦門のミミックはターン終了時まで４/２になるとともに先制攻撃を得る。",
		// 			type: "クリーチャー — 多相の戦士",
		// 			flavor: "ミミックは完璧に化ける必要はない。 必要なのは完璧な獲物だけだ。馬鹿正直なのとか、若いのとか、目の悪いのとか。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181121&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 181121,
		// 		},
		// 		{
		// 			name: "Mímico do Portão de Batalha",
		// 			text: "Toda vez que você joga uma mágica que é vermelha e branca, Mímico do Portão de Batalha torna-se 4/2 e ganha iniciativa até o final do turno.",
		// 			type: "Criatura — Metamorfo",
		// 			flavor: "Os mímicos não precisam de disfarces perfeitos. Precisam apenas das vítimas perfeitas: o inocente, o jovem ou o cegueta.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=182021&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 182021,
		// 		},
		// 		{
		// 			name: "Подражатель Крепостных Ворот",
		// 			text: "Каждый раз, когда вы разыгрываете заклинание, которое одновременно является и красным и белым, Подражатель Крепостных Ворот становится 4/2 и получает Первый удар до конца хода.",
		// 			type: "Существо — Имитатор",
		// 			flavor: "Подражателям не нужна идеальная маскировка. Им нужны лишь идеальные жертвы: молодые, наивные или полуслепые.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181301&type=card",
		// 			language: "Russian",
		// 			multiverseid: 181301,
		// 		},
		// 		{
		// 			name: "斗门拟态妖",
		// 			text: "每当你使用一个含红白双色的咒语时，斗门拟态妖成为4/2且获得先攻异能直到回合结束。",
		// 			type: "生物～变形兽",
		// 			flavor: "拟态妖不需要完美的伪装。 他们只需要完美的对象：天真，年轻，或者视力不太好的。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180941&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 180941,
		// 		},
		// 	],
		// 	printings: ["EVE", "HOP"],
		// 	originalText:
		// 		"Whenever you play a spell that's both red and white, Battlegate Mimic becomes 4/2 and gains first strike until end of turn.",
		// 	originalType: "Creature - Shapeshifter",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "b4bdde27-7fd8-5305-b71a-553b48a2ed15",
		// },
		// {
		// 	name: "Double Cleave",
		// 	manaCost: "{1}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Common",
		// 	set: "EVE",
		// 	setName: "Eventide",
		// 	text: "Target creature gains double strike until end of turn. (It deals both first-strike and regular combat damage.)",
		// 	flavor: '"When in doubt, kill \'em twice."',
		// 	artist: "rk post",
		// 	number: "135",
		// 	layout: "normal",
		// 	multiverseid: "153039",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=153039&type=card",
		// 	foreignNames: [
		// 		{
		// 			name: "Doppeltes Zerspalten",
		// 			text: "Eine Kreatur deiner Wahl erhält Doppelschlag bis zum Ende des Zuges. (Sie fügt sowohl Erstschlags- als auch normalen Kampfschaden zu.)",
		// 			type: "Spontanzauber",
		// 			flavor: '„Wenn du Zweifel hast, töte ihn noch einmal."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181663&type=card",
		// 			language: "German",
		// 			multiverseid: 181663,
		// 		},
		// 		{
		// 			name: "Duplicar el golpe",
		// 			text: "La criatura objetivo gana la habilidad de dañar dos veces hasta el final del turno. (Esta criatura daña primero y también hace daño de combate normal.)",
		// 			type: "Instantáneo",
		// 			flavor: '"Ante la duda, mátalos dos veces."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180763&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 180763,
		// 		},
		// 		{
		// 			name: "Double tranche",
		// 			text: "La créature ciblée acquiert la double initiative jusqu'à la fin du tour. (Elle inflige des blessures de combat d'initiative et des blessures de combat normales.)",
		// 			type: "Éphémère",
		// 			flavor: "« Dans le doute, tuez-les plutôt deux fois qu'une. »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181843&type=card",
		// 			language: "French",
		// 			multiverseid: 181843,
		// 		},
		// 		{
		// 			name: "Doppia Fenditura",
		// 			text: "Una creatura bersaglio ha doppio attacco fino alla fine del turno. (Infligge sia danno da combattimento da attacco improvviso che danno da combattimento regolare.)",
		// 			type: "Istantaneo",
		// 			flavor: '"Se sei in dubbio, uccidili due volte."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181483&type=card",
		// 			language: "Italian",
		// 			multiverseid: 181483,
		// 		},
		// 		{
		// 			name: "二度裂き",
		// 			text: "クリーチャー１体を対象とする。それはターン終了時まで二段攻撃を得る。 （それは先制攻撃と通常の２回の戦闘ダメージを与える。）",
		// 			type: "インスタント",
		// 			flavor: "「怪しかったら、二度殺せ。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181123&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 181123,
		// 		},
		// 		{
		// 			name: "Rachar em Dois",
		// 			text: "A criatura alvo ganha golpe duplo até o final do turno. (Ela causa tanto o dano de iniciativa quanto o dano de combate normal.)",
		// 			type: "Mágica Instantânea",
		// 			flavor: '"Quando estiver na dúvida, mate-o duas vezes."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=182023&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 182023,
		// 		},
		// 		{
		// 			name: "Рубануть Дважды",
		// 			text: "Целевое существо получает Двойной удар до конца хода. (Оно наносит боевые повреждения как на этапе Первого удара, так и на этапе обычных повреждений.)",
		// 			type: "Мгновенное заклинание",
		// 			flavor: "«Если сомневаешься, убей их дважды».",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181303&type=card",
		// 			language: "Russian",
		// 			multiverseid: 181303,
		// 		},
		// 		{
		// 			name: "连劈",
		// 			text: "目标生物获得连击异能直到回合结束。 （它能造成先攻与普通战斗伤害。）",
		// 			type: "瞬间",
		// 			flavor: "「如果不放心，就连杀两次。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180943&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 180943,
		// 		},
		// 	],
		// 	printings: ["EVE", "HOP", "UMA"],
		// 	originalText:
		// 		"Target creature gains double strike until end of turn. (It deals both first-strike and regular combat damage.)",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "300bb6f4-8100-51a8-8430-6d7a3d2a345e",
		// },
		// {
		// 	name: "Rise of the Hobgoblins",
		// 	manaCost: "{R/W}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Enchantment",
		// 	types: ["Enchantment"],
		// 	rarity: "Rare",
		// 	set: "EVE",
		// 	setName: "Eventide",
		// 	text: "When Rise of the Hobgoblins enters the battlefield, you may pay {X}. If you do, create X 1/1 red and white Goblin Soldier creature tokens.\n{R/W}: Red creatures and white creatures you control gain first strike until end of turn.",
		// 	flavor: "A river even the merrow dare not cross.",
		// 	artist: "Jeff Miracola",
		// 	number: "145",
		// 	layout: "normal",
		// 	multiverseid: "151114",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=151114&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2008-08-01",
		// 			text: "When the enters-the-battlefield ability resolves, you choose the value of X, pay for it, and put the tokens onto the battlefield. You can activate mana abilities to pay for {X}, but no one can cast spells or activate abilities in response to this choice.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Erheben der Hobgoblins",
		// 			text: "Wenn das Erheben der Hobgoblins ins Spiel kommt, kannst du {X} bezahlen. Falls du dies tust, bringe X 1/1 rote und weiße (Goblin, Soldat)-Kreaturenspielsteine ins Spiel.\n{R/W}: Rote Kreaturen und weiße Kreaturen, die du kontrollierst, erhalten Erstschlag bis zum Ende des Zuges.",
		// 			type: "Verzauberung",
		// 			flavor: "Diesen Strom wagen selbst Merrow nicht zu durchqueren.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181673&type=card",
		// 			language: "German",
		// 			multiverseid: 181673,
		// 		},
		// 		{
		// 			name: "Levantamiento de los hobgoblins",
		// 			text: "Cuando el Levantamiento de los hobgoblins entre en juego, puedes pagar {X}. Si lo haces, pon en juego X fichas de criatura Soldado Trasgo blancas y rojas 1/1.\n{R/W}: Las criaturas rojas y las criaturas blancas que controlas ganan la habilidad de dañar primero hasta el final del turno.",
		// 			type: "Encantamiento",
		// 			flavor: "Un río que ni los merrow se animan a cruzar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180773&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 180773,
		// 		},
		// 		{
		// 			name: "Soulèvement des lutins",
		// 			text: "Quand le Soulèvement des lutins arrive en jeu, vous pouvez payer {X}. Si vous faites ainsi, mettez en jeu X jetons de créature 1/1 rouge et blanche Gobelin et Soldat.\n{R/W} : Les créatures rouges et les créatures blanches que vous contrôlez acquièrent l'initiative jusqu'à la fin du tour.",
		// 			type: "Enchantement",
		// 			flavor: "Un fleuve que même les suires n'osent traverser.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181853&type=card",
		// 			language: "French",
		// 			multiverseid: 181853,
		// 		},
		// 		{
		// 			name: "Rivolta degli Hobgoblin",
		// 			text: "Quando la Rivolta degli Hobgoblin entra in gioco, puoi pagare {X}. Se lo fai, metti in gioco X pedine creatura Soldato Goblin 1/1 rosse e bianche.\n{R/W}: Le creature rosse e le creature bianche che controlli hanno attacco improvviso fino alla fine del turno.",
		// 			type: "Incantesimo",
		// 			flavor: "Un fiume che persino i merrow non osano attraversare.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181493&type=card",
		// 			language: "Italian",
		// 			multiverseid: 181493,
		// 		},
		// 		{
		// 			name: "ホブゴブリンの隆盛",
		// 			text: "ホブゴブリンの隆盛が場に出たとき、あなたは{X}を支払ってもよい。 そうした場合、赤であり白である１/１のゴブリン・兵士・クリーチャー・トークンをＸ体場に出す。\n{R/W}：あなたがコントロールする、赤のクリーチャーと白のクリーチャーはターン終了時まで先制攻撃を得る。",
		// 			type: "エンチャント",
		// 			flavor: "メロウですら横切らない川。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181133&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 181133,
		// 		},
		// 		{
		// 			name: "Ascensão dos Hobgoblins",
		// 			text: "Quando Ascensão dos Hobgoblins entra em jogo, você pode pagar {X}. Se fizer isso, coloque em jogo X fichas de criatura vermelhas e brancas 1/1 do tipo Goblin Soldado.\n{R/W}: As criaturas vermelhas e as criaturas brancas que você controla ganham iniciativa até o final do turno.",
		// 			type: "Encantamento",
		// 			flavor: "Um rio que nem mesmo os sirenídeos ousam cruzar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=182033&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 182033,
		// 		},
		// 		{
		// 			name: "Поток Хобгоблинов",
		// 			text: "Когда Поток Хобгоблинов входит в игру, вы можете заплатить {X}. Если вы это делаете, положите в игру X фишек существа 1/1 красный и белый Гоблин Солдат.\n{R/W}: красные существа и белые существа под вашим контролем получают Первый удар до конца хода.",
		// 			type: "Чары",
		// 			flavor: "Река, перейти которую не осмеливаются даже мерроу.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=181313&type=card",
		// 			language: "Russian",
		// 			multiverseid: 181313,
		// 		},
		// 		{
		// 			name: "大精灵涌现",
		// 			text: "当大精灵涌现进场时，你可以支付{X}。 若你如此做，则将X个1/1，红白双色的精灵／士兵衍生物放置进场。\n{R/W}：由你操控的红色生物与白色生物获得先攻异能直到回合结束。",
		// 			type: "结界",
		// 			flavor: "这河流连美洛都不敢涉足。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=180953&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 180953,
		// 		},
		// 	],
		// 	printings: ["EVE"],
		// 	originalText:
		// 		"When Rise of the Hobgoblins comes into play, you may pay {X}. If you do, put X 1/1 red and white Goblin Soldier creature tokens into play.\n{GU}: Red creatures and white creatures you control gain first strike until end of turn.",
		// 	originalType: "Enchantment",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "a7c05056-ff39-5cc8-ab92-2fe57cd1f2c4",
		// },
		// {
		// 	name: "Aurelia's Fury",
		// 	manaCost: "{X}{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Mythic",
		// 	set: "FMB1",
		// 	setName: "Mystery Booster Retail Edition Foils",
		// 	text: "Aurelia's Fury deals X damage divided as you choose among any number of targets. Tap each creature dealt damage this way. Players dealt damage this way can't cast noncreature spells this turn.",
		// 	artist: "Tyler Jacobson",
		// 	number: "83",
		// 	layout: "normal",
		// 	watermark: "boros",
		// 	rulings: [
		// 		{
		// 			date: "2013-01-24",
		// 			text: "You announce the value of X and how the damage will be divided as part of casting Aurelia’s Fury. Each chosen target must receive at least 1 damage.",
		// 		},
		// 		{
		// 			date: "2013-01-24",
		// 			text: "If Aurelia’s Fury has multiple targets, and some but not all of them are illegal targets when Aurelia’s Fury resolves, Aurelia’s Fury will still deal damage to the remaining legal targets according to the original damage division.",
		// 		},
		// 		{
		// 			date: "2013-01-24",
		// 			text: "If all of the targets are illegal when Aurelia’s Fury tries to resolve, it won’t resolve and none of its effects will happen. Nothing will be dealt damage.",
		// 		},
		// 	],
		// 	printings: ["FMB1", "GTC"],
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "40246406-10b8-52ed-a803-d4136a7dff67",
		// },
		// {
		// 	name: "Boros Swiftblade",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Uncommon",
		// 	set: "GK1",
		// 	setName: "GRN Guild Kit",
		// 	text: "Double strike",
		// 	flavor: "When the Boros Legion attacks, swiftblades enter the fray first. They pick off the archers and mages, softening the enemy front before the flame-kin and giants go in.",
		// 	artist: "Doug Chaffee",
		// 	number: "86",
		// 	power: "1",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "455763",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455763&type=card",
		// 	watermark: "boros",
		// 	foreignNames: [
		// 		{
		// 			name: "Boros-Flinkklingen",
		// 			text: "Doppelschlag",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: "Wenn die Boros-Legion angreift, sind die Flinkklingen als erste auf dem Schlachtfeld. Sie kümmern sich um Bogenschützen und Magier und lockern die Front des Feindes auf, so dass die Flammensippe und die Riesen nachrücken können.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455788&type=card",
		// 			language: "German",
		// 			multiverseid: 455788,
		// 		},
		// 		{
		// 			name: "Filoveloz boros",
		// 			text: "Daña dos veces.",
		// 			type: "Criatura — Soldado humano",
		// 			flavor: "Cuando la Legión Boros ataca, los filoveloces entran en combate primero. Seleccionan a los arqueros y a los magos, debilitando el frente enemigo antes de que los gigantes y los llameantes entren.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455813&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 455813,
		// 		},
		// 		{
		// 			name: "Filelame boros",
		// 			text: "Double initiative",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "Quand la Légion de Boros attaque, les filelames arrivent au combat les premiers. Ils se débarrassent des archers et des mages, préparant le front pour l'arrivée des sangpyres et des géants.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455838&type=card",
		// 			language: "French",
		// 			multiverseid: 455838,
		// 		},
		// 		{
		// 			name: "Lamalesta Boros",
		// 			text: "Doppio attacco",
		// 			type: "Creatura — Soldato Umano",
		// 			flavor: "Quando la Legione Boros attacca, i lamalesta si gettano nella mischia per primi. Colpiscono gli arcieri e i maghi, indebolendo il fronte nemico prima dell'attacco dei giganti e dei figli del fuoco.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455863&type=card",
		// 			language: "Italian",
		// 			multiverseid: 455863,
		// 		},
		// 		{
		// 			name: "ボロスの速太刀",
		// 			text: "二段攻撃",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "ボロスの軍団か攻撃を仕掛けるとき、真っ先に騒乱に飛び込むのは速太刀だ。彼らは射手や魔道士を倒し、敵の最前線が弱ったところで炎の血族と巨人が戦線に加わるのだ。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455888&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 455888,
		// 		},
		// 	],
		// 	printings: ["GK1", "HOP", "MM2", "RAV"],
		// 	originalText: "Double strike",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Predh",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "f098cf3a-019d-5c69-8cd2-9008458e14e8",
		// },
		// {
		// 	name: "Sunhome Guildmage",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Wizard",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Wizard"],
		// 	rarity: "Uncommon",
		// 	set: "GK1",
		// 	setName: "GRN Guild Kit",
		// 	text: "{1}{R}{W}: Creatures you control get +1/+0 until end of turn.\n{2}{R}{W}: Create a 1/1 red and white Soldier creature token with haste.",
		// 	artist: "Eric Deschamps",
		// 	number: "95",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "455772",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455772&type=card",
		// 	watermark: "boros",
		// 	rulings: [
		// 		{
		// 			date: "2013-01-24",
		// 			text: "Only creatures you control when Sunhome Guildmage’s first ability resolves will get +1/+0. Creatures that come under your control later in the turn will not.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Sonnenheim-Gildenmagier",
		// 			text: "{1}{R}{W}: Kreaturen, die du kontrollierst, erhalten +1/+0 bis zum Ende des Zuges.\n{2}{R}{W}: Erzeuge einen 1/1 roten und weißen Soldat-Kreaturenspielstein mit Eile.",
		// 			type: "Kreatur — Mensch, Zauberer",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455797&type=card",
		// 			language: "German",
		// 			multiverseid: 455797,
		// 		},
		// 		{
		// 			name: "Mago del gremio de Casa Solar",
		// 			text: "{1}{R}{W}: Las criaturas que controlas obtienen +1/+0 hasta el final del turno.\n{2}{R}{W}: Crea una ficha de criatura Soldado roja y blanca 1/1 con la habilidad de prisa.",
		// 			type: "Criatura — Hechicero humano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455822&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 455822,
		// 		},
		// 		{
		// 			name: "Ghildmage de Solcastel",
		// 			text: "{1}{R}{W} : Les créatures que vous contrôlez gagnent +1/+0 jusqu'à la fin du tour.\n{2}{R}{W} : Créez un jeton de créature 1/1 rouge et blanche Soldat avec la célérité.",
		// 			type: "Créature : humain et sorcier",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455847&type=card",
		// 			language: "French",
		// 			multiverseid: 455847,
		// 		},
		// 		{
		// 			name: "Mago della Gilda di Sol-Dimora",
		// 			text: "{1}{R}{W}: Le creature che controlli prendono +1/+0 fino alla fine del turno.\n{2}{R}{W}: Crea una pedina creatura Soldato 1/1 rossa e bianca con rapidità.",
		// 			type: "Creatura — Mago Umano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455872&type=card",
		// 			language: "Italian",
		// 			multiverseid: 455872,
		// 		},
		// 		{
		// 			name: "サンホームのギルド魔道士",
		// 			text: "{1}{R}{W}：ターン終了時まで、あなたがコントロールしているクリーチャーは＋１/＋０の修整を受ける。\n{2}{R}{W}：速攻を持つ赤であり白である１/１の兵士・クリーチャー・トークンを１体生成する。",
		// 			type: "クリーチャー — 人間・ウィザード",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455897&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 455897,
		// 		},
		// 	],
		// 	printings: ["GK1", "GTC", "MM3"],
		// 	originalText:
		// 		"{1}{R}{W}: Creatures you control get +1/+0 until end of turn.\n{2}{R}{W}: Create a 1/1 red and white Soldier creature token with haste.",
		// 	originalType: "Creature — Human Wizard",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "604e888d-e7f5-5c80-8473-a10a5e36f890",
		// },
		// {
		// 	name: "Boros Challenger",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Uncommon",
		// 	set: "GRN",
		// 	setName: "Guilds of Ravnica",
		// 	text: "Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)\n{2}{R}{W}: Boros Challenger gets +1/+1 until end of turn.",
		// 	flavor: '"Send your champion. I could use a light workout."',
		// 	artist: "Gabor Szikszai",
		// 	number: "156",
		// 	power: "2",
		// 	toughness: "3",
		// 	layout: "normal",
		// 	multiverseid: "452906",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452906&type=card",
		// 	watermark: "boros",
		// 	rulings: [
		// 		{
		// 			date: "2018-10-05",
		// 			text: "Mentor compares the power of the creature with mentor with that of the target creature at two different times: once as the triggered ability is put onto the stack, and once as the triggered ability resolves. If you wish to raise a creature’s power so its mentor ability can target a bigger creature, the last chance you have to do so is during the beginning of combat step.",
		// 		},
		// 		{
		// 			date: "2018-10-05",
		// 			text: "If the target creature’s power is no longer less than the attacking creature’s power as the ability resolves, mentor doesn’t add a +1/+1 counter. For example, if two 3/3 creatures with mentor attack and both mentor triggers target the same 2/2 creature, the first to resolve puts a +1/+1 counter on it and the second does nothing.",
		// 		},
		// 		{
		// 			date: "2018-10-05",
		// 			text: "If the creature with mentor leaves the battlefield with mentor on the stack, use its power as that creature last existed on the battlefield to determine whether the target creature has less power.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Boros-Herausforderer",
		// 			text: "Mentor (Immer wenn diese Kreatur angreift, lege eine +1/+1-Marke auf eine angreifende Kreatur deiner Wahl, deren Stärke niedriger ist.)\n{2}{R}{W}: Der Boros-Herausforderer erhält +1/+1 bis zum Ende des Zuges.",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: '„Schicke deinen Champion. Ich könnte ein leichtes Training gebrauchen."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453165&type=card",
		// 			language: "German",
		// 			multiverseid: 453165,
		// 		},
		// 		{
		// 			name: "Contendiente boros",
		// 			text: "Mentor. (Siempre que esta criatura ataque, pon un contador +1/+1 sobre la criatura atacante objetivo con menor fuerza.)\n{2}{R}{W}: El Contendiente boros obtiene +1/+1 hasta el final del turno.",
		// 			type: "Criatura — Soldado humano",
		// 			flavor: '"Envía a tu campeón. Me vendría bien un calentamiento".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453424&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 453424,
		// 		},
		// 		{
		// 			name: "Défieur de Boros",
		// 			text: "Mentor (À chaque fois que cette créature attaque, mettez un marqueur +1/+1 sur une créature attaquante ciblée de force inférieure.)\n{2}{R}{W} : Le Défieur de Boros gagne +1/+1 jusqu'à la fin du tour.",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "« Envoyez-moi votre champion. J'ai besoin de faire un peu d'exercice. »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453683&type=card",
		// 			language: "French",
		// 			multiverseid: 453683,
		// 		},
		// 		{
		// 			name: "Sfidante Boros",
		// 			text: "Mentore (Ogniqualvolta questa creatura attacca, metti un segnalino +1/+1 su una creatura attaccante bersaglio con forza inferiore.)\n{2}{R}{W}: Lo Sfidante Boros prende +1/+1 fino alla fine del turno.",
		// 			type: "Creatura — Soldato Umano",
		// 			flavor: '"Mandatemi il vostro campione. Oggi non voglio affaticarmi troppo."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453942&type=card",
		// 			language: "Italian",
		// 			multiverseid: 453942,
		// 		},
		// 		{
		// 			name: "ボロスの挑戦者",
		// 			text: "教導（このクリーチャーが攻撃するたび、パワーがこれよりも小さい攻撃クリーチャー１体を対象とする。それの上に＋１/＋１カウンターを１個置く。）\n{2}{R}{W}：ターン終了時まで、ボロスの挑戦者は＋１/＋１の修整を受ける。",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "「一番強い奴を連れてこい。ちょっとした肩慣らしにはなるかも知れん。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454201&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 454201,
		// 		},
		// 		{
		// 			name: "보로스 도전자",
		// 			text: "지도 (이 생물이 공격할 때마다, 공격력이 더 낮은 공격 중인 생물을 목표로 정한다. 그 생물에 +1/+1 카운터 한 개를 올려놓는다.)\n{2}{R}{W}: 보로스 도전자는 턴종료까지 +1/+1을 받는다.",
		// 			type: "생물 — 인간 병사",
		// 			flavor: '"네 용사를 내보내라. 가벼운 운동은 되겠지."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454460&type=card",
		// 			language: "Korean",
		// 			multiverseid: 454460,
		// 		},
		// 		{
		// 			name: "Desafiante Boros",
		// 			text: "Mentor (Toda vez que esta criatura atacar, coloque um marcador +1/+1 na criatura atacante alvo com poder inferior.)\n{2}{R}{W}: Desafiante Boros recebe +1/+1 até o final do turno.",
		// 			type: "Criatura — Humano Soldado",
		// 			flavor: '"Mandem vir o campeão de vocês. Preciso me exercitar um pouco."',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454719&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 454719,
		// 		},
		// 		{
		// 			name: "Поединщик Боросов",
		// 			text: "Наставник (Каждый раз, когда это существо атакует, положите один жетон +1/+1 на целевое атакующее существо с меньшим значением силы.)\n{2}{R}{W}: Поединщик Боросов получает +1/+1 до конца хода.",
		// 			type: "Существо — Человек Солдат",
		// 			flavor: "«Давайте своего чемпиона. Мне не помешает немного размяться».",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454978&type=card",
		// 			language: "Russian",
		// 			multiverseid: 454978,
		// 		},
		// 		{
		// 			name: "波洛斯好斗者",
		// 			text: "训导（每当此生物攻击时，在目标进行攻击且力量小于它的生物上放置一个+1/+1指示物。）\n{2}{R}{W}：波洛斯好斗者得+1/+1直到回合结束。",
		// 			type: "生物 ～人类／士兵",
		// 			flavor: "「派你们的冠军过来。我正好要热热身。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455237&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 455237,
		// 		},
		// 		{
		// 			name: "波洛斯好鬥者",
		// 			text: "訓導（每當此生物攻擊時，在目標進行攻擊且力量小於它的生物上放置一個+1/+1指示物。）\n{2}{R}{W}：波洛斯好鬥者得+1/+1直到回合結束。",
		// 			type: "生物 ～人類／士兵",
		// 			flavor: "「派你們的冠軍過來。我正好要熱熱身。」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455496&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 455496,
		// 		},
		// 	],
		// 	printings: ["GRN", "MB1", "PGRN", "PLIST", "PRM"],
		// 	originalText:
		// 		"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)\n{2}{R}{W}: Boros Challenger gets +1/+1 until end of turn.",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "89b88e85-91dc-56d9-8694-68f27c9c331e",
		// },
		// {
		// 	name: "Justice Strike",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Uncommon",
		// 	set: "GRN",
		// 	setName: "Guilds of Ravnica",
		// 	text: "Target creature deals damage to itself equal to its power.",
		// 	flavor: '"Those who show no mercy to the weak deserve no mercy from the strong."\n—Firemane Kavrova',
		// 	artist: "Clint Cearley",
		// 	number: "182",
		// 	layout: "normal",
		// 	multiverseid: "452932",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452932&type=card",
		// 	watermark: "boros",
		// 	foreignNames: [
		// 		{
		// 			name: "Gerechter Schlag",
		// 			text: "Eine Kreatur deiner Wahl fügt sich selbst Schadenspunkte in Höhe ihrer Stärke zu.",
		// 			type: "Spontanzauber",
		// 			flavor: '„Jene, die den Schwachen keine Gnade zeigen, können auch keine Gnade von den Starken erwarten."\n—Feuerschweif Kavrova',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453191&type=card",
		// 			language: "German",
		// 			multiverseid: 453191,
		// 		},
		// 		{
		// 			name: "Golpe de justicia",
		// 			text: "La criatura objetivo se hace una cantidad de daño igual a su fuerza a sí misma.",
		// 			type: "Instantáneo",
		// 			flavor: '"Quienes no tienen piedad de los débiles no merecen piedad de los fuertes".\n—Melenafuego Kavrova',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453450&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 453450,
		// 		},
		// 		{
		// 			name: "Frappe de la justice",
		// 			text: "La créature ciblée s'inflige un nombre de blessures égal à sa force.",
		// 			type: "Éphémère",
		// 			flavor: "« Ceux qui n'ont aucune pitié envers les plus faibles ne méritent aucune pitié de la part des plus forts. »\n—Crinefeu Kavrova",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453709&type=card",
		// 			language: "French",
		// 			multiverseid: 453709,
		// 		},
		// 		{
		// 			name: "Colpo della Giustizia",
		// 			text: "Una creatura bersaglio infligge danno a se stessa pari alla propria forza.",
		// 			type: "Istantaneo",
		// 			flavor: '"Chi non dimostra pietà per i deboli non ne merita dai potenti."\n—Kavrova Chioma di Fuoco',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453968&type=card",
		// 			language: "Italian",
		// 			multiverseid: 453968,
		// 		},
		// 		{
		// 			name: "裁きの一撃",
		// 			text: "クリーチャー１体を対象とする。それは自身に、自身のパワーに等しい点数のダメージを与える。",
		// 			type: "インスタント",
		// 			flavor: "「弱きに無慈悲である者は、強きの無慈悲にふさわしい。」\n――炎まといのカローヴァ",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454227&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 454227,
		// 		},
		// 		{
		// 			name: "정의의 일격",
		// 			text: "생물을 목표로 정한다. 그 생물은 자신에게 자신의 공격력만큼의 피해를 입힌다.",
		// 			type: "순간마법",
		// 			flavor: '"약자에게 자비를 베풀지 않는 자는 강자에게 자비를 구할 자격도 없다."\n—불꽃갈기 카브로바',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454486&type=card",
		// 			language: "Korean",
		// 			multiverseid: 454486,
		// 		},
		// 		{
		// 			name: "Golpe da Justiça",
		// 			text: "A criatura alvo causa a si própria uma quantidade de dano igual ao seu poder.",
		// 			type: "Mágica Instantânea",
		// 			flavor: '"Os que não mostram piedade com os fracos não merecem piedade dos fortes."\n— Cabeleira de Fogo Kavrova',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454745&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 454745,
		// 		},
		// 		{
		// 			name: "Удар Правосудия",
		// 			text: "Целевое существо наносит самому себе повреждения, равные своей силе.",
		// 			type: "Мгновенное заклинание",
		// 			flavor: "«Те, кто не знают жалости к слабым, не заслуживают жалости от сильных».\n— Каврова Огнегривая",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455004&type=card",
		// 			language: "Russian",
		// 			multiverseid: 455004,
		// 		},
		// 		{
		// 			name: "正义一击",
		// 			text: "目标生物对本身造成等同于其力量的伤害。",
		// 			type: "瞬间",
		// 			flavor: "「不愿对弱者手下留情的人，也不配获得强者的宽恕。」\n～炎鬃卡洛娃",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455263&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 455263,
		// 		},
		// 		{
		// 			name: "正義一擊",
		// 			text: "目標生物對本身造成等同於其力量的傷害。",
		// 			type: "瞬間",
		// 			flavor: "「不願對弱者手下留情的人，也不配獲得強者的寬恕。」\n～炎鬃卡洛娃",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455522&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 455522,
		// 		},
		// 	],
		// 	printings: ["GRN"],
		// 	originalText:
		// 		"Target creature deals damage to itself equal to its power.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "fa0d0bb3-e9b7-5752-911e-0719ff9a1a12",
		// },
		// {
		// 	name: "Legion Guildmage",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Wizard",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Wizard"],
		// 	rarity: "Uncommon",
		// 	set: "GRN",
		// 	setName: "Guilds of Ravnica",
		// 	text: "{5}{R}, {T}: Legion Guildmage deals 3 damage to each opponent.\n{2}{W}, {T}: Tap another target creature.",
		// 	artist: "Zack Stella",
		// 	number: "187",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "452937",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452937&type=card",
		// 	watermark: "boros",
		// 	rulings: [
		// 		{
		// 			date: "2018-10-05",
		// 			text: "In a Two-Headed Giant game, Legion Guildmage’s first ability causes the opposing team to lose 6 life.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Gildenmagierin der Legion",
		// 			text: "{5}{R}, {T}: Die Gildenmagierin der Legion fügt jedem Gegner 3 Schadenspunkte zu.\n{2}{W}, {T}: Tappe eine andere Kreatur deiner Wahl.",
		// 			type: "Kreatur — Mensch, Zauberer",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453196&type=card",
		// 			language: "German",
		// 			multiverseid: 453196,
		// 		},
		// 		{
		// 			name: "Maga del gremio de la Legión",
		// 			text: "{5}{R}, {T}: La Maga del gremio de la Legión hace 3 puntos de daño a cada oponente.\n{2}{W}, {T}: Gira otra criatura objetivo.",
		// 			type: "Criatura — Hechicero humano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453455&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 453455,
		// 		},
		// 		{
		// 			name: "Ghildmage de la Légion",
		// 			text: "{5}{R}, {T} : La Ghildmage de la Légion inflige 3 blessures à chaque adversaire.\n{2}{W}, {T} : Engagez une autre créature ciblée.",
		// 			type: "Créature : humain et sorcier",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453714&type=card",
		// 			language: "French",
		// 			multiverseid: 453714,
		// 		},
		// 		{
		// 			name: "Maga della Gilda della Legione",
		// 			text: "{5}{R}, {T}: La Maga della Gilda della Legione infligge 3 danni a ogni avversario.\n{2}{W}, {T}: TAPpa un'altra creatura bersaglio.",
		// 			type: "Creatura — Mago Umano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453973&type=card",
		// 			language: "Italian",
		// 			multiverseid: 453973,
		// 		},
		// 		{
		// 			name: "軍勢のギルド魔道士",
		// 			text: "{5}{R}, {T}：軍勢のギルド魔道士は各対戦相手にそれぞれ３点のダメージを与える。\n{2}{W}, {T}：他のクリーチャー１体を対象とし、それをタップする。",
		// 			type: "クリーチャー — 人間・ウィザード",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454232&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 454232,
		// 		},
		// 		{
		// 			name: "군단 길드마도사",
		// 			text: "{5}{R}, {T}: 군단 길드마도사는 각 상대에게 피해 3점을 입힌다.\n{2}{W}, {T}: 다른 생물을 목표로 정한다. 그 생물을 탭한다.",
		// 			type: "생물 — 인간 마법사",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454491&type=card",
		// 			language: "Korean",
		// 			multiverseid: 454491,
		// 		},
		// 		{
		// 			name: "Maga da Guilda da Legião",
		// 			text: "{5}{R}, {T}: Maga da Guilda da Legião causa 3 pontos de dano a cada oponente.\n{2}{W}, {T}: Vire outra criatura alvo.",
		// 			type: "Criatura — Humano Mago",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454750&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 454750,
		// 		},
		// 		{
		// 			name: "Маг Гильдии Легиона",
		// 			text: "{5}{R}, {T}: Маг Гильдии Легиона наносит 3 повреждения каждому оппоненту.\n{2}{W}, {T}: поверните другое целевое существо.",
		// 			type: "Существо — Человек Чародей",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455009&type=card",
		// 			language: "Russian",
		// 			multiverseid: 455009,
		// 		},
		// 		{
		// 			name: "教团公会法师",
		// 			text: "{5}{R}，{T}：教团公会法师向每位对手各造成3点伤害。\n{2}{W}，{T}：横置另一个目标生物。",
		// 			type: "生物 ～人类／法术师",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455268&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 455268,
		// 		},
		// 		{
		// 			name: "教團公會法師",
		// 			text: "{5}{R}，{T}：教團公會法師向每位對手各造成3點傷害。\n{2}{W}，{T}：橫置另一個目標生物。",
		// 			type: "生物 ～人類／魔法師",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455527&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 455527,
		// 		},
		// 	],
		// 	printings: ["GRN"],
		// 	originalText:
		// 		"{5}{R}, {T}: Legion Guildmage deals 3 damage to each opponent.\n{2}{W}, {T}: Tap another target creature.",
		// 	originalType: "Creature — Human Wizard",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "c5a56599-33d0-550c-b7fa-ed55275611d2",
		// },
		// {
		// 	name: "Fresh-Faced Recruit",
		// 	manaCost: "{1}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Common",
		// 	set: "GRN",
		// 	setName: "Guilds of Ravnica",
		// 	text: "As long as it's your turn, Fresh-Faced Recruit has first strike.",
		// 	flavor: '"Hold on to your ideals. They\'ll be tested more than your armor or the edge of your blade."\n—Tajic',
		// 	artist: "Anthony Palumbo",
		// 	number: "216",
		// 	power: "2",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "452966",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452966&type=card",
		// 	watermark: "boros",
		// 	foreignNames: [
		// 		{
		// 			name: "Junger Rekrut",
		// 			text: "Solange es dein Zug ist, hat der Junge Rekrut Erstschlag.",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: '„Halte an deinen Idealen fest. Sie werden noch stärker auf die Probe gestellt als deine Rüstung."\n—Tajic',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453225&type=card",
		// 			language: "German",
		// 			multiverseid: 453225,
		// 		},
		// 		{
		// 			name: "Recluta novato",
		// 			text: "Mientras sea tu turno, el Recluta novato tiene la habilidad de dañar primero.",
		// 			type: "Criatura — Soldado humano",
		// 			flavor: '"Aférrate a tus ideales. Serán puestos a prueba más que tu armadura y que el filo de tu espada".\n—Tájic',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453484&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 453484,
		// 		},
		// 		{
		// 			name: "Recrue au teint frais",
		// 			text: "Tant que c'est votre tour, la Recrue au teint frais a l'initiative.",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "« Accrochez-vous à vos idéaux. Ils seront mis à l'épreuve plus durement que votre armure ou le tranchant de votre épée. »\n—Tajic",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453743&type=card",
		// 			language: "French",
		// 			multiverseid: 453743,
		// 		},
		// 		{
		// 			name: "Recluta Imberbe",
		// 			text: "Fintanto che è il tuo turno, la Recluta Imberbe ha attacco improvviso.",
		// 			type: "Creatura — Soldato Umano",
		// 			flavor: '"Tieniti stretti i tuoi ideali. Saranno messi a dura prova, più della tua armatura o del filo della tua spada."\n—Tajic',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454002&type=card",
		// 			language: "Italian",
		// 			multiverseid: 454002,
		// 		},
		// 		{
		// 			name: "初々しい補充兵",
		// 			text: "あなたのターンであるかぎり、初々しい補充兵は先制攻撃を持つ。",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "「理想を持ち続けるんだ。鎧や剣よりも、それが試されることになる。」\n――タージク",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454261&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 454261,
		// 		},
		// 		{
		// 			name: "홍안의 신병",
		// 			text: "당신의 턴인 한, 홍안의 신병은 선제공격을 가진다.",
		// 			type: "생물 — 인간 병사",
		// 			flavor: '"네 이상을 놓지 말아라. 네 갑옷이나 칼날보다 그것이 더 시험을 받게 될 거다."\n—타직',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454520&type=card",
		// 			language: "Korean",
		// 			multiverseid: 454520,
		// 		},
		// 		{
		// 			name: "Recruta Novato",
		// 			text: "Enquanto for o seu turno, Recruta Novato terá iniciativa.",
		// 			type: "Criatura — Humano Soldado",
		// 			flavor: '"Seja fiel aos seus ideais. Eles serão mais testados que sua armadura ou o fio de sua lâmina."\n— Tajic',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=454779&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 454779,
		// 		},
		// 		{
		// 			name: "Безусый Новобранец",
		// 			text: "Пока длится ваш ход, Безусый Новобранец имеет Первый удар.",
		// 			type: "Существо — Человек Солдат",
		// 			flavor: "«Держись своих идеалов. Их ждет испытание куда суровее, чем броню и клинок твоего меча».\n— Тажик",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455038&type=card",
		// 			language: "Russian",
		// 			multiverseid: 455038,
		// 		},
		// 		{
		// 			name: "稚嫩新兵",
		// 			text: "只要是在你的回合中，稚嫩新兵便具有先攻异能。",
		// 			type: "生物 ～人类／士兵",
		// 			flavor: "「请始终坚持心中理念。行伍一生当中，它要比身上盔甲或手中利剑经受更多考验。」\n～塔疾克",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455297&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 455297,
		// 		},
		// 		{
		// 			name: "稚嫩新兵",
		// 			text: "只要是在你的回合中，稚嫩新兵便具有先攻異能。",
		// 			type: "生物 ～人類／士兵",
		// 			flavor: "「請始終堅持心中理念。行伍一生當中，它要比身上盔甲或手中利劍經受更多考驗。」\n～塔疾克",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455556&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 455556,
		// 		},
		// 	],
		// 	printings: ["GRN"],
		// 	originalText:
		// 		"As long as it's your turn, Fresh-Faced Recruit has first strike.",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "aa07b355-dcd5-585f-bdd9-1fa028eaf24d",
		// },
		// {
		// 	name: "Wojek Halberdiers",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Soldier",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Common",
		// 	set: "GTC",
		// 	setName: "Gatecrash",
		// 	text: "Battalion — Whenever Wojek Halberdiers and at least two other creatures attack, Wojek Halberdiers gains first strike until end of turn.",
		// 	flavor: "Tired of Boros interference, the Rakdos unleashed hellraiser goblins, hoping their corpses would weigh down the halberds.",
		// 	artist: "Nic Klein",
		// 	number: "208",
		// 	power: "3",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "366265",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366265&type=card",
		// 	watermark: "boros",
		// 	rulings: [
		// 		{
		// 			date: "2013-04-15",
		// 			text: "The three attacking creatures don’t have to be attacking the same player or planeswalker.",
		// 		},
		// 		{
		// 			date: "2013-04-15",
		// 			text: "Once a battalion ability has triggered, it doesn’t matter how many creatures are still attacking when that ability resolves.",
		// 		},
		// 		{
		// 			date: "2013-04-15",
		// 			text: "The effects of battalion abilities vary from card to card. Read each card carefully.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Wojek-Hellebardiere",
		// 			text: "Bataillon — Immer wenn die Wojek-Hellebardiere und mindestens zwei andere Kreaturen angreifen, erhalten die Wojek-Hellebardiere Erstschlag bis zum Ende des Zuges.",
		// 			type: "Kreatur — Mensch, Soldat",
		// 			flavor: "Der Einmischung der Boros müde, ließen die Rakdos Goblin-Radaubrüder los — in der Hoffnung, dass deren Leichen die Hellebarden niederdrücken würden.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366950&type=card",
		// 			language: "German",
		// 			multiverseid: 366950,
		// 		},
		// 		{
		// 			name: "Alabarderos Wojek",
		// 			text: "Batallón — Siempre que los Alabarderos Wojek y al menos otras dos criaturas ataquen, los Alabarderos Wojek ganan la habilidad de dañar primero hasta el final del turno.",
		// 			type: "Criatura — Soldado humano",
		// 			flavor: "Cansados de las interferencias de los boros, los rakdos desataron alborotadores trasgos con la esperanza de que el peso de sus cadáveres entorpeciera a las alabardas.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368099&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 368099,
		// 		},
		// 		{
		// 			name: "Hallebardiers wojek",
		// 			text: "Bataillon — À chaque fois que les Hallebardiers wojek et au moins deux autres créatures attaquent, les Hallebardiers wojek acquièrent l'initiative jusqu'à la fin du tour.",
		// 			type: "Créature : humain et soldat",
		// 			flavor: "Las des interventions des Boros, les Rakdos libérèrent les gobelins godailleurs, espérant que le poids de leurs cadavres suffirait à faire pencher les hallebardes.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366654&type=card",
		// 			language: "French",
		// 			multiverseid: 366654,
		// 		},
		// 		{
		// 			name: "Alabardieri Wojek",
		// 			text: "Battaglione — Ogniqualvolta gli Alabardieri Wojek e almeno altre due creature attaccano, gli Alabardieri Wojek hanno attacco improvviso fino alla fine del turno.",
		// 			type: "Creatura — Soldato Umano",
		// 			flavor: "Stanchi delle interferenze dei Boros, i Rakdos scatenarono dei goblin rissosi, sperando che il peso dei loro cadaveri costringesse gli avversari ad abbassare le alabarde.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367211&type=card",
		// 			language: "Italian",
		// 			multiverseid: 367211,
		// 		},
		// 		{
		// 			name: "ウォジェクの矛槍兵",
		// 			text: "大隊 ― ウォジェクの矛槍兵と少なくとも２体の他のクリーチャーが攻撃するたび、ウォジェクの矛槍兵はターン終了時まで先制攻撃を得る。",
		// 			type: "クリーチャー — 人間・兵士",
		// 			flavor: "ボロスの干渉に嫌気がさしたラクドス教団は、はた迷惑なゴブリンたちを解き放った。ゴブリンの死体を累々と重ねることで、相手の気勢を削ぐのが狙いである。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368461&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 368461,
		// 		},
		// 		{
		// 			name: "워젝 미늘창병",
		// 			text: "부대전 — 워젝 미늘창병과 두 개 이상의 다른 생물이 공격할 때마다, 워젝 미늘창병은 턴종료까지 선제공격 능력을 얻는다.",
		// 			type: "생물 — 인간 병사",
		// 			flavor: "보로스의 방해에 질린 락도스는 고블린 선동꾼들을 풀어 그들을 죽이느라 군단의 무기가 닳아 없어지기를 기다렸다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367272&type=card",
		// 			language: "Korean",
		// 			multiverseid: 367272,
		// 		},
		// 		{
		// 			name: "Alabardeiros Wojek",
		// 			text: "Batalhão — Toda vez que Alabardeiros Wojek e pelo menos duas outras criaturas atacarem, Alabardeiros Wojek ganhará iniciativa até o final do turno.",
		// 			type: "Criatura — Humano Soldado",
		// 			flavor: "Cansados da interferência dos Boros, os Rakdos soltaram goblins arruaceiros, esperando que o peso de seus cadáveres trouxesse as alabardas abaixo.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367700&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 367700,
		// 		},
		// 		{
		// 			name: "Войеки-Алебардисты",
		// 			text: "Батальон — Каждый раз, когда Войеки-Алебардисты и как минимум два других существа атакуют, Войеки-Алебардисты получают Первый удар до конца хода.",
		// 			type: "Существо — Человек Солдат",
		// 			flavor: "Уставшие от постоянного вмешательства Боросов, Ракдосы натравили на них бешеных гоблинов в расчете на то, что под тяжестью их трупов пики легионеров склонятся к земле.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367790&type=card",
		// 			language: "Russian",
		// 			multiverseid: 367790,
		// 		},
		// 		{
		// 			name: "沃耶克戟队",
		// 			text: "协战～每当沃耶克长戟兵与至少两个其他生物攻击时，沃耶克戟队获得先攻异能直到回合结束。",
		// 			type: "生物～人类／士兵",
		// 			flavor: "由于厌倦了波洛斯的干扰，拉铎司释放出恶煞鬼怪，希望用他们的尸体数量压垮戟队。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=365935&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 365935,
		// 		},
		// 		{
		// 			name: "沃耶克戟隊",
		// 			text: "協戰～每當沃耶克戟隊與至少兩個其他生物攻擊時，沃耶克戟隊獲得先攻異能直到回合結束。",
		// 			type: "生物～人類／士兵",
		// 			flavor: "由於厭倦了波洛斯的干擾，拉鐸司釋放出惡煞鬼怪，希望用他們的屍體數量壓垮戟隊。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366124&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 366124,
		// 		},
		// 	],
		// 	printings: ["GTC"],
		// 	originalText:
		// 		"Battalion — Whenever Wojek Halberdiers and at least two other creatures attack, Wojek Halberdiers gains first strike until end of turn.",
		// 	originalType: "Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "d29b521b-164c-5ef8-a576-030b9a70c87e",
		// },
		// {
		// 	name: "Shattering Blow",
		// 	manaCost: "{1}{R/W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Instant",
		// 	types: ["Instant"],
		// 	rarity: "Common",
		// 	set: "GTC",
		// 	setName: "Gatecrash",
		// 	text: "Exile target artifact.",
		// 	flavor: '"Aurelia seems too eager to solve her problems by delivering them to oblivion."\n—Prime Speaker Zegana',
		// 	artist: "Steve Prescott",
		// 	number: "225",
		// 	layout: "normal",
		// 	multiverseid: "366331",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366331&type=card",
		// 	watermark: "boros",
		// 	foreignNames: [
		// 		{
		// 			name: "Zertrümmernder Schlag",
		// 			text: "Schicke ein Artefakt deiner Wahl ins Exil.",
		// 			type: "Spontanzauber",
		// 			flavor: '„Aurelia scheint zu begierig, ihre Probleme zu lösen, indem sie sie dem Vergessen anheimgibt." —Oberste Sprecherin Zegana',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366844&type=card",
		// 			language: "German",
		// 			multiverseid: 366844,
		// 		},
		// 		{
		// 			name: "Impacto quebrador",
		// 			text: "Exilia el artefacto objetivo.",
		// 			type: "Instantáneo",
		// 			flavor: '"Aurelia parece muy inclinada a resolver sus problemas enviándolos al olvido."—Portavoz principal Zegana',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368117&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 368117,
		// 		},
		// 		{
		// 			name: "Coup fracassant",
		// 			text: "Exilez l'artefact ciblé.",
		// 			type: "Éphémère",
		// 			flavor: "« Aurélia semble mettre beaucoup trop d'ardeur à résoudre ses problèmes en les anéantissant. » —Première oratrice Zegana",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366579&type=card",
		// 			language: "French",
		// 			multiverseid: 366579,
		// 		},
		// 		{
		// 			name: "Colpo Frantumante",
		// 			text: "Esilia un artefatto bersaglio.",
		// 			type: "Istantaneo",
		// 			flavor: '"Aurelia sembra troppo ansiosa di risolvere i propri problemi consegnandoli all\'oblio." —Portavoce Zegana',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367121&type=card",
		// 			language: "Italian",
		// 			multiverseid: 367121,
		// 		},
		// 		{
		// 			name: "破壊的一撃",
		// 			text: "アーティファクト１つを対象とし、それを追放する。",
		// 			type: "インスタント",
		// 			flavor: "「オレリアは自分が抱える問題を解決しようとするあまり、彼らを忘却の彼方に追いやろうとしている。」――首席議長ゼガーナ",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=368262&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 368262,
		// 		},
		// 		{
		// 			name: "깨부수는 일격",
		// 			text: "마법물체 한 개를 목표로 정한다. 그 마법물체를 추방한다.",
		// 			type: "순간마법",
		// 			flavor: '"아우렐리아는 모든 문제를 무자비한 힘으로 해결하는 것을 즐기는 듯 하군." —최고 의장 제가나',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367312&type=card",
		// 			language: "Korean",
		// 			multiverseid: 367312,
		// 		},
		// 		{
		// 			name: "Golpe Despedaçador",
		// 			text: "Exile o artefato alvo.",
		// 			type: "Mágica Instantânea",
		// 			flavor: '"Aurélia parece muito ansiosa para resolver os problema dela enviando-os para o esquecimento."— Oradora Principal Zegana',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367598&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 367598,
		// 		},
		// 		{
		// 			name: "Раскалывающий Удар",
		// 			text: "Изгоните целевой артефакт.",
		// 			type: "Мгновенное заклинание",
		// 			flavor: "«Аурелия слишком уж любит решать свои проблемы самым легким способом — уничтожить и забыть». — Главный оратор Зегана",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=367898&type=card",
		// 			language: "Russian",
		// 			multiverseid: 367898,
		// 		},
		// 		{
		// 			name: "粉碎霆击",
		// 			text: "放逐目标神器。",
		// 			type: "瞬间",
		// 			flavor: "「欧瑞梨似乎太急着解决她的问题，一口气将之全部打入遗忘之境。」 ～首席洁加娜",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=365734&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 365734,
		// 		},
		// 		{
		// 			name: "粉碎霆擊",
		// 			text: "放逐目標神器。",
		// 			type: "瞬間",
		// 			flavor: "「歐瑞梨似乎太急著解決她的問題，一口氣將之全部打入遺忘之境。」 ～首席潔加娜",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366157&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 366157,
		// 		},
		// 	],
		// 	printings: ["GTC"],
		// 	originalText: "Exile target artifact.",
		// 	originalType: "Instant",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pauper",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "57e2deb3-6050-581c-bc5d-00d0c98d1ace",
		// },
		// {
		// 	name: "Liara of the Flaming Fist",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Human Soldier",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Soldier"],
		// 	rarity: "Uncommon",
		// 	set: "HBG",
		// 	setName: "Alchemy Horizons: Baldur's Gate",
		// 	text: "At the beginning of each combat, each creature you control gets +1/+1 until end of turn if it has the same name as another creature you control or a creature card in your graveyard.\n{1}{R}{W}: Another target nontoken creature you control gains first strike and double team until end of turn. Activate only as a sorcery and only once.",
		// 	artist: "David Rapoza",
		// 	number: "73",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "574287",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=574287&type=card",
		// 	printings: ["HBG"],
		// 	originalText:
		// 		"At the beginning of each combat, each creature you control gets +1/+1 until end of turn if it has the same name as another creature you control or a creature card in your graveyard.\n{1}{R}{W}: Another target nontoken creature you control gains first strike and double team until end of turn. Activate only as a sorcery and only once.",
		// 	originalType: "Legendary Creature — Human Soldier",
		// 	legalities: [
		// 		{
		// 			format: "Alchemy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "ee100e28-9889-55f2-ab46-895082542b8f",
		// },
		// {
		// 	name: "Regal Leosaur",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Dinosaur Cat",
		// 	types: ["Creature"],
		// 	subtypes: ["Dinosaur", "Cat"],
		// 	rarity: "Uncommon",
		// 	set: "IKO",
		// 	setName: "Ikoria: Lair of Behemoths",
		// 	text: "Mutate {1}{R/W}{R/W} (If you cast this spell for its mutate cost, put it over or under target non-Human creature you own. They mutate into the creature on top plus all abilities from under it.)\nWhenever this creature mutates, other creatures you control get +2/+1 until end of turn.",
		// 	artist: "Ilse Gort",
		// 	number: "202",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "mutate",
		// 	multiverseid: "479722",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479722&type=card",
		// 	variations: ["c6efa4d1-2a6b-515e-a46d-87a77ed14717"],
		// 	rulings: [
		// 		{
		// 			date: "2020-04-17",
		// 			text: "Regal Leosaur’s last ability affects only other creatures you control at the time it resolves. Creatures you begin to control later in the turn won’t get +2/+1.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Nobler Leosaurus",
		// 			text: "Mutation {1}{R/W}{R/W} (Falls du diesen Zauberspruch für seine Mutationskosten wirkst, lege ihn auf oder unter eine Nicht-Mensch-Kreatur deiner Wahl, die du besitzt. Sie mutieren zur oben liegenden Kreatur, die zusätzlich alle Fähigkeiten der darunter liegenden hat.)\nImmer wenn diese Kreatur mutiert, erhalten andere Kreaturen, die du kontrollierst, +2/+1 bis zum Ende des Zuges.",
		// 			type: "Kreatur — Dinosaurier, Katze",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479981&type=card",
		// 			language: "German",
		// 			multiverseid: 479981,
		// 		},
		// 		{
		// 			name: "Leosaurio majestuoso",
		// 			text: "Mutación {1}{R/W}{R/W}. (Si lanzas este hechizo pagando su coste de mutación, ponlo sobre o bajo la criatura objetivo que no sea Humano de la cual eres propietario. Estas mutan en la criatura de la parte superior más todas las habilidades de debajo.)\nSiempre que esta criatura mute, las otras criaturas que controlas obtienen +2/+1 hasta el final del turno.",
		// 			type: "Criatura — Felino dinosaurio",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480240&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 480240,
		// 		},
		// 		{
		// 			name: "Léosaure royal",
		// 			text: "Mutation {1}{R/W}{R/W} (Si vous lancez ce sort pour son coût de mutation, mettez-le au-dessus ou au-dessous d'une créature non-Humain ciblée que vous possédez. La créature mutante est la créature du dessus, avec toutes les capacités des cartes au-dessous.)\nÀ chaque fois que cette créature subit une mutation, les autres créatures que vous contrôlez gagnent +2/+1 jusqu'à la fin du tour.",
		// 			type: "Créature : dinosaure et chat",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480499&type=card",
		// 			language: "French",
		// 			multiverseid: 480499,
		// 		},
		// 		{
		// 			name: "Leosauro Regale",
		// 			text: "Mutazione {1}{R/W}{R/W} (Se lanci questa magia per il suo costo di mutazione, mettila sopra o sotto una creatura non Umano bersaglio che possiedi. Muta nella creatura sopra, con anche le abilità di quelle sotto.)\nOgniqualvolta questa creatura muta, le altre creature che controlli prendono +2/+1 fino alla fine del turno.",
		// 			type: "Creatura — Felino Dinosauro",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480758&type=card",
		// 			language: "Italian",
		// 			multiverseid: 480758,
		// 		},
		// 		{
		// 			name: "威厳あるレオサウルス",
		// 			text: "変容{1}{R/W}{R/W}（あなたがこの呪文をこれの変容コストで唱えるなら、あなたがオーナーであり人間でないクリーチャー１体を対象とし、これをそれの上か下に置く。これらは、一番上のクリーチャーに、その下にある能力すべてを加えたものに変容する。）\nこのクリーチャーが変容するたび、ターン終了時まで、他の、あなたがコントロールしているクリーチャーは＋２/＋１の修整を受ける。",
		// 			type: "クリーチャー — 恐竜・猫",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481017&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 481017,
		// 		},
		// 		{
		// 			name: "근엄한 레오사우루스",
		// 			text: "돌연변이화 {1}{R/W}{R/W} (당신이 돌연변이화 비용을 지불해 이 주문을 발동한다면, 당신이 소유한 인간이 아닌 생물을 목표로 정한다. 이 카드를 그 생물의 위 또는 아래에 놓는다. 그 생물은 맨 위에 있는 생물이 그 아래에 놓인 카드들의 모든 능력을 가진 생물로 돌연변이화한다.)\n이 생물이 돌연변이화할 때마다, 당신이 조종하는 다른 생물들은 턴종료까지 +2/+1을 받는다.",
		// 			type: "생물 — 공룡 고양이",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481276&type=card",
		// 			language: "Korean",
		// 			multiverseid: 481276,
		// 		},
		// 		{
		// 			name: "Leossauro Régio",
		// 			text: "Mutação {1}{R/W}{R/W} (Se você conjurar esta mágica pelo custo de mutação, coloque-a sobre ou sob a criatura alvo que você possui que não seja um Humano. Elas sofrem uma mutação que resulta na criatura de cima com todas as habilidades das criaturas de baixo.)\nToda vez que esta criatura sofre mutação, as outras criaturas que você controla recebem +2/+1 até o final do turno.",
		// 			type: "Criatura — Dinossauro Felino",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481535&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 481535,
		// 		},
		// 		{
		// 			name: "Царственный Леозавр",
		// 			text: "Мутация {1}{R/W}{R/W} (Если вы разыграли это заклинание за его стоимость Мутации, положите его сверху или снизу целевого принадлежащего вам существа, не являющегося Человеком. Они мутируют в существо сверху, которому добавляются все способности снизу.)\nКаждый раз, когда это существо мутирует, другие существа под вашим контролем получают +2/+1 до конца хода.",
		// 			type: "Существо — Динозавр Кошка",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481794&type=card",
		// 			language: "Russian",
		// 			multiverseid: 481794,
		// 		},
		// 		{
		// 			name: "威严狮龙",
		// 			text: "合变{1}{R/W}{R/W}（如果你支付此咒语的合变费用来施放之，则将它放置在目标由你拥有之非人类生物的顶上或底下。它们合变作顶上的生物，外加具有底下所有异能。）\n每当此生物合变时，由你操控的其他生物得+2/+1直到回合结束。",
		// 			type: "生物 ～恐龙／猫",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482053&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 482053,
		// 		},
		// 		{
		// 			name: "威嚴獅龍",
		// 			text: "合變{1}{R/W}{R/W}（如果你支付此咒語的合變費用來施放之，則將它放置在目標由你擁有之非人類生物的頂上或底下。它們合變作頂上的生物，外加具有底下所有異能。）\n每當此生物合變時，由你操控的其他生物得+2/+1直到回合結束。",
		// 			type: "生物 ～恐龍／貓",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482312&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 482312,
		// 		},
		// 	],
		// 	printings: ["IKO", "PRM"],
		// 	originalText:
		// 		"Mutate {1}{GU}{GU} (If you cast this spell for its mutate cost, put it over or under target non-Human creature you own. They mutate into the creature on top plus all abilities from under it.)\nWhenever this creature mutates, other creatures you control get +2/+1 until end of turn.",
		// 	originalType: "Creature — Dinosaur Cat",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "59e38a29-d0b7-5450-b867-dfdac5c17072",
		// },
		// {
		// 	name: "Savai Thundermane",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Elemental Cat",
		// 	types: ["Creature"],
		// 	subtypes: ["Elemental", "Cat"],
		// 	rarity: "Uncommon",
		// 	set: "IKO",
		// 	setName: "Ikoria: Lair of Behemoths",
		// 	text: "Whenever you cycle a card, you may pay {2}. When you do, Savai Thundermane deals 2 damage to target creature and you gain 2 life.",
		// 	flavor: "A crackling roar is the last sound many hunters hear.",
		// 	artist: "Svetlin Velinov",
		// 	number: "205",
		// 	power: "3",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "479725",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479725&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2020-04-17",
		// 			text: "While resolving Savai Thundermane’s triggered ability, you can’t pay {2} more than once to have it deal more damage or gain more life.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "If you pay {2} while Savai Thundermane’s triggered ability is resolving, the reflexive triggered ability triggers and will resolve separately. This is different from effects that say “If you do . . .” in that players may take actions after you’ve paid mana but before damage is dealt.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "If the target creature is an illegal target by the time Savai Thundermane’s reflexive triggered ability tries to resolve, the ability won’t resolve. You won’t gain 2 life.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "You can pay {2} even if Savai Thundermane leaves the battlefield before its triggered ability resolves. The reflexive triggered ability will still trigger if you do.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "Some cards with cycling have an ability that triggers when you cycle them, and some cards have an ability that triggers whenever you cycle any card. These triggered abilities resolve before you draw from the cycling ability.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "Triggered abilities from cycling a card and the cycling ability itself aren’t spells. Effects that interact with spells (such as that of Cancel) won’t affect them.",
		// 		},
		// 		{
		// 			date: "2020-04-17",
		// 			text: "You can cycle a card even if it has a triggered ability from cycling that won’t have a legal target. This is because the cycling ability and the triggered ability are separate. This also means that if either ability is countered (with Disallow, for example), the other ability will still resolve.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Savai-Donnermähne",
		// 			text: "Immer wenn du eine Karte umwandelst, kannst du {2} bezahlen. Wenn du dies tust, fügt die Savai-Donnermähne einer Kreatur deiner Wahl 2 Schadenspunkte zu und du erhältst 2 Lebenspunkte dazu.",
		// 			type: "Kreatur — Elementarwesen, Katze",
		// 			flavor: "Ein krachendes Gebrüll ist das letzte, was viele Jäger hören.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479984&type=card",
		// 			language: "German",
		// 			multiverseid: 479984,
		// 		},
		// 		{
		// 			name: "Melenatrueno de Savái",
		// 			text: "Siempre que actives una habilidad de ciclo de una carta, puedes pagar {2}. Cuando lo hagas, el Melenatrueno de Savái hace 2 puntos de daño a la criatura objetivo y tú ganas 2 vidas.",
		// 			type: "Criatura — Felino elemental",
		// 			flavor: "Su rugido crepitante es el último sonido que escuchan muchos cazadores.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480243&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 480243,
		// 		},
		// 		{
		// 			name: "Crinière de foudre de Savaï",
		// 			text: "À chaque fois que vous recyclez une carte, vous pouvez payer {2}. Quand vous faites ainsi, la Crinière de foudre de Savaï inflige 2 blessures à la créature ciblée et vous gagnez 2 points de vie.",
		// 			type: "Créature : élémental et chat",
		// 			flavor: "Ce rugissement crépitant est généralement la dernière chose entendue par de nombreux chasseurs.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480502&type=card",
		// 			language: "French",
		// 			multiverseid: 480502,
		// 		},
		// 		{
		// 			name: "Fulmicriniera di Savai",
		// 			text: "Ogniqualvolta cicli una carta, puoi pagare {2}. Quando lo fai, il Fulmicriniera di Savai infligge 2 danni a una creatura bersaglio e tu guadagni 2 punti vita.",
		// 			type: "Creatura — Felino Elementale",
		// 			flavor: "L'ultimo suono che sentono molti cacciatori è un ruggito crepitante.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=480761&type=card",
		// 			language: "Italian",
		// 			multiverseid: 480761,
		// 		},
		// 		{
		// 			name: "サヴァイの雷たてがみ",
		// 			text: "あなたがカードをサイクリングするたび、あなたは{2}を支払ってもよい。そうしたとき、クリーチャー１体を対象とする。サヴァイの雷たてがみはそれに２点のダメージを与え、あなたは２点のライフを得る。",
		// 			type: "クリーチャー — エレメンタル・猫",
		// 			flavor: "雷のような咆哮は、多くの狩人が聞く最後の音だ。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481020&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 481020,
		// 		},
		// 		{
		// 			name: "사바이 천둥갈기",
		// 			text: "당신이 카드를 순환할 때마다, 당신은 {2}를 지불할 수 있다. 그렇게 할 때, 생물을 목표로 정한다. 사바이 천둥갈기는 그 생물에게 피해 2점을 입히고 당신은 생명 2점을 얻는다.",
		// 			type: "생물 — 정령 고양이",
		// 			flavor: "수많은 사냥꾼들이 그들의 마지막 순간에 빠직거리는 포효를 듣는다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481279&type=card",
		// 			language: "Korean",
		// 			multiverseid: 481279,
		// 		},
		// 		{
		// 			name: "Juba-de-trovão de Savai",
		// 			text: "Toda vez que você recicla um card, você pode pagar {2}. Quando você faz isso, Juba-de-trovão de Savai causa 2 pontos de dano à criatura alvo e você ganha 2 pontos de vida.",
		// 			type: "Criatura — Elemental Felino",
		// 			flavor: "Um rugido estrilado é o último som que muitos caçadores ouvem.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481538&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 481538,
		// 		},
		// 		{
		// 			name: "Савайский Громогрив",
		// 			text: "Каждый раз, когда вы совершаете Цикл карты, вы можете заплатить {2}. Когда вы это делаете, Савайский Громогрив наносит 2 повреждения целевому существу, а вы получаете 2 жизни.",
		// 			type: "Существо — Элементаль Кошка",
		// 			flavor: "Его трескучий рев — последнее, что многие охотники слышат в жизни.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=481797&type=card",
		// 			language: "Russian",
		// 			multiverseid: 481797,
		// 		},
		// 		{
		// 			name: "撒维耶雷鬃狮",
		// 			text: "每当你循环一张牌时，你可以支付{2}。当你如此作时，撒维耶雷鬃狮对目标生物造成2点伤害，且你获得2点生命。",
		// 			type: "生物 ～元素／猫",
		// 			flavor: "一道雷鸣嘶吼，是许多猎人听到的最后声音。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482056&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 482056,
		// 		},
		// 		{
		// 			name: "撒維耶雷鬃獅",
		// 			text: "每當你循環一張牌時，你可以支付{2}。當你如此作時，撒維耶雷鬃獅對目標生物造成2點傷害，且你獲得2點生命。",
		// 			type: "生物 ～元素／貓",
		// 			flavor: "一道雷鳴嘶吼，是許多獵人聽到的最後聲音。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482315&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 482315,
		// 		},
		// 	],
		// 	printings: ["IKO"],
		// 	originalText:
		// 		"Whenever you cycle a card, you may pay {2}. When you do, Savai Thundermane deals 2 damage to target creature and you gain 2 life.",
		// 	originalType: "Creature — Elemental Cat",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "239980f4-b020-585f-96aa-edda4a32dcbe",
		// },
		// {
		// 	name: "Cloudshredder Sliver",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Sliver",
		// 	types: ["Creature"],
		// 	subtypes: ["Sliver"],
		// 	rarity: "Rare",
		// 	set: "J21",
		// 	setName: "Jumpstart: Historic Horizons",
		// 	text: "Sliver creatures you control have flying and haste.",
		// 	artist: "Filip Burburan",
		// 	number: "685",
		// 	power: "1",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	rulings: [
		// 		{
		// 			date: "2019-06-14",
		// 			text: "If Cloudshredder Sliver leaves the battlefield during combat, any attacking Slivers that came under your control this turn will continue to attack, even though they will no longer have haste.",
		// 		},
		// 	],
		// 	printings: ["J21", "MH1", "SLD", "TSR"],
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "4e66707b-4813-53e2-81e4-f089eea210bc",
		// },
		// {
		// 	name: "Desperate Stand",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Sorcery",
		// 	types: ["Sorcery"],
		// 	rarity: "Uncommon",
		// 	set: "JOU",
		// 	setName: "Journey into Nyx",
		// 	text: "Strive — This spell costs {R}{W} more to cast for each target beyond the first.\nAny number of target creatures each get +2/+0 and gain first strike and vigilance until end of turn.",
		// 	flavor: "At the Akroan gates, hoplites revived the tactics of Kytheon Iora's infamous irregulars.",
		// 	artist: "Raymond Swanland",
		// 	number: "147",
		// 	layout: "normal",
		// 	multiverseid: "380398",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380398&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2014-04-26",
		// 			text: "You choose how many targets each spell with a strive ability has and what those targets are as you cast it. It's legal to cast such a spell with no targets, although this is rarely a good idea. You can't choose the same target more than once for a single strive spell.",
		// 		},
		// 		{
		// 			date: "2014-04-26",
		// 			text: "The mana cost and mana value of strive spells don't change no matter how many targets they have. Strive abilities affect only what you pay.",
		// 		},
		// 		{
		// 			date: "2014-04-26",
		// 			text: "If all of the spell's targets are illegal when the spell tries to resolve, it won't resolve and none of its effects will happen. If one or more of its targets are legal when it tries to resolve, the spell will resolve and affect only those legal targets. It will have no effect on any illegal targets.",
		// 		},
		// 		{
		// 			date: "2014-04-26",
		// 			text: "If such a spell is copied, and the effect that copies the spell allows a player to choose new targets for the copy, the number of targets can't be changed. The player may change any number of the targets, including all of them or none of them. If, for one of the targets, the player can't choose a new legal target, then it remains unchanged (even if the current target is illegal).",
		// 		},
		// 		{
		// 			date: "2014-04-26",
		// 			text: "If a spell or ability allows you to cast a strive spell without paying its mana cost, you must pay the additional costs for any targets beyond the first.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Erbitterter Widerstand",
		// 			text: "Streben — Erbitterter Widerstand kostet beim Wirken für jedes Ziel außer dem ersten {R}{W} mehr.\nEine beliebige Anzahl an Kreaturen deiner Wahl erhält bis zum Ende des Zuges +2/+0, Erstschlag und Wachsamkeit.",
		// 			type: "Hexerei",
		// 			flavor: "Die Hopliten ließen vor den Toren von Akros die Taktiken des berüchtigten Kytheon Iora und seiner Freischärler wieder aufleben.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380893&type=card",
		// 			language: "German",
		// 			multiverseid: 380893,
		// 		},
		// 		{
		// 			name: "Resistencia desesperada",
		// 			text: "Esfuerzo — Lanzar la Resistencia desesperada cuesta {R}{W} más por cada objetivo después del primero.\nCualquier cantidad de criaturas objetivo obtienen +2/+0 cada una y ganan las habilidades de dañar primero y vigilancia hasta el final del turno.",
		// 			type: "Conjuro",
		// 			flavor: "En los portales akronienses, los hoplitas recuperaron las tácticas de los infames milicianos de Kytheon Iora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382048&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 382048,
		// 		},
		// 		{
		// 			name: "Dernier ressort",
		// 			text: "Obstination — Le Dernier ressort coûte {R}{W} de plus à lancer pour chaque cible après la première.\nN'importe quel nombre de créatures ciblées gagnent chacune +2/+0 et acquièrent l'initiative et la vigilance jusqu'à la fin du tour.",
		// 			type: "Rituel",
		// 			flavor: "Aux portes d'Akros, les hoplites renouaient avec les tactiques des miliciens infâmes de Kytheon Iora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381058&type=card",
		// 			language: "French",
		// 			multiverseid: 381058,
		// 		},
		// 		{
		// 			name: "Resistenza Disperata",
		// 			text: "Sforzo — La Resistenza Disperata costa {R}{W} in più per essere lanciata per ogni bersaglio oltre il primo.\nScegli un qualsiasi numero di creature bersaglio. Ognuna di esse prende +2/+0 e ha attacco improvviso e cautela fino alla fine del turno.",
		// 			type: "Stregoneria",
		// 			flavor: "Ai cancelli di Akros, gli opliti riportarono in campo le tattiche dei famigerati miliziani di Kytheon Iora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381223&type=card",
		// 			language: "Italian",
		// 			multiverseid: 381223,
		// 		},
		// 		{
		// 			name: "捨て身の抵抗",
		// 			text: "奮励 ― 捨て身の抵抗を唱えるためのコストは、２つ目以降の対象１つにつき{R}{W}多くなる。\n望む数のクリーチャーを対象とする。それらはそれぞれターン終了時まで＋２/＋０の修整を受けるとともに先制攻撃と警戒を得る。",
		// 			type: "ソーサリー",
		// 			flavor: "アクロスの門前で、重装歩兵たちはキテオン・イオラの悪名高き非正規隊の戦術を再現した。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381388&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 381388,
		// 		},
		// 		{
		// 			name: "필사적인 저항",
		// 			text: "분투 — 필사적인 저항은 한 개를 초과하는 목표의 수만큼 발동하는 데 {R}{W}씩 비용이 더 든다.\n생물을 원하는 수만큼 목표로 정한다. 그 생물들은 턴종료까지 각각 +2/+0을 받고 선제공격과 경계를 얻는다.",
		// 			type: "집중마법",
		// 			flavor: "중장보병들은 아크로스 관문에서 키세온 이오라의 악명 높은 게릴라 전술을 부활시켰다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381553&type=card",
		// 			language: "Korean",
		// 			multiverseid: 381553,
		// 		},
		// 		{
		// 			name: "Resistência Desesperada",
		// 			text: "Esforço — Resistência Desesperada custa {R}{W} a mais para ser conjurado para cada alvo além do primeiro.\nQualquer número de criaturas alvo recebe +2/+0 e ganha iniciativa e vigilância até o final do turno.",
		// 			type: "Feitiço",
		// 			flavor: "Nos portões acrosanos, os hoplitas reviveram as táticas das tropas irregulares infames de Quiteon Iora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381718&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 381718,
		// 		},
		// 		{
		// 			name: "Отчаянная Оборона",
		// 			text: "Стремление — За каждую цель после первой разыгрывание Отчаянной Обороны стоит на {R}{W} больше.\nЛюбое количество целевых существ получают по +2/+0 и Первый удар и Бдительность до конца хода.",
		// 			type: "Волшебство",
		// 			flavor: "У ворот Акроса гоплиты повторили то, что когда-то сделали нерегулярные войска печально известного Китеона Иоры.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=381883&type=card",
		// 			language: "Russian",
		// 			multiverseid: 381883,
		// 		},
		// 		{
		// 			name: "奋绝抵抗",
		// 			text: "积力～奋绝抵抗在第一个目标之外每有一个目标，便增加{R}{W}来施放。\n直到回合结束，任意数量的目标生物各得+2/+0且获得先攻与警戒异能。",
		// 			type: "法术",
		// 			flavor: "在阿喀洛斯城下，库忒昂伊俄拉恶名昭彰的游勇战术重现重装步兵阵中。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380563&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 380563,
		// 		},
		// 		{
		// 			name: "奮絕抵抗",
		// 			text: "積力～奮絕抵抗在第一個目標之外每有一個目標，便增加{R}{W}來施放。\n直到回合結束，任意數量的目標生物各得+2/+0且獲得先攻與警戒異能。",
		// 			type: "巫術",
		// 			flavor: "在阿喀洛斯城下，庫忒昂伊俄拉惡名昭彰的游勇戰術重現重裝步兵陣中。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380728&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 380728,
		// 		},
		// 	],
		// 	printings: ["JOU"],
		// 	originalText:
		// 		"Strive — Desperate Stand costs {R}{W} more to cast for each target beyond the first.\nAny number of target creatures each get +2/+0 and gain first strike and vigilance until end of turn.",
		// 	originalType: "Sorcery",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "309215af-9e17-5680-8eb5-0a6288bc7179",
		// },
		// {
		// 	name: "Koll, the Forgemaster",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Dwarf Warrior",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Dwarf", "Warrior"],
		// 	rarity: "Uncommon",
		// 	set: "KHM",
		// 	setName: "Kaldheim",
		// 	text: "Whenever another nontoken creature you control dies, if it was enchanted or equipped, return it to its owner's hand.\nCreature tokens you control that are enchanted or equipped get +1/+1.",
		// 	flavor: "Using tyrite from a fallen Cosmos monster, Koll forged a weapon to awe Halvar himself.",
		// 	artist: "Bram Sels",
		// 	number: "220",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "503836",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=503836&type=card",
		// 	variations: ["13a9e01b-606c-5429-b6ee-5854ef24b251"],
		// 	rulings: [
		// 		{
		// 			date: "2021-02-05",
		// 			text: "A creature token you control is enchanted or equipped if there’s an Aura or an Equipment attached to it. You don’t have to control that Aura or Equipment.",
		// 		},
		// 		{
		// 			date: "2021-02-05",
		// 			text: "A creature token you control that’s enchanted or equipped gets only +1/+1 from Koll’s last ability, no matter how many Auras and Equipment are attached to that creature.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Koll der Schmiedemeister",
		// 			text: "Immer wenn eine andere Nichtspielsteinkreatur, die du kontrollierst, stirbt und falls sie verzaubert oder ausgerüstet war, bringe sie auf die Hand ihres Besitzers zurück.\nKreaturenspielsteine, die du kontrollierst und die verzaubert oder ausgerüstet sind, erhalten +1/+1.",
		// 			type: "Legendäre Kreatur — Zwerg, Krieger",
		// 			flavor: "Aus Thyrit von einem gefallenen Kosmosmonster schmiedete Koll eine Waffe, die selbst Halvar Ehrfurcht einflößte.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=504137&type=card",
		// 			language: "German",
		// 			multiverseid: 504137,
		// 		},
		// 		{
		// 			name: "Koll, el maestro de fragua",
		// 			text: "Siempre que otra criatura que no sea ficha que controlas muera, si estaba encantada o equipada, regrésala a la mano de su propietario.\nLas fichas de criatura que controlas que están encantadas o equipadas obtienen +1/+1.",
		// 			type: "Criatura legendaria — Guerrero enano",
		// 			flavor: "Usando tyrita de un monstruo del cosmos muerto, Koll forjó un arma para impresionar hasta al mismísimo Hálvar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=504438&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 504438,
		// 		},
		// 		{
		// 			name: "Koll, le maître-forgeron",
		// 			text: "À chaque fois qu'une autre créature non-jeton que vous contrôlez meurt, si elle était enchantée ou équipée, renvoyez-la dans la main de son propriétaire.\nLes jetons de créature que vous contrôlez qui sont enchantés ou équipés gagnent +1/+1.",
		// 			type: "Créature légendaire : nain et guerrier",
		// 			flavor: "Utilisant la tyrite d'un monstre du Cosmos abattu, Koll forgea une arme capable d'impressionner Halvar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=504739&type=card",
		// 			language: "French",
		// 			multiverseid: 504739,
		// 		},
		// 		{
		// 			name: "Koll, il Maestro Forgiatore",
		// 			text: "Ogniqualvolta un'altra creatura non pedina che controlli muore, se era incantata o equipaggiata, falla tornare in mano al suo proprietario.\nLe pedine creatura incantate o equipaggiate che controlli prendono +1/+1.",
		// 			type: "Creatura Leggendaria — Guerriero Nano",
		// 			flavor: "Con la tirite recuperata da un mostro del Cosmo caduto, Koll forgiò un'arma che avrebbe sbalordito persino Halvar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=505040&type=card",
		// 			language: "Italian",
		// 			multiverseid: 505040,
		// 		},
		// 		{
		// 			name: "鍛冶場主、コル",
		// 			text: "あなたがコントロールしていてトークンでない他のクリーチャー１体が死亡するたび、それにオーラや装備品がついていた場合、そのクリーチャーであったカードをオーナーの手札に戻す。\nあなたがコントロールしていてオーラや装備品がついているすべてのクリーチャー・トークンは＋１/＋１の修整を受ける。",
		// 			type: "伝説のクリーチャー — ドワーフ・戦士",
		// 			flavor: "死んだ星界の怪物から得たタイライトを用いて、コルは、ハルヴァールですらも畏怖の念を抱くような武器を鍛え上げた。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=505341&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 505341,
		// 		},
		// 		{
		// 			name: "대장간지기, 콜",
		// 			text: "당신이 조종하는 토큰이 아닌 다른 생물이 죽을 때마다, 그 생물이 부여 또는 장착되어 있었다면, 그 생물을 소유자의 손으로 되돌린다.\n당신이 조종하는 부여된 또는 장착된 생물 토큰들은 +1/+1을 받는다.",
		// 			type: "전설적 생물 — 드워프 전사",
		// 			flavor: "콜은 쓰러진 우주 괴물에서 얻은 타이라이트를 사용해 할바르마저도 경외심을 가질 무기를 만들어냈다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=505642&type=card",
		// 			language: "Korean",
		// 			multiverseid: 505642,
		// 		},
		// 		{
		// 			name: "Knoll, o Mestre da Forja",
		// 			text: "Toda vez que outra criatura não ficha que você controla morrer, se ela estava encantada ou equipada, devolva-a para a mão de seu dono.\nAs fichas de criatura que você controla equipadas ou encantadas recebem +1/+1.",
		// 			type: "Criatura Lendária — Anão Guerreiro",
		// 			flavor: "Usando tyrita de um monstro caído do Cosmos, Koll forjou uma arma capaz de impressionar o próprio Halvar.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=505943&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 505943,
		// 		},
		// 		{
		// 			name: "Кёлль, Хозяин Кузни",
		// 			text: "Каждый раз, когда другое не являющееся фишкой существо под вашим контролем умирает, если оно было зачаровано или снаряжено, верните его в руку его владельца.\nЗачарованные или снаряженные фишки существ под вашим контролем получают +1/+1.",
		// 			type: "Легендарное Существо — Гном Воин",
		// 			flavor: "Взяв тирит из сраженного чудовища Мироздания, Кёлль выковал оружие, изумившее самого Хальвара.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=506244&type=card",
		// 			language: "Russian",
		// 			multiverseid: 506244,
		// 		},
		// 		{
		// 			name: "锻造大师寇尔",
		// 			text: "每当另一个由你操控且非衍生物的生物死去时，若它受有灵气或佩带武具，则将它移回其拥有者手上。\n由你操控且受有灵气或佩带武具的衍生生物得+1/+1。",
		// 			type: "传奇生物 ～矮人／战士",
		// 			flavor: "为能亲自折服哈尔瓦，寇尔利用从死去寰宇怪物体内提炼的钛晶打造出一把绝世神兵。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=506545&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 506545,
		// 		},
		// 		{
		// 			name: "鍛造大師寇爾",
		// 			text: "每當另一個由你操控且非衍生物的生物死去時，若它受有靈氣或佩帶武具，則將它移回其擁有者手上。\n由你操控且受有靈氣或佩帶武具的衍生生物得+1/+1。",
		// 			type: "傳奇生物 ～矮人／戰士",
		// 			flavor: "為能親自折服哈爾瓦，寇爾利用從死去寰宇怪物體內提煉的鈦晶打造出一把絕世神兵。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=506846&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 506846,
		// 		},
		// 	],
		// 	printings: ["KHM", "PRM"],
		// 	originalText:
		// 		"Whenever another nontoken creature you control dies, if it was enchanted or equipped, return it to its owner's hand.\nCreature tokens you control that are enchanted or equipped get +1/+1.",
		// 	originalType: "Legendary Creature — Dwarf Warrior",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "7a802cbb-a47c-593f-8839-ad3a4b3c7378",
		// },
		// {
		// 	name: "Veteran Motorist",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Dwarf Pilot",
		// 	types: ["Creature"],
		// 	subtypes: ["Dwarf", "Pilot"],
		// 	rarity: "Uncommon",
		// 	set: "KLD",
		// 	setName: "Kaladesh",
		// 	text: "When Veteran Motorist enters the battlefield, scry 2.\nWhenever Veteran Motorist crews a Vehicle, that Vehicle gets +1/+1 until end of turn.",
		// 	flavor: "He's set to compete in every race at the Fair, and he plans to win them all.",
		// 	artist: "Christopher Moeller",
		// 	number: "188",
		// 	power: "3",
		// 	toughness: "1",
		// 	layout: "normal",
		// 	multiverseid: "417761",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417761&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2016-09-20",
		// 			text: "Veteran Motorist's last ability triggers when it becomes tapped to activate a crew ability. Even if Veteran Motorist leaves the battlefield before its triggered ability resolves, that Vehicle still gets +1/+1 until end of turn.",
		// 		},
		// 		{
		// 			date: "2016-09-20",
		// 			text: "Veteran Motorist's last ability resolves before the crew ability that it was tapped to activate. The +1/+1 bonus will be in effect as the Vehicle becomes an artifact creature.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Erfahrener Rennfahrer",
		// 			text: "Wenn der Erfahrene Rennfahrer ins Spiel kommt, wende Hellsicht 2 an.\nImmer wenn der Erfahrene Rennfahrer ein Fahrzeug bemannt, erhält das Fahrzeug +1/+1 bis zum Ende des Zuges.",
		// 			type: "Kreatur — Zwerg, Pilot",
		// 			flavor: "Bei der Messe tritt er zu jedem Rennen an und hat immer den Sieg vor Augen.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418553&type=card",
		// 			language: "German",
		// 			multiverseid: 418553,
		// 		},
		// 		{
		// 			name: "Piloto veterano",
		// 			text: "Cuando el Piloto veterano entre al campo de batalla, adivina 2.\nSiempre que el Piloto veterano tripule un Vehículo, ese Vehículo obtiene +1/+1 hasta el final del turno.",
		// 			type: "Criatura — Enano piloto",
		// 			flavor: "Se propuso competir en todas y cada una de las carreras de la feria, y planea ganarlas todas.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420401&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 420401,
		// 		},
		// 		{
		// 			name: "Pilote vétéran",
		// 			text: "Quand le Pilote vétéran arrive sur le champ de bataille, regard 2.\nÀ chaque fois que le Pilote vétéran pilote un véhicule, ce véhicule gagne +1/+1 jusqu'à la fin du tour.",
		// 			type: "Créature : nain et pilote",
		// 			flavor: "Il est déterminé à participer à toutes les courses de la Foire, et a l'intention de toutes les remporter.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418817&type=card",
		// 			language: "French",
		// 			multiverseid: 418817,
		// 		},
		// 		{
		// 			name: "Manovratore Veterano",
		// 			text: "Quando il Manovratore Veterano entra nel campo di battaglia, profetizza 2.\nOgniqualvolta il Manovratore Veterano manovra un Veicolo, quel Veicolo prende +1/+1 fino alla fine del turno.",
		// 			type: "Creatura — Pilota Nano",
		// 			flavor: "Si è iscritto a ognuna delle gare della Fiera e ha intenzione di vincerle tutte.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419081&type=card",
		// 			language: "Italian",
		// 			multiverseid: 419081,
		// 		},
		// 		{
		// 			name: "経験豊富な操縦者",
		// 			text: "経験豊富な操縦者が戦場に出たとき、占術２を行う。\n経験豊富な操縦者が機体１つに搭乗するたび、ターン終了時まで、その機体は＋１/＋１の修整を受ける。",
		// 			type: "クリーチャー — ドワーフ・操縦士",
		// 			flavor: "この男は、博覧会の全競走に参加して、そのすべてに勝つ気でいる。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419345&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 419345,
		// 		},
		// 		{
		// 			name: "노련한 운전수",
		// 			text: "노련한 운전수가 전장에 들어올 때, 점술 2를 한다.\n노련한 운전수가 탑승물에 탑승할 때마다, 그 탑승물은 턴종료까지 +1/+1을 받는다.",
		// 			type: "생물 — 드워프 조종사",
		// 			flavor: "그는 박람회에서 열리는 모든 경주에 참가할 준비를 마쳤고, 전부 우승할 계획이다.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419609&type=card",
		// 			language: "Korean",
		// 			multiverseid: 419609,
		// 		},
		// 		{
		// 			name: "Motorista Veterano",
		// 			text: "Quando Motorista Veterano entrar no campo de batalha, use vidência 2.\nToda vez que Motorista Veterano tripula um Veículo, aquele Veículo recebe +1/+1 até o final do turno.",
		// 			type: "Criatura — Anão Piloto",
		// 			flavor: "Ele está inscrito para competir em cada corrida da Feira, e pretende vencer todas elas.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419873&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 419873,
		// 		},
		// 		{
		// 			name: "Водитель-Ветеран",
		// 			text: "Когда Водитель-Ветеран выходит на поле битвы, предскажите 2.\nКаждый раз, когда Водитель-Ветеран входит в Экипаж Машины, та Машина получает +1/+1 до конца хода.",
		// 			type: "Существо — Гном Пилот",
		// 			flavor: "Он собирается принять участие во всех гонках на Ярмарке и намерен выиграть каждую из них.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420137&type=card",
		// 			language: "Russian",
		// 			multiverseid: 420137,
		// 		},
		// 		{
		// 			name: "老练车手",
		// 			text: "当老练车手进战场时，占卜2。\n每当老练车手搭载载具时，该载具得+1/+1直到回合结束。",
		// 			type: "生物～矮人／驾手",
		// 			flavor: "他准备好参加博览会的每一场比赛，还打算囊括所有的冠军。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418025&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 418025,
		// 		},
		// 		{
		// 			name: "老練車手",
		// 			text: "當老練車手進戰場時，占卜2。\n每當老練車手搭載載具時，該載具得+1/+1直到回合結束。",
		// 			type: "生物～矮人／駕手",
		// 			flavor: "他準備好參加博覽會的每一場比賽，還打算囊括所有的冠軍。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418289&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 418289,
		// 		},
		// 	],
		// 	printings: ["KLD", "KLR", "PLIST"],
		// 	originalText:
		// 		"When Veteran Motorist enters the battlefield, scry 2.\nWhenever Veteran Motorist crews a Vehicle, that Vehicle gets +1/+1 until end of turn.",
		// 	originalType: "Creature — Dwarf Pilot",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "3c94a913-5819-5828-aed3-4513ac8973e5",
		// },
		// {
		// 	name: "Forth Eorlingas!",
		// 	manaCost: "{X}{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Sorcery",
		// 	types: ["Sorcery"],
		// 	rarity: "Rare",
		// 	set: "LTC",
		// 	setName: "Tales of Middle-earth Commander",
		// 	text: "Create X 2/2 red Human Knight creature tokens with trample and haste.\nWhenever one or more creatures you control deal combat damage to one or more players this turn, you become the monarch.",
		// 	flavor: '"A sword-day, a red day, ere the sun rises! Ride now, ride now! Ride to Gondor!"',
		// 	artist: "Filipe Pagliuso",
		// 	number: "56",
		// 	layout: "normal",
		// 	variations: ["c7dd483e-53c2-5e7a-8b2c-e937bdb2cc36"],
		// 	printings: ["LTC"],
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "e70e0ba8-630e-5cc4-8b26-22a9f4695ca9",
		// },
		// {
		// 	name: "Merry, Esquire of Rohan",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Halfling Knight",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Halfling", "Knight"],
		// 	rarity: "Rare",
		// 	set: "LTR",
		// 	setName: "The Lord of the Rings: Tales of Middle-earth",
		// 	text: "Haste\nMerry, Esquire of Rohan has first strike as long as it's equipped.\nWhenever you attack with Merry and another legendary creature, draw a card.",
		// 	flavor: "Then suddenly Merry felt it at last, beyond doubt: a change. Wind was in his face!",
		// 	artist: "Tomas Duchek",
		// 	number: "215",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	variations: [
		// 		"378586ba-6a2f-5f77-a479-1506055acc6a",
		// 		"436d9040-71f4-5d0e-9dea-f1e59f8b4b22",
		// 	],
		// 	printings: ["LTR", "PLTR"],
		// 	legalities: [
		// 		{
		// 			format: "Alchemy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "0c710a11-2ebc-5af8-a3ee-c14f9a2fe853",
		// },
		// {
		// 	name: "Skyknight Vanguard",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Knight",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Knight"],
		// 	rarity: "Uncommon",
		// 	set: "M20",
		// 	setName: "Core Set 2020",
		// 	text: "Flying\nWhenever Skyknight Vanguard attacks, create a 1/1 white Soldier creature token that's tapped and attacking.",
		// 	flavor: '"Jump! NOW!"',
		// 	artist: "Bayard Wu",
		// 	number: "218",
		// 	power: "1",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "466972",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466972&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2019-07-12",
		// 			text: "You choose which player or planeswalker the token is attacking. It doesn’t have to be attacking the same player or planeswalker that Skyknight Vanguard is attacking.",
		// 		},
		// 		{
		// 			date: "2019-07-12",
		// 			text: "Although the token is an attacking creature, it was never declared as an attacking creature. This means that abilities that trigger whenever a creature attacks won’t trigger when the token enters the battlefield attacking.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Himmelsritter-Vorhut",
		// 			text: "Fliegend\nImmer wenn die Himmelsritter-Vorhut angreift, erzeuge einen getappten und angreifenden 1/1 weißen Soldat-Kreaturenspielstein.",
		// 			type: "Kreatur — Mensch, Ritter",
		// 			flavor: '„Springt! JETZT!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467252&type=card",
		// 			language: "German",
		// 			multiverseid: 467252,
		// 		},
		// 		{
		// 			name: "Vanguardia de caballeros celestes",
		// 			text: "Vuela.\nSiempre que la Vanguardia de caballeros celestes ataque, crea una ficha de criatura Soldado blanca 1/1 que está girada y atacando.",
		// 			type: "Criatura — Caballero humano",
		// 			flavor: '"¡Salten! ¡AHORA!".',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467532&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 467532,
		// 		},
		// 		{
		// 			name: "Avant-garde des chevaliers célestes",
		// 			text: "Vol\nÀ chaque fois que l'Avant-garde des chevaliers célestes attaque, créez un jeton de créature 1/1 blanche Soldat, engagé et attaquant.",
		// 			type: "Créature : humain et chevalier",
		// 			flavor: "« Sautez ! MAINTENANT ! »",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467812&type=card",
		// 			language: "French",
		// 			multiverseid: 467812,
		// 		},
		// 		{
		// 			name: "Avanguardia dei Cavalieri dei Cieli",
		// 			text: "Volare\nOgniqualvolta l'Avanguardia dei Cavalieri dei Cieli attacca, crea una pedina creatura Soldato 1/1 bianca TAPpata e attaccante.",
		// 			type: "Creatura — Cavaliere Umano",
		// 			flavor: '"Saltate! ORA!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=468092&type=card",
		// 			language: "Italian",
		// 			multiverseid: 468092,
		// 		},
		// 		{
		// 			name: "空騎士の先兵",
		// 			text: "飛行\n空騎士の先兵が攻撃するたび、白の１/１の兵士・クリーチャー・トークンを１体、タップ状態で攻撃している状態で生成する。",
		// 			type: "クリーチャー — 人間・騎士",
		// 			flavor: "「跳べ！今だ！」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=468372&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 468372,
		// 		},
		// 		{
		// 			name: "창공기사 선봉대",
		// 			text: "비행\n창공기사 선봉대가 공격할 때마다, 탭되어 공격 중인 1/1 백색 병사 생물 토큰 한 개를 만든다.",
		// 			type: "생물 — 인간 기사",
		// 			flavor: '"뛰어! 지금!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=468652&type=card",
		// 			language: "Korean",
		// 			multiverseid: 468652,
		// 		},
		// 		{
		// 			name: "Vanguarda de Cavaleiros Celestes",
		// 			text: "Voar\nToda vez que Vanguarda de Cavaleiros Celestes atacar, crie uma ficha de criatura branca 1/1 do tipo Soldado virada e atacando.",
		// 			type: "Criatura — Humano Cavaleiro",
		// 			flavor: '"Saltar! AGORA!"',
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=468932&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 468932,
		// 		},
		// 		{
		// 			name: "Авангард Небесных Рыцарей",
		// 			text: "Полет\nКаждый раз, когда Авангард Небесных Рыцарей атакует, создайте одну фишку существа 1/1 белый Солдат повернутой и атакующей.",
		// 			type: "Существо — Человек Рыцарь",
		// 			flavor: "«Прыгайте! ЖИВО!»",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469212&type=card",
		// 			language: "Russian",
		// 			multiverseid: 469212,
		// 		},
		// 		{
		// 			name: "空骑士先锋",
		// 			text: "飞行\n每当空骑士先锋攻击时，派出一个1/1白色战士衍生生物，其为横置且正进行攻击。",
		// 			type: "生物 ～人类／骑士",
		// 			flavor: "「快跳！现在就跳！」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469492&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 469492,
		// 		},
		// 		{
		// 			name: "空騎士先鋒",
		// 			text: "飛行\n每當空騎士先鋒攻擊時，派出一個1/1白色戰士衍生生物，其為橫置且正進行攻擊。",
		// 			type: "生物 ～人類／騎士",
		// 			flavor: "「快跳！現在就跳！」",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469772&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 469772,
		// 		},
		// 	],
		// 	printings: ["M20"],
		// 	originalText:
		// 		"Flying\nWhenever Skyknight Vanguard attacks, create a 1/1 white Soldier creature token that's tapped and attacking.",
		// 	originalType: "Creature — Human Knight",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "22987757-b64d-52d9-9c6e-b989ba4c2bdb",
		// },
		// {
		// 	name: "Alpine Houndmaster",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Creature — Human Warrior",
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Warrior"],
		// 	rarity: "Uncommon",
		// 	set: "M21",
		// 	setName: "Core Set 2021",
		// 	text: "When Alpine Houndmaster enters the battlefield, you may search your library for a card named Alpine Watchdog and/or a card named Igneous Cur, reveal them, put them into your hand, then shuffle.\nWhenever Alpine Houndmaster attacks, it gets +X/+0 until end of turn, where X is the number of other attacking creatures.",
		// 	artist: "Mark Behm",
		// 	number: "215",
		// 	power: "2",
		// 	toughness: "2",
		// 	layout: "normal",
		// 	multiverseid: "485538",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=485538&type=card",
		// 	rulings: [
		// 		{
		// 			date: "2020-06-23",
		// 			text: "The value of X is determined only as Alpine Houndmaster's last ability resolves. Once that happens, the value of X won't change later in the turn even if the number of attacking creatures changes.",
		// 		},
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Alpiner Hundeführer",
		// 			text: "Wenn der Alpine Hundeführer ins Spiel kommt, kannst du deine Bibliothek nach einer Karte namens Alpiner Wachhund und/oder einer Karte namens Feuertöle durchsuchen, sie offen vorzeigen, auf deine Hand nehmen und dann deine Bibliothek mischen.\nImmer wenn der Alpine Hundeführer angreift, erhält er bis zum Ende des Zuges +X/+0, wobei X gleich der Anzahl der anderen angreifenden Kreaturen ist.",
		// 			type: "Kreatur — Mensch, Krieger",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=485797&type=card",
		// 			language: "German",
		// 			multiverseid: 485797,
		// 		},
		// 		{
		// 			name: "Especialista en perros alpino",
		// 			text: "Cuando el Especialista en perros alpino entre al campo de batalla, puedes buscar en tu biblioteca una carta llamada Perro guardián alpino y/o una carta llamada Perro callejero ígneo, revelarlas, ponerlas en tu mano y luego barajar tu biblioteca.\nSiempre que el Especialista en perros alpino ataque, obtiene +X/+0 hasta el final del turno, donde X es la cantidad de otras criaturas atacantes.",
		// 			type: "Criatura — Guerrero humano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=486056&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 486056,
		// 		},
		// 		{
		// 			name: "Maître-chien alpin",
		// 			text: "Quand le Maître-chien alpin arrive sur le champ de bataille, vous pouvez chercher dans votre bibliothèque une carte appelée Chien de garde alpin et/ou une carte appelée Cabot ignescent, les révéler, les mettre dans votre main, puis mélanger votre bibliothèque.\nÀ chaque fois que le Maître-chien alpin attaque, il gagne +X/+0 jusqu'à la fin du tour, X étant le nombre d'autres créatures attaquantes.",
		// 			type: "Créature : humain et guerrier",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=486315&type=card",
		// 			language: "French",
		// 			multiverseid: 486315,
		// 		},
		// 		{
		// 			name: "Signore dei Segugi Alpestre",
		// 			text: "Quando il Signore dei Segugi Alpestre entra nel campo di battaglia, puoi passare in rassegna il tuo grimorio per una carta chiamata Cane da Guardia Alpestre e/o una carta chiamata Randagio Igneo, rivelarle, aggiungerle alla tua mano e poi rimescolare il tuo grimorio.\nOgniqualvolta il Signore dei Segugi Alpestre attacca, prende +X/+0 fino alla fine del turno, dove X è il numero di altre creature attaccanti.",
		// 			type: "Creatura — Guerriero Umano",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=486574&type=card",
		// 			language: "Italian",
		// 			multiverseid: 486574,
		// 		},
		// 		{
		// 			name: "高山の犬師",
		// 			text: "高山の犬師が戦場に出たとき、あなたは「あなたのライブラリーから、『高山の番犬』という名前のカード１枚か、『炎血の野犬』という名前のカード１枚か、その両方を探し、公開し、あなたの手札に加え、その後あなたのライブラリーを切り直す。」を選んでもよい。\n高山の犬師が攻撃するたび、ターン終了時まで、これは＋Ｘ/＋０の修整を受ける。Ｘは他の攻撃クリーチャーの総数に等しい。",
		// 			type: "クリーチャー — 人間・戦士",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=486833&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 486833,
		// 		},
		// 		{
		// 			name: "고산지대 사냥개조련사",
		// 			text: "고산지대 사냥개조련사가 전장에 들어올 때, 당신은 당신의 서고에서 이름이 고산지대 파수견 및/또는 불타오르는 광견인 카드를 찾아, 그 카드들을 공개하고, 당신의 손에 넣을 수 있다. 그렇게 한다면, 당신의 서고를 섞는다.\n고산지대 사냥개조련사가 공격할 때마다, 고산지대 사냥개조련사는 턴종료까지 +X/+0을 받는다. X는 다른 공격 중인 생물들의 수이다.",
		// 			type: "생물 — 인간 전사",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=487092&type=card",
		// 			language: "Korean",
		// 			multiverseid: 487092,
		// 		},
		// 		{
		// 			name: "Mestre dos Sabujos Alpino",
		// 			text: "Quando Mestre dos Sabujos Alpino entra no campo de batalha, você pode procurar em seu grimório um card com o nome Cão de Guarda Alpino e/ou um card com o nome Cão Ígneo, revelá-los, colocá-los em sua mão e depois embaralhar seu grimório.\nToda vez que Mestre dos Sabujos Alpino ataca, ele recebe +X/+0 até o final do turno, sendo X o número de outras criaturas atacantes.",
		// 			type: "Criatura — Humano Guerreiro",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=487351&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 487351,
		// 		},
		// 		{
		// 			name: "Горный Псарь",
		// 			text: "Когда Горный Псарь выходит на поле битвы, вы можете найти в вашей библиотеке карту с именем Горный Сторожевой Пес и/или карту с именем Огневая Псина, показать их, положить их в вашу руку, затем перетасовать вашу библиотеку.\nКаждый раз, когда Горный Псарь атакует, он получает +X/+0 до конца хода, где Х — количество других атакующих существ.",
		// 			type: "Существо — Человек Воин",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=487610&type=card",
		// 			language: "Russian",
		// 			multiverseid: 487610,
		// 		},
		// 		{
		// 			name: "山地驯犬师",
		// 			text: "当山地驯犬师进战场时，你可以从你的牌库中搜寻一张名称为山地看护犬的牌和／或一张名称为火热杂狗的牌，展示它们，将它们置于你手上，然后将你的牌库洗牌。\n每当山地驯犬师攻击时，它得+X/+0直到回合结束，X为其他进行攻击的生物数量。",
		// 			type: "生物 ～人类／战士",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=487869&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 487869,
		// 		},
		// 		{
		// 			name: "山地馴犬師",
		// 			text: "當山地馴犬師進戰場時，你可以從你的牌庫中搜尋一張名稱為山地看護犬的牌和／或一張名稱為火熱雜狗的牌，展示它們，將它們置於你手上，然後將你的牌庫洗牌。\n每當山地馴犬師攻擊時，它得+X/+0直到回合結束，X為其他進行攻擊的生物數量。",
		// 			type: "生物 ～人類／戰士",
		// 			flavor: null,
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=488128&type=card",
		// 			language: "Chinese Traditional",
		// 			multiverseid: 488128,
		// 		},
		// 	],
		// 	printings: ["M21"],
		// 	originalText:
		// 		"When Alpine Houndmaster enters the battlefield, you may search your library for a card named Alpine Watchdog and/or a card named Igneous Cur, reveal them, put them into your hand, then shuffle your library.\nWhenever Alpine Houndmaster attacks, it gets +X/+0 until end of turn, where X is the number of other attacking creatures.",
		// 	originalType: "Creature — Human Warrior",
		// 	legalities: [
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Paupercommander",
		// 			legality: "Restricted",
		// 		},
		// 		{
		// 			format: "Penny",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "fdfa8f7c-1476-59d7-b1cf-3a576f641574",
		// },
		// {
		// 	name: "Pia Nalaar, Consul of Revival",
		// 	manaCost: "{R}{W}",
		// 	cmc: 2,
		// 	colors: ["R", "W"],
		// 	colorIdentity: ["R", "W"],
		// 	type: "Legendary Creature — Human Artificer",
		// 	supertypes: ["Legendary"],
		// 	types: ["Creature"],
		// 	subtypes: ["Human", "Artificer"],
		// 	rarity: "Rare",
		// 	set: "MAT",
		// 	setName: "March of the Machine: The Aftermath",
		// 	text: "Thopters you control have haste.\nWhenever you play a land from exile or cast a spell from exile, create a 1/1 colorless Thopter artifact creature token with flying.",
		// 	flavor: "Renegade turned revolutionary turned rebuilder.",
		// 	artist: "Marta Nael",
		// 	number: "42",
		// 	power: "2",
		// 	toughness: "3",
		// 	layout: "normal",
		// 	multiverseid: "615435",
		// 	imageUrl:
		// 		"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615435&type=card",
		// 	variations: [
		// 		"79f2367f-1cab-59a6-8f38-fc08020ef20d",
		// 		"bb32fd21-aae9-5c4a-b37d-0ca53b909590",
		// 		"3cdb74a2-9fbc-5a4c-8d15-debe38b0ee8f",
		// 		"439ab7f9-de2d-5d3d-b143-4df344d21c51",
		// 	],
		// 	foreignNames: [
		// 		{
		// 			name: "Pia Nalaar, Konsulin des Aufschwungs",
		// 			text: "Thopter, die du kontrollierst, haben Eile.\nImmer wenn du ein Land aus dem Exil spielst oder einen Zauberspruch aus dem Exil wirkst, erzeuge einen 1/1 farblosen Thopter-Artefaktkreaturenspielstein mit Flugfähigkeit.",
		// 			type: "Legendäre Kreatur — Mensch, Handwerker",
		// 			flavor: "Einst Renegatin, dann Revolutionärin, dann Wiederaufbauerin.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615485&type=card",
		// 			language: "German",
		// 			multiverseid: 615485,
		// 		},
		// 		{
		// 			name: "Pia Nalaar, cónsul del resurgimiento",
		// 			text: "Los Tópteros que controlas tienen la habilidad de prisa.\nSiempre que juegues una tierra desde el exilio o lances un hechizo desde el exilio, crea una ficha de criatura artefacto Tóptero incolora 1/1 con la habilidad de volar.",
		// 			type: "Criatura legendaria — Artífice humano",
		// 			flavor: "La renegada pasó a ser revolucionaria y, después, reconstructora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615535&type=card",
		// 			language: "Spanish",
		// 			multiverseid: 615535,
		// 		},
		// 		{
		// 			name: "Pia Nalaàr, consule du renouveau",
		// 			text: "Les mécanoptères que vous contrôlez ont la célérité.\nÀ chaque fois que vous jouez un terrain depuis l'exil ou que vous lancez un sort depuis l'exil, créez un jeton de créature-artefact 1/1 incolore Mécanoptère avec le vol.",
		// 			type: "Créature légendaire : humain et artificier",
		// 			flavor: "Renégate devenue révolutionnaire, devenue reconstructrice.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615585&type=card",
		// 			language: "French",
		// 			multiverseid: 615585,
		// 		},
		// 		{
		// 			name: "Pia Nalaar, Console della Rinascita",
		// 			text: "I Totteri che controlli hanno rapidità.\nOgniqualvolta giochi una terra dall'esilio o lanci una magia dall'esilio, crea una pedina creatura artefatto Tottero 1/1 incolore con volare.",
		// 			type: "Creatura Leggendaria — Artefice Umano",
		// 			flavor: "Una rinnegata divenuta rivoluzionaria divenuta ricostruttrice.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615635&type=card",
		// 			language: "Italian",
		// 			multiverseid: 615635,
		// 		},
		// 		{
		// 			name: "復興の領事、ピア・ナラー",
		// 			text: "あなたがコントロールしているすべての飛行機械は速攻を持つ。\nあなたが追放領域から土地をプレイするか追放領域から呪文を唱えるたび、飛行を持つ無色の１/１の飛行機械・アーティファクト・クリーチャー・トークン１体を生成する。",
		// 			type: "伝説のクリーチャー — 人間・工匠",
		// 			flavor: "改革派は革命家となり、そして改修家になった。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615685&type=card",
		// 			language: "Japanese",
		// 			multiverseid: 615685,
		// 		},
		// 		{
		// 			name: "Pia Nalaar, Consulesa da Revitalização",
		// 			text: "Os Tópteros que você controla têm ímpeto.\nToda vez que você jogar um terreno do exílio ou conjurar uma mágica do exílio, crie uma ficha de criatura artefato Tóptero incolor 1/1 com voar.",
		// 			type: "Criatura Lendária — Humano Artesão",
		// 			flavor: "Uma renegada que virou revolucionária, que virou reconstrutora.",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615735&type=card",
		// 			language: "Portuguese (Brazil)",
		// 			multiverseid: 615735,
		// 		},
		// 		{
		// 			name: "复兴执政琵雅纳拉",
		// 			text: "由你操控的振翼机具有敏捷异能。\n每当你从放逐区使用地或从放逐区施放咒语时，派出一个1/1无色，具飞行异能的振翼机衍生神器生物。",
		// 			type: "传奇生物 ～人类／神器师",
		// 			flavor: "先是乱匠，再成革命家，现为重建师。",
		// 			imageUrl:
		// 				"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=615785&type=card",
		// 			language: "Chinese Simplified",
		// 			multiverseid: 615785,
		// 		},
		// 	],
		// 	printings: ["MAT"],
		// 	originalText:
		// 		"Thopters you control have haste.\nWhenever you play a land from exile or cast a spell from exile, create a 1/1 colorless Thopter artifact creature token with flying.",
		// 	originalType: "Legendary Creature — Human Artificer",
		// 	legalities: [
		// 		{
		// 			format: "Alchemy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Brawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Commander",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Duel",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Explorer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Gladiator",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historic",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Historicbrawl",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Legacy",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Modern",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Oathbreaker",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Pioneer",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Standard",
		// 			legality: "Legal",
		// 		},
		// 		{
		// 			format: "Vintage",
		// 			legality: "Legal",
		// 		},
		// 	],
		// 	id: "72029802-35c9-572e-9b64-44716f7f4062",
		// },