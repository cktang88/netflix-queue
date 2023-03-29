import { faker } from '@faker-js/faker'
const randomElement = arr => {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i];
}
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    let name = faker.name.fullName()
    let arr = randomElement(endings())
    let email = faker.internet.email(name.split(' ')[0], name.split(' ')[1], arr[0]).toLowerCase()
    let institution = arr[1]
    console.log(name, email)

    let role = randomElement(['Researcher', 'Professor', 'Student', 'Faculty', 'Senior Researcher', 'Postdoctoral Researcher', 'Research Scientist', 'Research Associate', 'Research Fellow', 'Research Assistant'])

    let body = `------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_109\"\r\n\r\n${name}\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_110\"\r\n\r\n${email}\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_111\"\r\n\r\n${role}\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_112\"\r\n\r\n${institution}\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_114\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_115\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_116\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"field_118[]\"\r\n\r\nI consent to Future of Life Institute storing my information for the functionality of this open letter\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_form_id\"\r\n\r\n9\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_hash\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_post_id\"\r\n\r\n46296\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_post_mode\"\r\n\r\nsubmit\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_hidden\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ\r\nContent-Disposition: form-data; name=\"wsf_bypass_required\"\r\n\r\n\r\n------WebKitFormBoundaryLV4Vb2PBSXZnfnyZ--\r\n`
    // console.log(body)
    fetch("https://futureoflife.org/wp-json/ws-form/v1/submit", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLV4Vb2PBSXZnfnyZ",
            "sec-ch-ua": "\"Chromium\";v=\"111\", \"Not(A:Brand\";v=\"8\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://futureoflife.org/open-letter/pause-giant-ai-experiments/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": body,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(e => e.json()).then(e => console.log(e)).catch(e => {
        console.log(e)
    })
}


function endings() {
    return `
aamu.edu: Alabama A&M University
ab.edu: Alderson Broaddus University
acu.edu: Abilene Christian University
adelphi.edu: Adelphi University
aic.edu: American International College
alaska.edu: University of Alaska System
alasu.edu: Alabama State University
albany.edu: University at Albany
albion.edu: Albion College
alfred.edu: Alfred University
allencol.edu: DeSales University
alma.edu: Alma College
alverno.edu: Alverno College
ambassador.edu: Ambassador College & University
american.edu: American University Washington D.C.
amherst.edu: Amherst College
andrews.edu: Andrews University
angelo.edu: Angelo State University
anselm.edu: Saint Anselm College
antioch.edu: Antioch University
antiochla.edu: Antioch University Los Angeles
antiochne.edu: Antioch University New England
appstate.edu: Appalachian State University
apsu.edu: Austin Peay State University
apu.edu: Azusa Pacific University
aquinas.edu: Aquinas College
arbor.edu: Spring Arbor University
arcadia.edu: Arcadia University
arizona.edu: The University of Arizona
armstrong.edu: Armstrong State University
artic.edu: The Art Institute of Chicago
ashland.edu: Ashland University
ashworthcollege.edu: Ashworth College
assumption.edu: Assumption College
astate.edu: Arkansas State University
asu.edu: Arizona State University
atu.edu: Arkansas Tech University
auburn.edu: Auburn University
auc.edu: Atlantic Union College
augie.edu: Augustana College
augsburg.edu: Augsburg College
augustana.edu: Augustana College
aum.edu: Auburn University at Montgomery
aurora.edu: Aurora University
averett.edu: Averett University
avila.edu: Avila University
babson.edu: Babson College
baker.edu: Baker College
bakeru.edu: Baker University
bard.edu: Bard College
barry.edu: Barry University
bastyr.edu: Bastyr University
bates.edu: Bates College
baylor.edu: Baylor University
bbc.edu: Baptist Bible College & Seminary
bc.edu: Boston College
bcm.edu: Baylor College of Medicine
beaver.edu: Arcadia University
belmont.edu: Belmont University
beloit.edu: Beloit College
ben.edu: Benedictine University
benedictine.edu: Benedictine College
bennington.edu: Bennington College
bentley.edu: Bentley University
berea.edu: Berea College
berkeley.edu: University of California, Berkeley
berklee.edu: Berklee College of Music
bethany.edu: Bethany University
bethel.edu: Bethel University Minnesota
bethelks.edu: Bethel College
bgsp.edu: Boston Graduate School of Psychoanalysis
bgsu.edu: Bowling Green State University
bgu.edu: Bakke Graduate University
bhsu.edu: Black Hills State University
binghamton.edu: Binghamton University
biola.edu: Biola University
bju.edu: Bob Jones University
bloomu.edu: Bloomsburg University of Pennsylvania
bluefieldstate.edu: Bluefield State College
bluffton.edu: Bluffton University
bowdoin.edu: Bowdoin College
bradley.edu: Bradley University
brandeis.edu: Brandeis University
brenau.edu: Brenau University
bridgemont.edu: Bridgemont Community & Technical College
bridgeport.edu: University of Bridgeport
bridgewater.edu: Bridgewater College
brockport.edu: The College at Brockport: State University of New York
brown.edu: Brown University
bryant.edu: Bryant University
brynmawr.edu: Bryn Mawr College
bsc.edu: Birmingham-Southern College
bsu.edu: Ball State University
bu.edu: Boston University
bucknell.edu: Bucknell University
buffalo.edu: University at Buffalo
butler.edu: Butler University
bvu.edu: Buena Vista University
byu.edu: Brigham Young University Provo
byuh.edu: Brigham Young University Hawaii
byui.edu: Brigham Young University Idaho
callutheran.edu: California Lutheran University
calpoly.edu: California Polytechnic State University
calstate.edu: The California State University
calstatela.edu: California State University, Los Angeles
caltech.edu: Caltech
calu.edu: California University of Pennsylvania
calvin.edu: Calvin College
cameron.edu: Cameron University
campbell.edu: Campbell University
canisius.edu: Canisius College
carleton.edu: Carleton College
carlow.edu: Carlow University
carroll.edu: Carroll College
carthage.edu: Carthage College
cbu.edu: Christian Brothers University
cc.edu: Carrington College
ccu.edu: Colorado Christian University
cedarville.edu: Cedarville University
centenary.edu: Centenary College of Louisiana
central.edu: Central College
centre.edu: Centre College
champlain.edu: Champlain College
chapman.edu: Chapman University
chatham.edu: Chatham University
chesapeake.edu: Chesapeake College
cheyney.edu: Cheyney University of Pennsylvania
citadel.edu: The Citadel
cityu.edu: City University of Seattle
clarion.edu: Clarion University of Pennsylvania
clarke.edu: Clarke University
clarkson.edu: Clarkson University
clarku.edu: Clark University
clemson.edu: Clemson University, South Carolina
cmc.edu: Claremont McKenna College
cmich.edu: Central Michigan University
cmu.edu: Carnegie Mellon University
cn.edu: Carson-Newman University
cnu.edu: Christopher Newport University
cnuas.edu: California National University
coa.edu: College of the Atlantic
coastal.edu: Coastal Carolina University
cobleskill.edu: State University of New York Cobleskill
coe.edu: Coe College
cofc.edu: College of Charleston
coker.edu: Coker College
colby.edu: Colby College
colgate.edu: Colgate University
colorado.edu: University of Colorado Boulder
colostate.edu: Colorado State University
colsouth.edu: Columbia Southern University
colum.edu: Columbia College Chicago
columbia.edu: Columbia University in the City of New York
concord.edu: Concord University
conncoll.edu: Connecticut College
cooper.edu: Cooper Union
cord.edu: Concordia College
cornell.edu: Cornell University
cornellcollege.edu: Cornell College
cortland.edu: State University of New York Cortland
creighton.edu: Creighton University
crk.umn.edu: University of Minnesota, Crookston
csbsju.edu: College of Saint Benedict & Saint John's University
csc.edu: Chadron State College
csc.vsc.edu: Castleton State College of Vermont
csp.edu: Concordia University, St. Paul
css.edu: The College of St. Scholastica
csuchico.edu: California State University, Chico
csudh.edu: California State University, Dominguez Hills
csueastbay.edu: California State University, East Bay
csufresno.edu: California State University, Fresno
csuhayward.edu: California State University, East Bay
csulb.edu: California State University, Long Beach
csumb.edu: California State University, Monterey Bay
csun.edu: California State University, Northridge
csuohio.edu: Cleveland State University
csupomona.edu: California State Polytechnic University, Pomona
csus.edu: California State University, Sacramento
csusb.edu: California State University, San Bernardino
csusm.edu: California State University, San Marcos
csustan.edu: California State University Stanislaus
cts.edu: Christian Theological Seminary
cua.edu: The Catholic University of America
cuny.edu: The City University of New York
curry.edu: Curry College
cwru.edu: Case Western Reserve University
cwu.edu: Central Washington University
d.umn.edu: University of Minnesota Duluth
daemen.edu: Daemen College
dartmouth.edu: Dartmouth College
davenport.edu: Davenport University
davidson.edu: Davidson College
dbq.edu: University of Dubuque
dbu.edu: Dallas Baptist University
deltastate.edu: Delta State University
denison.edu: Denison University
depaul.edu: DePaul University
depauw.edu: DePauw University
desales.edu: DeSales University
devry.edu: DeVry University
dickinson.edu: Dickinson College
dillard.edu: Dillard University
dixie.edu: Dixie State University
dominican.edu: Dominican University of California
dordt.edu: Dordt College
dowling.edu: Dowling College Long Island
drake.edu: Drake University
drew.edu: Drew University
drexel.edu: Drexel University
drury.edu: Drury University
dsu.edu: Dakota State University
du.edu: University of Denver
duke.edu: Duke University
duq.edu: Duquesne University
dwc.edu: Daniel Webster College
dwu.edu: Dakota Wesleyan University
earlham.edu: Earlham College
easternwv.edu: Eastern West Virginia Community & Technical College
ecok.edu: East Central University
ecsu.edu: Elizabeth City State University
ecu.edu: East Carolina University
edgewood.edu: Edgewood College
edinboro.edu: Edinboro University
eiu.edu: Eastern Illinois University
eku.edu: Eastern Kentucky University
elmhurst.edu: Elmhurst College
elon.edu: Elon University
emerson.edu: Emerson College
emich.edu: Eastern Michigan University
emmanuel.edu: Emmanuel College
emory.edu: Emory University
emporia.edu: Emporia State University
emu.edu: Eastern Mennonite University
enmu.edu: Eastern New Mexico University
erau.edu: Embry-Riddle Aeronautical University
esf.edu: State University of New York College of Environmental Science and Forestry
esu.edu: East Stroudsburg University
etown.edu: Elizabethtown College
etsu.edu: East Tennessee State University
evansville.edu: University of Evansville
evergreen.edu: The Evergreen State College
ewu.edu: Eastern Washington University
fairmontstate.edu: Fairmont State University
famu.edu: Florida Agricultural and Mechanical University
fandm.edu: Franklin & Marshall College
farmingdale.edu: Farmingdale State College
fau.edu: Florida Atlantic University
fdu.edu: Fairleigh Dickinson University
ferris.edu: Ferris State University
fgcu.edu: Florida Gulf Coast University
fhsu.edu: Fort Hays State University
fielding.edu: Fielding Graduate University
fisk.edu: Fisk University
fit.edu: Florida Institute of Technology
fiu.edu: Florida International University
fontbonne.edu: Fontbonne University
fordham.edu: Fordham University
fortlewis.edu: Fort Lewis College
franklin.edu: Franklin University
fredonia.edu: Fredonia State University of New York
fresno.edu: Fresno Pacific University
friends.edu: Friends University
fsu.edu: Florida State University
fuller.edu: Fuller Theological Seminary
fullerton.edu: California State University, Fullerton
furman.edu: Furman University
gac.edu: Gustavus Adolphus College
gallaudet.edu: Gallaudet University
gannon.edu: Gannon University
gatech.edu: Georgia Institute of Technology
gbc.edu: Goldey-Beacom College
geneseo.edu: State University of New York Geneseo
geneva.edu: Geneva College
georgetown.edu: Georgetown University
georgian.edu: Georgian Court University
gettysburg.edu: Gettysburg College
ggu.edu: Golden Gate University
glenville.edu: Glenville State College
globaluniversity.edu: Global University
gmu.edu: George Mason University
gonzaga.edu: Gonzaga University
goshen.edu: Goshen College
goucher.edu: Goucher College
grace.edu: Grace College & Theological Seminary in Indiana
graceland.edu: Graceland University
greenleaf.edu: Greenleaf University Online Degree Programs
gsu.edu: Georgia State University
guilford.edu: Guilford College
gvsu.edu: Grand Valley State University
gwu.edu: The George Washington University
hamilton.edu: Hamilton College
hamline.edu: Hamline University
hampshire.edu: Hampshire College
hamptonu.edu: Hampton University
hanover.edu: Hanover College
harding.edu: Harding University
hartford.edu: University of Hartford
hartwick.edu: Hartwick College
harvard.edu: Harvard University
haskell.edu: Haskell Indian Nations University
hastings.edu: Hastings College
haverford.edu: Haverford College
hawaii.edu: University of Hawaii System
heidelberg.edu: Heidelberg University
hendrix.edu: Hendrix College
hesston.edu: Hesston College
highpoint.edu: High Point University
hillsdale.edu: Hillsdale College
hiram.edu: Hiram College
hmc.edu: Harvey Mudd College
hofstra.edu: Hofstra University
hollins.edu: Hollins University
holycross.edu: College of the Holy Cross
hood.edu: Hood College
hope.edu: Hope College
howard.edu: Howard University
hpu.edu: Hawaii Pacific University
hsc.edu: Hampden-Sydney College
hsc.unt.edu: University of North Texas Health Science Center
humboldt.edu: Humboldt State University
hunter.cuny.edu: Hunter College
huntingdon.edu: Huntingdon College
hws.edu: Hobart and William Smith Colleges
iastate.edu: Iowa State University
ibc.edu: Illinois Benedictine College
ici.edu: ICI University
iit.edu: Illinois Institute of Technology
illinoisstate.edu: Illinois State University
ilstu.edu: Illinois State University
indiana.edu: Indiana University
indstate.edu: Indiana State University
indwes.edu: Indiana Wesleyan University
iona.edu: Iona College
isu.edu: Idaho State University
ithaca.edu: Ithaca College
iup.edu: Indiana University of Pennsylvania
iupui.edu: Indiana University-Purdue University Indianapolis
jbu.edu: John Brown University
jc.edu: University of Jamestown
jcsu.edu: Johnson C. Smith University
jefferson.edu: Thomas Jefferson University
jewell.edu: William Jewell College
jfku.edu: John F. Kennedy University
jhu.edu: Johns Hopkins University
jmu.edu: James Madison University
jones.edu: Jones College
jsu.edu: Jacksonville State University
jsums.edu: Jackson State University
jtsa.edu: The Jewish Theological Seminary
ju.edu: Jacksonville University
judson.edu: Judson College
juniata.edu: Juniata College
jwu.edu: Johnson & Wales University
kaplanuniversity.edu: Kaplan University
kcumb.edu: Kansas City University of Medicine and Biosciences
kean.edu: Kean University
keene.edu: Keene State College
kent.edu: Kent State University
kenyon.edu: Kenyon College
kings.edu: King's College
knox.edu: Knox College
ksu.edu: Kansas State University
ku.edu: The University of Kansas
kumc.edu: University of Kansas Medical Center
kutztown.edu: Kutztown University
kvctc.edu: Kanawha Valley Community and Technical College
kwu.edu: Kansas Wesleyan University
kzoo.edu: Kalamazoo College
lacollege.edu: Louisiana College
lafayette.edu: Lafayette College
lamar.edu: Lamar University
langston.edu: Langston University
lasalle.edu: La Salle University
lasierra.edu: La Sierra University
latech.edu: Louisiana Tech University
lawrence.edu: Lawrence University
lclark.edu: Lewis & Clark
lcsc.edu: Lewis-Clark State College
lehigh.edu: Lehigh University
lemoyne.edu: Le Moyne College
letu.edu: LeTourneau University
lewisu.edu: Lewis University
lfc.edu: Lake Forest College
lhup.edu: Lock Haven University
liberty.edu: Liberty University Christian College Education
lincoln.edu: The Lincoln University
linfield.edu: Linfield College
linnbenton.edu: Linn-Benton Community College
liunet.edu: Long Island University
llu.edu: Loma Linda University
lmu.edu: Loyola Marymount University
loras.edu: Loras College
louisville.edu: University of Louisville
loyola.edu: Loyola University Maryland
lsc.vsc.edu: Lyndon State College, Vermont
lssu.edu: Lake Superior State University
lsu.edu: Louisiana State University
lsua.edu: Louisiana State University at Alexandria
ltu.edu: Lawrence Technological University
luc.edu: Loyola University Chicago
lunet.edu: Langston University
luther.edu: Luther College
luthersem.edu: Luther Seminary
lvc.edu: Lebanon Valley College
lwtech.edu: Lake Washington Institute of Technology
lycoming.edu: Lycoming College
lynchburg.edu: Lynchburg College
lyon.edu: Lyon College
macalester.edu: Macalester College
maine.edu: University of Maine System
malone.edu: Malone University
mancol.edu: Manhattan College
marietta.edu: Marietta College
marist.edu: Marist College
marlboro.edu: Marlboro College
marshall.edu: Marshall University
marymount.edu: Marymount University
massachusetts.edu: University of Massachusetts
mbc.edu: Mary Baldwin College
mc.edu: Mississippi College
mcad.edu: Minneapolis College of Art and Design
mcneese.edu: McNeese State University
mctc.edu: Mountwest Community & Technical College
mcw.edu: Medical College of Wisconsin
memphis.edu: The University of Memphis
mercy.edu: Mercy College
meredith.edu: Meredith College
messiah.edu: Messiah College
miami.edu: University of Miami
middlebury.edu: Middlebury College
millersville.edu: Millersville University
millikin.edu: Millikin University
millsaps.edu: Millsaps College
minotstateu.edu: Minot State University
missouri.edu: University of Missouri
misu.nodak.edu: Minot State University
mit.edu: Massachusetts Institute of Technology
mnsfld.edu: Mansfield University of Pennsylvania
molloy.edu: Molloy College
monm.edu: Monmouth College
monmouth.edu: Monmouth University
montana.edu: Montana State University
montclair.edu: Montclair State University
monterey.edu: California State University, Monterey Bay
montreat.edu: Montreat College
moravian.edu: Moravian College
morgan.edu: Morgan State University
mrs.umn.edu: University of Minnesota, Morris
msjnet.edu: Mount Saint Joseph High School
msmc.edu: Mount Saint Mary College, Newburgh
msoe.edu: Milwaukee School of Engineering
msstate.edu: Mississippi State University
mssu.edu: Missouri Southern State University
msu.edu: Michigan State University
msubillings.edu: Montana State University Billings
mtech.edu: Montana Tech of the University of Montana
mtholyoke.edu: Mount Holyoke College
mtsu.edu: Middle Tennessee State University
mtu.edu: Michigan Technological University
mu.edu: Marquette University
mum.edu: Maharishi University of Management
muohio.edu: Miami University
muskingum.edu: Muskingum University
muw.edu: Mississippi University for Women
mwsu.edu: Midwestern State University
nau.edu: Northern Arizona University
naz.edu: Nazareth College
ncat.edu: North Carolina A&T State University
ncbc.edu: North Central University
nccu.edu: North Carolina Central University
ncsu.edu: North Carolina State University
ncwc.edu: North Carolina Wesleyan College
nd.edu: University of Notre Dame
ndsu.edu: North Dakota State University
ndu.edu: National Defense University
newberry.edu: Newberry College
newcollege.edu: New College of California
newhaven.edu: University of New Haven
newpaltz.edu: State University of New York at New Paltz
niagara.edu: Niagara University
niu.edu: Northern Illinois University
njit.edu: New Jersey Institute of Technology
nku.edu: Northern Kentucky University
nl.edu: National Louis University
nmhu.edu: New Mexico Highlands University
nmsu.edu: New Mexico State University
nmt.edu: New Mexico Institute of Mining and Technology
nmu.edu: Northern Michigan University
northeastern.edu: Northeastern University
northern.edu: Northern State University
northland.edu: Northland College
norwich.edu: Norwich University
nova.edu: Nova Southeastern University
nsu.edu: Norfolk State University
nsula.edu: Northwestern State University of Louisiana
nsuok.edu: Northeastern State University
ntu.edu: Walden University
nu.edu: National University
nwciowa.edu: Northwestern College
nwmissouri.edu: Northwest Missouri State University
nyit.edu: New York Institute of Technology
nyu.edu: New York University
oakland.edu: Oakland University
oberlin.edu: Oberlin College & Conservatory
odu.edu: Old Dominion University
ogi.edu: Oregon Health & Science University
ohio-state.edu: The Ohio State University
ohiou.edu: Ohio University
ohsu.edu: Oregon Health & Science University
okbu.edu: Oklahoma Baptist University
okcu.edu: Oklahoma City University
okstate.edu: Oklahoma State University
olemiss.edu: University of Mississippi
olivet.edu: Olivet Nazarene University
ollusa.edu: Our Lady of the Lake University
onu.edu: Ohio Northern University
oregonstate.edu: Oregon State University
orst.edu: Oregon State University
oru.edu: Oral Roberts University
osu.edu: The Ohio State University
oswego.edu: State University of New York At Oswego
otterbein.edu: Otterbein University
owu.edu: Ohio Wesleyan University
oxy.edu: Occidental College
ozarks.edu: University of the Ozarks
pace.edu: Pace University
pacificu.edu: Pacific University
panam.edu: The University of Texas-Pan American
pcci.edu: Pensacola Christian College
pdx.edu: Portland State University
peace.edu: William Peace University
pepperdine.edu: Pepperdine University
peru.edu: Peru State College
phillips.edu: Phillips University
phoenix.edu: University of Phoenix
pierpont.edu: Pierpont Community & Technical College
pitt.edu: University of Pittsburgh
pittstate.edu: Pittsburg State University
pitzer.edu: Pitzer College
platt.edu: Platt College
plattsburgh.edu: State University of New York Plattsburgh
plu.edu: Pacific Lutheran University
plymouth.edu: Plymouth State University
poly.edu: NYU Polytechnic School of Engineering
pomona.edu: Pomona College
potomacstatecollege.edu: Potomac State College
potsdam.edu: The State University of New York at Potsdam
pratt.edu: Pratt Institute
presby.edu: Presbyterian College
princeton.edu: Princeton University
providence.edu: Providence College
psu.edu: Pennsylvania State University
puc.edu: Pacific Union College
pupr.edu: Polytechnic University of Puerto Rico
purdue.edu: Purdue University
pvamu.edu: Prairie View A&M University
quincy.edu: Quincy University
quinnipiac.edu: Quinnipiac University Connecticut
radford.edu: Radford University
ramapo.edu: Ramapo College of New Jersey
reed.edu: Reed College
regent.edu: Regent University
regis.edu: Regis University
rhodes.edu: Rhodes College
ric.edu: Rhode Island College
rice.edu: Rice University
rider.edu: Rider University
ripon.edu: Ripon College
rit.edu: Rochester Institute of Technology
rmc.edu: Randolph-Macon College
roanoke.edu: Roanoke College
rochester.edu: University of Rochester
rockefeller.edu: The Rockefeller University
rockford.edu: Rockford University
rockhurst.edu: Rockhurst University
rocky.edu: Rocky Mountain College
rollins.edu: Rollins College
rose-hulman.edu: Rose-Hulman Institute of Technology
rowan.edu: Rowan University
rpi.edu: Rensselaer Polytechnic Institute
runet.edu: Radford University
rutgers.edu: Rutgers, The State University of New Jersey
rwu.edu: Roger Williams University
sacredheart.edu: Sacred Heart University Connecticut
sage.edu: The Sage Colleges
saintjoe.edu: Saint Joseph's College (Indiana)
saintmarys.edu: Saint Mary's College
samford.edu: Samford University
sapc.edu: St. Andrews University
sau.edu: St. Ambrose University
sbc.edu: Sweet Briar College
sbu.edu: St. Bonaventure University
sbuniv.edu: Southwest Baptist University
sc.edu: University of South Carolina
sct.edu: Southern Polytechnic State University
scu.edu: Santa Clara University
scusd.edu: Sacramento City Unified School District
sdsmt.edu: South Dakota School of Mines and Technology
sdstate.edu: South Dakota State University
sdsu.edu: San Diego State University
seattleu.edu: Seattle University
selu.edu: Southeastern Louisiana University
semo.edu: Southeast Missouri State University
sewanee.edu: Sewanee: The University of the South
sfasu.edu: Stephen F. Austin State University
sfcpa.edu: Saint Francis University, Pennsylvania
sfsu.edu: San Francisco State University
shawnee.edu: Shawnee State University
shc.edu: Spring Hill College
ship.edu: Shippensburg University
shorter.edu: Shorter University
shsu.edu: Sam Houston State University
shu.edu: Seton Hall University
simmons.edu: Simmons College
simons-rock.edu: Bard College at Simon's Rock
simpson.edu: Simpson College
siu.edu: Southern Illinois University
siue.edu: Southern Illinois University Edwardsville
sjc.edu: St. John's College
sjca.edu: St. John's College
sjcme.edu: Saint Joseph's College of Maine
sjcsf.edu: St. John's College
sjsu.edu: San Jose State University
sju.edu: Saint Joseph's University
skc.edu: Salish Kootenai College
skidmore.edu: Skidmore College
sl.psu.edu: Penn State Schuylkill
slc.edu: Sarah Lawrence College
slu.edu: Saint Louis University
smcvt.edu: Saint Michael's College
smith.edu: Smith College
smsu.edu: Southwest Minnesota State University
smu.edu: Southern Methodist University
smumn.edu: Saint Mary's University of Minnesota
snhu.edu: Southern New Hampshire University
snu.edu: Southern Nazarene University
sonoma.edu: Sonoma State University
southern.edu: Southern Adventist University
southernwv.edu: Southern West Virginia Community and Technical College
southwestern.edu: Southwestern University
spu.edu: Seattle Pacific University
sru.edu: Slippery Rock University
stanford.edu: Stanford University
stcl.edu: South Texas College of Law
stedwards.edu: St. Edward's University
stephens.edu: Stephens College
stetson.edu: Stetson University
stevens-tech.edu: Stevens Institute of Technology
stfrancis.edu: University of St. Francis
stjohns.edu: St. John's University
stkate.edu: St. Catherine University
stlawu.edu: St. Lawrence University
stlcop.edu: St. Louis College of Pharmacy
stmartin.edu: Saint Martin's University
stmarys-ca.edu: Saint Mary's College of California
stockton.edu: Stockton College
stolaf.edu: St. Olaf College
strayer.edu: Strayer University
strose.edu: The College of Saint Rose
stthom.edu: University of St. Thomas
stthomas.edu: University of St. Thomas
stu.edu: Saint Thomas University
stvincent.edu: Saint Vincent College
su.edu: Shenandoah University
subr.edu: Southern University and Agricultural and Mechanical College
suffolk.edu: Suffolk University
sulross.edu: Sul Ross State University
sunyit.edu: State University of New York Institute of Technology
sunysb.edu: Stony Brook University
susqu.edu: Susquehanna University
suu.edu: Southern Utah University
svsu.edu: Saginaw Valley State University
swarthmore.edu: Swarthmore College
sxu.edu: Saint Xavier University
syr.edu: Syracuse University
t-bird.edu: Thunderbird School of Global Management
tabor.edu: Tabor College
taft.edu: William Howard Taft University
taftu.edu: Taft University System
tamiu.edu: Texas A&M International University
tamu.edu: Texas A&M University
tamucc.edu: Texas A&M University Corpus Christi
tarleton.edu: Tarleton State University
tayloru.edu: Taylor University
tc.columbia.edu: Teachers College Columbia University
tcu.edu: Texas Christian University
temple.edu: Temple University
tesc.edu: Thomas Edison State College
thecoo.edu: University of Sioux Falls
thomas.edu: Thomas College
thomasmore.edu: Thomas More College
tju.edu: Thomas Jefferson University
tnstate.edu: Tennessee State University
tntech.edu: Tennessee Technological University
towson.edu: Towson University
transy.edu: Transylvania University
trincoll.edu: Trinity College
trinity.edu: Trinity University
truman.edu: Truman State University
tsu.edu: Texas Southern University
ttu.edu: Texas Tech University
ttuhsc.edu: Texas Tech University Health Sciences Center
tufts.edu: Tufts University
tui.edu: Union Institute & University
tulane.edu: Tulane University
twu.edu: Texas Woman's University
ua.edu: The University of Alabama
uaa.alaska.edu: University of Alaska Anchorage
uab.edu: The University of Alabama at Birmingham
uah.edu: The University of Alabama in Huntsville
uakron.edu: The University of Akron
ualr.edu: University of Arkansas at Little Rock
uamont.edu: University of Arkansas at Monticello
uams.edu: University of Arkansas for Medical Sciences
uark.edu: University of Arkansas
ubalt.edu: The University of Baltimore
uc.edu: University of Cincinnati
uca.edu: University of Central Arkansas
uccs.edu: University of Colorado Colorado Springs
ucdavis.edu: University of California, Davis
ucf.edu: University of Central Florida
uchicago.edu: The University of Chicago
uci.edu: University of California, Irvine
ucla.edu: University of California, Los Angeles
ucmo.edu: University of Central Missouri
uconn.edu: University of Connecticut
ucr.edu: University of California, Riverside
ucsb.edu: University of California, Santa Barbara
ucsc.edu: University of California, Santa Cruz
ucsd.edu: University of California, San Diego
ucsf.edu: University of California, San Francisco
udallas.edu: University of Dallas
udayton.edu: University of Dayton
udc.edu: University of the District of Columbia
udel.edu: University of Delaware
udmercy.edu: University of Detroit Mercy
ufl.edu: University of Florida
uga.edu: University Of Georgia
ugf.edu: University of Great Falls
uh.edu: University of Houston
uhh.hawaii.edu: University of Hawaii at Hilo
uic.edu: University of Illinois at Chicago
uidaho.edu: University of Idaho
uindy.edu: University of Indianapolis
uiowa.edu: The University of Iowa
uiu.edu: Upper Iowa University
uiuc.edu: University of Illinois at Urbana-Champaign
uky.edu: University of Kentucky
umass.edu: University of Massachusetts Amherst
umassd.edu: University of Massachusetts Dartmouth
umassp.edu: University of Massachusetts
umbc.edu: University of Maryland, Baltimore County
umc.edu: University of Mississippi Medical Center
umd.edu: University of Maryland
umd.umich.edu: University of Michigan-Dearborn
umf.maine.edu: University of Maine Farmington
umfk.maine.edu: University of Maine at Fort Kent
umich.edu: University of Michigan
umkc.edu: University of Missouri, Kansas City
uml.edu: University of Massachusetts, Lowell
umm.maine.edu: University of Maine at Machias
umn.edu: University of Minnesota
umsl.edu: University of Missouri-St. Louis
umsmed.edu: University of Mississippi Medical Center
umt.edu: University of Montana
umuc.edu: University of Maryland University College
unc.edu: The University of North Carolina at Chapel Hill
unca.edu: The University of North Carolina at Asheville
uncc.edu: The University of North Carolina at Charlotte
uncg.edu: The University of North Carolina at Greensboro
uncw.edu: The University of North Carolina at Wilmington
und.edu: The University of North Dakota
une.edu: University of New England
unf.edu: University of North Florida
unh.edu: University of New Hampshire
uni.edu: University of Northern Iowa
union.edu: Union College
univnorthco.edu: University of Northern Colorado
unk.edu: University of Nebraska at Kearney
unl.edu: University of Nebraska-Lincoln
unlv.edu: University of Nevada, Las Vegas
unm.edu: The University of New Mexico
uno.edu: University of New Orleans
unomaha.edu: University of Nebraska Omaha
unr.edu: University of Nevada, Reno
unt.edu: University of North Texas
uofs.edu: The University of Scranton
uog.edu: University of Guam
uop.edu: University of the Pacific
uoregon.edu: University of Oregon
upenn.edu: University of Pennsylvania
ups.edu: University of Puget Sound
uri.edu: University of Rhode Island
urich.edu: University of Richmond
ursinus.edu: Ursinus College
usao.edu: University of Science and Arts of Oklahoma
usc.edu: University of Southern California
usd.edu: The University of South Dakota
usf.edu: University of South Florida
usfca.edu: University of San Francisco
usg.edu: University System of Georgia
usi.edu: University of Southern Indiana
usiu.edu: Alliant International University
usm.edu: The University of Southern Mississippi
usm.maine.edu: University of Southern Maine
usma.edu: West Point
usmma.edu: U.S. Merchant Marine Academy
usouthal.edu: University of South Alabama
usu.edu: Utah State University
uta.edu: The University of Texas at Arlington
utah.edu: The University of Utah
utampa.edu: The University of Tampa
utb.edu: The University of Texas at Brownsville
utdallas.edu: The University of Texas at Dallas
utep.edu: The University of Texas at El Paso
utexas.edu: The University of Texas at Austin
uth.edu: The University of Texas Health Science Center
uthct.edu: UT Health Northeast
uthscsa.edu: The University of Texas Health Science Center at San Antonio
utk.edu: The University of Tennessee, Knoxville
utm.edu: The University of Tennessee at Martin
utmb.edu: The University of Texas Medical Branch
utoledo.edu: The University of Toledo
utsa.edu: The University of Texas at San Antonio
utsystem.edu: University of Texas System
utulsa.edu: University of Tulsa
uu.edu: Union University
uvi.edu: University of the Virgin Islands
uvm.edu: The University of Vermont
uwa.edu: The University of West Alabama
uwec.edu: University of Wisconsin-Eau Claire
uwf.edu: University of West Florida
uwgb.edu: University of Wisconsin, Green Bay
uwlax.edu: University of Wisconsin, La Crosse
uwm.edu: University of Wisconsin, Milwaukee
uwosh.edu: University of Wisconsin, Oshkosh
uwp.edu: University Of Wisconsin, Parkside
uwplatt.edu: University of Wisconsin, Platteville
uwrf.edu: University of Wisconsin, River Falls
uwsa.edu: University of Wisconsin, Madison
uwsp.edu: University of Wisconsin, Stevens Point
uwstout.edu: University of Wisconsin, Stout
uwsuper.edu: University of Wisconsin, Superior
uww.edu: University of Wisconsin, Whitewater
uwyo.edu: University of Wyoming
valpo.edu: Valparaiso University
vancouver.wsu.edu: Washington State University Vancouver
vanderbilt.edu: Vanderbilt University
vassar.edu: Vassar College
vcu.edu: Virginia Commonwealth University
vic.edu: Virginia Intermont College
virginia.edu: The University of Virginia
vmi.edu: Virginia Military Institute
vsu.edu: Virginia State University
vt.edu: Virginia Tech
vtc.vsc.edu: Vermont Tech
vwc.edu: Virginia Wesleyan College
wabash.edu: Wabash College
waldenu.edu: Walden University
warren-wilson.edu: Warren Wilson College
wartburg.edu: Wartburg College
washcoll.edu: Washington College
washington.edu: University of Washington
wayne.edu: Wayne State University
wcslc.edu: Westminster College in Salt Lake City, Utah
wcu.edu: Western Carolina University
wcupa.edu: West Chester University
weber.edu: Weber State University
websteruniv.edu: Webster University
wellesley.edu: Wellesley College
wells.edu: Wells College
wesley.edu: Wesley College
wesleyan.edu: Wesleyan University
westal.edu: The University of West Alabama
westga.edu: The University of West Georgia
westminster-mo.edu: Westminster College
westminster.edu: Westminster College
westmont.edu: Westmont College
wfu.edu: Wake Forest University
wheaton.edu: Wheaton College
wheatonma.edu: Wheaton College, Norton, Massachusetts
whitman.edu: Whitman College
whittier.edu: Whittier College
whitworth.edu: Whitworth University
widener.edu: Widener University
wilberforce.edu: Wilberforce University
wilkes.edu: Wilkes University
willamette.edu: Willamette University
williams.edu: Williams College
wilmington.edu: Wilmington College of Ohio
winthrop.edu: Winthrop University
wisc.edu: University of Wisconsin-Madison
wit.edu: Wentworth Institute of Technology
wittenberg.edu: Wittenberg University
wiu.edu: Western Illinois University
wku.edu: Western Kentucky University
wlu.edu: Washington and Lee University
wm.edu: The College of William & Mary
wmich.edu: Western Michigan University
wmitchell.edu: William Mitchell College of Law
wmpenn.edu: William Penn University
wnmu.edu: Western New Mexico University
wofford.edu: Wofford College
wooster.edu: The College of Wooster
wpi.edu: Worcester Polytechnic Institute
wright.edu: Wright State University
wsc.mass.edu: Westfield State University
wsu.edu: Washington State University
wtamu.edu: West Texas A&M University
wts.edu: Westminster Theological Seminary
wustl.edu: Washington University in St. Louis
wvnet.edu: West Virginia Network for Educational Telecomputing
wvsom.edu: West Virginia School of Osteopathic Medicine
wvu.edu: West Virginia University
wwu.edu: Western Washington University
xula.edu: Xavier University of Louisiana
yale.edu: Yale University
ycp.edu: York College of Pennsylvania
ysu.edu: Youngstown State University
yu.edu: Yeshiva University`.split('\n').map(e => e.split(':'))
}