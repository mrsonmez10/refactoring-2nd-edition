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
  
  function statementv8(invoice, plays) {
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
      // print line for this order
      result += `  ${playFor(perf).name}: ${usd(amountForv3(perf) / 100)} (${
        perf.audience
      } seats)\n`;
    }
    result += `Amount owed is ${usd(totalVolumeCredits() / 100)}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;
  }

  // newly added
  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
        result += amountForv3(perf);
    }
    return result;
  }
  
  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of invoice[0].performances) {
      volumeCredits += volumeCreditsForv2(perf);
    }
    return volumeCredits;
  }
  
  // v2
  function volumeCreditsForv2(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
  
  // newly added
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
  }
  
  function amountForv3(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
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
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
  }
  
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
  
  console.log(statementv8(invoice[0], plays));
  