/**
 * Created by mhyll on 01-10-2016.
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('VideoController', VideoController);

  VideoController.$inject = ['$sce'];

  /* @ngInject */
  function VideoController($sce) {
    var vm = this;
    vm.title = 'VideoController';
    vm.config = {
      handball: [
        {src: $sce.trustAsResourceUrl('http://localhost:3000/data/Jesper/videos/handball.mp4'), type: 'video/mp4'}
      ],
      soccer: [
        {src: $sce.trustAsResourceUrl('http://localhost:3000/data/Jesper/videos/soccer.mp4'), type: 'video/mp4'}
      ],
      swimming: [
        {src: $sce.trustAsResourceUrl('http://localhost:3000/data/Jesper/videos/Swimming.mp4'), type: 'video/mp4'}
      ],
      tennis: [
        {src: $sce.trustAsResourceUrl('http://localhost:3000/data/Jesper/videos/Tennis.mp4'), type: 'video/mp4'}
      ],
      theme: 'bower_components/videogular-themes-default/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
    };

    activate();

    ////////////////

    function activate() {

    }
  }

})();

