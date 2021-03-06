$(document).ready(function () {
	//  ========= Variables =========
	var body = $('body'),
		html = body.width(),
		timer; // for disable scroll
	// ========= =========== =========== ===========



	var activeSelect = $('.table-control').val();


	$('g[data-' + activeSelect + ']').addClass('active-' + activeSelect + '');


	var tableOffset = $('.table-container').offset().top;


	function scrollToTable() {

		if (html > 1050) { return; }

		$('html, body').animate({ scrollTop: tableOffset }, 600);
	}


	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 10 && !$('.scroll-indicator').hasClass('hidden')) {
			$('.scroll-indicator').addClass('hidden');
		}
		else if (scrolled < 10 && $('.scroll-indicator').hasClass('hidden')) {
			$('.scroll-indicator').removeClass('hidden');
		}
	});


	$('.lus-toggle-open-js').on('click', function (e) {
		e.preventDefault();

		$('.lus-header--fix').addClass('active');
	});

	$('.lus-toggle-close-js').on('click', function (e) {
		e.preventDefault();

		$('.lus-header--fix').removeClass('active');
	});


	$('.table-control').select2();


	AOS.init({
		offset: 100,
		anchorPlacement: 'top-bottom',
		duration: 500,
		mirror: false,
		once: true
	});


	if ($('.bg-fade').length > 0) {
		var bgFade = $('.bg-fade');

		$('.table-container').scroll(function () {
			var scroll = $(this).scrollLeft();

			$('.bg-fade').css({
				'transform': 'translateX(' + scroll + 'px)'
			});

			if (scroll > 0 && !bgFade.hasClass('hidden')) {
				bgFade.addClass('hidden');
			}
			else if (scroll === 0 && bgFade.hasClass('hidden')) {
				bgFade.removeClass('hidden');
			}
		});
	}


	$('.invert-trigger').on('click', function (e) {
		e.preventDefault();

		var table = $(this).closest('table');
		var rows = table.find('tr:not(.noclick)');

		table.find('tr:first').after(rows.get().reverse());
	});

	$('.expand-toggle').on('click', function (e) {
		e.preventDefault();

		if ($(this).hasClass('expanded')) {
			$(this).removeClass('expanded');
			$(this).find('span').empty().append('View all');
			$('.table-container').removeClass('expand');
		}
		else {
			$(this).addClass('expanded');
			$(this).find('span').empty().append('View less');
			$('.table-container').addClass('expand');
		}
	});

	$('.jump-to').click(function (e) {
		e.preventDefault();

		var target = $(this).attr('data-target');
		target = $('.' + target);
		var scroll = target.offset().top;

		$('html, body').animate({
			scrollTop: scroll
		}, 1000);
	});

	$('.info-trigger').on('click', function (e) {
		e.preventDefault();

		$('body').addClass('overlay-active');

	});


	$('.overlay-close-trigger').on('click', function (e) {
		e.preventDefault();

		$('body').removeClass('overlay-active');

	});


	var cities = {

		Berlin: {
			finalRanking: 8,
			sexShops: 32,
			swingerClubs: 8,
			gayPrides: 6,
			lbgtEvents: 40,
			lgbtBars: 45,
			brothels: 222,
			sexWorkers: 418,
			sexWorkOrg: 6,
			sexHealth: 11,
			hiv: 24,
			population: '3,600,000',
			en: {
				title: 'Berlin',
				text: "If you ask yourself the question of the most sex -positive city in Germany, you will surely think of Berlin. Because the German capital has been internationally known for its lavish festivals and social freedoms since the 1920s. At the turn of the millennium, Berlin was the venue for the Loveparade, which was considered the biggest party in the world with over a million participants. Numerous world -famous technoclubs are there, especially the Berghain or Watergate. In Berlin there has always been a huge homosexual scene and at least 45 LGBTIQ* localities. There are at least 32 sex shops in the city and there are 40 annual LGBTQI events in Berlin. Of course, this incomparable offer regularly attracts a large number of international guests. In addition, a very differentiated BDSM and fetish scene in Berlin is present. Nobody in Berlin has to hide if he or she wants to open his or her sexuality openly, which is clearly part of the city's special flair. Social openness is particularly pronounced there, which is also expressed in the fact that the world's largest erotic fair takes place every year with the 'Venus'. In addition, prostitution is completely legal in the city and widespread, sexual minorities are protected by anti-discrimination laws. All points counted together and measured by the residents, Berlin ends up in 8th place in our ranking."

			},
			de: {
				title: 'Berlin',
				text: "Wer sich die Frage nach der sexpositivsten Stadt Deutschlands stellt, der wird dabei sicherlich auch einmal an Berlin denken. Denn die deutsche Hauptstadt ist bereits seit den 1920er Jahren für seine rauschenden Feste und gesellschaftliche Freiheiten international bekannt. Berlin war um die Jahrtausendwende herum Veranstaltungsort der Loveparade, die mit über einer Million TeilnehmerInnen als größte Party der Welt galt. Zahlreiche weltberühmte Technoclubs befinden sich dort, allen voran etwa das Berghain oder das Watergate. In Berlin gibt es dazu seit jeher eine riesige Homosexuellenszene und mindestens 45 LGBTIQ* Lokalitäten. Es gibt mindestens 32 Sex-Shops in der Stadt und es finden 40 jährliche LGBTQI-Events in Berlin statt. Natürlich lockt dieses unvergleichliche Angebot regelmäßig eine hohe Zahl internationaler Gäste an. Zusätzlich ist eine sehr ausdifferenzierte BDSM- und Fetischszene in Berlin präsent. Verstecken muss sich in Berlin niemand, wenn er oder sie seine oder ihre Sexualität offen ausleben möchte, was eindeutig zum besonderen Flair der Stadt gehört. Die gesellschaftliche Offenheit ist dort ganz besonders ausgeprägt, was sich auch darin ausdrückt, dass in Berlin jedes Jahr mit der 'Venus' die wohl größte Erotik-Messe der Welt stattfindet. Außerdem ist Prostitution völlig legal in der Stadt und weit verbreitet, sexuelle Minderheiten werden von Anti-Diskriminierungsgesetzen geschützt. Alle Punkte zusammengezählt und gemessen an den Einwohnern landet Berlin in unserem Ranking auf dem 8. Platz."
			}



		},

		Hamburg: {
			finalRanking: 22,
			sexShops: 16,
			swingerClubs: 8,
			gayPrides: 6,
			lbgtEvents: 16,
			lgbtBars: 17,
			brothels: 71,
			sexWorkers: 226,
			sexWorkOrg: 7,
			sexHealth: 8,
			hiv: 6,
			population: '1,852,000',
			en: {
				title: 'Hamburg',
				text: 'Hamburg is the second largest city in Germany and full of historical and cultural places that are worth a visit. In addition to the World Heritage Site Speicherstadt, the brand new Elbphilharmonie and the Hamburger Michel, a detour to the Reeperbahn in the St.Pauli district is particularly worthwhile. There, strip club is lined up on a table dance bar, burlesque theater on old harbor pub, exclusive noble bordell and cheap hourly hotel. It is not for nothing that the Reeperbahn bears the leg frame of the "sinful mile in Germany" and is an expression of the sex-positive lifestyle of the Hamburgers. No wonder that Hamburg also makes some good points in our ranking - especially with regard to the number of local sex shops and erotic establishments.'
			},
			de: {
				title: 'Hamburg',
				text: 'Hamburg ist die zweitgrößte Stadt Deutschlands und voller historischer und kultureller Orte, die einen Besuch wert sind. Neben dem Weltkulturerbe Speicherstadt, der brandneuen Elbphilharmonie sowie dem Hamburger Michel, lohnt vor allem ein Abstecher zur Reeperbahn im Stadtteil St.Pauli. Dort reihen sich Strip-Club an Tabledance-Bar, Burlesque-Theater an alte Hafenkneipe, exklusives Edelbordell and günstiges Stundenhotel. Nicht umsonst trägt die Reeperbahn den Beinahmen der „sündigsten Meile Deutschlands“ und ist Ausdruck des sex-positiven Lebensgefühl der Hamburger. Kein Wunder, dass Hamburg auch in unserem Ranking einige gute Punkte macht – besonders im Hinblick auf die Anzahl der örtlichen Sexshops und erotischen Etablissements.'
			}
		},

		Munich: {
			finalRanking: 11,
			sexShops: 13,
			swingerClubs: 3,
			gayPrides: 7,
			lbgtEvents: 12,
			lgbtBars: 14,
			brothels: 86,
			sexWorkers: 388,
			sexWorkOrg: 2,
			sexHealth: 8,
			hiv: 8,
			population: '1,488,000',
			en: {
				title: 'Munich',
				text: 'If you think of a city like Munich, you will probably first think about the beautiful buildings and squares that you can admire on site. Whether Viktualienmarkt, Frauenkirche, Nymphenburg Castle or the Allianz Arena - the city is fully with architectural masterpieces. The 375 hectare English garden, which is one of the largest parks in the world, invites its visitors to linger. The Oktoberfest, which is at least as famous as the Carnival in Rio, should not be missing in a text about the Bavarian capital. But also beyond pretzels, beer gardens and the like can be experienced in Munich - even in sexual terms. Our ranking shows that the Munich and Munichers love to try sexually and reinvent themselves. With 13 sex shops and 3 swinger clubs you also have many options.'
			},
			de: {
				title: 'München',
				text: 'Wer an eine Stadt wie München denkt, der denkt wahrscheinlich zunächst an die wunderschönen Bauwerke und Plätze, die man vor Ort bewundern kann. Ob Viktualienmarkt, Frauenkirche, das Schloss Nymphenburg oder die Allianz Arena – die Stadt ist voll mit architektonischen Meisterleistungen. Auch der 375 Hektar große Englische Garten, der zu den größten Parkanlagen der Welt zählt, lädt seine Besucher zum Verweilen ein. Ebenfalls nicht fehlen in einem Text über die bayerische Landeshauptstadt darf das Oktoberfest, das mindestens so berühmt ist wie der Karneval in Rio. Doch auch jenseits von Brezn, Biergärten und Co. lässt sich in München vieles erleben – auch in sexueller Hinsicht. Unser Ranking zeigt: Die Münchener und Münchenerinnen lieben es, sich sexuell auszuprobieren und neu zu erfinden. Mit 13 Sexshops und 3 Swingerclubs haben sie auch viele Möglichkeiten dazu.'
			}
		},

		Cologne: {
			finalRanking: 1,
			sexShops: 19,
			swingerClubs: 6,
			gayPrides: 9,
			lbgtEvents: 14,
			lgbtBars: 25,
			brothels: 43,
			sexWorkers: 587,
			sexWorkOrg: 5,
			sexHealth: 4,
			hiv: 7,
			population: '1,083,000',
			en: {
				title: 'Cologne',
				text: "Cologne is world famous for its carnival and its cathedral, the highest church building in the world. Anyone who would derive a contradiction from this has not yet understood the Cologne Way-of-Life. But that doesn't matter, because not everyone immediately understands the local language of Kölsch, which does not always have to be due to the locals. Cologne is definitely one of the most liberal cities in Germany, maybe even the world and our ranking seems to underline this. In hardly any city in our ranking there are more annual LGBTQI events and localities than in Cologne. Anyway, there is the impression in Cologne that it is actually celebrated all year round. Anyone who has fallen for the charm of the city will find it difficult to break away from it. Cologne sometimes leads the role of a hidden champion, such as behind Berlin and Hamburg, in public perception. But international stars and artists also increasingly discover the city and lay their center of life there. The city on the Rhine is a real model for liberality and openness, also and especially in the sexual sense. The Cologne team are very proud of their free life culture and are happy about like -minded visitors who share their values. Instead of insisting on equalization, one knows traditionally in 'Kölle': every Jeck is different."
			},
			de: {
				title: 'Köln',
				text: "Köln ist weltberühmt für seinen Karneval und seinen Dom, das höchste Kirchengebäude der Welt. Wer daraus einen Widerspruch ableiten würde, der hat den Kölner Way-of-Life noch nicht verstanden. Aber das macht nichts, denn nicht jeder versteht auf Anhieb die lokale Sprache Kölsch, was nicht immer am gleichnamigen Bier der Einheimischen liegen muss. Köln ist definitiv eine der liberalsten Städte Deutschlands, vielleicht sogar der Welt und unser Ranking scheint dies zu unterstreichen. In kaum einer Stadt in unserem Ranking gibt es mehr jährliche LGBTQI-Events und Lokalitäten als in Köln. Sowieso hat man in Köln den Eindruck, dass eigentlich über das ganze Jahr hinweg gefeiert wird. Wer einmal dem Charme der Stadt verfallen ist, der wird sich nur schwer wieder davon lösen können. Köln führt in der öffentlichen Wahrnehmung manchmal ein wenig die Rolle eines Hidden Champions, etwa hinter Berlin und Hamburg. Aber auch internationale Stars und Künstler entdecken vermehrt die Stadt für sich und verlegen ihren Lebensmittelpunkt dort hin. Die Stadt am Rhein ist ein wahres Vorbild an Liberalität und Offenheit, auch und besonders im sexuellen Sinne. Die Kölner sind sehr stolz auf ihre freiheitliche Lebenskultur und freuen sich über gleichgesinnte BesucherInnen, die ihre Werte teilen. Anstatt aber auf Gleichmacherei zu bestehen, weiß man in 'Kölle' traditionell: Jeder Jeck is anders."
			}
		},

		Frankfurt: {
			finalRanking: 9,
			sexShops: 6,
			swingerClubs: 4,
			gayPrides: 5,
			lbgtEvents: 5,
			lgbtBars: 13,
			brothels: 37,
			sexWorkers: 362,
			sexWorkOrg: 1,
			sexHealth: 2,
			hiv: 4,
			population: '764,000',
			en: {
				title: 'Frankfurt am Main',
				text: "Frankfurt am Main is more than just a banking and financial metropolis in Germany. Whether new old town, Kaiserdom, Römerberg, Paulskirche or museum bank, Frankfurt offers its visitors a lot of historical insights and cultural facets. The annual Frankfurt Book Fair also magically attracts hundreds of thousands of visitors from all over the world. No wonder that a small sex -positive scene has long developed in the big city on the Main, which gives the city a good 9th place in our ranking. The data show that Frankfurt convinces especially because of its 4 swinger clubs and its colorful LGBTIQ* scene life-there are 13 gay-lesbian locations on site. So if you are looking for sex -positive adventures, you will certainly find it in Frankfurt."
			},
			de: {
				title: 'Frankfurt am Main',
				text: "Frankfurt am Main ist mehr als nur Banken- und Finanzmetropole Deutschlands. Ob neue Altstadt, Kaiserdom, Römerberg, Paulskirche oder Museumsufer, Frankfurt bietet seinen Besuchern jede Menge historische Einblicke und kulturelle Facetten. Auch die jährlich stattfindende Frankfurter Buchmesse zieht Hunderttausende Besucher aus aller Welt magisch an. Kein Wunder, dass sich in der Großstadt am Main längst auch eine kleine sexpositive Szene entwickelt hat, die der Stadt einen guten 9.Platz in unserem Ranking beschert. Die Daten zeigen, Frankfurt überzeugt besonders aufgrund seiner 4 Swingerclubs und seines bunten LGBTIQ* Szenelebens – es gibt vor Ort 13 schwul-lesbische Lokalitäten. Wer also auf der Suche nach sexpositiven Abenteuer ist, wird in Frankfurt sicher fündig."
			}
		},

		Stuttgart: {
			finalRanking: 10,
			sexShops: 6,
			swingerClubs: 3,
			gayPrides: 4,
			lbgtEvents: 4,
			lgbtBars: 8,
			brothels: 56,
			sexWorkers: 296,
			sexWorkOrg: 2,
			sexHealth: 4,
			hiv: 2,
			population: '630,000',
			en: {
				title: 'Stuttgart',
				text: "Stuttgart is the capital of the state of Baden-Württemberg and known nationwide as a location of large car companies such as Porsche and Daimler. Art lovers also get their money's worth in the city. The municipal art museum with its large Otto dix collection captivates visitors from near and far. And as far as festivities are concerned, Stuttgart does not have to hide behind other major cities, because: what is his port birthday for Hamburg and his Oktoberfest is the can store Wasen, the second largest folk festival in the world. However, what many people do not know, even in terms of sex there is an extraordinary experience in Stuttgart. Our ranking shows: Whether sex shops, swinger clubs or brothels, the opportunities to enjoy sex-positive lifestyle on site are big."
			},
			de: {
				title: 'Stuttgart',
				text: "Stuttgart ist die Hauptstadt des Bundeslandes Baden-Württemberg und landesweit bekannt als Standort großer Autofirmen wie Porsche und Daimler. Auch Kunstliebhaber kommen in der Stadt voll auf ihre Kosten. Das städtische Kunstmuseum mit seiner großen Otto-Dix-Sammlung zieht Besucher von nah und fern in seinen Bann. Und was Festivitäten betrifft, muss sich Stuttgart keineswegs hinter anderen Großstädten verstecken, denn: Was dem Hamburger sein Hafengeburtstag ist und dem Münchener sein Oktoberfest, ist dem Stuttgarter die Canstatter Wasen, das zweitgrößte Volksfest der Welt. Was viele Menschen jedoch nicht wissen, auch in puncto Sex gibt es in Stuttgart außerordentlich viel zu erleben. Unser Ranking zeigt: Ob Sex Shops, Swingerclubs oder Bordelle, die Möglichkeiten vor Ort sex-positiven Lifestyle zu genießen, sind groß."
			}
		},

		Dusseldorf: {
			finalRanking: 26,
			sexShops: 4,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 5,
			lgbtBars: 6,
			brothels: 37,
			sexWorkers: 464,
			sexWorkOrg: 0,
			sexHealth: 4,
			hiv: 2,
			population: '620,000',
			en: {
				title: 'Düsseldorf',
				text: "Düsseldorf as the state capital of NRW knows not only to inspire with her inviting Rhine promenade. Because it is considered an elegant city of the world nationwide, but also internationally. The eternal rivalry with the cheerful Cologne does not detract from the fact that one of the country's highest quality of life can be found in Düsseldorf. There are many reasons for this, because Düsseldorf is not only the seat of numerous companies from the fashion and beauty area. Nobody needs to hide there when it comes to sex and eroticism, Düsseldorf is a stronghold of high-class escorts in Germany. There is also around 37 brothels in the urban area, which can be seen as an expression of high demand. Düsseldorf knows how to please, visitors know why after a few days."
			},
			de: {
				title: 'Düsseldorf',
				text: "Düsseldorf als Landeshauptstadt von NRW weiß nicht nur mit ihrer einladenden Rheinpromenade zu begeistern. Denn sie gilt bundesweit, aber auch international, als eine elegante Stadt von Welt. Die ewige Rivalität mit dem lebensfrohen Köln tut der Tatsache keinen Abbruch, dass in Düsseldorf eine der höchsten Lebensqualitäten des Landes vorzufinden ist. Dafür gibt es viele Gründe, denn Düsseldorf ist nicht nur der Sitz zahlreicher Unternehmen aus dem Mode- und Beauty-Bereich. Auch in Sachen Sex und Erotik braucht sich niemand dort zu verstecken, Düsseldorf ist eine Hochburg der High-Class Escorts ins Deutschland. Außerdem gibt es um die 37 Bordelle im Stadtgebiet, was als ein Ausdruck hoher Nachfrage gewertet werden kann. Düsseldorf weiß zu gefallen, Besucher wissen bereits nach wenigen Tagen warum."
			}
		},

		Leipzig: {
			finalRanking: 30,
			sexShops: 3,
			swingerClubs: 2,
			gayPrides: 2,
			lbgtEvents: 3,
			lgbtBars: 6,
			brothels: 28,
			sexWorkers: 217,
			sexWorkOrg: 1,
			sexHealth: 4,
			hiv: 1,
			population: '597,000',
			en: {
				title: 'Leipzig',
				text: "Leipzig, the pearl of the east, cannot actually be tackled high enough out of sympathy. But the competition is strong, so it is with the many great cities that exist in Germany. Leipzig is considered the German metropolis of the hearts - and rightly so. Because there have become extremely pleasant lifestyles on different levels that are second to none. Yes, the air blows in Leipzig and it is not without reason that the city is called the small Berlin. The sex positiveness may be described there as big, in Leipzig there are numerous people who are very openly opposed to erotic experiences. From swingers to sex workers to the BDSM scene, sex-positive people get their money's worth in Leipzig."
			},
			de: {
				title: 'Leipzig',
				text: "Leipzig, die Perle des Ostens, kann man aus Sympathie eigentlich gar nicht hoch genug ranken. Doch die Konkurrenz ist stark, so ist das bei den vielen tollen Städten, die es in Deutschland gibt. Leipzig gilt als die deutsche Metropole der Herzen - und das zu Recht. Denn dort haben sich auf unterschiedlichen Ebenen äußerst angenehme Lebensstile etabliert, die ihresgleichen suchen. Ja, in Leipzig weht die Luft der Freiheit und nicht ohne Grund wird die Stadt das kleine Berlin genannt. Die Sexpositivität darf dort gerne als groß beschrieben werden, in Leipzig gibt es zahlreiche Menschen, die erotischen Erlebnissen sehr offen gegenüber eingestellt sind. Von SwingerInnen über SexarbeiterInnen bis hin zur BDSM-Szene, in Leipzig kommen sexpositive Menschen auf ihre Kosten."
			}
		},

		Dortmund: {
			finalRanking: 33,
			sexShops: 4,
			swingerClubs: 5,
			gayPrides: 1,
			lbgtEvents: 2,
			lgbtBars: 2,
			brothels: 19,
			sexWorkers: 310,
			sexWorkOrg: 2,
			sexHealth: 6,
			hiv: 1,
			population: '587,000',
			en: {
				title: 'Dortmund',
				text: "Of course, many people, not only in Germany, immediately think of football at Dortmund. Of course there is much more to explore in the attractive city. There are several sex shops and swinger clubs and numerous brothels and appointment apartments are also registered in Dortmund. So it quickly becomes clear that sex positivity is not just an empty phrase in this city. Shyness and uptight are actually very rare in Dortmund. So people who have set sex does not need to look for long to meet like -minded people. If you are looking for a wonderfully livable place that not always all have the same on the list, you have found a really lovable city with Dortmund."
			},
			de: {
				title: 'Dortmund',
				text: "Klar, dass viele Menschen, nicht nur in Deutschland, bei Dortmund sofort an Fußball denken. Dabei gibt es selbstverständlich noch viel mehr zu erkunden in der attraktiven Stadt. Dort gibt es gleich mehrere Sexshops und Swingerclubs und auch zahlreiche Bordelle und Terminwohnungen sind in Dortmund gemeldet. Es wird also schnell klar, dass Sexpositivität nicht nur eine leere Floskel ist in dieser Stadt. Schüchternheit und Verklemmtheit ist in Dortmund tatsächlich nur sehr selten zu finden. Sexpositiv eingestellte Menschen brauchen also nicht lange zu suchen, um auf Gleichgesinnte zu treffen. Wer einen wunderbar lebenswerten Ort sucht, den nicht immer alle gleich auf der Liste haben, der hat mit Dortmund eine wirklich liebenswerte Stadt gefunden."
			}
		},

		Essen: {
			finalRanking: 35,
			sexShops: 2,
			swingerClubs: 4,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 4,
			brothels: 24,
			sexWorkers: 455,
			sexWorkOrg: 4,
			sexHealth: 4,
			hiv: 1,
			population: '582,000',
			en: {
				title: 'Essen',
				text: "Essen in the Ruhr area is cheaply between Bochum, Mülheim and Duisburg. No matter where you want to go, you never really have it. As an old city of Ruhr, there is a relaxed tone and brakes are clearly outnumbered. When looking at the city from a sex -positive perspective, it is noticeable that there are few institutions such as sex shops, gaybars or brothels. But it is estimated that around 450 sex workers in the city pursue their acquisition is one of the highest values ​​in Germany, at least Top10. Only the strong competition and weaknesses in other areas ensure that food is not ranked much higher here. In any case, it can be summarized that food is ideal for open -minded people as a place of residence or tourist destination."
			},
			de: {
				title: 'Essen',
				text: "Essen im Ruhrgebiet liegt günstig genau zwischen Bochum, Mülheim und Duisburg. Das heißt egal wohin man will, man hat es nie wirklich weit. Als alte Ruhrstadt herrscht dort ein lockerer Umgangston und Spaßbremsen sind deutlich in der Unterzahl. Bei einer Betrachtung der Stadt aus sexpositiver Perspektive fällt auf, dass es dort wenige Institutionen wie Sexshops, Gaybars oder Bordelle gibt. Aber es wird geschätzt, das rund 450 SexarbeiterInnen in der Stadt ihrem Erwerb nachgehen, das ist einer der höchsten Werte in Deutschland, zumindest Top10. Lediglich die starke Konkurrenz und Schwächen in anderen Bereichen sorgen dafür, dass Essen hier nicht viel höher gerankt ist. Man darf zusammengefasst aber auf jeden Fall festhalten, dass sich Essen als Wohnort oder touristisches Ziel für aufgeschlossene Menschen ganz hervorragend eignet."
			}
		},

		Bremen: {
			finalRanking: 15,
			sexShops: 5,
			swingerClubs: 2,
			gayPrides: 1,
			lbgtEvents: 3,
			lgbtBars: 3,
			brothels: 20,
			sexWorkers: 246,
			sexWorkOrg: 2,
			sexHealth: 6,
			hiv: 3,
			population: '566,000',
			en: {
				title: 'Bremen',
				text: "With its 566,000 inhabitants, Bremen is the eleventh largest city in Germany and the second largest city in the north. Located directly on the Weser, Bremen offers its visitors many excursion and sightseeing opportunities. Above all, of course, the Bremen city musicians. There is hardly anyone who has never heard of the world -famous bronze statue consisting of donkey, dog, cat and rooster. And Bremen is also a very versatile city in erotic terms. In addition to 5 sex shops and 2 swinger clubs, around 20 erotic establishments are also available to the population. Overall, this means a good 15th place in our ranking."
			},
			de: {
				title: 'Bremen',
				text: "Mit ihren 566.000 Einwohnern ist Bremen die elftgrößte Stadt Deutschlands und die zweitgrößte Stadt des Nordens. Direkt an der Weser gelegen, bietet Bremen seinen Besucherinnen und Besuchern viele Ausflugs- und Sightseeing-Möglichkeiten. Allen voran natürlich die Bremer Stadtmusikanten. Es gibt wohl kaum jemand, der noch nie von der weltberühmten Bronzestatue bestehend aus Esel, Hund, Katze und Hahn gehört hat. Und auch in erotischer Hinsicht ist Bremen eine sehr vielseitige Stadt. Neben 5 Sexshops und 2 Swingerclubs stehen der Bevölkerung außerdem rund 20 erotische Etablissements zur Verfügung. Insgesamt bedeutet das einen guten 15. Platz in unserem Ranking."
			}
		},

		Dresden: {
			finalRanking: 17,
			sexShops: 5,
			swingerClubs: 5,
			gayPrides: 3,
			lbgtEvents: 3,
			lgbtBars: 8,
			brothels: 31,
			sexWorkers: 114,
			sexWorkOrg: 1,
			sexHealth: 6,
			hiv: 1,
			population: '556,000',
			en: {
				title: 'Dresden',
				text: "For many people, it is the most beautiful city in Germany: Dresden. The Saxon capital is also referred to by many as 'Elbflorenz'. Impressive buildings of the Baroque such as the Dresden Frauenkirche, Zwinger or Semperoper are not far apart and form the beautiful center of the old town. After the city was almost completely destroyed in World War II, it was extensively restored in the following decades, restored and is now considered one of the most beautiful places in the country. This also affects the Dresden attitude to life, which is becoming increasingly revealing and more sexual: with 5 sex shops, 5 swinger clubs and 8 LGBTIQ*localities, the city offers a lot of sexual adventures."
			},
			de: {
				title: 'Dresden',
				text: "Für viele Menschen ist sie die schönste Stadt Deutschlands: Dresden. Die sächsische Landeshauptstadt wird von vielen auch als „Elbflorenz“ bezeichnet. Beeindruckende Bauwerke des Barocks wie die Dresdener Frauenkirche, Zwinger oder Semperoper liegen nur unweit voneinander entfernt und bilden das wunderschöne Zentrum der Altstadt. Nachdem die Stadt im 2. Weltkrieg fast komplett zerstört wurde, wurde sie in den Folgejahrzehnten aufwendig restauriert, wieder hergerichtet und gilt nun als eine der schönsten Orte des Landes. Das wirkt sich auch auf das Dresdener Lebensgefühl aus, das immer freizügiger und sexpositiver wird: Mit 5 Sexshops, 5 Swingerclubs und 8 LGBTIQ*-Lokalitäten bietet die Stadt jede Menge sexuelle Abenteuer."
			}
		},

		Hannover: {
			finalRanking: 13,
			sexShops: 3,
			swingerClubs: 5,
			gayPrides: 3,
			lbgtEvents: 1,
			lgbtBars: 4,
			brothels: 45,
			sexWorkers: 272,
			sexWorkOrg: 4,
			sexHealth: 4,
			hiv: 2,
			population: '534,000',
			en: {
				title: 'Hannover',
				text: "Hanover is the state capital of Lower Saxony and known for its many parking and green areas. In general, Hanover is a very life -friendly city. Neither too big nor too small, neither ultra hipp, nor old-fashioned and bourgeois, Hannover offers his more than 534,000 inhabitants many excursion and recreational opportunities. But sex -positive life is not neglected either. In our ranking, Hannover convinces due to his 5 swinger clubs and its LGBTIQ*-friendly localities. But even those looking for a quick, uncomplicated occasional sex will find what you are looking for on site: With 45 brothels and erotic establishments, the selection is extremely large. The topics of sexual health and security are also of particular importance: in Hanover there are 4 sex work organizations that work for the interests and matters of sex workers, as well as 4 organizations that provide information about sexual health."
			},
			de: {
				title: 'Hannover',
				text: "Hannover ist die Landeshauptstadt Niedersachsens und bekannt für ihre vielen Park- und Grünanlagen. Überhaupt ist Hannover eine sehr lebensfreundliche Stadt. Weder zu groß, noch zu klein, weder ultra-hipp, noch altbacken und spießig, bietet Hannover seinen mehr als 534.000 Einwohnern viele Ausflugs- und Naherholungsmöglichkeiten. Doch auch das sexpositive Leben kommt nicht zu kurz. In unserem Ranking überzeugt Hannover aufgrund seiner 5 Swingerclubs und seinen LGBTIQ*-freundlichen Lokalitäten. Doch auch wer auf der Suche ist nach schnellem, unkomplizierten Gelegenheitssex wird vor Ort fündig: bei 45 Bordellen und erotischen Etablissements ist die Auswahl extrem groß. Ebenfalls von besonderer Bedeutung sind die Themen der sexuellen Gesundheit und Sicherheit: In Hannover gibt es 4 Sexwork-Organisationen, welche sich für die Interessen und Angelegenheiten der Sexarbeiterinnen einsetzen, sowie 4 Organisationen, die über sexuelle Gesundheit aufklären."
			}
		},

		Nuremberg: {
			finalRanking: 24,
			sexShops: 3,
			swingerClubs: 3,
			gayPrides: 1,
			lbgtEvents: 2,
			lgbtBars: 5,
			brothels: 4,
			sexWorkers: 309,
			sexWorkOrg: 3,
			sexHealth: 5,
			hiv: 1,
			population: '515,000',
			en: {
				title: 'Nuremberg',
				text: "With its 515,000 inhabitants, Nuremberg is the second largest city of Bavaria and a popular destination for visitors from all over the world. Historical buildings and sights determine the image of the old town of Nuremberg. The Kaiserburg forms the symbol of the city. It is one of the most important and at the same time the largest castle facilities in Germany. But of course Nuremberg was by no means in the Middle Ages, but a modern, life -friendly city that also knows the sex -positive lifestyle. With 3 sex shops and 3 swinger clubs, the Nuremberg women are spoiled for choice here. There are also 3 sex work organizations on site that stand up for the rights of sex workers. No wonder that Nuremberg occupies a place in the front half of the table in our ranking."
			},
			de: {
				title: 'Nürnberg',
				text: "Nürnberg ist mit ihren 515.000 Einwohnern die zweitgrößte Stadt Bayerns und ein beliebtes Ausflugsziel für Besucherinnen und Besucher aus der ganzen Welt. Historische Gebäude und Sehenswürdigkeiten bestimmen das Bild der Nürnberger Altstadt. Die Kaiserburg bildet das Wahrzeichen der Stadt. Sie ist eine der bedeutendsten und zugleich größten Burgenanlagen Deutschlands. Doch natürlich ist Nürnberg keineswegs im Mittelalter stehengeblieben, sondern eine moderne, lebensfreundliche Stadt, die auch den sexpositiven Lifestyle kennt. Mit 3 Sexshops und 3 Swingerclubs haben die Nürnbergerinnen und Nürnberger hier die Qual der Wahl. Außerdem gibt es vor Ort 3 Sexwork-Organisationen, die sich für die Rechte von Sexarbeiterinnen stark machen. Kein Wunder also, dass Nürnberg in unserem Ranking einen Platz in der vorderen Tabellenhälfte belegt."
			}
		},

		Duisburg: {
			finalRanking: 47,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 5,
			brothels: 18,
			sexWorkers: 324,
			sexWorkOrg: 1,
			sexHealth: 2,
			hiv: 0,
			population: '495,000',
			en: {
				title: 'Duisburg',
				text: "Duisburg is one of several Ruhr cities in our ranking. The city with its almost 500,000 inhabitants white and only the small number of LGBT events, sex shops and swinger clubs transport them to a relatively far back. Because numerous brothels and probably over 300 sex workers fuel the lustful life in Duisburg. In addition to numerous outgoing options in nightlife and a very active cultural scene, there is definitely a sex -positive vibe in the city. So if you want to be a liberal time in the Ruhr area and not always in the same big cities, you can't really go wrong with a visit to Duisburg."
			},
			de: {
				title: 'Duisburg',
				text: "Duisburg ist eine von gleich mehreren Ruhrstädten in unserem Ranking. Die Stadt mit ihren knapp 500.000 Einwohnern weiß zu gefallen und lediglich die geringe Anzahl von LGBT-Events, Sexshops  und Swingerclubs befördern sie auf einen relativ weit hinten liegenden Platz. Denn zahlreiche Bordelle und wahrscheinlich über 300 Sexarbeitende befeuern das lustvolle Leben in Duisburg. Neben zahlreichen Ausgehmöglichkeiten im Nachtleben und einer sehr aktiven Kulturszene herrscht also durchaus ein sexpositiver Vibe in der Stadt. Wer also mal Lust hat auf eine liberale Zeit im Ruhrgebiet und nicht immer in den selben Großstädten unterwegs sein möchte, der kann mit einem Besuch von Duisburg eigentlich nichts falsch machen."
			}
		},

		Bochum: {
			finalRanking: 32,
			sexShops: 2,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 5,
			brothels: 6,
			sexWorkers: 355,
			sexWorkOrg: 1,
			sexHealth: 6,
			hiv: 0,
			population: '364,000',
			en: {
				title: 'Bochum',
				text: "Bochum as a long -serving Ruhrstadt white to inspire. As in many places in NRW, there has been a relaxed attitude to life for decades that gives people space to develop. The location in the middle of the Ruhrpott, surrounded by numerous other attractive cities, leads to a very special mix of advantages that need to be enjoyed. There is also a lot of good things to report from Bochum in the sense of sex positivity. Because although the official figures on sex clubs, brothels etc. are quite manageable, more than 300 sex service providers are likely to work in the city. Bochum definitely makes it easily into our ranking and stands for fun in life and in everyday life, as a place that knows how to inspire."
			},
			de: {
				title: 'Bochum',
				text: "Bochum als altgediente Ruhrstadt weiß zu begeistern. Wie vielerorts in NRW herrscht dort bereits seit Jahrzehnten ein locker-leichtes Lebensgefühl, das den Menschen Raum zur Entfaltung lässt. Die Lage mitten im Ruhrpott, umgeben von zahlreichen weiteren attraktiven Städten, führt zu einer ganz speziellen Mischung an Vorteilen, die es zu genießen gilt. Auch im Sinne der Sexpositivität gibt es viel Gutes aus Bochum zu berichten. Denn obwohl die offiziellen Zahlen an Sexclubs, Bordellen etc. doch recht überschaubar sind, arbeiten wahrscheinlich über 300 SexdienstleisterInnen in der Stadt. Bochum schafft es auf jeden Fall noch locker in unser Ranking und steht für Spaß am Leben und im Alltag, als ein Ort der zu begeistern weiß."
			}
		},

		Wuppertal: {
			finalRanking: 29,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 5,
			brothels: 14,
			sexWorkers: 230,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 1,
			population: '355,000',
			en: {
				title: 'Wuppertal',
				text: "Probably many people don't even know what kind of lively city of Wuppertal. Beautiful on the Wupper river and decorated with a lot of green, doesn't remind much of the city's industrial heritage anymore. A remnant of it and still a real eye -catcher is the Wuppertal suspension railway, which moves the Wuppertaler through the city. This railway may be seen as a symbol for creativity in Wuppertal no need to know any limits. This also applies in terms of sex positivity, because in this regard Wuppertal is known for his freedom of movement and liberality. If you are looking for an open environment, with which you can live out happily, you probably didn't make a wrong location with Wuppertal."
			},
			de: {
				title: 'Wuppertal',
				text: "Wahrscheinlich wissen viele Menschen gar nicht, was für eine lebenswürdige Stadt Wuppertal ist. Schön am Fluss Wupper gelegen und geschmückt mit vielem Grün, erinnert nicht mehr viel an das industrielle Erbe der Stadt. Ein Überbleibsel davon und bis heute ein echter Hingucker, ist die Wuppertaler Schwebebahn, welche quasi kopfüber an Oberschienen hängend die Wuppertaler durch die Stadt bewegt. Diese Bahn darf gerne als Symbol dafür angesehen werden, dass Kreativität in Wuppertal keine Grenzen kennen muss. Dies gilt auch in puncto Sexpositivität, denn in dieser Hinsicht ist Wuppertal für seine Freizügigkeit und Liberalität bekannt. Wer auf der Suche ist nach einem offenen Umfeld, mit dem man sich freudig ausleben kann, der hat mit Wuppertal wohl keine falsche Standortentscheidung getroffen."
			}
		},

		Bielefeld: {
			finalRanking: 42,
			sexShops: 2,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 6,
			sexWorkers: 233,
			sexWorkOrg: 1,
			sexHealth: 3,
			hiv: 0,
			population: '333,000',
			en: {
				title: 'Bielefeld',
				text: "Bielefeld is located in the north of NRW, near the border with Lower Saxony almost exactly between Münster and Hanover. The city is largely considered an absolute insider tip regarding a sex -positive and liberal lifestyle. Not only the many tens of thousands of students who are regularly moving into the city can confirm this. There are a few brothels there with six, there are no LGBTQ bars and other establishments. This does not detract from the role of Bielefeld as a 'hidden champion' among the sex -positive cities. If you want to find your liberal happiness far from the roar and the arrogance of some other metropolises, you do everything right with a move to Bielefeld."
			},
			de: {
				title: 'Bielefeld',
				text: "Bielefeld liegt im Norden von NRW, nahe der Grenze zu Niedersachsen ziemlich genau zwischen Münster und Hannover. Die Stadt gilt weithin als absoluter Geheimtipp bezüglich einer sexpositiven und liberalen Lebensweise. Das können nicht nur die vielen zehntausenden StudentInnen, die es regelmäßig in die Stadt zieht, bestätigen. Es gibt dort zwar mit sechs an der Zahl ein paar Bordelle, dafür sind keine LGBTQ-Bars und andere Etablissements verzeichnet. Dies tut der Rolle Bielefelds als 'Hidden Champion' unter den sexpositiven Städten keinen Abbruch. Wer fern vom Getöse und der Überheblichkeit manch anderer Metropolen sein liberales Glück finden will, der oder die macht mit einem Umzug nach Bielefeld alles richtig."
			}
		},

		Bonn: {
			finalRanking: 23,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 2,
			lgbtBars: 2,
			brothels: 9,
			sexWorkers: 182,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 2,
			population: '330,000',
			en: {
				title: 'Bonn',
				text: "Bonn is a city in West Germany and was the capital of the Federal Republic of Germany from 1949 to 1990. Like hardly any other city, Bonn combines aspects of politics, culture and leisure. With the Beethoven House, the birthplace of Ludwig van Beethoven, a monument was set to the best-known German composer. The House of History has the history of the Federal Republic alive - more than 1 million objects are on display. As a university city, Bonn is particularly popular with young people. The Electoral Castle, which was the residence of the Cologne Elector until 1794, is now the seat of the University of Bonn with its almost 38,000 students. And where there are many young people, there is usually also a lively sex -positive life. So also in Bonn, where there are at least 9 erotic establishments and 1 sex shop."
			},
			de: {
				title: 'Bonn',
				text: "Bonn ist eine Stadt in Westdeutschland und war von 1949 bis 1990 Hauptstadt der Bundesrepublik Deutschland. Wie kaum eine andere Stadt vereint Bonn Aspekte von Politik, Kultur und Freizeit. Mit dem Beethoven-Haus, dem Geburtshaus von Ludwig van Beethoven, wurde dem bekanntesten deutschen Komponisten ein Denkmal gesetzt. Das Haus der Geschichte lässt die Historie der Bundesrepublik lebendig werden – mehr als 1 Million Objekte sind dort ausgestellt. Als Universitätsstadt erfreut sich Bonn vor allem bei jungen Menschen einer großen Beliebtheit. Das kurfürstliche Schloss, das bis 1794 Residenz des Kölner Kurfürsten war, ist heute Sitz der Universität Bonn mit ihren knapp 38.000 Studierenden. Und wo es viele junge Leute gibt, gibt es in der Regel auch ein reges sexpositives Leben. So auch in Bonn, wo es immerhin 9 erotische Etablissements und 1 Sexshop gibt."
			}
		},

		Muenster: {
			finalRanking: 28,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 1,
			brothels: 13,
			sexWorkers: 152,
			sexWorkOrg: 1,
			sexHealth: 5,
			hiv: 1,
			population: '316,000',
			en: {
				title: 'Muenster',
				text: "Münster is a great city in North Rhine-Westphalia that should not be missing in this ranking. Because its location in the west of Germany makes it an important center for economy and culture in the larger area. The city has numerous architectural landmarks from the Middle Ages, which will contribute both from the rich inheritance of Münster as well as their pretty appearance. If you just want to live out freely and make contacts with open -minded people, you can't go wrong with Münster. Both supporters of the LGBT culture and people with unusual kinks meet there on like-minded people. Therefore, Münster has earned his place in this ranking."
			},
			de: {
				title: 'Münster',
				text: "Münster ist eine großartige Stadt in Nordrhein-Westfalen, die in diesem Ranking nicht fehlen darf. Denn ihre Lage ganz im Westen von Deutschland, macht sie zum wichtigen Zentrum für Wirtschaft und Kultur im größeren Umkreis. Die Stadt verfügt über zahlreiche architektonische Wahrzeichen aus dem Mittelalter, die sowohl vom Reichen Erbe Münsters zeugen, als auch zu ihrer schmucken Erscheinung heutzutage beitragen. Wer sich einfach frei ausleben möchte und Kontakte zu aufgeschlossenen Menschen knüpfen will, der kann mit Münster nicht viel falsch machen. Sowohl AnhängerInnen der LGBT-Kultur als auch Menschen mit ausgefallenen Kinks treffen dort auf Gleichgesinnte. Daher hat sich Münster in diesem Ranking seinen Platz redlich verdient."
			}
		},

		Mannheim: {
			finalRanking: 2,
			sexShops: 3,
			swingerClubs: 1,
			gayPrides: 2,
			lbgtEvents: 6,
			lgbtBars: 13,
			brothels: 3,
			sexWorkers: 329,
			sexWorkOrg: 0,
			sexHealth: 4,
			hiv: 2,
			population: '309,000',
			en: {
				title: 'Mannheim',
				text: "Urban, baroque and always worth a visit. Located between the Rhine and Neckar, Mannheim with its approximately 300,000 inhabitants is the second largest city of Baden-Württemberg. While the chess -like city center is reminiscent of modern metropolises such as New York City, the Mannheim city palace gives up old history. It is the largest baroque castle in Germany and now houses the internationally renowned University of Mannheim. In general, Mannheim is an extremely popular city among young people. So it is not surprising that she ends up in a sensational 2nd place in our ranking. While Cologne and Berlin are generally considered LGBTQIA+capitals, Mannheim proves that it has almost as much gay-lesbian life in terms of its population. And as far as the health education of the population is concerned, Mannheim plays very ahead: with 4 organizations and 2 medical houses that take care of the topics of sexual health, Mannheim cuts off above average in our ranking."
			},
			de: {
				title: 'Mannheim',
				text: "Urban, barock und immer einen Besuch wert. Zwischen Rhein und Neckar gelegen, ist Mannheim mit ihren rund 300.000 Einwohnern die zweitgrößte Stadt Baden-Württembergs. Während die schachbrettartig angelegte Innenstadt an moderne Metropolen wie New York City erinnert, lässt das Mannheimer Stadtschloss alte Geschichte lebendig werden. Es ist das größte Barockschloss Deutschlands und beherbergt heute die international renommierte Universität Mannheim. Überhaupt ist Mannheim eine bei jungen Menschen äußerst beliebte Stadt. So überrascht es auch nicht, dass sie in unserem Ranking auf einem sensationellen 2. Platz landet. Während wahlweise Köln und Berlin gemeinhin als LGBTQIA+-Hauptstädte gelten, beweist Mannheim, dass es gemessen an seiner Einwohnerzahl fast ebenso viel schwul-lesbisches Leben zu bieten hat. Und auch was die gesundheitliche Aufklärung der Bevölkerung betrifft, spielt Mannheim ganz weit vorne mit: Mit 4 Organisationen und 2 Ärztehäusern, die sich den Themen der sexuellen Gesundheit annehmen, schneidet Mannheim in unserem Ranking überdurchschnittlich gut ab."
			}
		},

		Karlsruhe: {
			finalRanking: 18,
			sexShops: 5,
			swingerClubs: 2,
			gayPrides: 2,
			lbgtEvents: 0,
			lgbtBars: 1,
			brothels: 28,
			sexWorkers: 311,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 0,
			population: '308,000',
			en: {
				title: 'Karlsruhe',
				text: "With its 308,000 inhabitants, Karlsruhe is one of the largest cities in Baden-Württemberg. The city was founded in 1715 as one of the first baroque planned cities and is now 'residence of law': In addition to the German Federal Court of Justice, the Federal Constitutional Court has also been here since 1951. As a university city, Karlsruhe is particularly popular with young people and has also developed into an interesting hotspot for the creative and culture scene in recent years. Because of his many hours of sunshine, Karlsruhe is an extremely lifelong city. This is also expressed in our ranking: with 5 sex shops and 2 swinger clubs, it offers visitors and locals many opportunities for self -development."
			},
			de: {
				title: 'Karlsruhe',
				text: "Mit seinen 308.000 Einwohnern zählt Karlsruhe zu den größten Städten in Baden-Württemberg. Die Stadt wurde im Jahr 1715 als eine der ersten barocken Planstädte gegründet und ist heute „Residenz des Rechts“: Neben dem deutschen Bundesgerichtshof befindet sich seit 1951 auch das Bundesverfassungsgericht hier. Als Universitätsstadt erfreut sich Karlsruhe besonders bei jungen Menschen einer großen Beliebtheit und hat sich in den letzten Jahren auch für die Kreativ- und Kulturszene zu einem interessanten Hotspot entwickelt. Aufgrund seiner vielen Sonnenstunden gilt Karlsruhe als äußerst lebensfreundliche Stadt. Dies drückt sich auch in unserem Ranking aus: Mit 5 Sexshops und 2 Swingerclubs bietet sie Besuchern und Einheimischen viele Möglichkeiten zur Selbstentfaltung."
			}
		},

		Augsburg: {
			finalRanking: 14,
			sexShops: 5,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 3,
			lgbtBars: 3,
			brothels: 25,
			sexWorkers: 152,
			sexWorkOrg: 1,
			sexHealth: 4,
			hiv: 0,
			population: '295,000',
			en: {
				title: 'Augsburg',
				text: "Augsburg is the third largest city in Bavaria with its 295,000 inhabitants. As a university city, it is particularly popular with young people and has great excursion destinations: whether old fugerei, the golden hall in the town hall or pearl tower, which offers a wonderful view of the city - Augsburg is always worth a visit. Of course, the world -famous Augsburg doll box should not be missing in our list. But how sex positive is Augsburg actually? Our ranking shows that with 14th place, the city ends up in a very good place in the front half of the table. The reason for this should be the 5 sex shops in particular as well as the large number of erotic establishments and brothels - measured by the population."
			},
			de: {
				title: 'Augsburg',
				text: "Augsburg ist mit ihren 295.000 Einwohnern die drittgrößte Stadt Bayerns. Als Universitätsstadt ist sie besonders bei jungen Menschen sehr beliebt und hat tolle Ausflugsziele zu bieten: Ob alte Fuggerei, den goldenen Saal im Rathaus oder Perlachturm, der einen herrlichen Ausblick über die Stadt bietet – Augsburg ist immer einen Besuch wert. Natürlich darf auch die weltberühmte Augsburger Puppenkiste in unserer Aufzählung keineswegs fehlen. Doch wie sexpositiv ist Augsburg eigentlich? Unser Ranking zeigt: Mit Platz 14 landet die Stadt auf einem sehr guten Platz in der vorderen Tabellenhälfte. Grund dafür dürften vor allem die 5 Sexshops sein sowie der – gemessen an der Einwohnerzahl – großen Anzahl von erotischen Etablissements und Bordellen."
			}
		},

		Wiesbaden: {
			finalRanking: 7,
			sexShops: 3,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 1,
			brothels: 15,
			sexWorkers: 241,
			sexWorkOrg: 1,
			sexHealth: 2,
			hiv: 2,
			population: '278,000',
			en: {
				title: 'Wiesbaden',
				text: "As a Hessian capital, Wiesbaden is of particular importance and has a lot to offer. With its thermal and mineral springs, the city, which is also known as the 'Gate at the Rheingau', is one of the oldest European spa baths and attracts tourists from all over the world. There is a reason that Wiesbaden in our ranking is still in front of the large rival from Frankfurt: There are a lot of sex positive on the population. In addition to sex shops and swinger clubs, 15 erotic establishments invite you to linger. And great emphasis is also placed on health education in Wiesbaden: in addition to 2 organizations that take care of the sexual health of the population, there are also 2 medical houses that specialize in the treatment of STDs."
			},
			de: {
				title: 'Wiesbaden',
				text: "Als hessischer Landeshauptstadt kommt Wiesbaden eine besondere Bedeutung zu und hat viel zu bieten. Mit ihren Thermal- und Mineralquellen gehört die Stadt, die auch als „Tor zum Rheingau“ bezeichnet wird, zu den ältesten europäischen Kurbädern und zieht Touristen aus der ganzen Welt an. Dass Wiesbaden in unserem Ranking noch vor dem großen Rivalen aus Frankfurt liegt, hat seinen Grund: Gemessen an der Einwohnerzahl gibt es nämlich vor Ort viel Sexpositives zu erleben. Neben Sexshops und Swingerclubs laden 15 erotische Etablissements zum Verweilen ein. Und auch auf gesundheitliche Aufklärung wird in Wiesbaden großen Wert gelegt: Neben 2 Organisationen, die sich um sexuelle Gesundheit der Bevölkerung kümmern, gibt es ebenfalls 2 Ärztehäuser, die sich auf die Behandlung von STDs spezialisiert haben."
			}
		},

		Mönchengladbach: {
			finalRanking: 34,
			sexShops: 1,
			swingerClubs: 2,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 4,
			brothels: 17,
			sexWorkers: 265,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 0,
			population: '259,000',
			en: {
				title: 'Mönchengladbach',
				text: "Mönchengladbach is another football town in our ranking and is located a little west of Düsseldorf. The way of life is considered open and cheerful there, conservative spoilers are rarely found there. But all the more sex -positive people who like to fall into life with like -minded people. Compared to many other cities in this ranking, Mönchengladbach does not achieve the best values ​​according to numbers, but this should not give the impression that it would be prudish there. On the contrary, Mönchengladbach offers a high quality of life that erotic and sexual freedoms like to grant. Typical for North Rhine-Westphalia, there is also a pronounced sex positiveism in this city, which tends to enjoy people."
			},
			de: {
				title: 'Mönchengladbach',
				text: "Mönchengladbach ist eine weitere Fußballstadt in unserem Ranking und liegt etwas westlich von Düsseldorf. Die Lebensart gilt dort als offen und heiter, konservative Spielverderber sind dort eher selten anzutreffen. Dafür umso mehr sexpositive Menschen, die sich gerne mit Gleichgesinnten ins Leben stürzen. Im Vergleich zu vielen anderen Städten in diesem Ranking, erzielt Mönchengladbach nach Zahlen keine Bestwerte, dies soll allerdings nicht den Eindruck erwecken, dass es dort prüde zugehen würde. Ganz im Gegenteil bietet Mönchengladbach eine hohe Lebensqualität, die erotische und sexuelle Freiheiten gerne gewährt. Typisch für Nordrhein-Westfalen, findet sich auch in dieser Stadt ein ausgeprägter Sexpositivismus, der den Menschen ihren Spaß zu lassen pflegt."
			}
		},

		Gelsenkirchen: {
			finalRanking: 27,
			sexShops: 2,
			swingerClubs: 1,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 12,
			sexWorkers: 260,
			sexWorkOrg: 0,
			sexHealth: 0,
			hiv: 1,
			population: '259,000',
			en: {
				title: 'Gelsenkirchen',
				text: "Gelsenkirchen is located in the middle of the Ruhr area in North Rhine -Westphalia and knows how to please in the immediate vicinity despite several larger cities. Like typical of the entire Rhein-Ruhr region, there is a liberal attitude to life that allows everyone and everyone to live in an individual way. The city is particularly blooming when it comes to sunbathing and the barbecue season is celebrated. The people there are considered open and friendly and many are not averse to erotic adventures. There should be around 260 sex workers in the city who offer their services to those who have no time for dating. In summary, it can be stated that Gelsenkirchen is always worth a visit, a shame that it is a little in the shadow of its larger neighbors."
			},
			de: {
				title: 'Gelsenkirchen',
				text: "Gelsenkirchen liegt mitten im Ruhrgebiet in NRW und weiß trotz mehrerer größerer Städte in direkter Umgebung zu gefallen. Wie typisch für die gesamte Rhein-Ruhr Region, herrscht dort in liberales Lebensgefühl, das jedem und jeder erlaubt, auf individuelle Art und Weise zu leben. Besonders im Sommer blüht die Stadt regelrecht auf, wenn es an die Badeseen zum Sonnen geht und die Grillsaison gefeiert wird. Die Menschen dort gelten als offen und freundlich und viele sind erotischen Abenteuern nicht abgeneigt. Um die 260 SexarbeiterInnen soll es dabei in der Stadt geben, die ihre Dienstleistungen denen anbieten, die für Dating keine Zeit haben. Zusammengefasst kann festgehalten werden, dass Gelsenkirchen immer einen Besuch Wert ist, schade eigentlich, dass es ein wenig im Schatten seiner größeren Nachbarinnen steht."
			}
		},

		Aachen: {
			finalRanking: 25,
			sexShops: 2,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 5,
			sexWorkers: 140,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 1,
			population: '248,000',
			en: {
				title: 'Aachen',
				text: "In the far west of North Rhine-Westphalia, in the immediate vicinity of Belgium and the Netherlands, Aachen with around 248,000 inhabitants is located. Even if Aachen is only not far from metropolises such as Cologne or Düsseldorf, the city itself is also a popular travel destination. The Aachen Cathedral, the town hall and the beautiful old town are particularly popular with tourists. Aachen is primarily known throughout Germany because of its technical university. As a university city, the city enjoys an excellent reputation and attracts young people from all over the world. This is also reflected in the sex -positive lifestyle, which is not in masses here, but it is still increasingly to be discovered."
			},
			de: {
				title: 'Aachen',
				text: "Ganz im Westen von Nordrhein-Westfalen, in direkter Nachbarschaft zu Belgien und den Niederlanden, liegt Aachen mit seinen rund 248.000 Einwohnern. Auch wenn Aachen nur unweit von Metropolen wie Köln oder Düsseldorf entfernt liegt, ist die Stadt doch auch selbst ein beliebtes Reiseziel. Besonders der Aachener Dom, das Rathaus und die wunderschöne Altstadt stehen bei Touristen hoch im Kurs. Deutschlandweit ist Aachen vor allem aufgrund seiner Technischen Universität bekannt. Als Universitätsstadt genießt die Stadt einen hervorragenden Ruf und lockt junge Menschen aus aller Welt an. Das spiegelt sich auch im sexpositiven Lifestyle wieder, den es hier zwar nicht in Massen, aber doch an immer öfter zu entdecken gibt."
			}
		},

		Braunschweig: {
			finalRanking: 21,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 4,
			brothels: 9,
			sexWorkers: 139,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 1,
			population: '248,000',
			en: {
				title: 'Braunschweig',
				text: "Anyone who thinks of Braunschweig will probably initially think of Volkswagen. Because here in 1938 the first of all works by Volkswagen AG was created. But Braunschweig, which, with its 250,000 inhabitants, belongs to the second largest university city of Lower Saxony, has much more to offer. The Magniviertel is one of the oldest quarters in the city and is a popular meeting and exit for the Braunschweiger. Exchange alleys and romantic cafes invite you to a cozy stroll, in the evening the pubs are very popular among students. In sexual terms, Braunschweig convinces primarily because of his very good health advice. 3 organizations and 1 medical center clarify on site about sexual health issues."
			},
			de: {
				title: 'Braunschweig',
				text: "Wer an Braunschweig denkt, der denkt wahrscheinlich zunächst an Volkswagen. Denn hier entstand im Jahr 1938 das erste aller Werke der Volkswagen AG. Doch Braunschweig, die mit ihren 250.000 Einwohnern zu der zweitgrößten Universitätsstadt Niedersachsens zählt, hat noch viel mehr zu bieten. Das Magniviertel gehört zu den ältesten Vierteln der Stadt und ist beliebter Treff- und Ausgehpunkt für die Braunschweiger. Verwunsche Gassen und romantische Cafes laden zu einem gemütlichen Bummel ein, abends sind die Kneipen unter Studierenden sehr beliebt. In sexueller Hinsicht überzeugt Braunschweig vor allem aufgrund seiner sehr guten gesundheitlichen Beratungsangebote. 3 Organisationen und 1 Ärztehaus klären vor Ort über sexuelle Gesundheitsfragen auf."
			}
		},

		Keel: {
			finalRanking: 20,
			sexShops: 2,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 3,
			brothels: 9,
			sexWorkers: 80,
			sexWorkOrg: 4,
			sexHealth: 3,
			hiv: 0,
			population: '246,000',
			en: {
				title: 'Keel',
				text: "Kiel is a city with a sea view. As the Schleswig-Holstein capital, it is also the northernmost capital of Germany. The Kiel Week, the largest sail event in the world, attracts visitors from all over the world. But of course not enough. The northern German port city offers many other excursion destinations that-how should it be otherwise-are all shaped by seafaring: the historic submarine, the lighthouse, the navalism and shipping museum. And even in sexual terms, Kiel gives some good reasons for a more than passable space in our ranking. With 4 sex work organizations, the rights and matters of the sex workers on site are particularly well represented."
			},
			de: {
				title: 'Kiel',
				text: "Kiel ist eine Stadt mit Meerblick. Als schleswig-holsteinische Landeshauptstadt ist sie zugleich die nördlichste Hauptstadt Deutschlands. Die jährlich ausgetragene Kieler Woche, das größte Segelevent der Welt, lockt Besucherinnen und Besucher aus aller Welt an. Doch damit natürlich nicht genug. Die norddeutsche Hafenstadt bietet noch viele weitere Ausflugsziele, die – wie sollte es anders sein – allesamt von der Seefahrt geprägt sind: das historische U-Boot, der Leuchtturm, das Marinedenkmal und Schifffahrtsmuseum. Und auch in sexueller Hinsicht liefert Kiel einige gute Gründe für einen mehr als passablen Platz in unserem Ranking. Mit 4 Sexwork-Organisationen sind vor allem die Rechte und Angelegenheiten der Sexarbeiterinnen vor Ort stark vertreten."
			}
		},

		Chemnitz: {
			finalRanking: 6,
			sexShops: 4,
			swingerClubs: 4,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 1,
			brothels: 22,
			sexWorkers: 115,
			sexWorkOrg: 2,
			sexHealth: 3,
			hiv: 1,
			population: '244,000',
			en: {
				title: 'Chemnitz',
				text: "Chemnitz, which was called Karl Marx Stadt from 1953 to 1990, is now a city of opposites. If large empty areas shaped the cityscape at the turning point, today's Chemnitz is a pulsating, livable city. Well -known architects were at work and created a strong structural connection between tradition and modernity: Bauhaus meets new objectivity. The Technical University is an intellectual center and attracts young people from near and far. The sex -positive attitude to life is correspondingly widespread. With 4 swinger clubs and 4 local sex shops, Chemnitz offers its 244,000 inhabitants an above -average number of erotic development options. And that's not all: 22 brothels offer a lot of uncomplicated, sexual contacts in the city. In our ranking, Chemnitz therefore ends up in a deserved 6th place."
			},
			de: {
				title: 'Chemnitz',
				text: "Chemnitz, die von 1953 bis 1990 Karl Marx Stadt hieß, ist heute eine Stadt der Gegensätze. Prägten zur Wendezeit große Leerflächen das Stadtbild, ist das Chemnitz von heute eine pulsierende, lebenswerte Stadt. Namhafte Architekten waren am Werk und haben eine starke bauliche Verbindung von Tradition und Moderne geschaffen: Bauhaus trifft auf Neue Sachlichkeit. Die technische Universität ist intellektuelles Zentrum und zieht junge Menschen von nah und fern an. Entsprechend verbreitet ist das sexpositive Lebensgefühl. Mit 4 Swingerclubs und 4 örtlichen Sexshops bietet Chemnitz seinen 244.000 Einwohnern überdurchschnittlich viele erotische Entfaltungsmöglichkeiten. Und damit nicht genug: 22 Bordelle bieten jede Menge unkomplizierte, sexuelle Kontakte in der Stadt. In unserem Ranking landet Chemnitz daher auf einem verdienten 6. Platz."
			}
		},

		Halle: {
			finalRanking: 45,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 1,
			brothels: 7,
			sexWorkers: 79,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 0,
			population: '237,000',
			en: {
				title: 'Halle (Saale)',
				text: "Halle (Saale) is an often underestimated jewel of the East and is only a few kilometers northwest of Leipzig in Saxony-Anhalt. Lately, the city has recently known a wider audience by the fact that the headquarters of the National Academy of Sciences Leopoldina is located there. Numerous universities and the university also contribute to the city's academic reputation. And where the knowledge and research are at home, the air of freedom and liberality also blows. Therefore, Halle has made it clear into our ranking, if not in the front places. However, this does not detract from the attractiveness of Halle, if you have never been there, you should definitely dare to visit."
			},
			de: {
				title: 'Halle (Saale)',
				text: "Halle (Saale) ist ein oft unterschätztes Juwel des Ostens und liegt nur wenige Kilometer nordwestlich von Leipzig in Sachsen-Anhalt. In letzter Zeit wurde die Stadt einem breiteren Publikum dadurch bekannt, dass sich dort der Sitz der Nationalen Akademie der Wissenschaften Leopoldina befindet. Zahlreiche Hochschulen und die Universität tragen außerdem zum akademischen Ruf der Stadt bei. Und wo das Wissen und die Forschung Zuhause sind, da weht auch die Luft der Freiheit und der Liberalität. Daher hat es Halle noch deutlich in unser Ranking geschafft, wenn auch nicht auf den vorderen Plätzen. Dies allerdings tut der Attraktivität von Halle keinen Abbruch, wer noch nie dort war sollte unbedingt mal einen Besuch wagen."
			}
		},

		Magdeburg: {
			finalRanking: 5,
			sexShops: 4,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 2,
			brothels: 7,
			sexWorkers: 139,
			sexWorkOrg: 3,
			sexHealth: 4,
			hiv: 1,
			population: '235,000',
			en: {
				title: 'Magdeburg',
				text: "Magdeburg has been nicknamed Ottostadt since 2010. Because both Emperor Otto the Great as well as the inventor and diplomat Otto von Guericke left their mark in Magdeburg. Since reunification, the city has carried out an exciting change: the gray industrial city has become a green, lovable and lifelike city, which also gives the sex-positive lifestyle enough space. With 4 local sex shops there is a huge selection of erotic toys. And with 7 brothels and 3 organizations, the sex worker scene in Magdeburg is also strongly represented. But at least as much value as the sexual development is placed on the information: there are 4 institutions that provide information about sexual health questions. There is also a doctor's office that specializes in the treatment of venereal diseases / HIV. Our conclusion: Magdeburg is a real insider tip for all lovers of sex -positive lifestyle."
			},
			de: {
				title: 'Magdeburg',
				text: "Seit 2010 trägt Magdeburg den Beinamen Ottostadt. Denn sowohl Kaiser Otto der Große als auch der Erfinder und Diplomat Otto von Guericke haben in Magdeburg ihre Spuren hinterlassen. Seit der Wiedervereinigung hat die Stadt einen spannenden Wandel vollzogen: aus der grauen Industriestadt wurde eine grüne, liebens- und lebenswerte Großstadt, die auch dem sexpositivem Lebensgefühl ausreichend Raum gibt. Mit 4 örtlichen Sexshops gibt es eine riesige Auswahl an erotischen Toys. Und mit 7 Bordellen und 3 Organisationen ist auch die Sexarbeiterszene in Magdeburg stark vertreten. Doch mindestens ebenso viel Wert wie auf die sexuelle Entfaltung wird auf die Information gelegt: Es gibt 4 Einrichtungen, die über Fragen der sexuellen Gesundheit aufklären. Dazu kommt eine Arztpraxis, die sich auf die Behandlung von Geschlechtskrankheiten / HIV spezialisiert hat. Unser Fazit: Magdeburg ist ein echter Geheimtipp für alle Liebhaber des sexpositiven Lifestyles."
			}
		},

		Freiburg: {
			finalRanking: 3,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 2,
			lbgtEvents: 4,
			lgbtBars: 2,
			brothels: 19,
			sexWorkers: 155,
			sexWorkOrg: 3,
			sexHealth: 4,
			hiv: 2,
			population: '230,000',
			en: {
				title: 'Freiburg',
				text: "Freiburg im Breisgau is one of the sunniest and greenest city in Germany. Perhaps this already explains the fact why many people feel so poodle here. The city is also considered a pioneer of the German environmental movement: Nowhere can you find so many solar systems on house roofs and public buildings and the beautiful old town has been car -free for a long time. All the reasons why Freiburg was recently recognized as a TroStelle 2022. We think: Completely. Because also what eroticism and sexuality affect, the small Black Forest metropolis is more than impressive. There are many sexual development opportunities for their 230,000 inhabitants, including 30,000 students. In our ranking, Freiburg convinces especially in the areas of sex work and health education."
			},
			de: {
				title: 'Freiburg',
				text: "Freiburg im Breisgau zählt zu den sonnigsten und grünsten Stadt Deutschlands. Vielleicht erklärt das bereits die Tatsache, warum sich viele Menschen hier so pudelwohl fühlen. Die Stadt gilt außerdem als Vorreiter der deutschen Umweltbewegung: Nirgends findet man so viele Solaranlagen auf Hausdächern und öffentlichen Gebäuden und auch die wunderschöne Altstadt ist schon lange autofrei. Alles Gründe warum Freiburg vor kurzem als Topreiseziel 2022 ausgezeichnet wurde. Wir finden: Völlig zurecht. Denn auch was Erotik und Sexualität betreffen, kann sich die kleine Schwarzwaldmetropole mehr als sehen lassen. Für ihre 230.000 Einwohner, darunter 30.000 Studierenden, finden sich viele sexuelle Entfaltungsmöglichkeiten. In unserem Ranking überzeugt Freiburg besonders in den Bereichen Sexarbeit und gesundheitlicher Aufklärung."
			}
		},

		Krefeld: {
			finalRanking: 41,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 0,
			lbgtEvents: 1,
			lgbtBars: 3,
			brothels: 5,
			sexWorkers: 146,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 0,
			population: '226,000',
			en: {
				title: 'Krefeld',
				text: "Krefeld lies on the left bank of the Rhine between Mönchengladbach and Duisburg. Due to the textile industrial history of the city, it is also called the 'velvet and silk city'. Krefeld is often known for the zoo. But not just there is colorful in the enclosures, the leisure life in the city can also convince. Although according to data there is only half as many sex workers as in similar food, Krefeld has honestly earned his place in this ranking thanks to his open and definitely sex -positive everyday culture. Around five brothels or brothel apartments in the city testify to an existing interest in erotic and sexual debauchery. Krefeld is always happy about liberal visitors."
			},
			de: {
				title: 'Krefeld',
				text: "Krefeld liegt linksrheinisch zwischen Mönchengladbach und Duisburg. Aufgrund der textil-industriellen Geschichte der Stadt wird sie auch die 'Samt- und Seidenstadt' genannt. Menschen aus der Gegend ist Krefeld oftmals für den Zoo bekannt. Aber nicht bloß dort geht es bunt zu in den Gehegen, auch das Freizeitleben in der Stadt kann überzeugen. Obwohl es laut Daten nur halb so viele SexarbeiterInnen wie im ähnlich großen Essen gibt, hat Krefeld durch seine offene und definitiv auch sexpositive Alltagskultur seinen Platz in diesem Ranking redlich verdient. Etwa fünf Bordelle bzw. Bordellwohnungen in der Stadt zeugen von einem vorhandenen Interesse an erotisch-sexuellen Ausschweifungen. Krefeld freut sich jederzeit über liberal eingestellte BesucherInnen."
			}
		},

		Mainz: {
			finalRanking: 16,
			sexShops: 2,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 8,
			sexWorkers: 208,
			sexWorkOrg: 0,
			sexHealth: 1,
			hiv: 1,
			population: '217,000',
			en: {
				title: 'Mainz',
				text: "Mainz-Rhineland-Palatinate state capital, colorful student city, located directly on the Rhine, home of the ZDF Mainzelmännchen, Carnival and Fastnachthehburg. Of course, the Mainz Cathedral, which had already been built 1000 AD and the world-famous Gutenberg Museum, should not be missing in a list of the city. Mainz is incredibly versatile - and also in sexual terms. In our ranking, the city lands in a very good 16th place and convinces primarily because of its comparatively large sex worker scene. Locals, like visitors, are also available 2 sex shops and 1 swinger club to try out and get to know each other sexually."
			},
			de: {
				title: 'Mainz',
				text: "Mainz – rheinland-pfälzische Landeshauptstadt, bunte Studentenstadt, direkt am Rhein gelegen, Heimat der ZDF-Mainzelmännchen, Karnevals- und Fastnachtshochburg. Natürlich dürfen auch der bereits 1000 n. Chr. erbaute Mainzer Dom sowie das weltbekannte Gutenberg-Museum in einer Aufzählung über die Stadt nicht fehlen. Mainz ist unglaublich vielseitig – und das auch in sexueller Hinsicht. In unserem Ranking landet die Stadt auf einem sehr guten 16. Platz und überzeugt vor allem aufgrund ihrer vergleichsweise großen Sexarbeiter-Szene. Einheimischen wie Besucherinnen und Besuchern stehen außerdem 2 Sexshops und 1 Swingerclub zur Verfügung, um sich sexuell neu auszuprobieren und kennenzulernen."
			}
		},

		Lübeck: {
			finalRanking: 37,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 1,
			brothels: 10,
			sexWorkers: 85,
			sexWorkOrg: 1,
			sexHealth: 4,
			hiv: 0,
			population: '215,000',
			en: {
				title: 'Lübeck',
				text: "Lübeck as the old capital of the Hanseatic League is a real northern light. The historic city looks back on a past in prosperity and with far -reaching influence. Numerous floods and floods over the centuries, but could not rob anything of Lübeck's glory. However, the second largest city of Schleswig-Holstein is by no means geared towards the past. Because despite the Nordic freshness in Lübeck, there is a free mood in Lübeck, which also does not exclude sex positivity and comes into its own, especially in summer. Then the Baltic Sea invites you to swim and later you can indulge in the promises of the night undisturbed. It was not enough for one of the front places in this ranking, but the fact that Lübeck was recorded here speaks volumes for the beautiful city."
			},
			de: {
				title: 'Lübeck',
				text: "Lübeck als die alte Hauptstadt der Hanse, ist ein echtes Nordlicht. Die geschichtsträchtige Stadt blickt zurück auf eine Vergangenheit in Wohlstand und mit weitreichendem Einfluss. Zahlreiche Fluten und Überschwemmungen über die Jahrhunderte hinweg, konnten allerdings nichts vom Glanz Lübecks rauben. Allerdings ist die zweitgrößte Stadt Schleswig-Holsteins keineswegs auf das Zurückliegende ausgerichtet. Denn trotz nordischer Frische herrscht in Lübeck eine freiheitliche Stimmung, die auch Sexpositivität nicht ausschließt und vor Allem im Sommer zur Geltung kommt. Dann lädt die Ostsee zum Baden ein und zu späterer Stunde darf man sich ungestört den Versprechungen der Nacht hingeben. Zu einem der vorderen Plätze in diesem Ranking hat es nicht gereicht, aber dass Lübeck hier aufgenommen wurde, spricht Bände für die schöne Stadt."
			}
		},

		Erfurt: {
			finalRanking: 36,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 4,
			brothels: 9,
			sexWorkers: 136,
			sexWorkOrg: 1,
			sexHealth: 2,
			hiv: 0,
			population: '213,000',
			en: {
				title: 'Erfurt',
				text: "Connoisseurs already know about the qualities of Erfurt. A visit to the state capital of Thuringia is very recommended to everyone else. The historic old town is probably one of the most beautiful in Germany and sprays almost Italian flair with its winding little alleys. When it comes to sex and eroticism, like in many places in the east, nobody needs a leaf in front of your mouth. Conservative bourgeoisiness is rather not to be found when it comes to pleasure and love. With just over two hundred thousand residents, Erfurt is not a huge city. But in terms of size, over 130 sex workers in Erfurt are absolutely no bad value. Erfurt is certainly a city that has much more to offer than most people know."
			},
			de: {
				title: 'Erfurt',
				text: "Connoisseurs already know about the qualities of Erfurt. A visit to the state capital of Thuringia is very recommended to everyone else. The historic old town is probably one of the most beautiful in Germany and sprays almost Italian flair with its winding little alleys. When it comes to sex and eroticism, like in many places in the east, nobody needs a leaf in front of your mouth. Conservative bourgeoisiness is rather not to be found when it comes to pleasure and love. With just over two hundred thousand residents, Erfurt is not a huge city. But in terms of size, over 130 sex workers in Erfurt are absolutely no bad value. Erfurt is certainly a city that has much more to offer than most people know."
			}
		},

		Oberhausen: {
			finalRanking: 39,
			sexShops: 2,
			swingerClubs: 0,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 7,
			sexWorkers: 314,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 0,
			population: '209,000',
			en: {
				title: 'Oberhausen',
				text: "There is an exuberant mood in Oberhausen in NRW. Sex positivity and freedom of movement are not new phenomena there. Because the time -honored Ruhrstadt always knows how to delight through its relaxed attitude to life. Typical for the 'pot' it is not far to the larger neighboring cities, so there is nothing missing in Oberhausen, not even when it comes to sex and eroticism. If you look at the absolute figures in our survey, Oberhausen hardly counts any establishments such as brothels or swinger clubs, but of course that's not the only parameter where sex positivity is measured. However, it can be said that with allegedly over 300 sex workers in Oberhausen, a red light scene large compared to the population is represented."
			},
			de: {
				title: 'Oberhausen',
				text: "In Oberhausen in NRW herrscht eine ausgelassene Stimmung. Sexpositivität und Freizügigkeit sind dort keine neuen Phänomene. Denn die altehrwürdige Ruhrstadt weiß schon immer durch ihr lockeres Lebensgefühl zu erfreuen. Typisch für den 'Pott' ist es zu den größeren Nachbarstädten nicht weit, daher fehlt es in Oberhausen an absolut nichts, auch nicht in Sachen Sex und Erotik. Schaut man auf die absoluten Zahlen in unserer Erhebung, dann zählt Oberhausen kaum Etablissements wie Bordelle oder Swingerclubs, aber das ist ja selbstverständlich nicht der einzige Parameter an dem sich Sexpositivität bemisst. Festhalten kann man allerdings, dass mit angeblich über 300 SexarbeiterInnen in Oberhausen eine im Vergleich zur Einwohnerzahl große Rotlicht-Szene lokal vertreten ist."
			}
		},

		Rostock: {
			finalRanking: 12,
			sexShops: 3,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 3,
			brothels: 4,
			sexWorkers: 39,
			sexWorkOrg: 2,
			sexHealth: 5,
			hiv: 0,
			population: '209,000',
			en: {
				title: 'Rostock',
				text: "As the largest city in the state of Mecklenburg-Western Pomerania and due to its direct location on the Baltic Sea, the Hanseatic city of Rostock attracts visitors from near and far. Rostock is a city with a maritime flair and history. The historic old town was extensively restored and tastefully staged. As a university city, Rostock is now attracting a varied artistic and cultural milieu. If you want to relax directly on the water, you are the right place in nearby warning. Here are the most beautiful seaside resorts of the Baltic Sea coast. But even if you want to go on a sexual discovery tour, you will find it in Rostock. With 3 sex shops there is a large selection to spice up your own sex life. And with 5 organizations and institutions that are committed to the sexual education, the topic of health is not neglected."
			},
			de: {
				title: 'Rostock',
				text: "Als größte Stadt des Bundeslandes Mecklenburg-Vorpommern und aufgrund ihrer direkten Lage an der Ostsee, zieht die Hansestadt Rostock Besucher von nah und fern an. Rostock ist eine Stadt mit maritimem Flair und Geschichte. Die historische Altstadt wurde aufwendig restauriert und geschmackvoll in Szene gesetzt. Als Universitätsstadt zieht Rostock mittlerweile ein abwechslungsreiches künstlerisches wie kulturelles Milieu an. Wer sich direkt am Wasser entspannen möchte, der ist im nahgelegenen Warnemünde genau richtig. Hier befinden sich die schönsten Badeorte der Ostseeküste. Doch auch wer auf sexuelle Entdeckungstour gehen möchte, wird in Rostock sicher fündig. Mit 3 Sexshops gibt es eine große Auswahl, um das eigene Sexleben aufzupeppen. Und mit 5 Organisationen und Einrichtungen, die sich der der sexuellen Aufklärung verschrieben haben, kommt auch das Thema Gesundheit nicht zu kurz."
			}
		},

		Kassel: {
			finalRanking: 38,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 1,
			lgbtBars: 1,
			brothels: 11,
			sexWorkers: 174,
			sexWorkOrg: 2,
			sexHealth: 1,
			hiv: 0,
			population: '201,000',
			en: {
				title: 'Kassel',
				text: "Kassel is a city that should never be underestimated. Because even due to its geographical location, far east of the Ruhr area, far west of Leipzig, far north of Frankfurt, far south of Hanover, Kassel is the urban catchment area for an above -average area. So if you want to have enough of country life and ensure that you can find like -minded people for unusual projects, you are on your way to Kassel. In terms of eroticism and sexual freedom of movement, the city does not have to hide, even if it is not one of the centers in Germany when it comes to sex positivity. Nevertheless, Kassel rightly lands in this ranking and is always worth a visit."
			},
			de: {
				title: 'Kassel',
				text: "Kassel ist eine Stadt, die man nie unterschätzen sollte. Denn bereits durch seine geographische Lage, weit östlich des Ruhrgebiets, weit westlich von Leipzig, weit nördlich von Frankfurt, weit südlich von Hannover, ist Kassel das urbane Einzugsgebiet für eine überdurchschnittlich große Fläche. Wer dort in der Gegend also genug hat vom Landleben und sichergehen möchte, auch für ausgefallene Vorhaben Gleichgesinnte zu finden, der macht sich auf den Weg nach Kassel. In Sachen Erotik und sexueller Freizügigkeit muss sich die Stadt daher keineswegs verstecken, auch wenn sie beim Thema Sexpositivität nicht zu den Zentren in Deutschland gehört. Trotzdem landet Kassel zu Recht in diesem Ranking und ist immer einen Besuch wert."
			}
		},

		Hagen: {
			finalRanking: 43,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 5,
			sexWorkers: 90,
			sexWorkOrg: 1,
			sexHealth: 3,
			hiv: 0,
			population: '188,000',
			en: {
				title: 'Hagen',
				text: "The city of Hagen in NRW also successfully made it into our ranking. Located a little south of Dortmund, the loose and open way of life of the Ruhr area is to be felt there. No wonder that a sex -positive lifestyle can also be realized in Hagen. However, because the city does not yet have two hundred thousand residents, institutionalized places such as gaybars, brothels etc. are hardly available, which explains the placement in the back of this list. Nevertheless, it is definitely an award to be here at all and Hagen can do it with flying colors. By the way, there should be almost 100 sex workers in the city, so someone should say that nothing would be going on in Hagen."
			},
			de: {
				title: 'Hagen',
				text: "Auch die Stadt Hagen in NRW hat es erfolgreich in unser Ranking geschafft. Etwas südlich von Dortmund gelegen, ist die lockere und offene Lebensart des Ruhrgebiets bis dort hin zu spüren. Kein Wunder also, dass sich auch in Hagen ein sexpositiver Lifestyle durchaus verwirklichen lässt. Weil die Stadt aber noch nicht ganz Zweihunderttausend EinwohnerInnen hat, sind institutionalisierte Orte wie Gaybars, Bordelle etc. kaum vorhanden, was die Platzierung im hinteren Feld dieser Liste erklärt. Trotzdem aber ist es durchaus eine Auszeichnung, überhaupt hier mit dabei zu sein und Hagen schafft dies mit Bravour. Fast 100 Sexarbeitende soll es übrigens geben in der Stadt, da soll mal einer noch sagen, in Hagen wäre nichts los."
			}
		},

		Potsdam: {
			finalRanking: 40,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 1,
			brothels: 0,
			sexWorkers: 163,
			sexWorkOrg: 0,
			sexHealth: 4,
			hiv: 0,
			population: '182,000',
			en: {
				title: 'Potsdam',
				text: "Potsdam lies beautifully surrounded by lots of water and can rightly be referred to as one of the most beautiful cities all over Germany. The partly pompous building structure and the direct closeness to Berlin make Potsdam a particularly livable city, where world's property can be easily combined with living in the countryside. Numerous castles and architectural remains of noble history decorate the largest city of Brandenburg's population. With regard to erotic liberality and sex positivity, Potsdam feels very far ahead, but cannot place itself in the top field due to the statistical numbers. Nevertheless, Potsdam naturally appears here in this ranking and surrounds its residents and visitors with a very special charm, which is difficult to find in Germany a second time."
			},
			de: {
				title: 'Potsdam',
				text: "Potsdam liegt wunderschön umgeben von viel Wasser und kann völlig zu Recht als eine der schönsten Städte in ganz Deutschland bezeichnet werden. Die teils pompöse Baustruktur sowie die direkte Nähe zu Berlin, machen Potsdam zu einer ganz besonders lebenswerten Stadt, wo Weltgewandheit mit Wohnen im Grünen problemlos vereint werden kann. Zahlreiche Schlösschen und architektonische Überbleibsel adliger Geschichte schmücken die nach Einwohnerzahlen größte Stadt Brandenburgs. Bezüglich erotischer Liberalität und Sexpositivität spielt Potsdam gefühlt sehr weit vorne mit, kann sich aufgrund der statistischen Zahlen aber nicht im Spitzenfeld platzieren. Trotzdem aber erscheint Potsdam selbstverständlich hier in diesem Ranking und umgarnt seine BewohnerInnen und BesucherInnen mit einem ganz besonderen Charme, den man in Deutschland so nur schwer ein zweites Mal finden wird."
			}
		},

		Saarbrücken: {
			finalRanking: 19,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 2,
			brothels: 21,
			sexWorkers: 243,
			sexWorkOrg: 1,
			sexHealth: 3,
			hiv: 0,
			population: '179,000',
			en: {
				title: 'Saarbrücken',
				text: "Saarbrücken is the state capital of the Saarland, the smallest federal state in Germany. But one thing is certain: Saarbrücken does not have to hide behind other major cities. Even though it cannot keep up with cities like Berlin or Hamburg with its 179,000 inhabitants, there is still a lot to discover in Saarbrücken. A baroque lock, a UNESCO World Heritage Site, and lots of royal architecture-a visit to Saarbrücken is full of surprises. And even in our ranking, the city surprisingly cuts off (sex) positively."
			},
			de: {
				title: 'Saarbrücken',
				text: "Saarbrücken ist die Landeshauptstadt des Saarlandes, dem kleinsten Flächenbundesland Deutschlands. Doch fest steht: Saarbrücken muss sich keineswegs hinter anderen Großstädten verstecken. Auch wenn es mit seinen 179.000 Einwohnern größentechnisch natürlich nicht mit Metropolen wie Berlin oder Hamburg mithalten kann, gibt es in Saarbrücken dennoch vieles zu entdecken. Ein Barockschloss, ein UNESCO-Weltkulturerbe, und jede Menge royale Architektur – ein Besuch in Saarbrücken steckt voller Überraschungen. Und auch in unserem Ranking schneidet die Stadt überraschend (sex-)positiv ab."
			}
		},

		Hamm: {
			finalRanking: 46,
			sexShops: 0,
			swingerClubs: 0,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 1,
			brothels: 8,
			sexWorkers: 114,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 0,
			population: '178,000',
			en: {
				title: 'Hamm',
				text: "Hamm is located a few kilometers northeast of Dortmund in North Rhine-Westphalia. In the region, the city is primarily known for its zoo and the MaximilianSpark with its impressive elephant building. Hamm is still officially part of the Ruhr area and it is no wonder that there is the typical loose-liberal lifestyle of the Ruhr region there too. According to our statistics, there should be 5 brothels or brothel -like facilities there and just over 100 sex workers are probably active in the city. It seems as if the freedom -loving people are found in Hamm, who have become too loud and full in the larger Ruhr cities. So Hamm is a good example of the fact that it can also be sex positive in medium -sized cities."
			},
			de: {
				title: 'Hamm',
				text: "Hamm liegt einige Kilometer nordöstlich von Dortmund in Nordrhein-Westfalen. Die Stadt ist in der Region vor allem für ihren Tierpark und den Maximilianspark mit seinem eindrucksvollen Elefantengebäude bekannt. Hamm gehört noch offiziell zum Ruhrgebiet und da ist es kein Wunder, dass auch dort das typische locker-liberale Lebensgefühl der Ruhrregion herrscht. Laut unserer Statistik soll es dort übrigens 5 Bordelle oder bordellähnliche Einrichtungen geben und knapp über 100 SexarbeiterInnen sind wohl in der Stadt tätig. Es scheint, als finden sich vorallem die freiheitsliebenden Menschen in Hamm wieder, denen es in den größeren Ruhrstädten zu laut und voll geworden ist. Hamm ist also ein gutes Beispiel dafür, dass es auch in mittelgroßen Städten sexpositiv zugehen kann."
			}
		},

		Ludwigshafen: {
			finalRanking: 44,
			sexShops: 1,
			swingerClubs: 2,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 5,
			sexWorkers: 214,
			sexWorkOrg: 0,
			sexHealth: 3,
			hiv: 0,
			population: '172,000',
			en: {
				title: 'Ludwigshafen',
				text: "You wouldn't have thought to find Ludwigshafen here in this ranking? You can see that after all, Ludwigshafen is the largest city in the Palatinate. And nobody has said that it would not be cheerful in the Palatinate. In addition, the neighboring town of Mannheim has surprisingly positioned itself very high in this comparison - and that also seems to be colored down at Ludwigshafen, albeit not too much. In LGBT culture does not seem to have very much pretended in the industrial city, but at least five brothels and probably over 200 sex workers raise the cut. In any case, Ludwigshafen is a good example of the fact that appearance often likes to be deceptive."
			},
			de: {
				title: 'Ludwigshafen',
				text: "Ihr hättet nicht gedacht, Ludwigshafen hier in diesem Ranking wiederzufinden? Da kann man mal sehen, immerhin ist Ludwigshafen die größte Stadt der Pfalz. Und dass es in der Pfalz nicht heiter zugehen würde, hat wahrscheinlich noch keiner gesagt. Außerdem hat sich die Nachbarstadt Mannheim überraschend sehr weit oben in diesem Vergleich positioniert - und das scheint auch auf Ludwigshafen abzufärben, wenn auch nicht allzu stark. An LGBT-Kultur scheint sich nicht besonders viel vorgetan zu haben in der Industriestadt aber immerhin fünf Bordelle und wohl über 200 SexarbeiterInnen heben den Schnitt. Auf jeden Fall ist Ludwigshafen ein gutes Beispiel dafür, dass der Schein so manches Mal gerne trügt. "
			}
		},

		Mülheim: {
			finalRanking: 50,
			sexShops: 0,
			swingerClubs: 0,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 1,
			sexWorkers: 381,
			sexWorkOrg: 0,
			sexHealth: 1,
			hiv: 0,
			population: '171,000',
			en: {
				title: 'Mülheim an der Ruhr',
				text: "Mülheim an der Ruhr in North Rhine-Westphalia, as the name suggests, is located directly in the Ruhr area. The city worth living in is often wrong in the shade of its larger neighbors, but knows how to convince with their own stimuli. Numerous other Ruhr cities, which are represented in this ranking, prove that sex positivity in the Ruhr region is not a foreign word. Due to the smaller size of Mülheim, it is only enough for a positioning in the lower area of ​​this list, but this should not change anything about the sex -positive image of Mülheim, after all, it is already a considerable success to have made it into this TOP50 at all. So dear Mülheim: everything was done right."
			},
			de: {
				title: 'Mülheim an der Ruhr',
				text: "Mülheim an der Ruhr in Nordrhein-Westfalen liegt, wie der Name bereits nahelegt, direkt im Ruhrgebiet. Die lebenswerte Stadt steht oftmals ganz zu Unrecht im Schatten ihrer größeren Nachbarinnen, weiß aber durch eigene Reize durchaus zu überzeugen. Dass Sexpositivität in der Ruhrregion kein Fremdwort ist, beweisen zahlreiche weitere Ruhrstädte, die in diesem Ranking vertreten sind. Aufgrund der kleineren Größe von Mülheim reicht es nach Punkten nur zu einer Positionierung im unteren Bereich dieser Liste, allerdings soll dies nichts am sexpositiven Image von Mülheim ändern, schließlich ist es bereits ein beachtlicher Erfolg, es überhaupt in diese Top50 geschafft zu haben. Also liebes Mülheim: alles richtig gemacht."
			}
		},

		Oldenburg: {
			finalRanking: 31,
			sexShops: 1,
			swingerClubs: 1,
			gayPrides: 1,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 9,
			sexWorkers: 215,
			sexWorkOrg: 0,
			sexHealth: 4,
			hiv: 0,
			population: '169,000',
			en: {
				title: 'Oldenburg',
				text: "The beautiful Oldenburg knows to delight - and this does not only apply to the beautiful old town with its lovable historical architecture. It is especially the warm people who make the city so worth living and contribute to a pleasantly liberal climate. You don't need to search for sex positiveness there because it simply belongs and because it is allowed. There is probably only one sex shop and only a swinger club but probably over 200 sex workers who are suitable for all those who have no time or desire to look for like-minded people on the dating market. It is also easy in Oldenburg to find companions for sex -positive projects of all kinds through the relevant dating apps."
			},
			de: {
				title: 'Oldenburg',
				text: "Das schöne Oldenburg weiß zu entzücken - und das gilt nicht nur für die wunderschöne Altstadt mit ihrer liebenswerten historischen Architektur. Es sind besonders die herzlichen Menschen, welche die Stadt so lebenswert machen und zu einem angenehm liberalen Klima beitragen. Sexpositivität braucht man dort gar nicht direkt zu suchen, weil sie einfach dazugehört und weil erlaubt ist was gefällt. Es gibt dort wahrscheinlich nur einen Sexshop und nur einen Swingerclub aber wohl über 200 SexarbeiterInnen, welche für all diejenigen in Frage kommen, die keine Zeit oder Lust haben, sich auf dem Dating-Markt nach Gleichgesinnten umzusehen. Dabei ist es auch in Oldenburg ganz leicht heutzutage, über die einschlägigen Datingapps BegleiterInnen für sexpositive Vorhaben aller Art zu finden."
			}
		},

		Osnabrück: {
			finalRanking: 4,
			sexShops: 2,
			swingerClubs: 0,
			gayPrides: 2,
			lbgtEvents: 1,
			lgbtBars: 3,
			brothels: 6,
			sexWorkers: 176,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 1,
			population: '164,000',
			en: {
				title: 'Osnabrück',
				text: "Osnabrück is a city with historical importance: In 1648, the Westphalian peace was closed here after thirty years of war, one of the most important peace treaties in Europe. Osnabrück still bears the nickname 'Friedensstadt' today. The lively city center attracts visitors from near and far. For many, the fact that Osnabrück takes a top position in our ranking seems very surprising for many. As one of the most sex -positive cities in Germany, Osnabrück probably had no one on the bill. But a look at the data situation shows: Measured on the population, the city has a lot of sex-positive lifestyle to offer. In addition to LGBTIQ* and Gay Pride events and localities, Osnabrück convinces primarily because of a large sex worker scene. And the local sex shops also cause a lot of momentum in the bed of the Osnabrückers."
			},
			de: {
				title: 'Osnabrück',
				text: "Osnabrück ist eine Stadt mit historischer Bedeutung: Im Jahr 1648 wurde hier nach dreißig jährigem Krieg der Westfälische Friede geschlossen, einer der wichtigsten Friedensverträge Europas. Noch heute trägt Osnabrück daher den Beinamen „Friedensstadt“. Die lebendige Innenstadt zieht Besucher von nah und fern an. Dass Osnabrück einen Spitzenplatz in unserem Ranking belegt, scheint für viele zunächst sehr überraschend. Als eine der sexpositivsten Städte Deutschlands hatte Osnabrück wohl niemand auf der Rechnung. Doch ein Blick in die Datenlage zeigt: Gemessen an der Einwohnerzahl hat die Stadt jede Menge sex-positiven Lifestyle zu bieten. Neben LGBTIQ* und Gay Pride-Events und Lokalitäten überzeugt Osnabrück vor allem aufgrund einer großen Sexarbeiterszene. Und auch die örtlichen Sexshops sorgen für ordentlich Schwung im Bett der Osnabrückerinnen und Osnabrücker."
			}
		},

		Leverkusen: {
			finalRanking: 48,
			sexShops: 1,
			swingerClubs: 0,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 2,
			sexWorkers: 88,
			sexWorkOrg: 0,
			sexHealth: 2,
			hiv: 0,
			population: '163,000',
			en: {
				title: 'Leverkusen',
				text: "Leverkusen in North Rhine-Westphalia is close to Cologne and has always delighted everyone and everyone who is drawn to this city with a relaxed way of life. Typical for the area around the Rhine and Ruhr, conservative bourgeoisiness is a rarely seen property of people. This is exactly why Leverkusen should not be missing in this ranking, even if, according to points, it is not enough to placement above. But that will not bother anyone in Leverkusen, there you know what you have and do not have to compare yourself with others. It doesn't even seem so unlikely that there were already sex positivity in Leverkusen before the actual term came up."
			},
			de: {
				title: 'Leverkusen',
				text: "Leverkusen in NRW liegt nah bei Köln und erfreut seit jeher mit einer locker-heiteren Lebensart jeden und jede, die es für einige Zeit in diese Stadt zieht. Ganz typisch für die Gegend um Rhein und Ruhr ist konservative Spießigkeit eine dort selten gesehene Eigenschaft der Menschen. Genau darum darf Leverkusen in diesem Ranking nicht fehlen, auch wenn es nach Punkten nicht zu einer Platzierung weiter oben reicht. Aber das wird niemanden in Leverkusen stören, dort weiß man schließlich was man hat und muss sich nicht zwanghaft mit anderen vergleichen. Es erscheint gar nicht mal so unwahrscheinlich, dass es bereits Sexpositivität in Leverkusen gab, bevor der eigentliche Begriff dafür aufkam."
			}
		},

		Solingen: {
			finalRanking: 49,
			sexShops: 0,
			swingerClubs: 1,
			gayPrides: 0,
			lbgtEvents: 0,
			lgbtBars: 0,
			brothels: 4,
			sexWorkers: 79,
			sexWorkOrg: 0,
			sexHealth: 1,
			hiv: 0,
			population: '159,000',
			en: {
				title: 'Solingen',
				text: "Solingen in NRW is located in the Dreieck Düsseldorf/Wuppertal/Leverkusen, i.e. in the best location and neighborhood. Rhenish joie de vivre mixes there with the charming lightness of the Ruhr area. What more you want for a good life and no wonder that under such excellent conditions, sex -positive conditions can flourish. Therefore, Solingen clearly manages to our ranking, but because of the strong competition in the lower seats. But what should you also strive for the rank of a top dog if you already have everything you need for an entertaining and erotically balanced existence? Just. Feel free to go to Solingen and convince yourself."
			},
			de: {
				title: 'Solingen',
				text: "Solingen in NRW liegt im Dreieck Düsseldorf/Wuppertal/Leverkusen, d.h. in bester Lage und Nachbarschaft. Rheinische Lebensfreude mischt sich dort mit der charmanten Leichtigkeit des Ruhrgebiets. Was will man mehr für ein gutes Leben und kein Wunder, dass unter solchen hervorragenden Bedingungen auch sexpositive Verhältnisse florieren können. Daher schafft es Solingen noch klar in unser Ranking, wegen der starken Konkurrenz allerdings auf den unteren Plätzen. Aber wozu sollte man auch den Rang eines Platzhirsches erstreben, wenn man bereits alles hat, was es für ein unterhaltsames und erotisch ausgewogenes Dasein braucht? Eben. Fahrt gerne nach Solingen und überzeugt euch selbst."
			}
		},
	};


	$('.table-contain').find('tr:not(.noclick)').on('click', function (e) {
		e.preventDefault();

		var self = $(this);

		var target = self.attr('data-country');

		generateCityInformation(target);

		var maxHeight = $('.country-info').outerHeight();



		$('g[data-target]').removeClass('active');
		$('g[data-target=' + target + ']').addClass('active');


		if ($('.country-info').length > 0) {


			$('.data-section .table-container').css({
				'height': maxHeight,
				'overflow-x': 'hidden'
			});

			$('.country-info').addClass('active');

			$('.table-container').scrollLeft(0).addClass('country-overlay-open');
			$('.expand-control').css('display', 'none');


		}


		scrollToTable();

	});







	function generateCityInformation(city) {
		var lang = $('html').attr('lang');

		var cityInfo = $('.country-info');

		cityInfo.find('h2').text('');
		//cityInfo.find('.stat-value').text('');
		cityInfo.find('.country-info-text').empty();



		var title;
		var population = cities[city].population;
		var finalRanking = cities[city].finalRanking;
		var sexShops = cities[city].sexShops;
		var swingerClubs = cities[city].swingerClubs;
		var gayPrides = cities[city].gayPrides;
		var lbgtEvents = cities[city].lbgtEvents;
		var lgbtBars = cities[city].lgbtBars;
		var brothels = cities[city].brothels;
		var sexWorkers = cities[city].sexWorkers;
		var sexWorkOrg = cities[city].sexWorkOrg;
		var sexHealth = cities[city].sexHealth;
		var hiv = cities[city].hiv;
		var text;

		var stat = '';

		if (lang == 'de') {
			title = cities[city].de.title;
			text = cities[city].de.text;
		} else {
			title = cities[city].en.title;
			text = cities[city].en.text;
		}


		cityInfo.find('h2').text(title);
		cityInfo.find('.country-info-text').html(text);

		cityInfo.find('.stat-value[data-population]').text(population);
		cityInfo.find('.stat-value[data-finalranking]').text(finalRanking);
		cityInfo.find('.stat-value[data-sexshops]').text(sexShops);
		cityInfo.find('.stat-value[data-swingerclubs]').text(swingerClubs);
		cityInfo.find('.stat-value[data-gayprides]').text(gayPrides);
		cityInfo.find('.stat-value[data-lgbtevents]').text(lbgtEvents);
		cityInfo.find('.stat-value[data-lgbtbars]').text(lgbtBars);
		cityInfo.find('.stat-value[data-brothels]').text(brothels);
		cityInfo.find('.stat-value[data-sexworkers]').text(sexWorkers);
		cityInfo.find('.stat-value[data-sexworkorg]').text(sexWorkOrg);
		cityInfo.find('.stat-value[data-sexhealth]').text(sexHealth);
		cityInfo.find('.stat-value[data-hiv]').text(hiv);


	}


	function closeCityInformation() {
		$('g[data-target]').removeClass('active');
		$(this).parents('.country-info').removeClass('active');

		$('.country-info.active').removeClass('active');
		$('.table-container').attr('style', '').removeClass('country-overlay-open');
		$('.expand-control').css('display', 'flex');
	}


	$('g[data-target]').on('click', function (e) {
		e.preventDefault();

		var self = $(this);

		var target = self.attr('data-target');

		generateCityInformation(target);

		var maxHeight = $('.country-info').outerHeight();


		if (self.hasClass('active')) {
			$('g[data-target]').removeClass('active');
			self.removeClass('active');
		} else {
			$('g[data-target]').removeClass('active');
			self.addClass('active');
		}



		$('.data-section .table-container').css({
			'height': maxHeight,
			'overflow-x': 'hidden'
		});



		$('.country-info').addClass('active');

		$('.table-container').scrollLeft(0).addClass('country-overlay-open');
		$('.expand-control').css('display', 'none');

		scrollToTable();

	});


	$('.country-close-trigger').on('click', function (e) {
		e.preventDefault();

		closeCityInformation();
	});

	$('.map-scale .overlay-close').on('click', function (e) {
		e.preventDefault();

		$(this).parents('.map-scale').removeClass('active');

		closeCityInformation();
	});



	$('.table-control').on('change', function (e) {
		var target = $(this).val();
		var count = 0;



		$('.table-contain.active').removeClass('active');
		$('.table-contain.' + 'table-' + target).addClass('active');

		$('.map-visual').find('svg').each(function () {
			var self = $(this);

			if (target == 'overall') {
				self.find('g').removeClass();
			} else {
				self.find('g[data-' + target + ']').removeClass();
				self.find('g[data-' + target + ']').addClass('active-' + target);
			}


		});
	});



	$('.st0').on('click', function (e) {
		e.preventDefault();
		var minimapBounding = $('.st0')[0].getBoundingClientRect();
		var mapScaleBounding = $('.map-scale-container')[0].getBoundingClientRect();

		var minimapParams = {
			width: Math.round(minimapBounding.width),
			height: Math.round(minimapBounding.height),
		}

		var mapScaleParams = {
			width: Math.round(mapScaleBounding.width),
			height: Math.round(mapScaleBounding.height),
		}

		var coord = {
			x: e.offsetX,
			y: e.offsetY
		}

		console.log(minimapParams)
		console.log(mapScaleParams)


		var mapScaleWidthPercent = coord.x * 100 / minimapParams.width
		var mapScaleHeightPercent = coord.y * 100 / minimapParams.height
		var newPercent = mapScaleHeightPercent >= 45 ? mapScaleHeightPercent * 1.8 : mapScaleHeightPercent

		var transform = {
			x: mapScaleParams.width / 100 * mapScaleWidthPercent,
			y: mapScaleParams.height / 100 * newPercent
		}

		if (html < 768) {
			if (mapScaleWidthPercent < 50) {
				transform.x *= 1.5
			} else if (mapScaleWidthPercent >= 50 && mapScaleWidthPercent < 70) {
				transform.x *= 2
			} else if (mapScaleWidthPercent >= 70) {
				transform.x *= 2.5
			}

			if (mapScaleHeightPercent < 30) {
				transform.y *= 1
			} else if (mapScaleHeightPercent >= 30) {
				transform.y *= 1.5
			}

			$('.map-scale-container')[0].scrollTo(transform.x, transform.y)
		} else {
			gsap.set($('.map-mobile'), { x: -transform.x, y: -transform.y })
		}

		$('.map-scale').addClass('active');
		$('.js-close-zoom-map-btn').addClass('is-visible');
	});

	$('.js-close-zoom-map-btn').on('click', function (e) {
		e.preventDefault();
		$('.map-scale').removeClass('active');
		$(this).removeClass('is-visible');
	});


	if (html < 768) {

		var mapHeight = $('.map-scale-container svg').innerHeight();


		$('.map-scale-container').scrollTop((mapHeight - 450) / 2);


	} else {
		Draggable.create('.map-mobile', {
			bounds: '.map-scale-container',
			inertia: true
		});
	}

	// $('.js-zoom-map-btn').on('click', function(e) {
	// 	e.preventDefault();
	// 	$(this).toggleClass('is-active');
	// 	$('.map-scale').toggleClass('active');
	// });


	$('.btn-back').on('click', function (e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.fullscreen').removeClass('active');


	});


	$('.ano-footer__title').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('active');

		$(this).next('.ano-footer-menu').stop().slideToggle(150);
	});



	var lazyLoadInstance = new LazyLoad({});



	setTimeout(function () {
		$('body').addClass('is-loaded');
	}, 1200);



});
