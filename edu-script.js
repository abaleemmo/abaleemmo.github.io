// Test Scores for Education Section 

// AP Scores

    // APUSH Score

    const data = {
        actual: 1270,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress = document.getElementById("actual-progress");
    const projectedProgress = document.getElementById("projected-progress");

    const barLength = Math.max(...data.limits);
    const actualPercentage = (data.actual / barLength) * 100;
    const projectedPercentage = ((data.projected - data.actual) / barLength) * 100;

    actualProgress.style.width = `${actualPercentage}%`;
    projectedProgress.style.width = `${projectedPercentage}%`;

    // Physics 1 Score

    const data1 = {
        actual: 1295,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress1 = document.getElementById("actual-progress1");
    const projectedProgress1 = document.getElementById("projected-progress1");

    const barLength1 = Math.max(...data1.limits);
    const actualPercentage1 = (data1.actual / barLength1) * 100;
    const projectedPercentage1 = ((data1.projected - data1.actual) / barLength1) * 100;

    actualProgress1.style.width = `${actualPercentage1}%`;
    projectedProgress1.style.width = `${projectedPercentage1}%`;

    // Gov Score 
    const data2 = {
        actual: 1700,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress2 = document.getElementById("actual-progress2");
    const projectedProgress2 = document.getElementById("projected-progress2");

    const barLength2 = Math.max(...data2.limits);
    const actualPercentage2 = (data2.actual / barLength2) * 100;
    const projectedPercentage2 = ((data2.projected - data2.actual) / barLength2) * 100;

    actualProgress2.style.width = `${actualPercentage2}%`;
    projectedProgress2.style.width = `${projectedPercentage2}%`;

    // Lang Score 
    const data3 = {
        actual: 1400,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress3 = document.getElementById("actual-progress3");
    const projectedProgress3 = document.getElementById("projected-progress3");

    const barLength3 = Math.max(...data3.limits);
    const actualPercentage3 = (data3.actual / barLength3) * 100;
    const projectedPercentage3 = ((data3.projected - data3.actual) / barLength3) * 100;

    actualProgress3.style.width = `${actualPercentage3}%`;
    projectedProgress3.style.width = `${projectedPercentage3}%`;

    // World Score
    const data4 = {
        actual: 1555,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress4 = document.getElementById("actual-progress4");
    const projectedProgress4 = document.getElementById("projected-progress4");

    const barLength4 = Math.max(...data4.limits);
    const actualPercentage4 = (data4.actual / barLength4) * 100;
    const projectedPercentage4 = ((data4.projected - data4.actual) / barLength4) * 100;

    actualProgress4.style.width = `${actualPercentage4}%`;
    projectedProgress4.style.width = `${projectedPercentage4}%`;

    // Seminar Score 
    const data5 = {
        actual: 1600,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress5 = document.getElementById("actual-progress5");
    const projectedProgress5 = document.getElementById("projected-progress5");

    const barLength5 = Math.max(...data5.limits);
    const actualPercentage5 = (data5.actual / barLength5) * 100;
    const projectedPercentage5 = ((data5.projected - data5.actual) / barLength5) * 100;

    actualProgress5.style.width = `${actualPercentage5}%`;
    projectedProgress5.style.width = `${projectedPercentage5}%`;

    // Precalc Score
    const data6 = {
        actual: 1710,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress6 = document.getElementById("actual-progress6");
    const projectedProgress6 = document.getElementById("projected-progress6");

    const barLength6 = Math.max(...data6.limits);
    const actualPercentage6 = (data6.actual / barLength6) * 100;
    const projectedPercentage6 = ((data6.projected - data6.actual) / barLength6) * 100;

    actualProgress6.style.width = `${actualPercentage6}%`;
    projectedProgress6.style.width = `${projectedPercentage6}%`;

    // Micro Score 
    const data7 = {
        actual: 1620,
    projected: 1500,
    limits: [500, 1000, 2500]
    };

    const actualProgress7 = document.getElementById("actual-progress7");
    const projectedProgress7 = document.getElementById("projected-progress7");

    const barLength7 = Math.max(...data7.limits);
    const actualPercentage7 = (data7.actual / barLength7) * 100;
    const projectedPercentage7 = ((data7.projected - data7.actual) / barLength7) * 100;

    actualProgress7.style.width = `${actualPercentage7}%`;
    projectedProgress7.style.width = `${projectedPercentage7}%`;

    // Macro Score 
    const data8 = {
        actual: 1565,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress8 = document.getElementById("actual-progress8");
    const projectedProgress8 = document.getElementById("projected-progress8");

    const barLength8 = Math.max(...data8.limits);
    const actualPercentage8 = (data8.actual / barLength8) * 100;
    const projectedPercentage8 = ((data8.projected - data8.actual) / barLength8) * 100;

    actualProgress8.style.width = `${actualPercentage8}%`;
    projectedProgress8.style.width = `${projectedPercentage8}%`;

    // Lit Score 
    const data9 = {
        actual: 1580,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress9 = document.getElementById("actual-progress9");
    const projectedProgress9 = document.getElementById("projected-progress9");

    const barLength9 = Math.max(...data9.limits);
    const actualPercentage9 = (data9.actual / barLength9) * 100;
    const projectedPercentage9 = ((data9.projected - data9.actual) / barLength9) * 100;

    actualProgress9.style.width = `${actualPercentage9}%`;
    projectedProgress9.style.width = `${projectedPercentage9}%`;

    // Calc AB Score 
    const data10 = {
        actual: 1610,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress10 = document.getElementById("actual-progress10");
    const projectedProgress10 = document.getElementById("projected-progress10");

    const barLength10 = Math.max(...data10.limits);
    const actualPercentage10 = (data10.actual / barLength10) * 100;
    const projectedPercentage10 = ((data10.projected - data10.actual) / barLength10) * 100;

    actualProgress10.style.width = `${actualPercentage10}%`;
    projectedProgress10.style.width = `${projectedPercentage10}%`;

    // Calc BC Score 
    const data11 = {
        actual: 1950,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress11 = document.getElementById("actual-progress11");
    const projectedProgress11 = document.getElementById("projected-progress11");

    const barLength11 = Math.max(...data11.limits);
    const actualPercentage11 = (data11.actual / barLength11) * 100;
    const projectedPercentage11 = ((data11.projected - data11.actual) / barLength11) * 100;

    actualProgress11.style.width = `${actualPercentage11}%`;
    projectedProgress11.style.width = `${projectedPercentage11}%`;

    // Spanish Score 
     const data12 = {
        actual: 1770,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress12 = document.getElementById("actual-progress12");
    const projectedProgress12 = document.getElementById("projected-progress12");

    const barLength12 = Math.max(...data12.limits);
    const actualPercentage12 = (data12.actual / barLength12) * 100;
    const projectedPercentage12 = ((data12.projected - data12.actual) / barLength12) * 100;

    actualProgress12.style.width = `${actualPercentage12}%`;
    projectedProgress12.style.width = `${projectedPercentage12}%`;

    // Physics 2 Score 
     const data13 = {
        actual: 1600,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress13 = document.getElementById("actual-progress13");
    const projectedProgress13 = document.getElementById("projected-progress13");

    const barLength13 = Math.max(...data13.limits);
    const actualPercentage13 = (data13.actual / barLength13) * 100;
    const projectedPercentage13 = ((data13.projected - data13.actual) / barLength13) * 100;

    actualProgress13.style.width = `${actualPercentage13}%`;
    projectedProgress13.style.width = `${projectedPercentage13}%`;

    // Research Score 
     const data14 = {
        actual: 1675,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress14 = document.getElementById("actual-progress14");
    const projectedProgress14 = document.getElementById("projected-progress14");

    const barLength14 = Math.max(...data14.limits);
    const actualPercentage14 = (data14.actual / barLength14) * 100;
    const projectedPercentage14 = ((data14.projected - data14.actual) / barLength14) * 100;

    actualProgress14.style.width = `${actualPercentage14}%`;
    projectedProgress14.style.width = `${projectedPercentage14}%`;

    // Chem Score 
     const data15 = {
        actual: 1655,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress15 = document.getElementById("actual-progress15");
    const projectedProgress15 = document.getElementById("projected-progress15");

    const barLength15 = Math.max(...data15.limits);
    const actualPercentage15 = (data15.actual / barLength15) * 100;
    const projectedPercentage15 = ((data15.projected - data15.actual) / barLength15) * 100;

    actualProgress15.style.width = `${actualPercentage15}%`;
    projectedProgress15.style.width = `${projectedPercentage15}%`;

// IB Scores

     // Physics SL Score 
     const data16 = {
        actual: 1500,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress16 = document.getElementById("actual-progress16");
    const projectedProgress16 = document.getElementById("projected-progress16");

    const barLength16 = Math.max(...data16.limits);
    const actualPercentage16 = (data16.actual / barLength16) * 100;
    const projectedPercentage16 = ((data16.projected - data16.actual) / barLength16) * 100;

    actualProgress16.style.width = `${actualPercentage16}%`;
    projectedProgress16.style.width = `${projectedPercentage16}%`;

     // Psych SL Score 
     const data17 = {
        actual: 1571,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress17 = document.getElementById("actual-progress17");
    const projectedProgress17 = document.getElementById("projected-progress17");

    const barLength17 = Math.max(...data17.limits);
    const actualPercentage17 = (data17.actual / barLength17) * 100;
    const projectedPercentage17 = ((data17.projected - data17.actual) / barLength17) * 100;

    actualProgress17.style.width = `${actualPercentage17}%`;
    projectedProgress17.style.width = `${projectedPercentage17}%`;

// College Readiness Assessment Scores 

    // PSAT overall 
        const data18 = {
        actual: 1535,
    projected: 2467,
    limits: [500, 1000, 2500]
    };

    const actualProgress18 = document.getElementById("actual-progress18");
    const projectedProgress18 = document.getElementById("projected-progress18");

    const barLength18 = Math.max(...data18.limits);
    const actualPercentage18 = (data18.actual / barLength18) * 100;
    const projectedPercentage18 = ((data18.projected - data18.actual) / barLength18) * 100;

    actualProgress18.style.width = `${actualPercentage18}%`;
    projectedProgress18.style.width = `${projectedPercentage18}%`;

    // PSAT Math 
        const data19 = {
        actual: 1520,
    projected: 2500,
    limits: [500, 1000, 2500]
    };

    const actualProgress19 = document.getElementById("actual-progress19");
    const projectedProgress19 = document.getElementById("projected-progress19");

    const barLength19 = Math.max(...data19.limits);
    const actualPercentage19 = (data19.actual / barLength19) * 100;
    const projectedPercentage19 = ((data19.projected - data19.actual) / barLength19) * 100;

    actualProgress19.style.width = `${actualPercentage19}%`;
    projectedProgress19.style.width = `${projectedPercentage19}%`;

    // PSAT Reading 
        const data20 = {
        actual: 1546,
    projected: 2434,
    limits: [500, 1000, 2500]
    };

    const actualProgress20 = document.getElementById("actual-progress20");
    const projectedProgress20 = document.getElementById("projected-progress20");

    const barLength20 = Math.max(...data20.limits);
    const actualPercentage20 = (data20.actual / barLength20) * 100;
    const projectedPercentage20 = ((data20.projected - data20.actual) / barLength20) * 100;

    actualProgress20.style.width = `${actualPercentage20}%`;
    projectedProgress20.style.width = `${projectedPercentage20}%`;

    // SAT overall
        const data21 = {
        actual: 1600,
    projected: 2359,
    limits: [500, 1000, 2500]
    };

    const actualProgress21 = document.getElementById("actual-progress21");
    const projectedProgress21 = document.getElementById("projected-progress21");

    const barLength21 = Math.max(...data21.limits);
    const actualPercentage21 = (data21.actual / barLength21) * 100;
    const projectedPercentage21 = ((data21.projected - data21.actual) / barLength21) * 100;

    actualProgress21.style.width = `${actualPercentage21}%`;
    projectedProgress21.style.width = `${projectedPercentage21}%`;

    // SAT Math
        const data22 = {
        actual: 1578,
    projected: 2406,
    limits: [500, 1000, 2500]
    };

    const actualProgress22 = document.getElementById("actual-progress22");
    const projectedProgress22 = document.getElementById("projected-progress22");

    const barLength22 = Math.max(...data22.limits);
    const actualPercentage22 = (data22.actual / barLength22) * 100;
    const projectedPercentage22 = ((data22.projected - data22.actual) / barLength22) * 100;

    actualProgress22.style.width = `${actualPercentage22}%`;
    projectedProgress22.style.width = `${projectedPercentage22}%`;
    
    // SAT Reading 
        const data23 = {
        actual: 1622,
    projected: 2313,
    limits: [500, 1000, 2500]
    };

    const actualProgress23 = document.getElementById("actual-progress23");
    const projectedProgress23 = document.getElementById("projected-progress23");

    const barLength23 = Math.max(...data23.limits);
    const actualPercentage23 = (data23.actual / barLength23) * 100;
    const projectedPercentage23 = ((data23.projected - data23.actual) / barLength23) * 100;

    actualProgress23.style.width = `${actualPercentage23}%`;
    projectedProgress23.style.width = `${projectedPercentage23}%`;

    // ACT overall 
        const data24 = {
        actual: 1361,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress24 = document.getElementById("actual-progress24");
    const projectedProgress24 = document.getElementById("projected-progress24");

    const barLength24 = Math.max(...data24.limits);
    const actualPercentage24 = (data24.actual / barLength24) * 100;
    const projectedPercentage24 = ((data24.projected - data24.actual) / barLength24) * 100;

    actualProgress24.style.width = `${actualPercentage24}%`;
    projectedProgress24.style.width = `${projectedPercentage24}%`;

    // ACT Math 
        const data25 = {
        actual: 1326,
    projected: 2431,
    limits: [500, 1000, 2500]
    };

    const actualProgress25 = document.getElementById("actual-progress25");
    const projectedProgress25 = document.getElementById("projected-progress25");

    const barLength25 = Math.max(...data25.limits);
    const actualPercentage25 = (data25.actual / barLength25) * 100;
    const projectedPercentage25 = ((data25.projected - data25.actual) / barLength25) * 100;

    actualProgress25.style.width = `${actualPercentage25}%`;
    projectedProgress25.style.width = `${projectedPercentage25}%`;

    // ACT Reading
        const data26 = {
        actual: 1403,
    projected: 2431,
    limits: [500, 1000, 2500]
    };

    const actualProgress26 = document.getElementById("actual-progress26");
    const projectedProgress26 = document.getElementById("projected-progress26");

    const barLength26 = Math.max(...data26.limits);
    const actualPercentage26 = (data26.actual / barLength26) * 100;
    const projectedPercentage26 = ((data26.projected - data26.actual) / barLength26) * 100;

    actualProgress26.style.width = `${actualPercentage26}%`;
    projectedProgress26.style.width = `${projectedPercentage26}%`;

    // ACT English 
        const data27 = {
        actual: 1299,
    projected: 2431,
    limits: [500, 1000, 2500]
    };

    const actualProgress27 = document.getElementById("actual-progress27");
    const projectedProgress27 = document.getElementById("projected-progress27");

    const barLength27 = Math.max(...data27.limits);
    const actualPercentage27 = (data27.actual / barLength27) * 100;
    const projectedPercentage27 = ((data27.projected - data27.actual) / barLength27) * 100;

    actualProgress27.style.width = `${actualPercentage27}%`;
    projectedProgress27.style.width = `${projectedPercentage27}%`;

    // ACT Science 
        const data28 = {
        actual: 1368,
    projected: 2222,
    limits: [500, 1000, 2500]
    };

    const actualProgress28 = document.getElementById("actual-progress28");
    const projectedProgress28 = document.getElementById("projected-progress28");

    const barLength28 = Math.max(...data28.limits);
    const actualPercentage28 = (data28.actual / barLength28) * 100;
    const projectedPercentage28 = ((data28.projected - data28.actual) / barLength28) * 100;

    actualProgress28.style.width = `${actualPercentage28}%`;
    projectedProgress28.style.width = `${projectedPercentage28}%`;

    // ACT Writing
     const data29 = {
        actual: 1271,
    projected: 2083,
    limits: [500, 1000, 2500]
    };

    const actualProgress29 = document.getElementById("actual-progress29");
    const projectedProgress29 = document.getElementById("projected-progress29");

    const barLength29 = Math.max(...data29.limits);
    const actualPercentage29 = (data29.actual / barLength29) * 100;
    const projectedPercentage29 = ((data29.projected - data29.actual) / barLength29) * 100;

    actualProgress29.style.width = `${actualPercentage29}%`;
    projectedProgress29.style.width = `${projectedPercentage29}%`;

// buttons
    // request transcript button 

    let transcriptButton = document.querySelector(".transcript-request-button");
    let transcriptCloseButton = document.querySelector(".close-transcript-popup");
    let transcriptPopup = document.querySelector(".transcript-popup");

    transcriptButton.addEventListener("click", function(){
        transcriptPopup.style.display = "flex";
    });
    
    transcriptCloseButton.addEventListener("click", function(){
        transcriptPopup.style.display = "none";
    });