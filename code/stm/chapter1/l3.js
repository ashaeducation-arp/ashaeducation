  const quizData = [
        { q: "दुनिया का पहला प्रोग्रामेबल 'इलेक्ट्रॉनिक डिजिटल कंप्यूटर' कौन सा था, जिसका उपयोग द्वितीय विश्व युद्ध में जर्मन कोड तोड़ने के लिए हुआ?", a: ["ENIAC", "Colossus", "Z3", "EDVAC"], c: 1, s: "Colossus को एलन ट्यूरिंग और उनकी टीम ने जर्मन 'Lorenz' संदेशों को डिकोड करने के लिए बनाया था।" },
        { q: "वॉन न्यूमैन आर्किटेक्चर में 'Stored Program' अवधारणा का मुख्य सिद्धांत क्या है?", a: ["डेटा अलग मेमोरी में होता है", "निर्देश और डेटा एक ही मेमोरी में साझा होते हैं", "CPU में मेमोरी नहीं होती", "केवल निर्देश स्टोर होते हैं"], c: 1, s: "वॉन न्यूमैन मॉडल के तहत निर्देश और डेटा दोनों एक ही रैंडम एक्सेस मेमोरी (RAM) में स्टोर होते हैं।" },
        { q: "किस कंप्यूटर ने सबसे पहले 'बाइनरी अर्थमेटिक' और 'इलेक्ट्रॉनिक स्विचिंग' का उपयोग किया, जिसे 1973 में कानूनी रूप से पहला डिजिटल कंप्यूटर माना गया?", a: ["ABC (Atanasoff-Berry Computer)", "ENIAC", "Harvard Mark I", "ILLIAC"], c: 0, s: "ABC कंप्यूटर (1937-42) को कोर्ट के फैसले के बाद ENIAC से पहले का पहला डिजिटल कंप्यूटर माना गया।" },
        { q: "CISC और RISC आर्किटेक्चर का उदय किस पीढ़ी के विकास से जुड़ा है?", a: ["2nd Gen", "3rd Gen", "4th Gen", "5th Gen"], c: 2, s: "चौथी पीढ़ी के माइक्रोप्रोसेसरों के विकास के दौरान Instruction Set आर्किटेक्चर में ये बदलाव आए।" },
        { q: "जैक किल्बी द्वारा विकसित पहली IC (1958) किस पदार्थ से बनी थी?", a: ["Silicon", "Germanium", "Copper", "Gallium"], c: 1, s: "जैक किल्बी ने पहली IC 'जर्मेनियम' पर बनाई थी, जबकि रॉबर्ट नॉयस ने बाद में सिलिकॉन का उपयोग किया।" },
        { q: "UNIVAC-I को सबसे पहले किस प्राइवेट कंपनी ने खरीदा था?", a: ["General Electric", "IBM", "Ford", "Bell Labs"], c: 0, s: "जनरल इलेक्ट्रिक वह पहली निजी कंपनी थी जिसने 1954 में व्यापारिक कार्यों के लिए इसे खरीदा था।" },
        { q: "IBM 701, जिसे 'Defense Calculator' भी कहा जाता था, किस पीढ़ी का हिस्सा है?", a: ["1st Gen", "2nd Gen", "3rd Gen", "4th Gen"], c: 0, s: "यह IBM का पहला बड़े पैमाने पर बनाया गया वैज्ञानिक कंप्यूटर था जो पहली पीढ़ी (वैक्यूम ट्यूब) का था।" },
        { q: "कंप्यूटर की किस पीढ़ी में 'Parallel Processing' (समानांतर प्रसंस्करण) और 'Optical Disk' का विकास हुआ?", a: ["3rd Gen", "4th Gen", "5th Gen", "6th Gen"], c: 2, s: "पांचवीं पीढ़ी में AI के साथ पैरेलल प्रोसेसिंग मुख्य तकनीक बनी।" },
        { q: "एलन ट्यूरिंग द्वारा प्रस्तावित 'Turing Machine' (1936) का मुख्य उद्देश्य क्या था?", a: ["युद्ध जीतना", "कंप्यूटिंग की तार्किक सीमाओं को समझना", "डेटा स्टोर करना", "प्रिंटिंग"], c: 1, s: "यह एक काल्पनिक मशीन थी जिसने आधुनिक कंप्यूटर के लॉजिक और एल्गोरिदम की नींव रखी।" },
        { q: "प्रथम पीढ़ी के कंप्यूटरों की स्टोरेज डिवाइस के रूप में किसका उपयोग होता था?", a: ["Magnetic Disks", "Magnetic Drums", "SSDs", "Floppy"], c: 1, s: "पहली पीढ़ी में डेटा स्टोर करने के लिए तेजी से घूमने वाले मैग्नेटिक ड्रम का उपयोग होता था।" },
        { q: "हर्मन होलेरिथ की 'Tabulating Machine' ने 1890 की अमेरिकी जनगणना के कार्य को कितने समय में पूरा किया?", a: ["10 साल", "3 साल", "1 महीना", "6 साल"], c: 1, s: "पारंपरिक विधि में 10 साल लगते, लेकिन इस मशीन ने इसे मात्र 3 साल में पूरा कर दिया।" },
        { q: "किस कंप्यूटर को 'पहला वास्तविक पर्सनल कंप्यूटर' माना जाता है जिसे 1974 के पॉपुलर इलेक्ट्रॉनिक्स मैगजीन के कवर पर छापा गया था?", a: ["Apple II", "Altair 8800", "Commodore 64", "IBM PC"], c: 1, s: "MITS Altair 8800 ने ही घर-घर कंप्यूटर (Hobbyist) की क्रांति शुरू की थी।" },
        { q: "इंटीग्रेटेड सर्किट (IC) में 'SSI' का क्या अर्थ है?", a: ["Super Scale Integration", "Small Scale Integration", "Simple System Info", "None"], c: 1, s: "शुरुआती IC में 10-20 ट्रांजिस्टर होते थे, जिसे Small Scale Integration कहा जाता था।" },
        { q: "कंप्यूटर की किस पीढ़ी में 'Microprogramming' की अवधारणा मौरिस विल्क्स द्वारा दी गई?", a: ["1st Gen", "2nd Gen", "3rd Gen", "4th Gen"], c: 1, s: "दूसरी पीढ़ी में कंट्रोल यूनिट के डिजाइन को सरल बनाने के लिए माइक्रोप्रोग्रामिंग आई।" },
        { q: "CDC 6600, जिसे पहला सुपर कंप्यूटर माना जाता है, के मुख्य डिजाइनर कौन थे?", a: ["Seymour Cray", "John Backus", "Dennis Ritchie", "Ken Thompson"], c: 0, s: "सीमोर क्रे ने कंट्रोल डेटा कॉर्पोरेशन में रहते हुए इसे डिजाइन किया था।" },
        { q: "LISP (List Processing) भाषा का विकास 1958 में किसने किया, जो AI के लिए प्रसिद्ध हुई?", a: ["John McCarthy", "Niklaus Wirth", "Bjarne Stroustrup", "James Gosling"], c: 0, s: "जॉन मैकार्थी ने AI प्रोग्रामिंग के लिए LISP बनाई थी।" },
        { q: "किस पीढ़ी में 'Multiplexing' तकनीक का उपयोग करके संचार लाइनों की क्षमता बढ़ाई गई?", a: ["2nd", "3rd", "4th", "5th"], c: 1, s: "तीसरी पीढ़ी में हार्डवेयर और संचार के बीच बेहतर तालमेल बैठाया गया।" },
        { q: "Intel 8080 प्रोसेसर, जो Altair में उपयोग हुआ, कितने बिट का था?", a: ["4-bit", "8-bit", "16-bit", "32-bit"], c: 1, s: "Intel 4004 (4-bit) के बाद 8080 एक प्रसिद्ध 8-बिट प्रोसेसर बना।" },
        { q: "1960 के दशक में 'ARPANET' का विकास किस पीढ़ी के दौरान शुरू हुआ?", a: ["2nd", "3rd", "4th", "5th"], c: 1, s: "तीसरी पीढ़ी के अंत और चौथी की शुरुआत के बीच नेटवर्किंग की नींव पड़ी।" },
        { q: "सॉफ्टवेयर इंजीनियरिंग शब्द का प्रयोग पहली बार कब किया गया था?", a: ["1950", "1968", "1980", "1995"], c: 1, s: "1968 के NATO कॉन्फ्रेंस में 'Software Crisis' को सुलझाने के लिए यह शब्द आया।" },
        { q: "IBM System/360 की सबसे बड़ी क्रांति क्या थी?", a: ["यह लकड़ी का बना था", "एक ही सॉफ्टवेयर अलग-अलग साइज के कंप्यूटरों पर चल सकता था", "यह बिना बिजली के चलता था", "इसमें बटन नहीं थे"], c: 1, s: "इसे 'Compatible Computers' की शुरुआत माना जाता है।" },
        { q: "माइक्रोप्रोसेसर चिप पर ट्रांजिस्टरों की संख्या हर दो साल में दोगुनी हो जाती है, इसे क्या कहते हैं?", a: ["Babbage Law", "Moore’s Law", "Newton Law", "Gates Law"], c: 1, s: "इंटेल के सह-संस्थापक गॉर्डन मूर ने 1965 में यह भविष्यवाणी की थी।" },
        { q: "EDVAC कंप्यूटर में 'D' का क्या अर्थ है?", a: ["Digital", "Discrete", "Data", "Direct"], c: 1, s: "EDVAC का पूर्ण रूप Electronic Discrete Variable Automatic Computer है।" },
        { q: "किस पीढ़ी में 'Magnetic Bubble Memory' का प्रयोग स्टोरेज के लिए किया गया था?", a: ["2nd", "3rd", "4th", "5th"], c: 2, s: "चौथी पीढ़ी में कुछ समय के लिए बबल मेमोरी का प्रयोग हुआ जो फ्लैश मेमोरी से पहले आई थी।" },
        { q: "जापान का 'Fifth Generation Computer Systems' (FGCS) प्रोजेक्ट किस पर केंद्रित था?", a: ["Games", "Prolog & Parallel Processing", "Calculations", "Web Browsing"], c: 1, s: "यह प्रोजेक्ट 1980 के दशक में AI आधारित कंप्यूटर बनाने के लिए शुरू किया गया था।" },
        { q: "UNIX ऑपरेटिंग सिस्टम का विकास 1969 में किस भाषा में किया गया था?", a: ["C", "Assembly", "B Language", "Pascal"], c: 1, s: "शुरुआत में UNIX असेंबली में था, बाद में डेनिस रिची ने इसे C में दोबारा लिखा।" },
        { q: "Zuse Z3 कंप्यूटर किस पर आधारित था?", a: ["Vacuum Tubes", "Electromechanical Relays", "Transistors", "Silicon Chips"], c: 1, s: "यह रिलैज़ (Relays) पर आधारित एक डिजिटल कंप्यूटर था।" },
        { q: "दुनिया का पहला 'ग्रेफाइट' सुपर कंप्यूटर कौन सा है?", a: ["PARAM", "Deep Blue", "Fugaku", "Sunway TaihuLight"], c: 3, s: "यह चीन का प्रसिद्ध सुपर कंप्यूटर है।" },
        { q: "पहला ग्राफ़िकल वेब ब्राउज़र 'Mosaic' कब जारी हुआ?", a: ["1980", "1993", "2000", "1970"], c: 1, s: "मोज़ेक ने इंटरनेट को आम लोगों के लिए आसान बना दिया।" },
        { q: "FLOPS का पूर्ण रूप क्या है?", a: ["Floating Point Operations Per Second", "Fixed Logical Operations", "Fast Low Operations", "None"], c: 0, s: "इसका उपयोग सुपर कंप्यूटर की गति मापने में होता है।" },
        { q: "किस पीढ़ी में 'Distributed Operating System' का उदय हुआ?", a: ["1st", "2nd", "3rd", "4th"], c: 3, s: "चौथी पीढ़ी में नेटवर्किंग के कारण ओएस वितरित (Distributed) होने लगे।" },
        { q: "एप्पल-2 (Apple II) किस वर्ष लॉन्च हुआ जिसने होम कंप्यूटिंग को बदला?", a: ["1977", "1980", "1970", "1985"], c: 0, s: "1977 में एप्पल-2, कमोडोर पेट और टीआरएस-80 एक साथ आए थे।" },
        { q: "IBM PC (1981) के लिए माइक्रोप्रोसेसर किसने सप्लाई किया था?", a: ["AMD", "Intel", "Motorola", "MOS Technology"], c: 1, s: "इंटेल के 8088 प्रोसेसर का उपयोग ओरिजिनल IBM PC में हुआ था।" },
        { q: "भारत का पहला सुपर कंप्यूटर PARAM 8000 किस वर्ष राष्ट्र को समर्पित किया गया?", a: ["1985", "1991", "2001", "1998"], c: 1, s: "1991 में C-DAC पुणे द्वारा इसे लॉन्च किया गया।" },
        { q: "पाइपलाइनिंग (Pipelining) की अवधारणा किस पीढ़ी के सुपर कंप्यूटरों में आई?", a: ["2nd", "3rd", "4th", "5th"], c: 2, s: "चौथी पीढ़ी के प्रोसेसरों में एक साथ कई निर्देशों को प्रोसेस करने के लिए पाइपलाइनिंग आई।" },
        { q: "पहला 'Spreadsheet' प्रोग्राम कौन सा था?", a: ["MS Excel", "Lotus 1-2-3", "VisiCalc", "Tally"], c: 2, s: "VisiCalc ने एप्पल-2 की बिक्री बढ़ाने में बड़ी भूमिका निभाई थी।" },
        { q: "किसे 'आधुनिक कंप्यूटिंग का ब्लूप्रिंट' माना जाता है?", a: ["Analytical Engine", "Pascaline", "Abacus", "Laptop"], c: 0, s: "बैबेज के इंजन में CPU, Memory और I/O के शुरुआती विचार थे।" },
        { q: "ट्रांजिस्टर की तुलना में IC का मुख्य लाभ क्या था?", a: ["यह बड़ा था", "कम बिजली और उच्च विश्वसनीयता", "यह केवल काले रंग का था", "कोई नहीं"], c: 1, s: "IC ने एक ही चिप पर कई कंपोनेंट लाकर बिजली की खपत कम कर दी।" },
        { q: "कम्प्यूटर की 5वीं पीढ़ी में किस प्रोग्रामिंग लॉजिक का उपयोग हुआ?", a: ["Procedural", "Object Oriented", "Logic Programming (Prolog)", "Binary"], c: 2, s: "5वीं पीढ़ी में AI के लिए प्रोलॉग जैसी लॉजिक आधारित भाषाओं पर जोर दिया गया।" },
        { q: "किस व्यक्ति ने 1947 में 'Transistor' शब्द का नामकरण किया?", a: ["John Bardeen", "William Shockley", "John R. Pierce", "Walter Brattain"], c: 2, s: "हालांकि तीन वैज्ञानिकों ने इसे बनाया, लेकिन नामकरण 'जॉन आर पियर्स' ने किया था।" }
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
