angular
    .module('talkApp')
    .factory('talkService',['apiTalk',function (apiTalk) {
        return {
            getTalks : function (cb) {
                return apiTalk.getApiTalks().then(function (response) {
                    cb(response);
                });
            },
            deleteTalk : function (talkId, cb) {
                return apiTalk.deleteTalk(talkId).then(function (response) {
                    cb(response);
                });
            },

            add : function (talk, cb) {
                return apiTalk.addTalk(talk).then(function (response) {
                    cb(response);
                });
            },

            edit : function (talk, cb) {
                return apiTalk.editTalk(talk).then(function (response) {
                    cb(response);
                });
            }
        }
    }]);