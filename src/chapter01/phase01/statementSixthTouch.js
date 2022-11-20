const invoice = [
    {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 55,
        },
        {
          playID: "as-like",
          audience: 35,
        },
        {
          playID: "othello",
          audience: 40,
        },
      ],
    },
  ];
  
  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };

  function statementv10(invoice) {
    return renderPlainText(createStatementData(invoice));
  }

  function createStatementData(invoice) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData;
  }
   
  function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
      result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${
        perf.audience
      } seats)\n`;
    }   
    result += `Amount owed is ${usd(data.totalAmount / 100)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;
  }

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result); 
    result.amount = amountForv3(result);
    result.volumeCredits = volumeCreditsForv2(result);
    return result;
  }
  
  function totalAmount(data) {
    return data.performances
    .reduce((total, p) => total + p.amount, 0);
  }
  
  function totalVolumeCredits(data) {
    return data.performances
    .reduce((total, p) => total + p.volumeCredits, 0);
  }
  
  function volumeCreditsForv2(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
  
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
  }
  
  function amountForv3(aPerformance) {
    let result = 0;
    switch (aPerformance.play.type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }
    return result;
  }
  
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
  
  console.log(statementv10(invoice[0]));
  