import abom from "./poto/abom.png";
import anti from "./poto/anti.png";
import arba from "./poto/arba.png";
import bounty from "./poto/bounty.png";
import crusader from "./poto/crusader.png";
import flage from "./poto/flage.png";
import grave from "./poto/grave.png";
import hellion from "./poto/hellion.png";
import high from "./poto/high.png";
import hound from "./poto/hound.png";
import jester from "./poto/jester.png";
import lefer from "./poto/leper.png";
import man from "./poto/man.png";
import occul from "./poto/occultist.png";
import plag from "./poto/plague.png";
import shield from "./poto/shield.png";
import vestal from "./poto/vestal.png";
import abomwork from "./work/Abomination.gif";
import antiwork from "./work/Antiquarian.gif"
import arbawork from "./work/Arbalest.gif"
import bountywork from "./work/Bounty Hunter.gif"
import crusaderwork from "./work/Crusader.gif"
import flagework from "./work/Flagellant.gif"
import gravework from "./work/Grave Robber.gif"
import hellionwork from "./work/Hellion.gif"
import highwork from "./work/Highwayman.gif"
import houndwork from "./work/Houndmaster.gif"
import jesterwork from "./work/Jester.gif"
import leferwork from "./work/Leper.gif"
import manwork from "./work/Man-at-Arms.gif"
import occulwork from "./work/Occultist.gif"
import plagwork from "./work/Plague Doctor.gif"
import shieldwork from "./work/Shieldbreaker.gif"
import vestalwork from "./work/Vestal.gif"

const body = [
  {
    id: 1,
    name: "괴인",
    text: "괴인은 수십년간 갇힌 채 감히 입에 담을 수 없는 학대를 견디고 낙인까지 찍힌 자로, 스스로 사람들을 피해 살고 있습니다. 하지만 그 인두겁 밑에는 핏줄에 흐르는 맹독으로부터 얻는 기이한 힘이라는 끔찍한 비밀을 숨기고 있지요. 전투가 시작되면 괴인은 야수로 변신해, 무시무시한 야성을 표출해냅니다!",
    image: abom,
    work: abomwork,
    skill: "1",
  },
  {
    id: 2,
    name: "유물학자",
    text: "학자이자 연구자이며 예리한 고고학자인 골동품 수집상은 전투에는 적합하지 않습니다. 그러나 그녀는 자기 보전의 전문가로서, 전투를 최대한 피하거나 아군에게 보호를 요청해 자신의 목숨을 보장합니다. 만약 전투를 피할 수 없다면, 골동품 수집상은 자신의 향로를 사용하여 아군을 치유하고 사기를 북돋거나... 적들을 중독시킬 수 있습니다.",
    image: anti,
    work: antiwork,
    skill: "2",
  },
  {
    id: 3,
    name: "석궁사수",
    text: "탈주 군인인 석궁사수는 전형적인 후열형 싸움꾼입니다. 적에게 제압사격을 퍼붓고, 목표한 대상을 저격하며 효과적인 응급치료를 할 수 있는 그녀는 든든한 안식처이자 포탑이며 어둠속의 횃불입니다.",
    image: arba,
    work: arbawork,
    skill: "3",
  },
  {
    id: 4,
    name: "현상금 사냥꾼",
    text: "이 잔혹하리만큼 솜씨 좋은 단일 대상 전문 사냥꾼은, 군중 제어에도 탁월합니다. 목표를 표시해 추가 피해를 입히거나, 적을 기절시킨 후 그 숨통을 확실히 끊어버릴 기회를 포착하는 등, 현상금 사냥꾼은 치밀한 계획을 짠 후 사냥에 임합니다. 또한 현상금 사냥꾼은 갈고리와 섬광탄, 강력한 어퍼컷을 사용해 적군의 전열을 엉망으로 만들어버릴 수 있습니다.",
    image: bounty,
    work: bountywork,
    skill: "4",
  },
  {
    id: 5,
    name: "성전사",
    text: "전투로 단련된 신봉자로서, 성전사는 일백 번의 성전에서 최전방을 맡아왔습니다. 성전사는 정면에서 정의의 분노로 적을 치거나, 강력한 방어 버프와 보조 치유 주문을 끌어내어 아군의 근접전을 지원하는 두 역할을 아우릅니다.",
    image: crusader,
    work: crusaderwork,
    skill: "5",
  },
  {
    id: 6,
    name: "고행자",
    text: "고행자는 교단 내의 극단주의자로서, 대체로 타인에게 있어서 그는 공포와 경악, 혐오스러움이 뒤섞인 위험분자입니다. 그가 자신의 순교행위에서 이끌어내는 힘은 강력한 만큼 불안정한데, 어떤 순간에는 치유와 부활의 샘이었다가도, 끔찍한 분노를 내뿜는 분수로 돌변하기도 합니다. 그의 온전히 잠재된 능력은 광기... 또는 죽음을 들이켰을 때 드러납니다.",
    image: flage,
    work: flagework,
    skill: "6",
  },
  {
    id: 7,
    name: "도굴꾼",
    text: "도굴꾼은 전열을 손쉽게 이동 가능한 다재다능하고 날렵한 전투원입니다. 주로 적들을 기습한 뒤 어둠 속으로 숨는 식의 일격이탈형 전투를 선호합니다. 비도와 독침이 빗나가더라도, 그 육중한 곡괭이를 휘두르며 근접전에 임할 수도 있습니다!",
    image: grave,
    work: gravework,
    skill: "7",
  },
  {
    id: 8,
    name: "야만인",
    text: "거칠고 예측할 수 없으며 완전히 무자비한 야만인은 피를 흘리며 전율합니다! 그녀의 거대한 글레이브는 전투에서 그녀의 인상적인 도달 범위를 제공하며, 면도날처럼 날카로운 날은 적에게 지속적인 상처를 남깁니다. 다재다능하고 가차 없는 그녀는 칼날로 뒷줄을 치고 적을 파괴할 수 있습니다. 그러나 특정 기술은 그녀를 지치게 만들기 때문에 때때로 다시 전투에 참여하기 전에 아드레날린을 재충전하기 위해 차례를 거쳐야 할 수도 있습니다.",
    image: hellion,
    work: gravework,
    skill: "8",
  },
  {
    id: 9,
    name: "노상 강도",
    text: "도적이자 부랑자, 혹은 그저 도둑이라고도 불리우는 노상강도는 단도와 플린트락 머스킷을 치명적으로 다루는 방법을 극한까지 단련했습니다. 적과의 거리에 상관 없이 노상강도는 적을 효과적으로 제거할 수 있습니다. 포도탄으로 광역 피해를 가하거나, 혹은 단일 대상에게 출혈을 일으키는 등, 노상 강도는 적들에게 다양한 방식으로 피해를 주는 역할을 맡습니다.",
    image: high,
    work: highwork,
    skill: "9",
  },
  {
    id: 10,
    name: "조련사",
    text: "굳세면서도 남달리 동정심이 많은 전직 보안관으로서, 조련사와 그의 충직한 사냥개는 적을 무찌르고 무고한 이들을 수호하기 위해 한몸처럼 움직입니다. 그들은 함께 적의 배후를 추적하고, 흩날리는 피보라 속으로 뛰어들며, 이를 갈아대고 또 치명적인 일격을 날리죠. 전투가 불리하게 흐를 때는, 약점을 보호하고 스트레스를 가라앉혀 지친 아군을 지원할 수 있습니다.",
    image: hound,
    work: houndwork,
    skill: "10",
  },
  {
    id: 11,
    name: "광대",
    text: "서서히 시작했다가 장대한 결말로 끝을 맺는, 힘찬 가곡과도 같은 거 아니겠습니까? 전투란 놈은 말입죠! 공격 시에 광대는 후미에서 영광의 종착지인 적진 바로 앞으로 뛰어들며 피의 불협화음을 낼 수 있습니다. 혹은 그냥 후열에서 머물며, 적들에게 소름 돋을 정도로 불안감을 안겨 주는 선율을 연주하거나, 아니면 아군의 사기를 복돋는 가락을 연주할 수도 있죠.",
    image: jester,
    work: jesterwork,
    skill: "11",
  },
  {
    id: 12,
    name: "나병환자",
    text: "병마로 몰락한 전사이자 시인인 나병환자는, 최전방에서 그 거대한 검을 휘두를 때 비로소 진가를 발합니다. 그가 검을 휘두르는 방식은 모 아니면 도입니다. 적이 막대한 피해를 입고 박살나든가, 바람 가르는 소리만 나고 빗나가든가 둘 중 하나뿐이죠. 나병환자는 모든 것들을 자급자족합니다. 그는 과거의 아픈 기억에서 힘을 뽑아 쓰거나, 자가 치유를 하거나, 방어도를 올리거나, 적들에게 증오를 내뿜을 수 있습니다.",
    image: lefer,
    work: leferwork,
    skill: "12",
  },
  {
    id: 13,
    name: "중보병",
    text: "중보병은 전투로 단련된 전문가입니다. 그는 끊임없는 죄책감과 그와 맞먹는 금욕적인 생활을 댓가로 보상을 받아왔습니다. 흔들리지 않고, 지휘하며, 목표를 노리는 중보병은 그의 철퇴와 방패, 맹렬한 전쟁의 함성으로 적의 전열을 무너뜨립니다.",
    image: man,
    work: manwork,
    skill: "13",
  },
  {
    id: 14,
    name: "신비학자",
    text: "일생을 고대의 금단의 지식 연구에 바친 끝에, 신비학자는 공허의 힘에 눈을 뜨게 되었습니다. 적을 쇠약하게 만드는 저주와, 짐짓 불가능해 보이는 광기어린 보조 마법이 그의 장기입니다. 허나 공허는 예측 불허한 힘이므로, 이에 따른 부작용도 따를 수 있습니다. 주로 일행의 횃불의 빛을 앗아가던가, 스트레스를 증가시키는 방법으로 말이지요.",
    image: occul,
    work: occulwork,
    skill: "14",
  },
  {
    id: 15,
    name: "역병 의사",
    text: "의사이자 연구자이자 연금술사로 일행의 후방에 서는 걸 선호하는 역병 의사는, 그녀의 적들에게 지속 피해를 입히는 독성 기체와 역병이 담긴 수류탄들을 투척합니다. 적들을 혼란 상태나 장님으로 만들고 그 동안 피해 증가 물약으로 아군을 강화시키거나 출혈이나 중독을 치료하는 등, 아군 보조 역할에도 탁월합니다.",
    image: plag,
    work: plagwork,
    skill: "15",
  },
  {
    id: 16,
    name: "방패 파괴자",
    text: "방패 파괴자는 모래폭풍의 격렬함와 현란함이 뒤섞인 듯한 무용으로 믿기 어려울 정도의 힘을 지닌 정밀 타격을 가합니다. 갑옷을 찢어버리고, 적의 진형을 무너뜨리고, 발자국 따라 맹독의 자취를 남기니, 그녀는 가히 무자비한 전사입니다.",
    image: shield,
    work: shieldwork,
    skill: "16",
  },
  {
    id: 17,
    name: "성녀",
    text: "전장에서 굳센 신앙심으로 치유의 권능을 부리거나, 신벌을 내리거나, 눈부신 폭발을 일으키는 능력을 부리는 전사 수녀입니다. 어떤 파티에나 어울리는 강력한 후방 보조 특화형이지만, 때에 따라 성녀는 전방에서 철퇴를 휘둘러 적들에게 직접 징벌을 가할 수도 있습니다.",
    image: vestal,
    work: vestalwork,
    skill: "17",
  },
];
export default body;
