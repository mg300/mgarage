import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const services = [
    {
      name: "Wymiana oleju silnikowego",
      time: "1h",
      price: 500,
      description:
        "Nasza usługa wymiany oleju silnikowego to kluczowy krok w dbaniu o zdrowie i wydajność Twojego pojazdu. Gwarantujemy profesjonalną obsługę i wysokiej jakości oleje, które utrzymają Twój silnik w doskonałej kondycji. Proces wymiany oleju obejmuje zlewanie i utylizowanie starego oleju, wymianę filtra oleju, napełnienie nowego oleju zgodnie z zaleceniami producenta oraz kontrolę poziomu oleju i sprawdzenie wycieków.",
      bulletDescription:
        "Zlewanie i utylizowanie starego oleju\nWymiana filtra oleju\nNapełnienie nowego oleju zgodnie z zaleceniami producenta\nKontrola poziomu oleju i sprawdzenie wycieków",
    },
    {
      name: "Wymiana filtru powietrza",
      time: "0.5h",
      price: 150,
      description:
        "Wymiana filtra powietrza to ważny element utrzymania sprawności silnika. Oferujemy usługę profesjonalnej wymiany filtra powietrza, co pozytywnie wpłynie na osiągi i efektywność Twojego pojazdu.",
      bulletDescription: null,
    },
    {
      name: "Wymiana płynu chłodniczego",
      time: "1.5h",
      price: 300,
      description:
        "Regularne sprawdzanie i wymiana płynu chłodniczego to kluczowe dla utrzymania odpowiedniej temperatury silnika. Gwarantujemy kompleksową obsługę i wysokiej jakości płyny chłodzące.",
      bulletDescription: null,
    },
    {
      name: "Wymiana płynu hamulcowego",
      time: "1h",
      price: 250,
      description:
        "Bezpieczeństwo jest priorytetem. Oferujemy profesjonalną wymianę płynu hamulcowego, co zapewni skuteczność hamulców i bezpieczeństwo podczas jazdy.",
      bulletDescription: null,
    },
    {
      name: "Diagnostyka komputerowa",
      time: "0.5h",
      price: 100,
      description:
        "Skomplikowane problemy wymagają precyzyjnych narzędzi. Oferujemy diagnostykę komputerową,  problemy z układem elektronicznym pojazdu.",
      bulletDescription: null,
    },
    {
      name: "Wymiana rozrządu",
      time: "2h",
      price: 1000,
      description:
        "Wymiana rozrządu to kluczowy element konserwacji silnika. Oferujemy usługę profesjonalnej wymiany rozrządu, co pozwoli uniknąć poważnych awarii.",
      bulletDescription: null,
    },
    {
      name: "Naprawa układu wydechowego",
      time: "1.5h",
      price: 350,
      description:
        "Usługa obejmuje diagnostykę i naprawę układu wydechowego. Działa ona nie tylko na efektywność silnika, ale także na emisję spalin i ogólną wydajność pojazdu.",
      bulletDescription: null,
    },
    {
      name: "Wymiana amortyzatorów",
      time: "2h",
      price: 450,
      description:
        "Nowe amortyzatory poprawią komfort jazdy, stabilność pojazdu i bezpieczeństwo. Oferujemy profesjonalną wymianę z zachowaniem standardów producenta.",
      bulletDescription: null,
    },
    {
      name: "Wymiana świec zapłonowych",
      time: "1h",
      price: 120,
      description:
        "Regularna wymiana świec zapłonowych poprawi zapłon, efektywność silnika i zużycie paliwa. To prosta, ale ważna czynność konserwacyjna.",
      bulletDescription: null,
    },
    {
      id: "11",
      name: "Wymiana tarcz i klocków hamulcowych",
      time: "1.5h",
      price: 400,
      description:
        "Skuteczne hamulce to kluczowy element bezpieczeństwa. Oferujemy profesjonalną wymianę tarcz i klocków hamulcowych, dbając o skuteczność hamowania.",
      bulletDescription: null,
    },
    {
      name: "Wymiana sprężyny zawieszenia",
      time: "2h",
      price: 350,
      description:
        "Sprężyny zawieszenia wpływają na komfort jazdy i stabilność pojazdu. Oferujemy profesjonalną wymianę sprężyn, dbając o odpowiednie właściwości zawieszenia.",
      bulletDescription: null,
    },
    {
      name: "Wymiana łożysk kół",
      time: "1.5h",
      price: 300,
      description:
        "Uszkodzone łożyska kół mogą prowadzić do różnych problemów. Oferujemy profesjonalną wymianę łożysk, zapewniając płynność jazdy i bezpieczeństwo.",
      bulletDescription: null,
    },
  ];

  for (const service of services) {
    await prisma.services.upsert({
      where: { name: service.name },
      update: {},
      create: {
        name: service.name,
        price: service.price,
        time: service.time,
        description: service.description,
        bulletDescription: service.bulletDescription,
      },
    });
  }

  console.log("Seed completed");
}

main()
  .catch(async (e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
