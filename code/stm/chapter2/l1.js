  const quizData = [
    { q: "कंप्यूटर का 'मस्तिष्क' (Brain) किसे कहा जाता है?", a: ["RAM", "CPU", "Hard Disk", "Monitor"], c: 1, s: "CPU (Central Processing Unit) ही सभी डेटा को प्रोसेस और कंट्रोल करता है।" },
    { q: "CPU का वह भाग जो अंकगणितीय गणनाएँ (जैसे +, -) करता है?", a: ["CU", "Registers", "ALU", "Cache"], c: 2, s: "ALU का पूरा नाम Arithmetic Logic Unit है।" },
    { q: "कंप्यूटर की मुख्य सर्किट बोर्ड को क्या कहते हैं?", a: ["Expansion Board", "Motherboard", "Circuit Board", "Breadboard"], c: 1, s: "मदरबोर्ड पर ही CPU, RAM और अन्य मुख्य हिस्से लगे होते हैं।" },
    { q: "RAM का पूर्ण रूप क्या है?", a: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "None"], c: 1, s: "RAM एक अस्थायी (Volatile) मेमोरी है।" },
    { q: "इनमें से कौन सा एक इनपुट डिवाइस है?", a: ["Printer", "Monitor", "Keyboard", "Speaker"], c: 2, s: "कीबोर्ड के जरिए हम कंप्यूटर को निर्देश भेजते हैं।" },
    { q: "CPU की गति वर्तमान में किसमें मापी जाती है?", a: ["Kilobytes", "Gigahertz (GHz)", "Megabytes", "Watts"], c: 1, s: "GHz प्रोसेसर की क्लॉक स्पीड को दर्शाता है।" },
    { q: "ROM का उपयोग किसलिए किया जाता है?", a: ["डेटा डिलीट करने", "स्थायी निर्देश स्टोर करने", "इंटरनेट चलाने", "गेम खेलने"], c: 1, s: "ROM (Read Only Memory) में स्टार्टअप निर्देश (BIOS) होते हैं।" },
    { q: "कंप्यूटर में 'Bit' का मतलब क्या होता है?", a: ["Bigger Digit", "Binary Digit", "Binary Data", "Big Data"], c: 1, s: "Bit (0 या 1) कंप्यूटर की सबसे छोटी इकाई है।" },
    { q: "1 बाइट (Byte) में कितने बिट्स होते हैं?", a: ["4 bits", "8 bits", "16 bits", "32 bits"], c: 1, s: "8 बिट्स मिलकर 1 बाइट बनाते हैं।" },
    { q: "USB का पूर्ण रूप क्या है?", a: ["Universal Serial Bus", "Unique Serial Bus", "United Service Bus", "None"], c: 0, s: "USB सबसे आम पोर्ट है जो डिवाइस जोड़ने के काम आता है।" },
    { q: "कंप्यूटर बंद होने पर किस मेमोरी का डेटा मिट जाता है?", a: ["ROM", "Hard Disk", "RAM", "CD-ROM"], c: 2, s: "RAM वोलेटाइल होती है, इसलिए बिजली जाते ही डेटा खत्म हो जाता है।" },
    { q: "CU का कार्य क्या है?", a: ["गणना करना", "निर्देशों को नियंत्रित करना", "डेटा स्टोर करना", "प्रिंट करना"], c: 1, s: "Control Unit (CU) कंप्यूटर के सभी अंगों के बीच तालमेल बिठाता है।" },
    { q: "हार्ड डिस्क किस प्रकार की मेमोरी है?", a: ["Primary", "Secondary", "Volatile", "Cache"], c: 1, s: "यह डेटा को लंबे समय तक सुरक्षित रखने वाली सेकेंडरी मेमोरी है।" },
    { q: "कंप्यूटर का पावर बटन दबाने पर शुरू होने वाली प्रक्रिया क्या कहलाती है?", a: ["Loading", "Booting", "Running", "Starting"], c: 1, s: "बूटिंग के दौरान ऑपरेटिंग सिस्टम लोड होता है।" },
    { q: "VGA पोर्ट का उपयोग किसे जोड़ने के लिए होता है?", a: ["Keyboard", "Mouse", "Monitor", "Printer"], c: 2, s: "VGA का उपयोग वीडियो सिग्नल भेजने के लिए मॉनिटर में होता है।" },
    { q: "प्रोसेसर और रैम के बीच की बहुत तेज़ मेमोरी कौन सी है?", a: ["Hard Disk", "Cache Memory", "Virtual Memory", "ROM"], c: 1, s: "कैश मेमोरी CPU की कार्यक्षमता बढ़ाती है।" },
    { q: "SMPS का पूरा नाम क्या है?", a: ["Switch Mode Power Supply", "Simple Mode Power Supply", "System Mode Power Supply", "None"], c: 0, s: "SMPS कंप्यूटर को बिजली (DC) की आपूर्ति करता है।" },
    { q: "एक निबल (Nibble) कितने बिट के बराबर होता है?", a: ["2 bits", "4 bits", "8 bits", "16 bits"], c: 1, s: "आधा बाइट यानी 4 बिट को 1 निबल कहते हैं।" },
    { q: "प्रिंटर की क्वालिटी किसमें मापी जाती है?", a: ["PPM", "DPI", "LPM", "CPM"], c: 1, s: "DPI का मतलब Dots Per Inch होता है।" },
    { q: "CD-ROM का व्यास सामान्यतः कितना होता है?", a: ["10 cm", "12 cm", "15 cm", "20 cm"], c: 1, s: "एक स्टैंडर्ड सीडी का आकार 120mm या 12cm होता है।" },
    { q: "कर्सर को कंट्रोल करने के लिए किस डिवाइस का उपयोग होता है?", a: ["Keyboard", "Mouse", "Speaker", "Scanner"], c: 1, s: "माउस एक पॉइंटिंग डिवाइस है।" },
    { q: "कंप्यूटर में डेटा किस रूप में प्रोसेस होता है?", a: ["Decimal", "Binary", "Text", "Images"], c: 1, s: "कंप्यूटर केवल 0 और 1 की भाषा समझता है।" },
    { q: "प्रोसेसर के अंदर के बहुत छोटे और तेज़ स्टोरेज क्षेत्र को क्या कहते हैं?", a: ["RAM", "Registers", "Slot", "Bus"], c: 1, s: "रजिस्टर CPU की अपनी मेमोरी होते हैं।" },
    { q: "डेटा को इंफॉर्मेशन में बदलना क्या कहलाता है?", a: ["Input", "Processing", "Output", "Storage"], c: 1, s: "यही कंप्यूटर का मुख्य कार्य है।" },
    { q: "मदरबोर्ड पर लगी बैटरी (CMOS) का क्या काम है?", a: ["पावर देना", "समय और तारीख सुरक्षित रखना", "प्रोसेसर ठंडा करना", "कोई नहीं"], c: 1, s: "CMOS बैटरी कंप्यूटर बंद होने पर भी घड़ी चलाती रहती है।" },
    { q: "BIOS कहाँ स्टोर होता है?", a: ["RAM", "ROM", "Hard Disk", "DVD"], c: 1, s: "Basic Input Output System (BIOS) को ROM में रखा जाता है।" },
    { q: "सबसे तेज़ प्रिंटर कौन सा है?", a: ["Inkjet", "Laser", "Dot Matrix", "Daisy Wheel"], c: 1, s: "लेजर प्रिंटर सबसे तेज़ और अच्छी क्वालिटी देता है।" },
    { q: "SSD का पूर्ण रूप क्या है?", a: ["Solid State Drive", "System State Drive", "Silver State Drive", "None"], c: 0, s: "SSD हार्ड डिस्क से बहुत तेज़ होती है।" },
    { q: "इनपुट को आउटपुट में कौन बदलता है?", a: ["Printer", "Monitor", "CPU", "Keyboard"], c: 2, s: "CPU ही प्रोसेसिंग करके रिजल्ट देता है।" },
    { q: "कम्प्यूटर हार्डवेयर जो आँकड़ों की बहुत अधिक मात्रा को स्टोर कर सकता है?", a: ["RAM", "ROM", "Magnetic Tape / Hard Disk", "None"], c: 2, s: "सेकेंडरी स्टोरेज में बड़ी मात्रा में डेटा रह सकता है।" },
    { q: "मदरबोर्ड के कंपोनेंट्स के बीच डेटा का आदान-प्रदान किसके द्वारा होता है?", a: ["Buses", "Cables", "Pipes", "Links"], c: 0, s: "बस (Bus) डेटा ले जाने वाला इलेक्ट्रॉनिक मार्ग है।" },
    { q: "कीबोर्ड की सबसे लंबी की (Key) कौन सी है?", a: ["Enter", "Shift", "Spacebar", "Backspace"], c: 2, s: "स्पेसबार कीबोर्ड पर सबसे नीचे और सबसे बड़ी होती है।" },
    { q: "डबल क्लिक करने का क्या अर्थ है?", a: ["फाइल खोलना", "फाइल डिलीट करना", "फाइल सेव करना", "कोई नहीं"], c: 0, s: "ज्यादातर OS में डबल क्लिक से प्रोग्राम खुलता है।" },
    { q: "CRT का संबंध किससे है?", a: ["Mouse", "Monitor", "Keyboard", "Printer"], c: 1, s: "पुराने भारी मॉनिटर Cathode Ray Tube आधारित थे।" },
    { q: "पेन ड्राइव को कंप्यूटर में कहाँ लगाया जाता है?", a: ["HDMI Port", "USB Port", "VGA Port", "LAN Port"], c: 1, s: "पेन ड्राइव USB इंटरफेस का उपयोग करती है।" },
    { q: "1024 बाइट्स किसके बराबर हैं?", a: ["1 MB", "1 KB", "1 GB", "1 TB"], c: 1, s: "1024 Bytes = 1 Kilobyte (KB) होता है।" },
    { q: "UPS का मुख्य कार्य क्या है?", a: ["स्पीड बढ़ाना", "पावर बैकअप देना", "वायरस हटाना", "प्रिंट करना"], c: 1, s: "UPS बिजली कटने पर कंप्यूटर को अचानक बंद होने से बचाता है।" },
    { q: "इनमें से कौन आउटपुट डिवाइस नहीं है?", a: ["Monitor", "Printer", "Scanner", "Speaker"], c: 2, s: "स्कैनर एक इनपुट डिवाइस है जो फोटो को कंप्यूटर में भेजता है।" },
    { q: "मॉडेम (Modem) किससे जुड़ा होता है?", a: ["Processor", "Motherboard", "Telephone Line", "Monitor"], c: 2, s: "इंटरनेट के लिए मॉडेम को टेलीफोन या केबल लाइन से जोड़ा जाता है।" },
    { q: "CPU का माइक्रोप्रोसेसर किस पदार्थ का बना होता है?", a: ["Gold", "Silver", "Silicon", "Iron"], c: 2, s: "प्रोसेसर बनाने में सिलिकॉन (Semiconductor) का उपयोग होता है।" }
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
