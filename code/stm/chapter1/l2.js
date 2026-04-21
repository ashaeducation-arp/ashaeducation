
    const quizData = [
    { q: "विश्व का पहला 'सामान्य उद्देश्य' (General Purpose) प्रोग्रामेबल कंप्यूटर कौन सा था?", a: ["ENIAC", "Z3", "Colossus", "ABC Computer"], c: 1, s: "Konrad Zuse द्वारा बनाया गया Z3 (1941) दुनिया का पहला वर्किंग, इलेक्ट्रो-मैकेनिकल, फुली ऑटोमैटिक डिजिटल कंप्यूटर था।" },
    { q: "प्रथम पीढ़ी के कंप्यूटरों में प्रोग्रामिंग के लिए किस भाषा का प्रयोग होता था?", a: ["Assembly", "Machine Language", "FORTRAN", "COBOL"], c: 1, s: "पहली पीढ़ी में केवल 0 और 1 (बाइनरी) यानी मशीन लैंग्वेज का उपयोग होता था।" },
    { q: "किसने 'Analytical Engine' का प्रस्ताव दिया जिसमें मिल (Mill) और स्टोर (Store) की अवधारणा थी?", a: ["John von Neumann", "Charles Babbage", "Blaise Pascal", "Herman Hollerith"], c: 1, s: "बैबेज का डिजाइन आधुनिक CPU (Mill) और Memory (Store) के विचार पर आधारित था।" },
    { q: "ट्रांजिस्टर का आविष्कार बेल लैबोरेटरीज में कब हुआ था?", a: ["1940", "1947", "1955", "1960"], c: 1, s: "1947 में जॉन बारडीन, वाल्टर ब्रेटन और विलियम शॉकली ने ट्रांजिस्टर का आविष्कार किया।" },
    { q: "EDSAC कंप्यूटर की मुख्य विशेषता क्या थी?", a: ["यह पहला वैक्यूम ट्यूब कंप्यूटर था", "यह पहला स्टोर्ड प्रोग्राम कंप्यूटर था", "यह पोर्टेबल था", "इसमें ट्रांजिस्टर थे"], c: 1, s: "EDSAC (1949) पहला ऐसा कंप्यूटर था जिसने प्रोग्राम को अपनी मेमोरी में स्टोर किया था।" },
    { q: "IC (Integrated Circuit) का आविष्कार किसने किया था?", a: ["Jack Kilby & Robert Noyce", "Steve Jobs", "Bill Gates", "Alan Turing"], c: 0, s: "जैक किल्बी (TI) और रॉबर्ट नॉयस (Fairchild) ने स्वतंत्र रूप से IC का विकास किया।" },
    { q: "दूसरी पीढ़ी (2nd Gen) के दौरान कौन सी हाई-लेवल लैंग्वेज विकसित हुई?", a: ["C & C++", "Python", "FORTRAN & COBOL", "Java"], c: 2, s: "FORTRAN (Scientific) और COBOL (Business) भाषाओं का विकास इसी दौर में हुआ।" },
    { q: "VLSI तकनीक में एक चिप पर लगभग कितने घटक (Components) होते हैं?", a: ["100", "1,000", "हजारों से लाखों", "अरबों"], c: 2, s: "VLSI (Very Large Scale Integration) में हजारों से लेकर लाखों ट्रांजिस्टर एक चिप पर समा जाते हैं।" },
    { q: "पहला माइक्रोप्रोसेसर 'Intel 4004' कितने बिट का था?", a: ["4-bit", "8-bit", "16-bit", "32-bit"], c: 0, s: "Intel 4004 एक 4-बिट का प्रोसेसर था जिसे कैलकुलेटर के लिए बनाया गया था।" },
    { q: "अटानासॉफ-बेरी कंप्यूटर (ABC) क्यों प्रसिद्ध है?", a: ["पहला सुपर कंप्यूटर", "पहला ऑटोमैटिक इलेक्ट्रॉनिक डिजिटल कंप्यूटर", "पहला लैपटॉप", "कोई नहीं"], c: 1, s: "ABC को पहला इलेक्ट्रॉनिक डिजिटल कंप्यूटर माना जाता है, हालांकि यह प्रोग्रामेबल नहीं था।" },
    { q: "मार्क-1 (Mark-I) कंप्यूटर का आधिकारिक नाम क्या था?", a: ["ENIAC", "ASCC", "UNIVAC", "EDVAC"], c: 1, s: "IBM द्वारा बनाए गए मार्क-1 को 'Automatic Sequence Controlled Calculator' कहा जाता था।" },
    { q: "तीसरी पीढ़ी के कंप्यूटरों में डेटा इनपुट के लिए किसका प्रयोग शुरू हुआ?", a: ["Punch Cards", "Magnetic Tape", "Keyboard & Monitor", "Mouse"], c: 2, s: "तीसरी पीढ़ी में पहली बार ऑपरेटिंग सिस्टम के साथ कीबोर्ड और मॉनीटर का चलन शुरू हुआ।" },
    { q: "LSI का पूर्ण रूप क्या है?", a: ["Large Scale Integration", "Low Scale Info", "Light System In", "None"], c: 0, s: "LSI तकनीक तीसरी पीढ़ी के अंत और चौथी पीढ़ी की शुरुआत में आई।" },
    { q: "एप्पल-1 (Apple-1) कंप्यूटर को किसने डिजाइन किया था?", a: ["Steve Jobs", "Steve Wozniak", "Bill Gates", "Tim Berners-Lee"], c: 1, s: "स्टीव वोज्नियाक ने एप्पल-1 को अपने हाथों से असेंबल और डिजाइन किया था।" },
    { q: "सुपर कंप्यूटर 'Cray-1' को किस वर्ष स्थापित किया गया था?", a: ["1970", "1976", "1985", "1990"], c: 1, s: "Cray-1 को 1976 में लॉस एलामोस नेशनल लेबोरेटरी में लगाया गया था।" },
    { q: "पास्कलाइन मशीन किस सिद्धांत पर कार्य करती थी?", a: ["Electronic", "Mechanical (Gears)", "Magnetic", "Optical"], c: 1, s: "पास्कलाइन गियर और व्हील्स (चक्रों) पर आधारित एक मैकेनिकल मशीन थी।" },
    { q: "UNIVAC-I को किस जनगणना के लिए इस्तेमाल किया गया था?", a: ["भारतीय जनगणना", "अमेरिकी जनगणना 1950", "ब्रिटिश जनगणना", "चीन जनगणना"], c: 1, s: "यह व्यावसायिक रूप से डेटा प्रोसेसिंग के लिए इस्तेमाल होने वाला पहला कंप्यूटर था।" },
    { q: "GUI (Graphical User Interface) का विकास किस पीढ़ी में हुआ?", a: ["2nd", "3rd", "4th", "5th"], c: 2, s: "चौथी पीढ़ी में विंडोज और मैकिन्टोश जैसे GUI आधारित OS आए।" },
    { q: "प्रथम पीढ़ी के कंप्यूटरों की मुख्य सीमा क्या थी?", a: ["बहुत कम गति", "अत्यधिक गर्मी और बड़ा आकार", "महंगा होना", "उपरोक्त सभी"], c: 3, s: "पहली पीढ़ी के कंप्यूटर बहुत बड़े थे, बिजली ज्यादा लेते थे और जल्दी गर्म हो जाते थे।" },
    { q: "माइक्रोप्रोसेसर के आने से कंप्यूटर की किस श्रेणी का जन्म हुआ?", a: ["Mainframe", "Supercomputer", "Microcomputers", "Mini computers"], c: 2, s: "इन्हें ही हम आज Personal Computer (PC) के नाम से जानते हैं।" },
    { q: "नेपियर बोन्स (Napier's Bones) का उपयोग किस क्रिया के लिए होता था?", a: ["सिर्फ जोड़", "गुणा और भाग", "इंटरनेट", "गेमिंग"], c: 1, s: "जॉन नेपियर ने इसे गुणा (Multiplication) को आसान बनाने के लिए बनाया था।" },
    { q: "1981 में पेश किए गए IBM PC में कौन सा ऑपरेटिंग सिस्टम था?", a: ["Windows", "MS-DOS", "Linux", "Mac OS"], c: 1, s: "माइक्रोसॉफ्ट ने IBM के लिए MS-DOS (Disk Operating System) विकसित किया था।" },
    { q: "ULSI तकनीक किस पीढ़ी से संबंधित है?", a: ["3rd", "4th", "5th", "6th"], c: 2, s: "Ultra Large Scale Integration (ULSI) पांचवीं पीढ़ी की विशेषता है जिसमें करोड़ों ट्रांजिस्टर एक चिप पर होते हैं।" },
    { q: "डिफरेंस इंजन (Difference Engine) का आविष्कार किस वर्ष हुआ था?", a: ["1822", "1922", "1722", "1850"], c: 0, s: "बैबेज ने 1822 में इसका वर्किंग मॉडल तैयार किया था।" },
    { q: "मिनी कंप्यूटर (Mini Computers) का उदय किस पीढ़ी में हुआ?", a: ["1st", "2nd", "3rd", "4th"], c: 2, s: "IC के आने से मध्यम आकार के मिनी कंप्यूटर संभव हो सके (जैसे PDP-8)।" },
    { q: "कंप्यूटर की बुनियादी संरचना (Basic Architecture) किसने विकसित की?", a: ["Charles Babbage", "John von Neumann", "Blaise Pascal", "Jordan Mour"], c: 1, s: "वॉन न्यूमैन आर्किटेक्चर आज भी कंप्यूटर के काम करने का मुख्य आधार है।" },
    { q: "हर्मन होलेरिथ की कंपनी आगे चलकर किस नाम से जानी गई?", a: ["Microsoft", "IBM", "Apple", "HP"], c: 1, s: "उनकी 'Tabulating Machine Company' ही बाद में International Business Machines (IBM) बनी।" },
    { q: "मेनफ्रेम कंप्यूटर का उपयोग मुख्य रूप से कहाँ होता है?", a: ["घरों में", "बड़ी संस्थाओं/बैंकों में", "छोटी दुकानों पर", "गेमिंग में"], c: 1, s: "मेनफ्रेम भारी मात्रा में डेटा प्रोसेसिंग के लिए उपयोग किए जाते हैं।" },
    { q: "दुनिया का पहला लैपटॉप 'Osborne 1' कब रिलीज हुआ?", a: ["1975", "1981", "1985", "1990"], c: 1, s: "एडम ऑसबोर्न ने 1981 में इसे पेश किया था, जिसका वजन करीब 11 किलो था।" },
    { q: "प्रोसेसिंग की गति मापने की इकाई MIPS का क्या अर्थ है?", a: ["Millions of Instructions Per Second", "Many Info Per Second", "Micro Info System", "None"], c: 0, s: "यह CPU की क्षमता दर्शाने का एक पैमाना है।" },
    { q: "विश्व का पहला सुपर कंप्यूटर 'CDC 6600' किसने बनाया था?", a: ["Seymour Cray", "Bill Gates", "Charles Babbage", "James Gosling"], c: 0, s: "सीमोर क्रे को सुपर कंप्यूटर का जनक माना जाता है।" },
    { q: "चौथी पीढ़ी में सेमीकंडक्टर मेमोरी ने किसकी जगह ली?", a: ["Magnetic Cores", "Vacuum Tubes", "Punch Cards", "Paper Tapes"], c: 0, s: "चौथी पीढ़ी से RAM और ROM के लिए सेमीकंडक्टर चिप्स का इस्तेमाल बढ़ गया।" },
    { q: "किस पीढ़ी में 'Time Sharing' और 'Real-time' ऑपरेटिंग सिस्टम आए?", a: ["1st", "2nd", "3rd", "4th"], c: 2, s: "तीसरी पीढ़ी में OS अधिक उन्नत हो गए थे।" },
    { q: "पास्कल की मशीन (Pascaline) किस सदी में बनी थी?", a: ["15वीं", "16वीं", "17वीं", "18वीं"], c: 2, s: "यह 1642 (17वीं सदी) में बनकर तैयार हुई थी।" },
    { q: "ट्रांजिस्टर किस पदार्थ के बने होते हैं?", a: ["Insolators", "Semiconductors", "Conductors", "Wood"], c: 1, s: "यह आमतौर पर सिलिकॉन या जर्मेनियम जैसे अर्धचालकों से बने होते हैं।" },
    { q: "भारत का 'परम' सुपर कंप्यूटर कहाँ विकसित किया गया?", a: ["IIT Delhi", "BARC Mumbai", "C-DAC Pune", "ISRO"], c: 2, s: "विजय भाटकर के नेतृत्व में C-DAC पुणे में इसे बनाया गया था।" },
    { q: "कम्प्यूटर की किस पीढ़ी में मशीनी भाषा के स्थान पर असेंबली भाषा का प्रयोग हुआ?", a: ["1st", "2nd", "3rd", "4th"], c: 1, s: "दूसरी पीढ़ी में निमोनिक्स (Mnemonics) जैसे ADD, SUB का उपयोग शुरू हुआ।" },
    { q: "एबाकस (Abacus) में 'Beads' का उपयोग किसके लिए होता है?", a: ["सजावट", "अंकों का प्रतिनिधित्व", "बिजली स्टोर करना", "मेमोरी"], c: 1, s: "मोतियों (Beads) को खिसका कर गणना की जाती थी।" },
    { q: "माइक्रोप्रोसेसर को 'कंप्यूटर ऑन ए चिप' क्यों कहा जाता है?", a: ["क्योंकि यह सस्ता है", "क्योंकि इसमें पूरा CPU एक ही चिप पर होता है", "क्योंकि यह छोटा है", "कोई नहीं"], c: 1, s: "चूंकि सारा कंट्रोल और लॉजिक एक चिप पर होता है, इसलिए इसे यह नाम मिला।" },
    { q: "विश्व कंप्यूटर साक्षरता दिवस (World Computer Literacy Day) की शुरुआत किसने की?", a: ["Microsoft", "NIIT", "IBM", "Google"], c: 1, s: "भारतीय कंपनी NIIT ने अपनी 20वीं वर्षगांठ पर 2001 में इसकी शुरुआत की थी।" }
];

    let correctAnswers = 0;
    const marksPerQ = 1.25;

    function renderQuiz() {
        const stack = document.getElementById('quiz-stack');
        quizData.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'q-card';
            
            let optionsHtml = '';
            item.a.forEach((opt, oIdx) => {
                optionsHtml += `<button class="opt-btn" onclick="verify(${idx}, ${oIdx}, this)">${opt}</button>`;
            });

            card.innerHTML = `
                <span class="q-num">Question ${idx + 1}</span>
                <div class="q-text">${item.q}</div>
                <div class="options-container">${optionsHtml}</div>
                <div class="explanation" id="exp-${idx}"><strong>स्पष्टीकरण:</strong> ${item.s}</div>
            `;
            stack.appendChild(card);
        });
    }

    window.verify = function(qIdx, selected, btn) {
        const correct = quizData[qIdx].c;
        const exp = document.getElementById(`exp-${qIdx}`);
        const btns = btn.parentElement.querySelectorAll('.opt-btn');
        
        btns.forEach(b => b.disabled = true);

        if(selected === correct) {
            btn.classList.add('correct');
            correctAnswers++;
        } else {
            btn.classList.add('wrong');
            btns[correct].classList.add('correct');
        }
        exp.style.display = 'block';
    }

    window.generateReport = function() {
        const totalMarks = correctAnswers * marksPerQ;
        const percentage = (totalMarks / 50) * 100;
        const dash = document.getElementById('result-dashboard');
        const tag = document.getElementById('status-tag');
        const feedback = document.getElementById('feedback-msg');
        
        dash.style.display = 'block';
        document.getElementById('final-marks').innerText = totalMarks.toFixed(2) + " / 50";
        document.getElementById('accuracy-val').innerText = percentage.toFixed(0) + "%";
        
        let grade = "";
        if(percentage >= 90) { grade = "A+"; tag.className = "status-badge pass"; tag.innerText = "एक्सपर्ट (Expert)"; }
        else if(percentage >= 75) { grade = "A"; tag.className = "status-badge pass"; tag.innerText = "सफल (Passed)"; }
        else if(percentage >= 60) { grade = "B"; tag.className = "status-badge pass"; tag.innerText = "औसत (Average)"; }
        else { grade = "F"; tag.className = "status-badge fail"; tag.innerText = "असफल (Try Again)"; }

        document.getElementById('grade-val').innerText = grade;
        
        if(grade === "A+" || grade === "A") feedback.innerText = "बधाई हो! आपकी कंप्यूटर आर्किटेक्चर और हार्डवेयर पर पकड़ बहुत मजबूत है। आप तकनीकी क्षेत्र के लिए तैयार हैं।";
        else feedback.innerText = "आपको हार्डवेयर और नेटवर्किंग के सिद्धांतों पर थोड़ा और ध्यान देने की आवश्यकता है। स्पष्टीकरण (Explanations) को ध्यान से पढ़ें।";

        window.scrollTo({ top: dash.offsetTop - 100, behavior: 'smooth' });
    }

    renderQuiz();