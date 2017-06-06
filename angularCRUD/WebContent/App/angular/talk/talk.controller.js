angular.module('talkApp').controller("talkController", ['$scope', '$http','BASE_URL', function ($scope, $http,baseUrl) {

    var updateTotal = function () {
        var total = 0;
        for(var i =0; i < $scope.listTalks.length; i++) {
            total += parseInt($scope.listTalks[i].duration);
        }

        $scope.total = total;
    }

    var getTalks = function() {
        $http({
            method: 'get',
            url: baseUrl + '/talk'
        }).then(function (response) {
            $scope.listTalks = response.data;
            updateTotal();
        });
    };

    getTalks();


    //begin delete
    $scope.deleteTalk = function (talkIndex) {
        $scope.listTalks[talkIndex].deleteBtnHide = true;
    }

    $scope.cancelDelete = function (talkIndex) {
        $scope.listTalks[talkIndex].deleteBtnHide = false;
    }

    $scope.confirmDelete = function (talkIndex) {
        var talkObject = $scope.listTalks[talkIndex];

        $http({
            method: 'delete',
            url: baseUrl + '/talk/'+talkObject.id
        }).then(function (response) {
            if (response.status == 204) {
                $scope.listTalks.splice(talkIndex, 1);
                updateTotal();
            }
        });
        $scope.listTalks[talkIndex].deleteBtnHide = false;
    }
    //end delete

    //begin add
    $scope.showAddForm = false;

    $scope.addBtn = function () {
        $scope.showAddForm = true;
    }

    var reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.talk = angular.copy($scope.master);
    };

    $scope.saveTalk = function (talk, form) {
        $http({
            method : 'post',
            url : baseUrl + '/talk',
            data : talk,
            headers : {'Content-Type': 'application/json'}
        }).then(function (response) {
            if (response.status == 200) {
                getTalks();
                $scope.showAddForm = false;
                reset(form);
            }
        });
    }

    $scope.cancelAdd = function (form) {
        $scope.showAddForm = false;
        reset(form)
    }
    //end add

    //begin edit
    $scope.editTalk = function (talkIndex) {
        var talk = $scope.listTalks[talkIndex];
        talk.updateMode = true;
    }

    $scope.cancelEdit = function (talkIndex) {
        $scope.listTalks[talkIndex].updateMode = false;
        getTalks();
    }

    $scope.confirmEdit = function (talk, index) {

        var updatedTalkData = {
            id : talk.id,
            name : talk.name,
            speaker : talk.speaker,
            venue : talk.venue,
            duration : talk.duration
        };

        $http({
            method : 'put',
            url : baseUrl + '/talk',
            data : updatedTalkData,
            headers : {'Content-Type': 'application/json'}
        }).then(function (response) {
            if (response.status == 200) {
                talk.updateMode = false;
                updateTotal();
            }
        });
    }
    //end edit
}]);