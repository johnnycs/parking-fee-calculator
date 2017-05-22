// Siam Paragon (id=1)
// - Free for first 2 hours
// - 3rd - 6th hour, 30 baht/hour
// - 7th hour onwards, 60 baht/hour
// - 30 minutes or more = 1 hour
//
// Central World (id=2)
// - Free for first 30 minutes
// - 1st - 5th hour, 20 baht/hour
// - 6th hour onwards, 50 baht/hour
// - 30 minutes or more = 1 hour
//
// Central Ladprao (id=3)
// - Free for first hour
// - First 3 hours, 20 baht
// - First 4 hours, 40 baht
// - 5th hour onwards, 50 baht/hour
// - Fraction of hours = 1 hour

// THIS IS ROUGH DRAFT OF THE FEES
module.exports =
{
  malls:
  [
        {
            id:1,
            fees:
            [
                0,0,0,30,60,
                90,120,180,240,300,
                360,420,480,540,600,
                720
            ],
            rounder:30
        },
        {
            id:2,
            fees:
            [
                0,20,40,60,80,
                100,150,200,250,300,
                350,400,450,500,550,
                600
            ],
            rounder:30
        },
        {
            id:3,
            fees:
            [
                0,0,20,20,40,
                90,140,190,240,290,
                340,390,440,490,540,
                590
            ],
            rounder:0
        }
  ]
}
