const answer_list = [
  "esmolol",
  "phentolamine",
  "prazosin",
  "propranolo(Inderal)",
  "prazoxin(Minipress)",
  "escitalopram(Lexapro)",
  "zolpidem(Ambien, Edluar, Intermezzo)",
  "phenobarbital(Luminal)",
  "bethanechol(Urecholine)",
  "physostigmine(Antilirium)",
  "atropine(Atro-pen)",
  "allbuterol",
  "terbutaline",
  "clonidine",
  "phenylephrine",
  "propofol(Diprivan)",
  "nitrous oxide(아산화질소)",
  "isoflurance(Forance)",
  "succinylcoline(Anectine, Quelicin)",
  "levodopa, carbidopa, and entacapone(stalevo)",
  "benatropine(Cogentin)",
  "donepezil(Aricept)",
  "atorvastain(Lipitor)",
  "cholestyramine(Questran)",
  "dobutamine",
  "dopamine",
  "norepinephrine",
  "phenylephrine(Neo-synephrine)",
  "acebutolo",
  "atenolo",
  "diazepam(Valium)",
  "phenytoin(Dilantin)",
  "ethosuximide(Zarontin)",
  "morphine(Astramorph PF, Duramorph, others)",
  "naloxone(Evizio Narcan)",
  "aspirin(Acetylslicylic Acid ASA",
  "sumatriptan(Imitrex)",
  "lidocaine(Xylocaine)",
  "gemfibrozil(Lopid)",
  "furosemide(Lasix)",
  "hydrochlorothiazide(Microzide)",
  "spironolactone(Aldactone)",
  "dextran40(Gentran40, LMD others)",
  "sodium chloride(NaCl)",
  "potassium chloride(KCI)",
  "sodium bicarbonate(bivon)",
  "enalapril( vasotec)",
  "nifedipine(Adalat cc, procardia XL)",
  "doxazosin(Cardura)",
  "hydralazine(Apresoline)",
  "lisinopril(Prinivil, Zestril)",
  "digoxin(Lanoxin, Lanoxicaps)",
  "metoprolol(Lopressor, Toprol XL)",
  "milrionoe(Primacor)",
  "nitroglycerin(Nitrostat,Nitro-Bid, Nitro-Dur, others)",
  "atenolo(Tenormin)",
  "diltiazem(Cardizem, Cartia XT, Dilacor XR, others)",
  "reteplase(Retavase)",
];

const question_list = [
  {
    question: [
      "치료적 분류: 응괴를 용해하는 약물",
      "약리적 분류: 혈전용해제",
      "심근경색의 증상이 시작되는 즉시 가능한 한 빨리 투약되어야 한다. 정맥으로 일시주입하면 보통 20분 이내에 약효가 나타난다.",
      "투여 시 주의사항",
      "reteplase와 해파린은 함께 투약할 수 없으며 절대 같은 용액에 동시에 섞으면 안 된다.",
      "유해반응",
      "사용의 가장 심각한 유해반응은 비정상적인 출혈이다. 출혈은 주입 부위나 카테터 삽입 부위에서 지속될 수 있다. 심근에 재관류가 이루어지는 동안 부정맥이 발생할 수도 있다.",
      "금기: 출혈 중이거나 뇌졸중 경험이 있는 환자, 최근에 수술경험이 있는 환자에게는 사용을 금한다.",
      "상호작용",
      "약-약: 아스피린, 항응고제, 혈소판 응집 억제제와 함께 병용하는 경우 추가적인 항응고 효과가 발생하여 출혈 가능성이 높아진다.  ",
    ],
    rightAnswer: "reteplase(Retavase)",
  },
  {
    question: [
      "치료적 분류: 항협심증제",
      "약리적 분류: 칼슘통로 차단제",
      "칼슘통로차단제의 다른 약물과 마찬가지로 심근세포로 칼슘이 이동하는 것을 억제한다. 관상동맥과 말초혈관을 이완시키는 기능을 한다. 또한 심근으로 더 많은 산소를 공급하며 심장의 부하를 줄인다. 안정형 협심증과 혈관경련성 협심증뿐만 아니라 심방부정맥과 고혈압의 치료에도 유용한다.",
      "유해반응",
      "방실 차단, 동성기능부전증후군환자, 심한 저혈압 환자, 동맥류 출혈 환자, 두 개내 수술을 받은 환자는 투약이 금지된다. 이 약은 신장과 간에 이상이 있는 환자에게 주의해서 사용해야 한다.",
      "상호작용",
      "약-약: digoxin이나 베타 아드레날린성 차단제와 같은 다른 심장혈관계 약물과 함께 쓰는 것은 불완전 또는 완전심장차단 심부전이나 부정맥을 유발할 수 있다.",
      "베타 차단제나 항고혈압제를 병용할 경우 추가적인 저혈압도 발생할 수 있다.",
      "과용량 투여 시 처치: atropine이나 isoproterenol은 diltiazem 과용에 의한 서맥을 호전시키는 데 이용될 수 있다.  ",
    ],
    rightAnswer: "diltiazem(Cardizem, Cartia XT, Dilacor XR, others)",
  },
  {
    question: [
      "치료적 분류: 항협심증제",
      "약리적 분류: 베타 아드레날린성 차단제",
      "심부전, 고혈압, 협심증, 심근경색 등 만성적인 질병에 안정성과 효과 베타 아드레날린성 수용체를 선택적으로 차단한다.",
      "심장박동수와 심장의 수축력을 감소시켜 심근의 산소 요구량을 낮추는 것이다.",
      "투여 시 주의사항",
      "약을 투여하기 전 투여 중 투여 후 전 과정에 걸쳐서 혈압과 맥박을 측정해야 한다.",
      "임신 범주 D",
      "경고: 허혈성 심질환이 있는 환자들의 경우 갑작스러운 중단을 피해야 한다.",
      "금기: 심작박동을 느리게 하기 때문에 심각한 서맥방실차단, 심장성 쇼크 또는 대상부전의 심부전 환자들에게 사용하면 안 된다.",
      "상호작용",
      "약-약: 칼슘통로차단제와 함께 사용하는 경우 과도한 심장 억제 효가가 발생할 수 있다. 디곡신과 함께 사용하는 경우 방실전도를 느리게 하여 심장차단이 발생할 수 있다.",
      "과용량 투여 시 처치: 과다복용 후 일어나는 가장 심각한 증상은 저혈압과 서맥이다. 아트로핀이나 이소프로테놀이 주로 서맥을 억제시키는 데 사용된다.",
    ],
    rightAnswer: "atenolo(Tenormin)",
  },
  {
    question: [
      "치료적 분류: 항협심증제",
      "약리적 분류: 유기 질산염, 혈관확장제",
      "가장 오래되고 널리 사용되는 유기 질산염인 설하, 경구, 정맥내, 경점막, 경피, 국소, 복효형 제제 등 여러 경로로 투여할 수 있다. 급성 협심증이 발생한 상태거나 신체적 활동 전에 투여할 수 있다. 설하 투여 시 혈장 수치가 최대치를 도달하는 데 2~4분이 걸리며 협심증 통증을 급속하게 제거한다. 설하로 1회 투여 후 10~15분이 지나도 흉통이 신속히 완화되지 않는다면 심근경색일 수 있다.",
      "투여 시 주의사항",
      "빛 노출로 인한 질산염의 분해를 줄이기 위해 수액병을 가린다.",
      "유해반응",
      "정맥 확장은 반동성 빈맥을 유발한다.",
      "금기: 저혈압, 두 개내압 상승 두부 외상이 있는 환자들에게는 금기이다.",
      "심장압전과 심외막염 환자에게 금기이다. 서방제는 안압을 증가시킬 수 있기 때문에 녹내장 환자에게 투여하면 안 된다.",
      "과용량 투여 시 처치: 저혈압은 생리식염수의 정맥투여로 호전될 수 있다. 메트헤모글로빈혈증이 의심되는 경우, 메틸렌 블루가 투여될 수 있다.",
    ],
    rightAnswer: "nitroglycerin(Nitrostat,Nitro-Bid, Nitro-Dur, others)",
  },
  {
    question: [
      "치료적 분류: 심부전 치료제",
      "약리적 분류: 포스포디에스테라아제 억제제",
      "반감기가 짧고 유해반응이 적기 때문이다. 상당히 진행된 심부전의 단기 치료에 주로 사용한다. 이 약물은 작용 시간이 빠르다. 즉각적인 효과는 심근 수축력의 증가와 심박출량의 증가이다.",
      "유해반응",
      "가장 심각한 유해반응은 심실 부정맥이다.",
      "10명의 환자당 1명 꼴로 발생한다.",
      "지속적으로 모니터해야 한다.",
      "상호작용",
      "약-약: 디곡신, 도부타민 혹은 기타 수축촉진제와 함께 투여할 때 신중한 주의가 필요하다.",
      "과용량 투여 시 처치: 과다복용은 저혈압을 야기하고, 생리식염수 혹은 혈압상승제 투여로 치료할 수 있다.",
    ],
    rightAnswer: "milrionoe(Primacor)",
  },
  {
    question: [
      "치료적 분류: 심부전 및 고혈압 치료제",
      "약리적 분류: 베타 아드레날린성 차단제",
      "선택적 베타 아드레날린성 차단제이다. 많은 양을 사용할 경우, 기관지 평활근의 베타 수용체에 영향을 미칠 수 있다.",
      "대개 ACE 억제제와 같은 다른 심부전 약물과 병용한다. 또한 협심증, 고혈압에서 사용이 승인되었고, 심근경색증으로 이어지는 심장합병증을 줄이는 것으로 밝혀졌다.",
      "투여 시 주의사항",
      "정맥투여 시 심전도, 혈압, 맥박을 자주 모니터한다.",
      "경구투여 전 맥박 및 혈압을 측정한다. 맥박이 분당 60회 이하이거나 저혈압 환자인 경우 사용을 중단한다.",
      "경고: 협심증이나 심장질환이 있는 환자는 약물을 갑자기 중단해서는 안 된다.",
      "금기: 심장성 쇼크, 동성서맥, 1도 이상의 심장 차단, 저혈압, 현저한 심부전 환자에게는 금한다. 천식환자 및 기관지경련의 병력이 있는 환자에게 사용 시 주의해야 한다. 왜냐 하면 이 약물은 고용량에서 베타 수용체에 영향을 줄 수 있기 때문이다.",
      "상호작용",
      "약-약: 디곡신과의 병용은 서맥을 초래할 수 있다.",
      "과용량 투여 시 처치: 과다복용으로 인한 서맥에는 atropine 또는 isoproterenol을 사용한다.",
    ],
    rightAnswer: "metoprolol(Lopressor, Toprol XL)",
  },
  {
    question: [
      "치료적 분류: 심부전 치료제",
      " 약리적 분류: 강심배당체",
      "심근의 수축력 또는 수축 강도를 증가시키는 것이다. 심근세포에서 나트륨 칼륨 펌프의 매우 중요한 효소인 Na-K ATPase를 억제함으로써 이를 수행한다. Na이 축적되면 세포 속에 저장되어 있던 칼슘 이온이 방출된다. 칼슘 이온이 방출되면 근섬유가 더 강하게 수축한다.",
      "디곡신은 심근 수축을 증가시킴으로써 심박출량을 증가시키고 심부전 증상을 경감시키며, 운동 내성을 향상시킨다.",
      "패울혈 및 말초부종의 증상을 완화한다.",
      "부정맥 치료에 사용된다.",
      "투여 시 주의사항",
      "맥박이 60bpm 미만이면 복용을 중단하고 의료인에게 알린다.",
      "투약하기 전 최근 혈청 디곡신 수치 결과를 확인한다.",
      "유해반응",
      "저칼륨혈증 부정맥을 초래한다.",
      "디곡신과 이뇨제의 동시사용은 신중하게 모니터링해야 한다.",
      "금기: 심실성 부정맥 신장을 통해 배출되기 때문에 신장 기능 손상 환자들은 디곡신의 복용량을 줄여야 한다.",
      "상호작용",
      "약-약: 이뇨제와 디곡신을 동시 복용하면 저칼륨혈증이 나타나고 부정맥이 증가할 위험이 있다. ACE 억제제, spironolactone, 칼륨 보충제와 함께 사용하면 고칼륨혈증에 이를 수 있고, 디곡신의 치료효과는 감소하게 된다.",
      "베타 차단제와 함께 사용하면, 추가로 서맥을 야기할 수 있다.",
      "디곡신과 함께 정맥에 투여되면 부정맥의 위험이 증가할 수 있다.",
      "디곡신의 확산 및 배설을 감소시켜, 결국 디곡신의 독성으로 인한 유해반응을 증가시킬 위험이 있다.",
      "과용량 투여 시 처치: 디곡신 과다복용은 치명적일 수 있다. 특수 치료로 디곡신에 대해서만 항체를 갖는 digoxin immune fab을 정맥 주입한다.",
    ],
    rightAnswer: "digoxin(Lanoxin, Lanoxicaps)",
  },
  {
    question: [
      "치료적 분류: 심부전 및 고혈압 치료제",
      "약리적 분류: ACE 억제제",
      "ACE를 억제하고 aldosterone분비를 감소시키는 작용을 한다. 혈압이 떨어지고, 심박출량은 증가한다.",
      "다른 적응증은 급성 심근경색 발생 시 24시간 이내에 투약하면 환자들의 생존율이 향상된다는 것이다.",
      "투여 시 주의사항",
      "혈압을 측정한다.",
      "임신 범주C 혹은 D",
      "유해반응",
      "가장 흔한 유해반응은 기침, 두통, 현기증, 기립성 저혈압, 발진이다. 고칼륨혈증이 치료 기간 중 발생 할 수 있으므로 대개 전해질 수치를 주기적으로 모니터한다.",
      "금기: 고칼륨혈증 환자와 ACE 억제제 치료로 혈관부종을 경험한 환자들에게는 사용을 금한다.",
      "상호작용",
      "약-약: 칼륨보존이뇨제와 동시에 복용하면 고칼륨혈증이 나타난다.",
      "과용량 투여 시 처치: 이 증상은 생리식염수 혹은 혈압상승제의 투여로 치료 가능하다.",
    ],
    rightAnswer: "lisinopril(Prinivil, Zestril)",
  },
  {
    question: [
      "치료적 분류: 고혈압과 심부전 치료제",
      "약리적 분류: 직접작용성 혈관확장제",
      "직접 동맥 평활근의 혈관을 확장시켜 작용한다. 비교적 최근에 사용되는 약물은 isosorbide dinitrate 와 hydralazine의 고정용량병합제인 BiDil이다.",
      "유해반응",
      "두통 반사성 빈맥, 심계항진, 홍조, 오심, 설사가 흔하지만 치료가 진행되면 해결된다.",
      "상호작용",
      "약-약: 다른 항고혈압제와 hydralazine을 병용하면 심각한 저혈압이 야기된다.",
      "과용량 투여 시 처치: 과다복용 징후의 대부분이 저혈압이며 이는 혈압상승제나 수액 중 하나로 치료한다.",
    ],
    rightAnswer: "hydralazine(Apresoline)",
  },
  {
    question: [
      "치료적 분류: 고혈압과 양성 전립선비대증(BPH) 치료제",
      "약리적 분류: 알파 아드레날린성 차단제",
      "선택적 알파 아드레날린성 차단제이다. 동맥과 정맥을 확장시켜 신속하고 현저히 혈압을 떨어뜨린다.",
      "투여 시 주의사항",
      "저혈압과 실신이 나타날 수 있으므로 환자를 지밀하게 모니터한다.",
      "상호작용",
      "약-약: 경구용 시메티딘은 doxazosin의 반감기를 약간 증가시킨다.",
    ],
    rightAnswer: "doxazosin(Cardura)",
  },
  {
    question: [
      "치료적 분류: 고혈압 및 협심증 치료제",
      "약리적 분류: 칼슘통로 차단제",
      "nifedipine은 고혈압과 이형협심증 또는 혈관경련성 협심증에 일반적으로 처방되는 칼슘통로차단제 이다.",
      "관상동맥을 비롯하여 심근과 혈관 평활근의 칼슘 통로를 선택적으로 차단하는 작용을 한다. 심장의 산소 사용을 줄이고 심박출량을 증가시키고 혈압을 낮춘다.",
      "투여 시 주의사항",
      "캡슐이나 정제로 된 nifedipine을 통째로 복용한다.",
      "유해반응",
      "속방형 nifedipine은 반사성 빈맥을 유발할 수 있다.",
      "반동성 저혈압을 피하기 위해서는 투약은 서서히 줄여야 한다.",
      "상호작용",
      "약-약: 베타 차단제와 병용하면 울혈성 심부전의 위험이 증가한다.",
      "과용량 투여 시 처치: 과다복용의 징후는 대부분 저혈압이며 혈압상승제로 치료된다. 칼슘을 주입하기도 한다.",
    ],
    rightAnswer: "nifedipine(Adalat cc, procardia XL)",
  },
  {
    question: [
      "치료적 분류: 고혈압과 심부전 치료제",
      "약리적 분류: ACE 억제제",
      "angiotensinⅡ와 알도스테론 농도를 감소시키면서 혈압을 현저하게 낮춘다.",
      "투여 시 주의사항",
      "초회량 현상으로 심한 저혈압 때문에 실신이 초래 될 수 있다.",
      "유해반응",
      "고칼륨혈증을 야기한다.",
      "경고: 임신 중 ACE 억제제 또는 ARBs를 복용하면 태아 손상 및 사망이 발생할 수 있다.",
      "상호 작용",
      "thiazide 이뇨제는 칼륨 소실을 증가시킨다.",
      "신독성이 생길 가능성이 있기 때문이다.",
      "과용량 투여 시 처치: 과다복용의 가장 흔한 징후는 저혈압이며 이는 생리식염수를 정맥주입하여 치료한다.",
    ],
    rightAnswer: "enalapril( vasotec)",
  },
  {
    question: [
      "치료적 분류: 산증 또는 중탄산나트륨 결핍 치료제",
      "약리적 분류: 전해질 나트륨과 중탄산나트륨 보충제",
      "중탄산나트륨은 대사성 산증을 교정하는 약물이다. 해리 후에 중탄산염 이온은 체액의 pH를 직접적으로 상승시킨다. 급성 질환의 경우 정맥투여한다.",
      "아스피린과 pheno barbital과 같은 산성 약물, methotrexate같은 화학요법의 부사적 약물의 과다복용을 치료하는 데 유용하다.",
    ],
    rightAnswer: "sodium bicarbonate(bivon)",
  },
  {
    question: [
      "치료적 분류: 비폐쇄성 요정체 약물",
      "약리적 분류: 무스카린 콜린성 수용체 약물",
      "부교감신경성 자극에 직접 작용을 일으키는 부교감신경 작용제",
      "과용량 투여 시 처치 : atropine sulfare가 특효제",
    ],
    rightAnswer: "bethanechol(Urecholine)",
  },
  {
    question: [
      "치료적 분류: 항콜린성 독성 해독제",
      "약리적 분류: AchE억제제",
      "투여시 주의사항: 5분 이상 천천히 투여해야 한다.",
      "과호흡에 주의해야 한다.",
      "상호작용 약-약: 콜린제와 베타차단제의 효과를 증가시킨다.",
      "과용량 투여 시 처치: 콜린성 위기나 과민반응의 가능 때문에 아트로핀이 필요하다.",
    ],
    rightAnswer: "physostigmine(Antilirium)",
  },
  {
    question: [
      "치료적 분류: 항콜린에스테라아제 치료용 해독제",
      "약리적 분류: 무스카린 콜린성 수용체 차단제",
      "무스카린 수용체와 결합하여 Ach의 부교감신경의 작용을 차단하고 투쟁 또는 도피 반응을 유도한다.",
      "심박수의 증가, 기관지 확장, 위장관의 운동력 감소, 동공 확대, 샘 분비물 감소이다.",
      "유해반응 - 섬망",
      "금기: 눈의 압력을 증가, 녹내장 환자에게는 금기",
      "과용량 투여 시 처치: physostigmine은 혼수를 빠르게 회복시킬 수 있는 atropine 중독 치료용 해독제이다.",
    ],
    rightAnswer: "atropine(Atro-pen)",
  },
  {
    question: [
      "치료적 분류: 비충혈 완화제, 동공확장제, 항저혈압제",
      "약리적 분류: 아드레날린성 약물(교감신경계 작용제)",
      "선택적 알파 아드레날린성 작용제이다.",
    ],
    rightAnswer: "phenylephrine(Neo-synephrine)",
  },
  {
    question: [
      "치료적 분류: 항고혈압제",
      "약리적 분류: 아드레날린성 차단제",
      "a 수용체 차단제이다. 말초저항을 감소시켜 혈압을 감소. 짧은 반감기를 가지고 있다.",
      "투여시 주의사항",
      "중증의 저혈압을 피하기 위해 적은 투여량부터 시작한다.",
      "기립성 저혈압을 유발",
      "금기: 임신과 모유수유 기간 중의 안전은 확보되지 않는다",
      "상호작용",
      "약-약: 항고혈압제와 이뇨제의 동시 사용은 심한 저혈압을 유발할 수 있다.",
    ],
    rightAnswer: "prazoxin(Minipress)",
  },
  {
    question: [
      "세로토닌의 이용성을 증가시키는 SSRI이다.",
      "일반적인 불안과 우울증을 위한 것이다.",
      "투여시 주의사항",
      "신장 또는 긴장 장애의 경우 또는 노인의 경우 감량을 권고한다.",
      "용량 증가는 최소 1주 단위로 간격을 두어야 한다. 임신 범주C",
      "경고: 자살 사고와 행동의 위험을 증가시킨다.",
      "금기: MAOI 치료 후 14일 이내에 복용해서는 안된다.",
      "상호작용",
      "약-약: MAOI와 같이 사용하면 고혈압, 고열, 자율신경 불안을 초래할 수 있다.",
    ],
    rightAnswer: "escitalopram(Lexapro)",
  },
  {
    question: [
      "치료적 분류: 진정 수면제",
      "약리적 분류: 비벤조디아제핀",
      "GABA 수용체 작용제: 비벤조디아제핀, 비바비튜레이트 중추신경계 억제제",
      "비벤조디아제핀이지만 변연계, 시상, 시상하부에서 GABA 매개를 통해 중추신경 억제를 촉진",
      "투여 시 주의사항",
      "잠자기 직전에 투여한다.",
      "유해반응",
      "금기: 수유 중인 여성은 이 약을 복용해서는 안 된다.",
      "상호작용",
      "약-약: 약물의 상호작용으로 알코올을 포함하는 다른 중추신경 억제제를 동시에 사용할 때 진정이 증가한다.",
      "과용량 투여 시 처치: 벤조디아제핀 수용체 길항제인 flumazenil이 도움이 된다.",
    ],
    rightAnswer: "zolpidem(Ambien, Edluar, Intermezzo)",
  },
  {
    question: [
      "치료적 분류: 항경련제-진정제",
      "약리적 분류: barbiturate GABA 수용체 작용제",
      "다양한 발작의 치료에 사용 또한 수면을 촉진하기 위해 사용될 수도 있다.",
      "GABA 신경전달물질의 활동을 증가시켜 뇌전증의 원인인 비정상적인 뉴런 활동을 억제하는 역할을 한다.",
      "투여 시 주의사항",
      "혈관 밖 주입이 조직괴사를 유발할 수 있기 때문이다.",
      "유해반응",
      "호흡저하, 중추신경계 억제, 혼수, 사망",
      "상호작용",
      "약-약: 알코올이나 다른 중추 신경계 억제제와 복용해서는 안 된다.",
    ],
    rightAnswer: "phenobarbital(Luminal)",
  },
  {
    question: [
      "치료적 분류: 항경련제",
      "약리적분류: benzodiazepine GABA 수용체 작용제",
      "지속적인 흥분전달을 억제함",
      "비정상적인 신겨병소를 강한 진정작용 없이 억제시키고 골격근육을 이완시킨다.",
      "구강 복용 시 1주에서 2주 사이에 최대 치료 효과가 나타난다.",
      "약 4주 후면 내성이 생겨난다. 정맥주사 시 몇 분 만에 효과가 나타나며 20분 동안 항경련제의 효과가 지속되기도 한다.",
      "투여 시 주의 사항",
      "호흡수를 관찰, 심폐소생술과 기도 확보를 할 수 있어야 한다.",
    ],
    rightAnswer: "diazepam(Valium)",
  },
  {
    question: [
      "CNS의 나트륨 통로를 탈감작시킨다. 탈감작은 발작을 일으키는 뇌의 파괴적 전기활동이 퍼지는 것을 막는다.",
      "실신 발작을 제외하고 모든 종류의 발작에 효과적이다.",
      "투여 시 주의사항",
      "생리식염수만 혼합한 후 최대 분당 50mg 속도로 주사해야한다.",
      "다른 약이다 포도당과 혼합 시 침전물이 생길 수 있기 때문이다.",
      "주사용은 혈관외유출로 국소 조직 손상을 일으킬 수 있는 연조직 자극제이다.",
      "정맥주사도 중심경맥 또는 대정맥을 선택한다.",
      "유행반응",
      "서맥 혹은 심실세동과 같은 심박동 이상",
      "경고: 성인은 50mg/분 소아환자는 1~3mg/kg/분을 초과해서는 안 된다. 심장 모니터링이 필요하다.",
      "금기: 아나필락시스반응 환자 뇌전증발작",
      "상호작용",
      "약-약: 심환계 항우울제와 병용 시 갑작스런 뇌전증발작을 일으킨다.",
      "과용량 투여 시 처치: 지속적인 기도유지와 혈중농도. 유해반응 등을 주의 깊게 관찰한다.",
    ],
    rightAnswer: "phenytoin(Dilantin)",
  },
  {
    question: [
      "실신발작에 사용된다. 신경흥분의 역치를 상승시킴으로써 신경세포의 활동을 억제한다.",
      "투여 시 주의사항",
      "긴장긴대발작에 사용할 때 갑자기 이 약을 중단해서는 안된다.",
      "유해반응",
      "의식과 신체 능력에 손상을 줄 수도 있다.",
      "금기: 심한 뇌전증환 혹은 신질환에는 이 약물을 사용해서는 안된다.",
      "상호작용",
      "약-약: phenytoin 혈중 농도를 상승시킨다.",
      "과용량 투여 시 처치: 위세척과 계면활성제를 사용하여 약물을 제거하기도 하고 투석을 하기도 한다.",
    ],
    rightAnswer: "ethosuximide(Zarontin)",
  },
  {
    question: [
      "치료적 분류: 아편유사진통제",
      "약리적 분류: 아편유사수용체 작용제",
      "mu, kapa 수용체와 결합하여 큰 진통 효과를 일으킨다.",
      "다행증, 동공축소, 심장근육에 자극을 유발한다. 심한 급성 및 만성 통증을 완화",
      "투여 시 주의사항",
      "기립성 저혈압 orthostatic, hypotension의 원인이 된다.",
      "유해반응",
      "신체 심리적 의존은 장기간 고용량 투여 시 발생한다.",
      "금기: 급성 혹은 심한 천식, 위장관 폐색, 심한 긴장 혹은 신장 손상의 경우 모르핀을 금해야 한다.",
      "과용량 투여 시 처치: 정맥주사로 날록손을 투여한다.",
    ],
    rightAnswer: "morphine(Astramorph PF, Duramorph, others)",
  },
  {
    question: [
      "치료적 분류: 급성 아편유사진통제 과다 투여 및 오용 치료제",
      "약리적 분류: 아편유사제수용체 길항제",
      "순수한 아편유사길항제이다. 급성 아편유사제 과다사용이 의심될 때 응급 상황에서 아편유사진통제 효과를 없애거나 완화시키기 위해 사용된다.",
      "수술 후 아편유사제 억제를 치료하는 데 사용되기도 한다.",
      "투여 시 주의사항",
      "심폐소생기구를 접근이 용이한 곳에 둔다.",
    ],
    rightAnswer: "naloxone(Evizio Narcan)",
  },
  {
    question: [
      "치료적 분류: 비아편유사진통제; 비스테로이드 항염증제, 해열제",
      "약리적 분류: 살리실산염; cyclooxygenase(COX) 억제제",
      "통증과 염증 과정에 관련된 프로스타글란딘 합성을 억제",
      "중등도 이하의 열을 감소 혈액응고 방지에 중요한 역할을 하며 따라서 심근겨색증에 의한 사망의 위험과 뇌졸중의 발생률을 낮출 수 있다.",
      "금기: 출혈 시간을 증가시키기 때문에 항응고요법을 받는 환자에게 투여하지 않는다.",
      "상호작용",
      "약-약: phenobarbital, 제산제, glucoccorticoid의 동시 사용이 aspirin의 효과를 감소시킬 수 있다.",
    ],
    rightAnswer: "aspirin(Acetylslicylic Acid ASA",
  },
  {
    question: [
      "치료적 분류: 항편두통제",
      "약리적 분류: 트리탑; 5-HT수용체 작용제: 두 개 내 동맥 혈관수축제",
      "트립탄 계열 항편두통제로 상대적으로 새로운 약물 계통에 속한다.",
      "두 개내 동맥의 혈관 수축을 유발 피하 투여하면 10~20분 내에 편두통을 없앨 수 있고 편두통이 의심되거나 시작된 후 가능한 한 빨리 투여해야한다.",
      "투여시 주의사항",
      "심장허혈을 유발",
    ],
    rightAnswer: "sumatriptan(Imitrex)",
  },
  {
    question: [
      "치료적 분류: 마취제, 항부정맥약",
      "약리적 분류: 나트륨통로차단제; amide",
      "뉴런 세포막 내에 위치한 나트륨 통로를 차단함 부정맥 치료",
      "유해반응",
      "독성의 조기 증상은 중추신경계 흥분이고 심한 유해반응으로는 경련, 호흡저하, 심장마비가 있다.",
    ],
    rightAnswer: "lidocaine(Xylocaine)",
  },
  {
    question: [
      "치료적 분류: 전신마취제",
      "약리적 분류: N-methyl-D-aspartate(NMDA) 수용체 작용제",
      "효과성 안전성 때문에 가장 널리 사용되는 정맥마취제이다.",
      "전신마취를 유도하고 유지하는데 사용된다. 거의 즉각적으로 작용하고 의식 진정에 효과적이다.",
      "오심 구토를 예방하는 항구토 작용을 한다.",
      "지속반응 10~15분",
      "유해반응",
      "주사 부위의 통증, 무호흡, 호흡저하, 저혈압이다.",
      "금기: 콩과 달걀이 들어간 제품이다 약물에 과민성이 있는 환자에게 금기",
      "상호작용",
      "약-약: 투여량은 벤조디아제핀이나 아편제 약물과 같은 마취제를 복용하는 환자의 경우 감량",
      "CNS억제제와 함께 사용하면 CNS 및 호흡기 억제를 추가로 일으킬 수 있다.",
      "과용량 투여 시 처치: 치료는 기계적 환기",
    ],
    rightAnswer: "propofol(Diprivan)",
  },
  {
    question: [
      "치료적 분류: 전신마취제",
      "약리적 분류: 흡입용 가스제",
      "주요 작용은 중추신경계의 통증기전의 억제를 통한 무통증이다. 외과적 마취제와 결합하여 사용된다.",
    ],
    rightAnswer: "nitrous oxide(아산화질소)",
  },
  {
    question: [
      "치료적 분류: 흡입용 전신마취제",
      "약리적 분류: GABA 및 글루타메이트 수용체 작용제",
      "수술 시 빠른 속도로 마취할 수 있다.",
      "산소 또는 산소/아산화질소가 포함된 사용할 수 있다. 다른 흡입마취제와 비교했을 때 심박출량이 잘 유지된다.",
      "투여 시 주의사항",
      "항콜린제 사용은 분비를 감소시키므로 수술 전 투약을 한다.",
      "지속시간: 약물 중단 후 1시간도 안 되어 마취에서 깨어남",
      "유해반응",
      "오심, 구토 호흡저하와 저혈압을 일으킨다.",
      "금기: 악성고열이 있었던 환자에게는 사용하지 않는다.",
      "상호작용",
      "약-약: 아산화질소와 동시에 사용될 때 기침, 호흡저하, 후두연축이 발생할 수 있다.",
    ],
    rightAnswer: "isoflurance(Forance)",
  },
  {
    question: [
      "치료적 분류: 골격근 마비제, 신경근육 차단제",
      "약리적 분류: 탈분극 차단제; 아세틸콜린 수용체 차단제",
      "처음 탈분극이 발생하고 골격근이 수축한다. 근력 약화 및 근경련이다.",
      "나중에는 마비가 발생한다. 정맥 주입이 중단된 후 작용시간은 몇분에 불과하다.",
      "민감한 환자들에게 나타나는 악성고열을 감소시키기 위해 수술 전 혹은 수술 후에 사용되는 약물이다.",
      "지속시간 - 정맥 2~3분",
      "유해반응",
      "횡경막과 늑간극의 완전한 마비를 초래할 수 있다. 수술하는 동안 기계 환기가 필요하다.",
      "서맥과 호흡저하이다. 특정 유전자 결함이 있는 환자는 근경직과 함께 심한 고열이 발생",
      "상호작용",
      "약-약: 이 약물을 이산화질소와 함께 사용하면 서맥, 부정맥, 동정지, 무호흡, 악성고열의 위험성이 증가할 수 있다.",
    ],
    rightAnswer: "succinylcoline(Anectine, Quelicin)",
  },
  {
    question: [
      "치료적 분류: 항파킨슨 약물",
      "약리적 분류: 도파민 전구체 도파민 증가 약물 혼합",
      "뇌의 추체외로 영역에서 신경 전달물질 도파민을 복원하여 파킨슨병의 증상, 특히 진전, 운동완만, 근육강직을 완하시킨다.",
      "투여 시 주의사항",
      "약물을 갑자기 중단하면 파킨슨병 위기 증상인 신경이완제 악성증후군으로 이어질 수 있다.",
      "유해반응",
      "통제되지 않는 움직임이 의지와 상관없이 나타난다. 근육의 단일수축, 경련성 눈 깜빡임은 독성의 초기 징후이다.",
      "기립성 저혈압이 나타나기도 한다. 이 약물은 점차적으로 중단해야한다.",
      "갑자기 중단하면 급성 파킨슨과 같은 증상으로 이어질 수 있다.",
    ],
    rightAnswer: "levodopa, carbidopa, and entacapone(stalevo)",
  },
  {
    question: [
      "치료적 분류: 항파킨슨 약물",
      "약리적 분류: 중추신경계에 작용하는 콜린성수용체 차단제",
      "선조체에서 뉴런의 과도한 콜린성자극을 차단한다.",
    ],
    rightAnswer: "benatropine(Cogentin)",
  },
  {
    question: [
      "치료적 분류: 알츠하이머병 치료제",
      "약리적 분류: 콜린에스테라아제 억제제",
      "AchE억제제로서 손상되지 않은 대뇌피질내 뉴런들에서 아세틸콜린 효과를 강화하여 알츠하이머 치매에서 기억력을 개선하다.",
      "환자는 약물치료를 최소 6개월 받고 나서 약물치료의 최대 효과를 평가해야 한다.",
      "장점은 같은 약물군의 다른 약물에 비해 반감기가 길어서 하루 한 번만 투약해도 된다는 점이다.",
      "과용량 투여 시 처치: atropine과 같은 항콜린제를 과다용량의 해독제로 쓸 수 있다.",
    ],
    rightAnswer: "donepezil(Aricept)",
  },
  {
    question: [
      "치료적 분류: 항고지혈제",
      "약리적 분류: HMG-CoA 환원효소 억제제, 스타틴류",
      "1차적인 적응증은 고콜레스테롤혈증이다. 환원효소를 억제하는 작용을 한다.",
      "간에서 콜레스테롤이 덜 만들어지면 간세포 표면에 더 많은 LDL 수용체를 만든다.",
      "많으면 많을 수록 혈액 속의 LDL 제거가 증가한다.",
      "LDL과 콜레스테롤의 혈중 농도가 모두 감소한다. ",
      "콜레스트롤을 낮추는 식이가 필요하다. 심근경색증과 뇌졸중의 위험을 줄이는 것이다.",
      "투여 시 주의사항",
      "하루 중 언제라도 투여할 수 있다.",
      "상호작용",
      "약-약: dogoxin의 농도를 증가시킬 수 있다. crythromycin은 atorvastatin의 농도를 40% 증가시킬 수 있다.",
    ],
    rightAnswer: "atorvastain(Lipitor)",
  },
  {
    question: [
      "치료적 분류: 항고지혈제",
      "약리적 분류: 담즙산 수지",
      "분말이므로 복용하기 전에 액체와 혼합하여 일단 장에 들어가게 되면 흡수 혹은 대사가 이루어지지 않는다.",
      "최대 효과를 보기 위해서는 30일 이상이 걸린다.",
      "배설물로 배출되는 불용성 복합체의 담즙산과 결합한다.",
      "콜레스트롤 수치는 분변 배설로 인해 감소한다.",
      "상호작용",
      "약-약: digoxin, penicilins, thyroid hormone, thiazide diuretics와 같은 약물들과 결합하여 흡수를 방해할 수 있기 때문에 이러한 약물이 포함된 다른 의약품과 동시에 복용하지 말아야 한다.",
    ],
    rightAnswer: "cholestyramine(Questran)",
  },
  {
    question: [
      "치료적 분류: 항고지혈제",
      "약리적 분류: 피브릭산 제제",
      "HDL을 증가시키는 동시에 VLDL을 최대 50%까지 감소시킨다. LDL을 낮추는 데 스타틴류보다 덜 효과적이다.",
      "위해 1차로 선택할 약물은 아니다.",
    ],
    rightAnswer: "gemfibrozil(Lopid)",
  },
  {
    question: [
      "치료적 분류: 심부전 및 고혈압 치료제",
      "약리적 분류: 이뇨제(고리형)",
      "짧은 기간에 환자의 과도한 체액을 다량 제거할 수 있기 때문에 급성심부전의 치료에 종종 사용된다.",
      "정맥으로 주입하면 이뇨가 5분 내로 시작되고 신장단위의 헨레고리에서 나트륨과 염화물의 재흡수를 막는 작용을 한다.",
      "심박출량과 신혈류가 심하게 감소하였을 때 특히 도움이 된다.",
      "투여 시 주의사항",
      "약물을 투여하기 전에 환자의 혈청 칼륨 수치를 확인한다.",
      "유해반응",
      "전해질 불균형의 가능성을 동반한다.",
      "그 중 가장 중요한 것이 저칼륨혈증이다.",
      "상호작용",
      "약-약: 저칼륨혈증은 강심 배당체를 복용하는 환자들에게 부정맥을 야기할 수 있기 때문에 디곡신과의 병합요법은 신중하게 관찰되어야 한다.",
    ],
    rightAnswer: "furosemide(Lasix)",
  },
  {
    question: [
      "치료적 분류: 고혈압과 부종 치료제",
      "약리적 분류: thiazide 이뇨제",
      "고혈압에 가장 널리 처방되는 이뇨제이다. 10~20mmHg 정도의 혈압을 낮추는 효과가 있다.",
      "신세뇨관에 작용하여 Na의 흡수를 감소시킨다.",
      "혈액량이 감소하고 혈압이 강하된다.",
      "유해반응",
      "과도한 K 및 Na 손실로 인한 잠재적 전해질 불균형이 있다.",
    ],
    rightAnswer: "hydrochlorothiazide(Microzide)",
  },
  {
    question: [
      "치료적 분류: 항고혈압제, 부종 감소제",
      "약리적 분류: 칼륨보존 이뇨제, 알도스테론 길항제",
      "가장 자주 처방되는 칼륨보존 이뇨제이며, 가벼운 고혈압을 치료하기 위해 사용되고, 종종 다른 항고혈압제와 병용된다.",
      "신장이나 간 질환과 관련된 부종을 줄이는데 사용되고 심부전의 진행을 늦추는 데 효과적이다.",
      "부신피질에서 분비하는 알도스테론의 작용을 억제한다.",
      "알도스테론은 K과 교환하여 Na의 신장 재흡수를 증가시켜 수분이 체내에 남아있도록 유도한다.",
    ],
    rightAnswer: "spironolactone(Aldactone)",
  },
  {
    question: [
      "치료적 분류: 혈장증량제",
      "약리적 분류: 교질",
      "모세혈관벽을 통과할 수 없는 큰 합성 다당류이다.",
      "혈액의 삼투압을 높여 세포간질 공간으로부터 혈관내 공간으로 수분을 이동시킨다.",
      "정맥으로 투여되며, 투여 후 몇분 안에 혈장량을 늘릴 수 있다.",
      "심혈관 반응으 ㄴ혈압 증가, 심박출략 증가, 정맥 환류량 증가 등이다.",
      "신장에 의해 신속히 배설된다. 출혈, 수술, 심한 화상으로 저혈량 쇼크를 겪는 환자는 수분 보충이 필요하다.",
      "혈액 점도를 감소시켜 혈소판 응집을 줄이고 혈류를 개선한다.",
      "유해반응",
      "혈장량 증가로 인한 고혈압을 예방하기 위해 ",
      "금기: 신부전 또는 심한 탈수 환자에게 사용해서는 안 된다.",
    ],
    rightAnswer: "dextran40(Gentran40, LMD others)",
  },
  {
    question: [
      "치료적 분류: 저나트륨혈증치료제",
      "약리적 분류: 전해질, 나트륨 보충제 ",
      "염화나트륨은 나트륨 혈청 농도가 130mEq/L 밑으로 떨어질 때 저나트륨혈증을 치료하기 위해 투여되는 선택약이다.",
      "과용량 투여 시 처치: 만약 과도하게 많은 나트륨으로 인해 수분이 축적된다면 폐부종 또는 말초부종을 억제하기 위해 이뇨제를 투여해야 한다.",
    ],
    rightAnswer: "sodium chloride(NaCl)",
  },
  {
    question: [
      "치료적 분류: 저칼륨혈증 치료제",
      "약리적 분류: 전해질, 칼륨 보충제",
      "염화칼륨은 저칼륨혈증을 예방하거나 치료하기 위해 사용된다.",
      "정맥으로 직접 한꺼번에 주입하면 심장에 무리를 주어 심장마비를 일으킬 수 있기 때문에 칼륨은 천천히 주입해야한다.",
      "과용량 투여 시 처치: 치료는 10~20 단위의 속효성 인슐린을 함유한 10% 포도당 용액을 정맥 주입한다.",
    ],
    rightAnswer: "potassium chloride(KCI)",
  },
];

export { answer_list, question_list };
