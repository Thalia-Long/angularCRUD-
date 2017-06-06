angular
    .module('api')
    .factory('apiTalk',['$http','BASE_URL',function ($http,baseUrl) {
        return {
            getApiTalks : function () {
                return $http({
                    method: 'get',
                    url: baseUrl + '/talk'
                });
            },

            deleteTalk : function (talkId) {
                return $http({
                    method: 'delete',
                    url: baseUrl + '/talk/'+talkId
                });
            },

            addTalk : function (talk) {
                return $http({
                    method : 'post',
                    url : baseUrl + '/talk',
                    data : talk,
                    headers : {'Content-Type': 'application/json'}
                });
            },

            editTalk : function (talk) {
                return $http({
                    method : 'put',
                    url : baseUrl + '/talk',
                    data : talk,
                    headers : {'Content-Type': 'application/json'}
                });
            }
        }
    }]);