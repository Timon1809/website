function Common() {
    let self = this;
    /*Eigenschaften*/
    this.promoBar =
    {
        promoItems: null,
        currentItem: 0,
        numberofItems: 0,
    };
    /*Methoden*/
    this.initialisePromo = function () {
        /*Für alle Elemente im Werbebanner*/
        let promoItems = $("#promo > div");
        /*Werte festlegen*/
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;
        /*Werbeschleife für nächstes Element initialisieren*/
        this.startDelay();
    }
    this.startDelay = function () {
        /*Warte 4 Sekunden, dann zeige nächste Mitteilung an*/
        setTimeout(function () {
            self.showNextPromoItem()
        }, 4000);
    }
    this.showNextPromoItem = function () {
        /*Aktuelles Element ausblenden*/
        $(self.promoBar.promoItems).fadeOut("slow").promise().
            done(function () {
                /*Zähler für aktuelles Werbeelement hochsetzen*/
                if (self.promoBar.currentItem >= (self.promoBar.numberOfItems - 1)) {
                    /*Zähler auf Null zurücksetzen*/
                    self.promobar.currentItem = 0;
                } else {
                    /*Zähler um 1 erhöhen*/
                    self.promoBar.currentItem++;
                }
                /*Nächstes Element einblenden*/
                $(self.promoBar.promoItems).eq(self.promoBar.currentItem).
                    fadeIn("slow", function () {
                        /*Verzögerung vor Anzeige des nächsten Elements*/
                        self.startDelay();
                    });
            });
    }
}

$(document).ready(function () {
    /*Instanziiert eine neue Klasse Common*/
    app.common = new Common();
    /*Werbebanner initialisieren*/
    app.common.initialisePromo();
});