// Test Scores for Education Section 

// AP Scores

    // APUSH Score

    const data = {
        actual: 1269,
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
        actual: 2500,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
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
        actual: 2500,
    projected: 2000,
    limits: [500, 1000, 2500]
    };

    const actualProgress15 = document.getElementById("actual-progress15");
    const projectedProgress15 = document.getElementById("projected-progress15");

    const barLength15 = Math.max(...data15.limits);
    const actualPercentage15 = (data15.actual / barLength15) * 100;
    const projectedPercentage15 = ((data15.projected - data15.actual) / barLength15) * 100;

    actualProgress15.style.width = `${actualPercentage15}%`;
    projectedProgress15.style.width = `${projectedPercentage15}%`;