// Cookies from this list are blocked by default
const defaultSites = {
  'Adweek': 'adweek.com',
  'Algemeen Dagblad': 'ad.nl',
  '\u00C1mbito': 'ambito.com',
  'American Banker': 'americanbanker.com',
  'Baltimore Sun': 'baltimoresun.com',
  'Barron\'s': 'barrons.com',
  'Bloomberg': 'bloomberg.com',
  'Bloomberg Quint (free articles only)': 'bloombergquint.com',
  'BN De Stem': 'bndestem.nl',
  'Boston Globe': 'bostonglobe.com',
  'Brabants Dagblad': 'bd.nl',
  'Brisbane Times': 'brisbanetimes.com.au',
  'Business Insider': 'businessinsider.com',
  'Caixin': 'caixinglobal.com',
  'Central Western Daily': 'centralwesterndaily.com.au',
  'Chemical & Engineering News': 'cen.acs.org',
  'Chicago Tribune': 'chicagotribune.com',
  'Corriere Della Sera': 'corriere.it',
  'Crain\'s Chicago Business': 'chicagobusiness.com',
  'Daily Press': 'dailypress.com',
  'De Gelderlander': 'gelderlander.nl',
  'De Groene Amsterdammer': 'groene.nl',
  'DeMorgen': 'demorgen.be',
  'Denver Post': 'denverpost.com',
  'De Speld': 'speld.nl',
  'De Stentor': 'destentor.nl',
  'De Tijd': 'tijd.be',
  'de Volkskrant': 'volkskrant.nl',
  'Diario Financiero': 'df.cl',
  'Domani': 'editorialedomani.it',
  'Dynamed Plus': 'dynamed.com',
  'Eindhovens Dagblad': 'ed.nl',
  'El Mercurio': 'elmercurio.com',
  'El Mundo': 'elmundo.es',
  'El Pais': 'elpais.com',
  'El Periodico': 'elperiodico.com',
  'Elu24': 'elu24.ee',
  'Encyclopedia Britannica': 'britannica.com',
  'Estadão': 'estadao.com.br',
  'Examiner': 'examiner.com.au',
  'Expansión': 'expansion.com',
  'Financial News': 'fnlondon.com',
  'Financial Post':'financialpost.com',
  'Financial Times': 'ft.com',
  'First Things': 'firstthings.com',
  'Foreign Affairs': 'Foreign Affairs',
  'Foreign Policy': 'foreignpolicy.com',
  'Fortune': 'fortune.com',
  'Genomeweb': 'genomeweb.com',
  'Glassdoor': 'glassdoor.com',
  'Globes': 'globes.co.il',
  'Grubstreet' : 'grubstreet.com',
  'Haaretz English': 'haaretz.com',
  'Haaretz': 'haaretz.co.il',
  'Handelsblatt': 'handelsblatt.com',
  'Harper\'s Magazine': 'harpers.org',
  'Hartford Courant': 'courant.com',
  'Harvard Business Review': 'hbr.org',
  'Herald Sun': 'heraldsun.com.au',
  'Het Financieele Dagblad': 'fd.nl',
  'History Extra': 'historyextra.com',
  'Humo': 'humo.be',
  'Il Manifesto': 'ilmanifesto.it',
  'Inc.com': 'inc.com',
  'Interest NZ': 'interest.co.nz',
  'Investors Chronicle': 'investorschronicle.co.uk',
  'La Nacion': 'lanacion.com.ar',
  'La Repubblica': 'repubblica.it',
  'La Stampa': 'lastampa.it',
  'La Tercera': 'latercera.com',
  'La Voix du Nord': 'lavoixdunord.fr',
  'L\'Echo': 'lecho.be',
  'Le Devoir': 'ledevoir.com',
  'Le Parisien': 'leparisien.fr',
  'Les Echos': 'lesechos.fr',
  'Loeb Classical Library': 'loebclassics.com',
  'London Review of Books': 'lrb.co.uk',
  'Los Angeles Business Journal': 'labusinessjournal.com',
  'Los Angeles Times': 'latimes.com',
  'Market Chameleon': 'marketchameleon.com',
  'Medium': 'medium.com',
  'Medscape': 'medscape.com',
  'Mexico News Daily': 'mexiconewsdaily.com',
  'MIT Sloan Management Review': 'sloanreview.mit.edu',
  'MIT Technology Review': 'technologyreview.com',
  'Mountain View Voice': 'mv-voice.com',
  'National Geographic': 'nationalgeographic.com',
  'National Post': 'nationalpost.com',
  'Neue Zürcher Zeitung': 'nzz.ch',
  'New Statesman': 'newstatesman.com',
  'New York Daily News': 'nydailynews.com',
  'New York Magazine': 'nymag.com',
  'New Zealand Herald': 'nzherald.co.nz',
  'NRC': 'nrc.nl',
  'NT News': 'ntnews.com.au',
  'Orange County Register': 'ocregister.com',
  'Orlando Sentinel': 'orlandosentinel.com',
  'Palo Alto Online': 'paloaltoonline.com',
  'Parool': 'parool.nl',
  'Postimees': 'postimees.ee',
  'PZC': 'pzc.nl',
  'Quartz (free articles only)': 'qz.com',
  'Quora': 'quora.com',
  'Quotidiani Gelocal': 'gelocal.it',
  'Republic.ru': 'republic.ru',
  'Reuters': 'reuters.com',
  'San Diego Union Tribune': 'sandiegouniontribune.com',
  'San Francisco Chronicle': 'sfchronicle.com',
  'Scientific American': 'scientificamerican.com',
  'Seeking Alpha': 'seekingalpha.com',
  'Slate': 'slate.com',
  'SOFREP': 'sofrep.com',
  'Star Tribune': 'startribune.com',
  'Statista': 'statista.com',
  'Stuff': 'stuff.co.nz',
  "Süddeutsche Zeitung": "sueddeutsche.de",
  'SunSentinel': 'sun-sentinel.com',
  'Tech in Asia': 'techinasia.com',
  'Telegraaf': 'telegraaf.nl',
  'Time': 'time.com',
  'The Advertiser': 'adelaidenow.com.au',
  'The Advocate': 'theadvocate.com.au',
  'The Age': 'theage.com.au',
  'The American Interest': 'the-american-interest.com',
  'The Atlantic': 'theatlantic.com',
  'The Australian Financial Review': 'afr.com',
  'The Australian': 'theaustralian.com.au',
  'The Business Journals': 'bizjournals.com',
  'The Canberra Times': 'canberratimes.com.au',
  'The Courier': 'thecourier.com.au',
  'The Courier Mail': 'couriermail.com.au',
  'The Cut': 'thecut.com',
  'The Daily Telegraph': 'dailytelegraph.com.au',
  'The Diplomat': 'thediplomat.com',
  'The Economist': 'economist.com',
  'The Globe and Mail': 'theglobeandmail.com',
  'The Herald': 'theherald.com.au',
  'The Hindu': 'thehindu.com',
  'The Irish Times (free articles only)': 'irishtimes.com',
  'The Japan Times': 'japantimes.co.jp',
  'The Kansas City Star': 'kansascity.com',
  'TheMarker': 'themarker.com',
  'The Mercury News': 'mercurynews.com',
  'The Mercury Tasmania': 'themercury.com.au',
  'The Morning Call': 'mcall.com',
  'The Nation': 'thenation.com',
  'The National': 'thenational.scot',
  'The News-Gazette': 'news-gazette.com',
  'The New Yorker': 'newyorker.com',
  'The New York Times': 'nytimes.com',
  'The Philadelphia Inquirer': 'inquirer.com',
  'The Saturday Paper': 'thesaturdaypaper.com.au',
  'The Seattle Times': 'seattletimes.com',
  'The Spectator Australia': 'spectator.com.au',
  'The Spectator (U.K.)': 'spectator.co.uk',
  'The Spectator (U.S.)': 'spectator.us',
  'The Sydney Morning Herald': 'smh.com.au',
  'The Telegraph': 'telegraph.co.uk',
  'The Toronto Star': 'thestar.com',
  'The Wall Street Journal': 'wsj.com',
  'The Washington Post': 'washingtonpost.com',
  'The Wrap': 'thewrap.com',
  'Times Literary Supplement': 'the-tls.co.uk',
  'Towards Data Science': 'towardsdatascience.com',
  'Trouw': 'trouw.nl',
  'Tubantia': 'tubantia.nl',
  'Vanity Fair': 'vanityfair.com',
  'Vrij Nederland': 'vn.nl',
  'Vulture': 'vulture.com',
  'Winston-Salem Journal': 'journalnow.com',
  'Wired': 'wired.com',
  'World Politics Review': 'worldpoliticsreview.com',
  'Zeit Online': 'zeit.de',
  '*General Paywall Bypass*': 'generalpaywallbypass'
};
