// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A data service that stores the exploration language code.
 */

require(
  'pages/exploration-editor-page/services/exploration-property.service.ts');

angular.module('oppia').factory('ExplorationLanguageCodeService', [
  'ExplorationPropertyService', 'ALL_LANGUAGE_CODES',
  function(ExplorationPropertyService, ALL_LANGUAGE_CODES) {
    var child = Object.create(ExplorationPropertyService);
    child.propertyName = 'language_code';
    child.getAllLanguageCodes = function() {
      return ALL_LANGUAGE_CODES;
    };
    child.getCurrentLanguageDescription = function() {
      for (var i = 0; i < ALL_LANGUAGE_CODES.length; i++) {
        if (ALL_LANGUAGE_CODES[i].code === child.displayed) {
          return ALL_LANGUAGE_CODES[i].description;
        }
      }
    };
    child._isValid = function(value) {
      return ALL_LANGUAGE_CODES.some(function(elt) {
        return elt.code === value;
      });
    };
    return child;
  }
]);
