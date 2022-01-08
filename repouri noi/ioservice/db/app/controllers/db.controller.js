const db = require("../models");
const Crawl = db.crawl;

exports.get_crawls_history_user = (req, res) => {
    Crawl.find({
        user_id: req.body.user_id
    })
        .exec((err, crawls) => {
            if(err) {
                req.status(500).send({message: err});
                return;
            }

            if(!crawls) {
                return res.status(404).send({ message: "No history found for searched user." });
            }

            // get rid of unwanted info
            var ret = [];

            for(let i = 0; i < crawls.length; i++) {
                ret.push({
                    word: crawls[i].word,
                    link_start: crawls[i].link_start,
                    results: crawls[i].results
                })
            }

            return res.status(200).send(ret);
        })
}

exports.post_crawl_user = (req, res) => {
    const crawl = new Crawl({
        word: req.body.word,
        link_start: req.body.link_start,
        results: req.body.results,
        user_id: req.body.user_id
    })

    crawl.save((err, crawl) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Crawl.findOne({
            word: req.body.word,
            link_start: req.body.link_start,
            user_id: req.body.user_id
        }, (err, crawl) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            res.status(200).send({ message: "Crawl logged successfully!", result: crawl });
        })
    });
}