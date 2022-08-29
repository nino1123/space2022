# coding=utf-8
from app import *

if __name__ == '__main__':
    build_tasks({
        'filter': {
            'id': {'$in': ["66", "141", "509", "731", "754", "1076", "1124", "1181", "1185", "1192", "1393", "1572", "1641", "1666", "1756", "1772", "1893", "2235", "2280", "2335", "2412", "2415", "2488", "2836", "3006", "3190", "3378", "3603", "3628", "3642", "3680", "3738", "3964", "4014", "4100", "4106", "4236", "4244", "4285", "4310", "4355", "4639", "4643", "4765", "5051", "5116", "5138", "5408", "5467", "5520", "5647", "5680", "5698", "5736", "5754", "5810", "5814", "5840", "5900", "5978", "6005", "6129", "6306", "6307", "6468", "6694", "6718", "6876", "6883", "7012", "7040", "7193", "7297", "7308", "7513", "7549", "7573", "7629", "7698", "7874", "7898", "7899", "7914", "7958", "7962", "7976", "8233", "8382", "8569", "8689", "8767", "8905", "8937", "8950", "8986", "9154", "9190", "9201", "9243", "9302", "9402", "9497", "9520", "9538", "9581", "9710", "9734", "9735", "9770", "9902", "9994", "10019", "10245", "10250", "10341", "10403", "10418", "10536", "10545", "10562", "10597", "10620", "10622", "10623", "10751", "10886", "10911", "10920", "10996", "11022", "11045", "11127", "11157", "11197", "11316", "11453", "11499", "11514", "11525", "11544", "11572", "11627", "11668", "11680", "11685", "11706", "11711", "11715", "11816", "11863", "11875", "11993", "12212", "12268", "12271", "12346", "12377", "12393", "12439", "12448", "12537", "12587", "12616", "12681", "12724", "12766", "12793", "12851", "12856", "12860", "12992", "13026", "13071", "13164", "13259", "13307", "13342", "13364", "13377", "13440", "13455", "13485", "13611", "13629", "13655", "13665", "13715", "13719", "13753", "13764", "13771", "13810", "13879", "13889", "13905", "13907", "13947", "13953", "13970", "13971", "14074", "14090", "14095", "14145", "14228", "14239", "14297", "14329", "14341", "14349", "14355", "14368", "14381", "14387", "14410", "14441", "14445", "14466", "14489", "14512", "14524", "14541", "14553", "14577", "14627", "14648", "14661", "14670", "14740", "14770", "14782", "14801", "14808", "14844", "14900", "14916", "14925", "14928", "14980", "14998", "15002", "15037", "15121", "15131", "15306", "15403", "15460", "15474", "15599", "15608", "15639", "15843", "15867", "15879", "16123", "16134", "16152", "16154", "16213", "16256", "16276", "16390", "16458", "16520", "16713", "16852", "16927", "17002", "17033", "17034", "17052", "17148", "17230", "17417", "17593", "17607", "17704", "17708", "17877", "17890", "18051", "18167", "18170", "18181", "18197", "18216", "18267", "18298", "18301", "18373", "18427", "18452", "18492", "18493", "18550", "18565", "18732", "18772", "18796", "18887", "18899", "18901", "18904", "19054", "19077", "19174", "19214", "19284", "19291", "19348", "19400", "19431", "19436", "19510", "19693", "19723", "19783", "19809", "19847", "19902", "19925", "19955", "19962", "19965", "19968", "19992", "20063", "20105", "20136", "20163", "20255", "20304", "20392", "20425", "20438", "20467", "20489", "20492", "20517", "20548", "20576", "20595", "20601", "20633", "20634", "20642", "20645", "20695", "20708", "20789", "20807", "20824", "20835", "20863", "20900", "20928", "20949", "20986", "21092", "23235", "23306", "23414", "23692", "23718", "23762", "23813", "23824", "23890", "23941", "23977", "24000", "24008", "24028", "24030", "24040", "24042", "24187", "24203", "24334", "24338", "24375", "24436", "24453", "24454", "24477", "24696", "24711", "24732", "24800", "24892", "25130", "25207", "25215", "25348", "25402", "25508", "25515", "25650", "25684", "25730", "25771", "25907", "25987", "26021", "26023", "26156", "26158", "26298", "26462", "26504", "26524", "26564", "26611", "26663", "26692", "26715", "26792", "26807", "26886", "26977", "27264", "27413", "27439", "27513", "27516", "27639", "27658", "27775", "28185", "28194", "28201", "28256", "28295", "28314", "28452", "28464", "28481", "28559", "28599", "28613", "28639", "28859", "28892", "28895", "28903", "28927", "28951", "29191", "29213", "29225", "29245", "29505", "29610", "29640", "29659", "29697", "29881", "29896", "30000", "30043", "30154", "30171", "30227", "30254", "30311", "30320", "30349", "30393", "30413", "30431", "30439", "30466", "30569", "30605", "30679", "30791", "30878", "30918", "31044", "31052", "31126", "31150", "31188", "31189", "31198", "31292", "31449", "31488", "31489", "31527", "31630", "31792", "31806", "31956", "31986", "32098", "32103", "32180", "32370", "32383", "32396", "32397", "32399", "32452", "32484", "32561", "32615", "32617", "32636", "32640", "32652", "32672", "32705", "32895", "32991", "33027", "33088", "33103", "33125", "33235", "33294", "33308", "33426", "33609", "33613", "33643", "33720", "33747", "33782", "33795", "33881", "33908", "34062", "34065", "34117", "34163", "34235", "34266", "34287", "34355", "34405", "34439", "34647", "34886", "34921", "34948", "34969", "34976", "35039", "35050", "35210", "35254", "35513", "35538", "35554", "35653", "35697", "35718", "35770", "35787", "35792", "35818", "35840", "36004", "36034", "36077", "36105", "36138", "36242", "36254", "36349", "36443", "36524", "36588", "36838", "37021", "37036", "37151", "37206", "37211", "37229", "37312", "37419", "37537", "37561", "37660", "37661", "37674", "37831", "37877", "37894", "37961", "37994", "38000", "38018", "38047", "38066", "38070", "38271", "38472", "38486", "38533", "38551", "38577", "38667", "38825", "38895", "38937", "38962", "38990", "39037", "39133", "39181", "39349", "39403", "39432", "39475", "39654", "39888", "39942", "39963", "40049", "40100", "40196", "40206", "40245", "40246", "40248", "40383", "40389", "40392", "40434", "40584", "40662", "40810", "40891", "40909", "40920", "40933", "40958", "41029", "41030", "41054", "41222", "41238", "41248", "41258", "41303", "41330", "41354", "41429", "41596", "41682", "41824", "41894", "41944", "42084", "42110", "42351", "42352", "42353", "42354", "42356", "42357", "42358", "42360", "42363", "42364", "42383", "42389", "42393", "42394", "42395", "42397", "42412", "42419", "42422", "42423", "42424", "42860", "42863", "42871", "42873", "43023", "43024", "43026", "43030", "43032", "43033", "43034", "43231", "43236", "43286", "43287", "43288", "43289", "43291", "43293", "43294", "43296", "43381", "43382", "43386", "43387", "43388", "43537", "43540", "43541", "43542", "43544", "43545", "43546", "43665", "43668", "43669", "43939", "43940", "43942", "43943", "44146", "44150", "44569", "44570", "44571", "44572", "44573", "44687", "44689", "44690", "44695", "44696", "45097", "45102", "45784", "45785", "46141", "46142", "46144", "46147", "46148", "46241", "46244", "46245", "46246", "46247", "46248", "47115", "47116", "47117", "47123", "47125", "47516", "47667", "47669", "47670", "47674", "47675", "47828", "47830", "47834", "47870", "47926", "47946", "47947", "47977", "47986", "47994", "47995", "48012", "48026", "48035", "48038", "48045", "48077", "48081", "48086", "48096", "48130", "48151", "48169", "48192", "48212", "48217", "48220", "48231", "48257", "48265", "48274", "48277", "48288", "48299", "48358", "48394", "48404", "48467", "48500", "48511", "48515", "48531", "48533", "48546", "48586", "48618", "48652", "48698", "48729", "48731", "48761", "48790", "48807", "48852", "48864", "48872", "48888", "48922", "48923", "48928", "48936", "48982", "49042", "49055", "49102", "49104", "49114", "49152", "49165", "49171", "49182", "49199", "49228", "49244", "49267", "49273", "49304", "49317", "49323", "49363", "49364", "49381", "49399", "49418", "49421", "49432", "49433", "49458", "49488", "49491", "49508", "49518", "49549", "49610", "49624", "49629", "49634", "49637", "49639", "49647", "49742", "49761", "49764", "49776", "49778", "49806", "49810", "49835", "49844", "49863", "49864", "49896", "49911", "49950", "49965", "49971", "49975", "49985", "49986", "50017", "50023", "50029", "50053", "50055", "50058", "50076", "50079", "50086", "50087", "50091", "50110", "50115", "50136", "50138", "50149", "50158", "50165", "50171", "50174", "50180", "50185", "50191", "50200", "50209", "50223", "50230", "50239", "50246", "50263", "50266", "50268", "50284", "50385", "50394", "50409", "50466", "50498", "50613", "50680", "50724", "50754", "50786", "50903", "50974", "50998", "51021", "51038", "51112", "51118", "51155", "51167", "51179", "51219", "51266", "51330", "51376", "51431", "51503", "51540", "51575", "51604", "51616", "51649", "51733", "51770", "51773", "51813", "51861", "52015", "52031", "52050", "52074", "52079", "52083", "52114", "52148", "52185", "52215", "52229", "52278", "52286", "52303", "52309", "52371", "52382", "52397", "52413", "52426", "52463", "52482", "52483", "52529", "52575", "52592", "52598", "52611", "52625", "52632", "52637", "52661", "52682", "52780", "52826", "52832", "52918", "53020", "53026", "53044", "53055", "53102", "53111", "53138", "53150", "53156", "53160", "53230", "53242", "53246", "53253", "53263", "53333", "53335", "53340", "53413", "53441", "53445", "53451", "53506", "53553", "53563", "53592", "53599", "53615", "53623", "53641", "53664", "53668", "53680", "53705", "53718", "53739", "53770", "53800", "53854", "53872", "53879", "53891", "53892", "53922", "53968", "53969", "53980", "54007", "54059", "54105", "54115", "54156", "54177", "54242", "54251", "54265", "54276", "54296", "54318", "54319", "54323", "54418", "54428", "54452", "54458", "54495", "54509", "54512", "54553", "54606", "54608", "54621", "54653", "54660", "54670", "54673", "54704", "54713", "54756", "54757", "54773", "54786", "54801", "54856", "55007", "55024", "55032", "55058", "55102", "55114", "55178", "55185", "55215", "55228", "55251", "55262", "55321", "55328", "55340", "55349", "55388", "55443", "55483", "55559", "55624", "55661", "55674", "55681", "55730", "55772", "55796", "55803", "55848", "55861", "55869", "55897", "55901", "55907", "55916", "55918", "56038", "56063", "56074", "56104", "56145", "56170", "56184", "56200", "56295", "56312", "56326", "56339", "56399", "56469", "56486", "56509", "56555", "56556", "56568", "56569", "56571", "56622", "56625", "56626", "56686", "56754", "56770", "56775", "56780", "56784", "56810", "56811", "56819", "56875", "56879", "56884", "56915", "56940", "56993", "57016", "57054", "57079", "57101", "57139", "57222", "57223", "57224", "57225", "57227", "57228", "57229", "57230", "57232", "57233", "57243", "57247", "57248", "57249", "57250", "57252", "57262", "57265", "57266", "57267", "57268", "57446", "57449", "57450", "57451", "57504", "57505", "57507", "57509", "57510", "57511", "57512", "57569", "57571", "57595", "57596", "57597", "57598", "57600", "57601", "57602", "57603", "57637", "57638", "57639", "57640", "57641", "57701", "57702", "57703", "57704", "57705", "57706", "57707", "57750", "57751", "57752", "57848", "57849", "57851", "57852", "57929", "57930", "58101", "58102", "58103", "58104", "58105", "58156", "58157", "58158", "58159", "58160", "58334", "58335", "58544", "58545", "58689", "58690", "58692", "58693", "58694", "58731", "58732", "58733", "58734", "58735", "58736", "59066", "59067", "59068", "59071", "59072", "59204", "59254", "59256", "59257", "59259", "59260", "59321", "59322", "59323", "59355", "59469", "59534", "59548", "59586", "59603", "59826", "59891", "59962", "60001", "60020", "60039", "60053", "60065", "60088", "60145", "60248", "60304", "60330", "60379", "60391", "60395", "60461", "60524", "60539", "60627", "60768", "60902", "60970", "60994", "61120", "61132", "61152", "61265", "61285", "61289", "61324", "61361", "61376", "61378", "61402", "61430", "61469", "61493", "61512", "61515", "61517", "61528", "61530", "61531", "61549", "61569", "61570", "61575", "61580", "61588", "61596", "61613", "61632", "61635", "61637", "61638", "61640", "61645", "61673", "61681", "61682", "61689", "61719", "61721", "61722", "61723", "61731", "61739", "61746", "61750", "61751", "61756", "61758", "61773", "61776", "61786", "61787", "61802", "61808", "61827", "61828", "61833", "61837", "61840", "61841", "61852", "61869", "61879", "61891", "61897", "61899", "61904", "61914", "61917", "61932", "61961", "61966", "61968", "61969", "61971", "61981", "61985", "61987", "61988", "61997", "61999", "62010", "62012", "62015", "62029", "62091", "62139", "62162", "62244", "62245", "62261", "62264", "62334", "62353", "62374", "62436", "62474", "62549", "62584", "62643", "62649", "62665", "62666", "62744", "62765", "62790", "62823", "62865", "62903", "62947", "62950", "62951", "62976", "62977", "62989", "62995", "63024", "63053", "63205", "63208", "63218", "63227", "63264", "63315", "63316", "63324", "63410", "63437", "63453", "63459", "63470", "63522", "63532", "63558", "63598", "63669", "63696", "63717", "63747", "63769", "63810", "63829", "63866", "63900", "63908", "63963", "63972", "63996", "64007", "64125", "64141", "64194", "64225", "64274", "64314", "64323", "64327", "64452", "65512", "65515", "65522", "65535", "65536", "65539", "65541", "65542", "65546", "65555", "65559", "65561", "65562", "65563", "65564", "65565", "65566", "65577", "65579", "65586", "65587", "65592", "65599", "65600", "65601", "65603", "65619", "65620", "65621", "65627", "65633", "65649", "65656", "65658", "65666", "65668", "65677", "65678", "65683", "65684", "65687", "65690", "65704", "65709", "65715", "65716"]},
            },
        'topic': '测试2',
        'batchName': 'Eval2-dev',
        })
    pass