

    const quizData = [
    { q: "कंप्यूटर का जनक (Father of Computer) किसे कहा जाता है?", a: ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "बिल गेट्स", "लेडी एडा"], c: 1, s: "चार्ल्स बैबेज ने 'Analytical Engine' का आविष्कार किया, जो आधुनिक कंप्यूटर का आधार बना।" },
    { q: "सबसे पहला गणना यंत्र (Calculating Device) कौन सा था?", a: ["Abacus", "Calculator", "Difference Engine", "Pascaline"], c: 0, s: "अबेकस का आविष्कार लगभग 2500-3000 साल पहले चीन में हुआ था।" },
    { q: "प्रथम पीढ़ी (1st Gen) के कंप्यूटर में किसका उपयोग किया गया था?", a: ["ट्रांजिस्टर", "वैक्यूम ट्यूब", "IC", "प्रोसेसर"], c: 1, s: "पहली पीढ़ी (1940-1956) में वैक्यूम ट्यूब का प्रयोग किया गया था जो बहुत गर्मी पैदा करते थे।" },
    { q: "द्वितीय पीढ़ी (2nd Gen) के कंप्यूटर की मुख्य विशेषता क्या थी?", a: ["IC", "वैक्यूम ट्यूब", "ट्रांजिस्टर", "AI"], c: 2, s: "दूसरी पीढ़ी में वैक्यूम ट्यूब की जगह ट्रांजिस्टर ने ले ली, जिससे कंप्यूटर छोटे और तेज़ हो गए।" },
    { q: "कंप्यूटर की तीसरी पीढ़ी (3rd Gen) में किसका उपयोग शुरू हुआ?", a: ["Microprocessor", "Integrated Circuits (IC)", "Vacuum Tubes", "Valves"], c: 1, s: "IC (एकीकृत परिपथ) का आविष्कार जैक किल्बी ने किया था।" },
    { q: "चौथी पीढ़ी (4th Gen) के कंप्यूटर किस पर आधारित हैं?", a: ["Microprocessor", "Transistors", "Vacuum Tubes", "Abacus"], c: 0, s: "चौथी पीढ़ी में VLSI तकनीक और माइक्रोप्रोसेसर का उपयोग शुरू हुआ।" },
    { q: "वर्तमान में चल रही कंप्यूटर की पीढ़ी कौन सी है?", a: ["3rd", "4th", "5th", "6th"], c: 2, s: "पांचवीं पीढ़ी वर्तमान में चल रही है, जो AI (Artificial Intelligence) पर आधारित है।" },
    { q: "विश्व का प्रथम इलेक्ट्रॉनिक डिजिटल कंप्यूटर कौन सा था?", a: ["UNIVAC", "ENIAC", "EDVAC", "PARAM"], c: 1, s: "ENIAC (Electronic Numerical Integrator and Computer) पहला पूर्ण इलेक्ट्रॉनिक कंप्यूटर था।" },
    { q: "ENIAC का आविष्कार किसने किया था?", a: ["चार्ल्स बैबेज", "जे.पी. एकर्ट और जॉन मौचली", "हर्मन होलेरिथ", "न्यूटन"], c: 1, s: "इसका आविष्कार 1946 में पेंसिल्वेनिया विश्वविद्यालय में किया गया था।" },
    { q: "भारत का पहला सुपर कंप्यूटर कौन सा है?", a: ["PARAM 8000", "ARYABHATTA", "SAGA 220", "PRATYUSH"], c: 0, s: "PARAM 8000 को C-DAC द्वारा 1991 में विकसित किया गया था।" },
    { q: "IC (Integrated Circuit) चिप्स आमतौर पर किससे बनी होती हैं?", a: ["कॉपर", "सिलिकॉन", "गोल्ड", "सिल्वर"], c: 1, s: "सिलिकॉन एक अर्धचालक (Semiconductor) है जिसका उपयोग चिप बनाने में होता है।" },
    { q: "दुनिया का पहला माइक्रोप्रोसेसर कौन सा था?", a: ["Intel 4004", "Intel 8080", "Pentium", "AMD"], c: 0, s: "Intel 4004 को 1971 में लॉन्च किया गया था।" },
    { q: "पंच कार्ड (Punch Cards) का उपयोग सबसे पहले किसने किया था?", a: ["चार्ल्स बैबेज", "जोसेफ जैक्वार्ड", "हर्मन होलेरिथ", "पास्कल"], c: 2, s: "हर्मन होलेरिथ ने जनगणना के आंकड़ों को स्टोर करने के लिए इसका उपयोग किया।" },
    { q: "आधुनिक कंप्यूटर विज्ञान का जनक किसे माना जाता है?", a: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"], c: 1, s: "एलन ट्यूरिंग ने सैद्धांतिक कंप्यूटर विज्ञान और AI की नींव रखी।" },
    { q: "प्रथम व्यावसायिक (Commercial) कंप्यूटर कौन सा था?", a: ["ENIAC", "UNIVAC", "EDVAC", "EDSAC"], c: 1, s: "UNIVAC I व्यापारिक उपयोग के लिए उपलब्ध पहला कंप्यूटर था।" },
    { q: "कंप्यूटर की पांचवीं पीढ़ी की मुख्य तकनीक क्या है?", a: ["Vacuum Tubes", "Transistors", "AI (Artificial Intelligence)", "Storage"], c: 2, s: "AI कंप्यूटरों को इंसानों की तरह सोचने और समझने की शक्ति प्रदान करता है।" },
    { q: "IBM का पूर्ण रूप क्या है?", a: ["Indian Business Machine", "International Business Machines", "Internal Basic Machine", "None"], c: 1, s: "IBM एक अमेरिकी बहुराष्ट्रीय प्रौद्योगिकी कंपनी है।" },
    { q: "प्रथम प्रोग्रामर (First Programmer) किसे माना जाता है?", a: ["चार्ल्स बैबेज", "लेडी एडा लवलेस", "बिल गेट्स", "मार्क जुकरबर्ग"], c: 1, s: "लेडी एडा ने चार्ल्स बैबेज के इंजन के लिए पहला एल्गोरिदम लिखा था।" },
    { q: "पास्कलाइन (Pascaline) का आविष्कार किसने किया था?", a: ["ब्लेज पास्कल", "आइजैक न्यूटन", "चार्ल्स बैबेज", "जॉन नेपियर"], c: 0, s: "1642 में ब्लेज पास्कल ने पहली मैकेनिकल कैलकुलेटर मशीन बनाई थी।" },
    { q: "VLSI का पूर्ण रूप क्या है?", a: ["Very Large Scale Integration", "Very Low Scale Integration", "Virtual Large Scale Info", "None"], c: 0, s: "चौथी पीढ़ी में एक ही चिप पर हजारों ट्रांजिस्टर लगाए गए।" },
    { q: "हवामहल जैसी दिखने वाली विशाल मशीन ENIAC का वजन लगभग कितना था?", a: ["10 टन", "30 टन", "5 टन", "50 टन"], c: 1, s: "ENIAC बहुत बड़ा था और लगभग 1800 वर्ग फुट जगह घेरता था।" },
    { q: "कंप्यूटर की किस पीढ़ी में पोर्टेबल (लैपटॉप) कंप्यूटर विकसित हुए?", a: ["1st", "2nd", "3rd", "4th"], c: 3, s: "चौथी पीढ़ी में माइक्रोप्रोसेसर के आने से कंप्यूटर छोटे और पोर्टेबल हो गए।" },
    { q: "UNIVAC का पूर्ण रूप क्या है?", a: ["Universal Automatic Computer", "Universal Array Computer", "Unique Automatic Computer", "None"], c: 0, s: "यह दुनिया का पहला सफल कमर्शियल कंप्यूटर था।" },
    { q: "माइक्रोप्रोसेसर का आविष्कार किस कंपनी ने किया था?", a: ["IBM", "Apple", "Intel", "Microsoft"], c: 2, s: "इंटेल (Intel) ने दुनिया का पहला प्रोसेसर बनाया था।" },
    { q: "AI (Artificial Intelligence) के जनक कौन हैं?", a: ["जॉन मैकार्थी", "चार्ल्स बैबेज", "एलन ट्यूरिंग", "स्टीव वोज्नियाक"], c: 0, s: "जॉन मैकार्थी ने 1956 में 'Artificial Intelligence' शब्द दिया था।" },
    { q: "एडजस्टिंग मशीन (Adding Machine) किसे कहा जाता था?", a: ["Abacus", "Pascaline", "Calculator", "Slide Rule"], c: 1, s: "पास्कलाइन को ही एडिंग मशीन कहा जाता था क्योंकि यह केवल जोड़-घटाव कर सकती थी।" },
    { q: "सुपर कंप्यूटर की गति किसमें मापी जाती है?", a: ["Hertz", "FLOPS", "Bytes", "Bits"], c: 1, s: "FLOPS का मतलब Floating Point Operations Per Second होता है।" },
    { q: "भारत में निर्मित प्रथम कंप्यूटर का नाम क्या है?", a: ["आर्यभट्ट", "सिद्धार्थ", "परम", "बुद्ध"], c: 1, s: "भारत में बना पहला व्यक्तिगत कंप्यूटर 'सिद्धार्थ' था।" },
    { q: "नेपियर बोन्स (Napier's Bones) का आविष्कार कब हुआ?", a: ["1617", "1822", "1946", "1900"], c: 0, s: "जॉन नेपियर ने गणना के लिए हड्डियों (Bones) पर बनी पट्टियों का उपयोग किया था।" },
    { q: "वॉन न्यूमैन आर्किटेक्चर कब प्रस्तावित किया गया?", a: ["1945", "1950", "1960", "1930"], c: 0, s: "इसी आर्किटेक्चर पर आज के लगभग सभी कंप्यूटर आधारित हैं।" },
    { q: "प्रोग्राम स्टोर करने की अवधारणा (Stored Program Concept) किसने दी?", a: ["जॉन वॉन न्यूमैन", "बिल गेट्स", "चार्ल्स बैबेज", "पास्कल"], c: 0, s: "इन्होंने सुझाव दिया कि डेटा और निर्देश दोनों को मेमोरी में स्टोर किया जाना चाहिए।" },
    { q: "माइक्रो कंप्यूटर को और क्या कहा जाता है?", a: ["Mainframe", "Supercomputer", "PC (Personal Computer)", "Workstation"], c: 2, s: "डेस्कटॉप और लैपटॉप माइक्रो कंप्यूटर की श्रेणी में आते हैं।" },
    { q: "CRAY-1 किस प्रकार का कंप्यूटर है?", a: ["Micro", "Mini", "Mainframe", "Supercomputer"], c: 3, s: "CRAY-1 दुनिया का पहला सफल सुपर कंप्यूटर माना जाता है।" },
    { q: "डिजिटल कंप्यूटर किस पद्धति पर कार्य करते हैं?", a: ["Analog", "Binary (0,1)", "Decimal", "Roman"], c: 1, s: "सभी आधुनिक डिजिटल कंप्यूटर बाइनरी भाषा समझते हैं।" },
    { q: "कंप्यूटर की साक्षरता का दिवस कब मनाया जाता है?", a: ["1 जनवरी", "2 दिसंबर", "15 अगस्त", "5 सितंबर"], c: 1, s: "विश्व कंप्यूटर साक्षरता दिवस प्रतिवर्ष 2 दिसंबर को मनाया जाता है।" },
    { q: "सॉफ्टवेयर का उपयोग कंप्यूटर की किस पीढ़ी से शुरू हुआ?", a: ["1st", "2nd", "3rd", "4th"], c: 1, s: "दूसरी पीढ़ी में उच्च स्तरीय भाषाएं (High-level languages) आने लगी थीं।" },
    { q: "FORTRAN भाषा का विकास किस पीढ़ी में हुआ था?", a: ["1st", "2nd", "3rd", "4th"], c: 1, s: "यह पहली उच्च स्तरीय प्रोग्रामिंग भाषा थी जो वैज्ञानिकों के लिए बनी थी।" },
    { q: "सबसे पुराना सांख्यिकीय यंत्र कौन सा है?", a: ["Herman's Machine", "Abacus", "Slide Rule", "Napier"], c: 1, s: "अबेकस का उपयोग गिनती और सरल गणित के लिए सबसे पहले किया गया।" },
    { q: "लैपटॉप का आविष्कार किसने किया था?", a: ["Adam Osborne", "Bill Gates", "Steve Jobs", "Charles Babbage"], c: 0, s: "1981 में एडम ऑसबोर्न ने पहला पोर्टेबल कंप्यूटर 'Osborne 1' बनाया था।" },
    { q: "डेस्कटॉप कंप्यूटर किस पीढ़ी की देन है?", a: ["2nd", "3rd", "4th", "5th"], c: 2, s: "चौथी पीढ़ी में माइक्रोप्रोसेसर के कारण घरों में कंप्यूटर (Desktop) संभव हो पाए।" }
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
