import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import Title from '~/components/Utilities/Title'
import Text from '~/components/Utilities/Text'
import Button from '~/components/Utilities/Button'

export const ReviewWidgetContainer = styled.div`
  .jdgm-widget.jdgm-widget {
    display: block;
  }

  .jdgm-widget .jdgm-temp-hidden {
    display: block;
  }

  .jdgm-lock-scroll {
    overflow: hidden;
  }

  .jdgm-clearfix:before,
  .jdgm-clearfix:after {
    display: block;
    content: '';
    clear: both;
  }

  .jdgm-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .jdgm-divider-top {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #eee;
  }

  .jdgm-preview-badge.jdgm--from-js
    .jdgm-prev-badge[data-average-rating='0.00'] {
    display: none !important;
  }

  .jdgm-paginate {
    width: 100%;
    padding-top: 16px;
    text-align: center;
    display: none;
  }
  .jdgm-paginate__page {
    display: inline-block;
    line-height: 1;
    padding: 4px 8px;
    cursor: pointer;
    vertical-align: middle;
  }
  .jdgm-paginate__page.jdgm-curt {
    font-weight: bold;
    font-size: 150%;
    pointer-events: none;
  }
  .jdgm-paginate__first-page,
  .jdgm-paginate__last-page,
  .jdgm-paginate__prev-page,
  .jdgm-paginate__next-page {
    font-family: 'JudgemeIcons';
    font-weight: bold;
    font-size: 110%;
    padding: 4px;
  }
  .jdgm-paginate__first-page:before {
    content: '\e004';
  }
  .jdgm-paginate__last-page:before {
    content: '\e006';
  }
  .jdgm-paginate__prev-page:before {
    content: '\e002';
  }
  .jdgm-paginate__next-page:before {
    content: '\e003';
  }
  .jdgm-all-reviews-widget,
  .jdgm-rev-widg {
    margin-top: 15px;
    margin-bottom: 24px;
  }
  .jdgm-rev-widg.jdgm-rev-widg {
    clear: both;
    display: block;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      display: flex;
    }
  }

  .jdgm-rev-widg__summary-text {
    display: none;
  }

  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-rev-widg__summary-stars,
  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-rev-widg__summary-text {
    display: inline-block;
    font-size: ${props => props.theme.fonts.smallText};
    letter-spacing: ${props => props.theme.letterSpacing.smallText};
    font-weight: 500;
    font-style: normal;
    text-transform: uppercase;
  }
  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-rev-widg__summary-stars {
    margin-right: 8px;
  }
  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-rev-widg__sort-wrapper {
    display: none;
  }
  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-paginate {
    display: none;
  }
  .jdgm-rev-widg__header:after {
    display: block;
    content: '';
    clear: both;
  }
  .jdgm-rev-widg__title {
    margin-bottom: 8px;
    font-size: ${props => props.theme.fonts.heading5};
    letter-spacing: ${props => props.theme.letterSpacing.heading5};
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    display: none !important;
  }
  .jdgm-rev-widg__summary {
    float: left;
  }
  .jdgm-ask-question-btn,
  .jdgm-write-rev-link {
    border: 1px solid #eee;
    padding: 5px 10px;
    text-align: center;
    display: inline-block;
    max-width: 150px;
    margin-left: auto;
    text-decoration: none;
  }
  .jdgm-widget-actions-wrapper ~ .jdgm-rev__br,
  .jdgm-rev-widg__sort-wrapper ~ .jdgm-rev__br,
  .jdgm-rev-widg__summary ~ .jdgm-rev__br {
    clear: both;
  }
  .jdgm-ask-question-btn {
    margin-left: 8px;
  }
  .jdgm-rev-widg__sort-wrapper {
    clear: both;
  }
  .jdgm-sort-dropdown-wrapper {
    float: right;
  }
  .jdgm-sort-dropdown.jdgm-sort-dropdown {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: auto;
    padding: 0 20px 0 8px;
    font-size: 12px;
    line-height: 2;
    background: transparent;
    text-indent: 0;
    border: 1px solid #ddd;
    max-width: 100%;
  }
  .jdgm-sort-dropdown-arrow {
    margin-left: -16px;
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid black;
  }
  .jdgm-rev-widg__paginate-spinner-wrapper {
    display: none;
    margin-top: 16px;
    padding-top: 24px;
    border-top: 1px solid #eee;
  }
  .jdgm-all-reviews-page__wrapper {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    float: none;
  }
  .jdgm-all-reviews-page__wrapper .jdgm-branding-footer {
    display: block;
    font-family: 'Arial', sans-serif;
    font-size: 11px;
    text-align: center;
    color: initial;
    font-weight: 300;
    margin: 12px 0 -22px;
  }
  .jdgm-all-reviews-widget > .jdgm-spinner {
    margin-top: 8px;
  }
  .jdgm-all-reviews__header:after {
    content: ' ';
    display: table;
    clear: both;
  }
  .jdgm-all-reviews__summary {
    float: left;
  }
  .jdgm-all-reviews-page__load-more-wrapper {
    text-align: center;
  }
  .jdgm-all-reviews-page__load-more {
    border: 1px solid currentColor;
    padding: 5px 10px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }
  @media only screen and (max-width: 767px) {
    .jdgm-all-reviews-page__wrapper {
      max-width: 90vw;
    }
    .jdgm-widget-actions-wrapper {
      width: 100%;
    }
    .jdgm-ask-question-btn,
    .jdgm-write-rev-link {
      width: 100%;
      margin-bottom: 16px;
      display: block;
      margin-left: 0;
    }
  }
  .ui-tabs.ui-widget .jdgm-rev-widg {
    border: none;
    padding: 0;
    margin-top: 0;
  }
  .jdgm-widget.jdgm-widget[data-auto-install='true'],
  .jdgm-carousel-wrapper[data-auto-install='true'] {
    display: none;
  }
  .jdgm-widget .jdgm-review-search.jdgm-review-search {
    display: block;
    margin-bottom: 12px;
  }
  .jdgm-widget-actions-wrapper {
    float: right;
    text-align: right;
  }
  .jdgm-histogram {
    float: left;
    font-size: 12px;
  }
  .jdgm-histogram + .jdgm-rev__br {
    clear: both;
  }
  .jdgm-rev-widg[data-number-of-reviews='0'] .jdgm-histogram {
    display: none;
  }
  .jdgm-histogram__row {
    height: 16px;
    line-height: 16px;
    margin-bottom: 5px;
    cursor: pointer;
    white-space: nowrap;
  }
  .jdgm-histogram__row[data-frequency='0'] {
    pointer-events: none;
  }
  .jdgm-histogram__row:last-of-type {
    margin-bottom: 0;
  }
  .jdgm-histogram__row:hover {
    opacity: 0.6;
  }
  .jdgm-histogram__row--selected .jdgm-histogram__bar:after {
    width: 100%;
  }
  .jdgm-histogram__clear-filter {
    display: none;
    margin-top: 8px;
    font-size: 14px;
  }
  .jdgm-histogram__star {
    display: none;
    vertical-align: middle;
  }
  .jdgm-histogram__star .jdgm-star {
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    vertical-align: middle;
  }
  .jdgm-histogram__bar {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 100%;
    margin-right: 5px;
    vertical-align: middle;
    box-shadow: inset 0 0 1px #666;
  }
  .jdgm-histogram__bar:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: ${props => props.theme.colors.secondary};
    opacity: 0.3;
    transition: width 0.35s ease;
  }
  .jdgm-histogram__bar-content {
    height: 100%;
    font-size: 9px;
    line-height: 16px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: inset 0 0 1px #888;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
  }
  .jdgm-histogram__percentage {
    display: inline-block;
    width: 32px;
    vertical-align: middle;
  }
  .jdgm-histogram__frequency {
    display: inline-block;
    margin-left: 3px;
    vertical-align: middle;
  }
  .jdgm-review-widget--medium .jdgm-histogram {
    width: 100%;
    margin: 16px 0 4px 0;
    padding: 0;
    border: none;
  }
  .jdgm-review-widget--small .jdgm-histogram {
    width: 100%;
    margin: 16px 0 4px 0;
    padding: 0;
    border: none;
  }
  .jdgm-review-widget--small .jdgm-histogram .jdgm-histogram__bar {
    width: 80px;
  }
  .jdgm-review-widget--small .jdgm-histogram .jdgm-histogram__star .jdgm-star {
    padding-right: 2px !important;
  }
  .jdgm-review-widget--small
    .jdgm-histogram
    .jdgm-histogram__star
    .jdgm-star:last-of-type {
    padding-right: 0 !important;
  }
  @media only screen and (max-width: 768px) {
    .jdgm-histogram {
      width: 100%;
      margin: 16px 0 4px 0;
      padding: 0;
      border: none;
    }
  }
  @media only screen and (max-width: 320px) {
    .jdgm-histogram__bar {
      width: 80px;
    }
    .jdgm-histogram__star .jdgm-star {
      padding-right: 2px !important;
    }
    .jdgm-histogram__star .jdgm-star:last-of-type {
      padding-right: 0 !important;
    }
  }
  .jdgm-question-form-wrapper,
  .jdgm-form-wrapper {
    margin-top: 16px;
    border-top: 1px solid #eee;
  }
  .jdgm-widget label {
    display: block;
    width: 100%;
    margin: 20px 0 5px 0;
    font-size: 14px;
    font-size: 1rem;
    line-height: 1;
  }
  .jdgm-widget label.error {
    width: 100%;
    background: #ff0;
    margin: 0;
  }
  .jdgm-widget input:not([type='submit']) {
    width: 100%;
    min-height: 2em;
    margin: 0;
    border: 1px solid #ddd;
  }
  .jdgm-widget textarea {
    width: 100%;
    border: 1px solid #ddd;
  }
  .jdgm-widget .jdgm-custom-forms .jdgm-spinner {
    margin-top: 16px;
  }
  .jdgm-widget .jdgm-cf__quest-label {
    margin-top: 15px;
  }
  .jdgm-widget .jdgm-cf__required-sym {
    color: red;
    font-size: 120%;
    vertical-align: middle;
  }
  .jdgm-widget label.jdgm-cf__option {
    margin: 0;
    padding: 6px 0;
  }
  .jdgm-widget input.jdgm-cf-input:not([type='text']) {
    width: auto;
    margin-right: 8px;
    vertical-align: middle;
  }
  .jdgm-widget .jdgm-submit-question,
  .jdgm-widget .jdgm-submit-rev {
    margin-top: 11px;
  }
  .jdgm-form__title-fieldset > label,
  .jdgm-form__body-fieldset > label {
    display: inline-block;
    margin-right: 3px;
    width: auto;
  }
  .jdgm-countdown {
    font-size: 12px;
    font-size: 0.75rem;
  }
  .jdgm-notification {
    color: green;
    font-weight: bold;
    border-top: 1px solid #eee;
    padding-top: 16px;
    margin-top: 16px;
  }
  .jdgm-form-dynamic-wrapper.jdgm-form-dynamic-wrapper {
    display: none;
  }
  .jdgm-form-dynamic-wrapper.jdgm-show {
    display: block;
    height: 100vh;
    visibility: visible;
  }
  .jdgm-form-dynamic-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999999;
  }
  .jdgm-form-dynamic {
    position: absolute;
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    top: 20%;
    left: 50%;
    height: 100%;
    max-height: 420px;
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 32px;
    text-align: center;
    overflow: auto;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__next {
    float: right;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__back {
    float: left;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__submit-rev {
    margin-top: 0;
    float: right;
    display: none;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__row {
    padding-top: 32px;
    font-size: 16px;
    width: auto;
    text-align: left;
    min-width: 65%;
    display: none;
    max-height: 85%;
    overflow-x: auto;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__row label {
    font-size: 18px;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__row .jdgm-cf__option {
    font-size: 16px;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__picture-upload-field {
    width: 100%;
    text-align: center;
    padding-top: 24px;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__picture-upload-field
    label {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 16px 0;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__picture-upload-field
    .jdgm-picture-fieldset__box {
    width: 24%;
    margin: 8px 8px 0 0;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__rating-fieldset {
    padding-top: 48px;
    text-align: center;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__rating-fieldset
    label {
    font-size: 24px;
    font-weight: bold;
    margin: 24px 0;
  }
  .jdgm-form-dynamic
    .jdgm-form-dynamic__row.jdgm-form-dynamic__rating-fieldset
    .jdgm-form-dynamic__rating {
    font-size: 40px;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__row.jdgm-form-dynamic__submit-slide {
    width: 90%;
  }
  .jdgm-form-dynamic .jdgm-form-dynamic__row.jdgm-active,
  .jdgm-form-dynamic .jdgm-form-dynamic__buttons-row.jdgm-active {
    display: inline-block;
  }
  .jdgm-form-dynamic__buttons-row {
    position: absolute;
    bottom: 25px;
    left: 50px;
    right: 50px;
    display: none;
  }
  .jdgm-form-dynamic__row.jdgm-active .jdgm-form-dynamic__submit-rev,
  .jdgm-form-dynamic__row.jdgm-active .jdgm-form-dynamic__buttons-row {
    display: inline-block;
  }
  .jdgm-form-dynamic__title-fieldset > label,
  .jdgm-form-dynamic__body-fieldset > label {
    display: inline-block;
    margin-right: 3px;
    width: auto;
  }
  @media all and (max-width: 480px) {
    .jdgm-form-dynamic.jdgm-form-dynamic {
      top: 0;
      height: 100%;
      max-height: 100%;
      min-height: 400px;
      overflow-x: scroll;
    }
    .jdgm-form-dynamic .jdgm-form-dynamic__row {
      width: 90%;
    }
    .jdgm-form-dynamic .jdgm-form-dynamic__row .jdgm-cf__option {
      font-size: 14px;
    }
    .jdgm-widget .jdgm-form-dynamic .jdgm-picture-fieldset__box {
      min-width: 70px;
    }
    .jdgm-form-dynamic__buttons-row {
      left: 10px;
      right: 10px;
    }
  }
  @media all and (max-width: 320px) {
    .jdgm-form-dynamic .jdgm-form-dynamic__row {
      width: 100%;
    }
    .jdgm-form-dynamic .jdgm-form-dynamic__buttons-row {
      left: 4px;
      right: 4px;
    }
  }
  .jdgm-preview-badge--with-link {
    cursor: pointer;
  }
  .enforce-center-preview-badge:after {
    clear: both;
    content: ' ';
    display: table;
  }
  .enforce-center-preview-badge .jdgm-prev-badge__stars {
    float: left;
    text-align: right;
    width: 49%;
    width: calc(50% - 3px);
  }
  .enforce-center-preview-badge .jdgm-prev-badge__text {
    float: right;
    text-align: left;
    width: 49%;
    width: calc(50% - 3px);
  }
  .jdgm-prev-badge.jdgm--waiting-for-batch-done {
    display: none !important;
  }
  .jdgm-qa-badge {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid;
  }
  .jdgm-qa-badge.jdgm-qa-badge__pos-below {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    display: block;
  }
  .jdgm-qa-badge__icon {
    font-family: 'JudgemeIcons';
    padding-right: 4px;
    display: inline-block;
    vertical-align: middle;
  }
  .jdgm-qa-badge__icon:before {
    content: '\e017';
  }
  .jdgm-qa-badge__text {
    display: inline-block;
    vertical-align: middle;
  }
  .jdgm-quest,
  .jdgm-rev {
    position: relative;
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 16px;
    margin-top: 16px;
  }
  .jdgm-quest .jdgm-rev__icon:after,
  .jdgm-rev .jdgm-rev__icon:after {
    display: none;
  }
  .jdgm-quest[data-verified-buyer='true'] .jdgm-rev__icon:after,
  .jdgm-rev[data-verified-buyer='true'] .jdgm-rev__icon:after {
    font-family: 'JudgemeIcons';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 9px;
    font-weight: bold;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    line-height: 15px;
    border: 1px solid white;
  }
  .jdgm-rev__header {
    margin-bottom: 5px;
  }
  .jdgm-rev__header:after {
    display: block;
    content: ' ';
    clear: both;
  }
  .jdgm-rev__icon {
    position: relative;
    float: left;
    width: 3.2em;
    line-height: 3.2em;
    margin-right: 12px;
    text-align: center;
    border-radius: 50%;
    color: #666;
    background-color: #e9e9e9;
  }
  .jdgm-rev__timestamp {
    opacity: 0.35;
    margin-left: 4px;
  }
  .jdgm-rev__timestamp + .jdgm-rev__br {
    padding-bottom: 1px;
  }
  .jdgm-rev__timestamp.jdgm-spinner {
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    font-size: 0;
    color: transparent;
    border-width: 2px;
    border-left-color: #aaa;
  }
  .jdgm-rev__title {
    display: block;
    margin-top: 10px;
    font-size: ${props => props.theme.fonts.smallText};
    letter-spacing: ${props => props.theme.letterSpacing.smallText};
    font-weight: 500;
    font-style: normal;
    text-transform: uppercase;
  }

  .jdgm-rev__author-wrapper {
    font-weight: bold;
  }
  .jdgm-rev__location {
    opacity: 0.35;
  }
  .jdgm-rev__body > p {
    margin-bottom: 16px;
    font-size: ${props => props.theme.fonts.body};
    letter-spacing: ${props => props.theme.letterSpacing.body};
    font-style: normal;
  }
  .jdgm-rev__body > p:last-of-type {
    margin-bottom: 0;
  }
  .jdgm-rev__body-read-more {
    display: none;
    cursor: pointer;
  }
  .jdgm-ans__body.is-truncated .jdgm-rev__body-read-more,
  .jdgm-rev__body.is-truncated .jdgm-rev__body-read-more {
    display: inline;
  }
  .jdgm-rev__cf-ans {
    margin-top: 8px;
  }
  .jdgm-rev__cf-ans:last-of-type {
    margin-bottom: 8px;
  }
  .jdgm-rev__cf-ans__title {
    display: block;
    font-size: 90%;
  }
  .jdgm-cf-bars-wrapper {
    display: inline-block;
    font-size: 0;
    margin-right: 4px;
  }
  .jdgm-cf-bar {
    display: inline-block;
    width: 25px;
    height: 8px;
    margin: 2px 2px 0 0;
    background: currentColor;
    opacity: 0.1;
  }
  .jdgm-cf-bar.jdgm--filled {
    opacity: 1;
  }
  .jdgm-rev__reply {
    padding: 0 16px;
    border-left: 3px solid #ddd;
    background: #f2f2f2;
  }
  .jdgm-rev__replier-wrapper {
    margin: 16px 0 0 0;
    padding-top: 8px;
  }
  .jdgm-rev__reply-content {
    margin: 0;
    padding-bottom: 8px;
  }
  .jdgm-rev__actions:after {
    content: '';
    display: block;
    clear: both;
  }
  .jdgm-rev__social {
    float: left;
  }
  .jdgm-rev__votes {
    float: right;
  }
  .jdgm-rev__social-inner,
  .jdgm-rev__votes-inner {
    margin-top: 4px;
    margin-bottom: -4px;
  }
  .jdgm-rev__thumb-count {
    margin-right: 12px;
  }
  .jdgm-rev__thumb-count:last-of-type {
    margin-right: 0;
  }
  .jdgm-rev__share-btn,
  .jdgm-rev__thumb-btn {
    display: inline-block;
    margin-right: 4px;
    text-align: center;
    font-family: 'JudgemeIcons';
    color: #666;
    padding: 4px 8px;
    font-size: 16px;
    cursor: pointer;
  }
  .jdgm-rev__share-btn:hover,
  .jdgm-rev__thumb-btn:hover {
    opacity: 1;
  }
  .jdgm-rev__share-btn:first-of-type,
  .jdgm-rev__thumb-btn:first-of-type {
    margin-left: -8px;
  }
  .jdgm-rev__thumb-btn:hover {
    color: #000;
  }
  .jdgm-rev__share-fb:before {
    content: '\e011';
  }
  .jdgm-rev__share-fb:hover {
    color: #3b5998;
  }
  .jdgm-rev__share-twitter:before {
    content: '\e012';
  }
  .jdgm-rev__share-twitter:hover {
    color: #1da1f2;
  }
  .jdgm-rev__share-google:before {
    content: '\e010';
  }
  .jdgm-rev__share-google:hover {
    color: #dd4b39;
  }
  .jdgm-rev__share-pinterest:before {
    content: '\e016';
  }
  .jdgm-rev__share-pinterest:hover {
    color: #e60023;
  }
  .jdgm-rev__share-linkedin:before {
    content: '\e015';
  }
  .jdgm-rev__share-linkedin:hover {
    color: #0073b1;
  }
  .jdgm-rev_thumb-up:before {
    content: '\e009';
  }
  .jdgm-rev_thumb-down:before {
    content: '';
  }
  .jdgm-rev__buyer-badge {
    display: none;
    padding: 3px 7px;
    font-size: 11px;
    line-height: 1;
    vertical-align: text-top;
  }
  .jdgm-buyer-badge--top-right .jdgm-rev__timestamp ~ .jdgm-rev__br,
  .jdgm-buyer-badge--right-of-timestamp .jdgm-rev__timestamp ~ .jdgm-rev__br {
    display: inline;
  }
  .jdgm-buyer-badge--top-right .jdgm-rev__buyer-badge-wrapper:after,
  .jdgm-buyer-badge--right-of-timestamp .jdgm-rev__buyer-badge-wrapper:after {
    display: block;
    content: '';
  }
  .jdgm-buyer-badge--top-right .jdgm-rev__buyer-badge {
    float: right;
    font-size: inherit;
  }
  .jdgm-buyer-badge--removed .jdgm-rev__buyer-badge {
    display: none !important;
    visibility: hidden !important;
  }
  .jdgm-buyer-badge--right-of-timestamp .jdgm-rev__buyer-badge-wrapper {
    margin-left: 4px;
  }
  .jdgm-buyer-badge--text-only .jdgm-rev__buyer-badge {
    display: inline;
    padding: 0;
    font-size: inherit;
    vertical-align: inherit;
  }
  .jdgm-rev_all-rev-page-picture-separator {
    display: inline-block;
    margin: 0 20px;
    border-left: 2px solid #ddd;
    height: 120px;
  }
  .jdgm-widget .jdgm-picture-fieldset-title {
    margin: 20px 0 5px;
    font-size: 15px;
    line-height: 1;
  }
  .jdgm-widget .jdgm-picture-fieldset__input {
    position: absolute;
    display: inline-block;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    padding: 0;
    margin: 0;
    font-size: 14px;
    visibility: visible;
    cursor: pointer;
  }
  .jdgm-widget .jdgm-picture-fieldset__box {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 0 5px 0 0;
    padding: 0;
    width: 30%;
    max-width: 150px;
    min-width: 90px;
  }
  .jdgm-picture-fieldset {
    width: 100%;
    padding: 0;
    white-space: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .jdgm-picture-fieldset__box-wrapper {
    position: relative;
    padding-bottom: 100%;
    padding-bottom: calc(100% - 2px);
    border: 1px solid #eee;
    width: 100%;
    height: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .jdgm-picture-fieldset__box-wrapper.jdgm-has-preview-image--videos {
    background-image: url('https://s3.amazonaws.com/me.judge.public-static-assets/general/video-placeholder-640x480.jpeg');
  }
  .jdgm-picture-fieldset__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    color: #bbb;
    font-family: 'JudgemeIcons';
    font-size: 72px;
    line-height: 1;
  }
  .jdgm-photocamera-icon:before {
    content: '\e014';
  }
  .jdgm-videocam-icon:before {
    content: '\e013';
  }
  .jdgm-picture-fieldset__spinner-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: none;
    width: 50%;
    height: 50%;
  }
  .jdgm-picture-fieldset__box:hover {
    opacity: 0.7;
  }
  .jdgm-picture-fieldset__box .jdgm-spinner {
    width: 100%;
    height: 100%;
  }
  .jdgm-is-uploading-picture .jdgm-picture-fieldset__spinner-wrapper {
    display: block;
  }
  .jdgm-picture-fieldset__progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: inline;
    color: #bbb;
    font-size: 14px;
  }
  .jm-mfp-counter .jdgm-branding-footer {
    color: white;
  }
  .jm-mfp-counter .jdgm-branding-footer:hover,
  .jm-mfp-counter .jdgm-branding-footer:active {
    color: white;
    opacity: 0.8;
  }
  .jdgm-rev__pics {
    font-size: 0;
    white-space: nowrap;
    height: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .jdgm-rev__pic-link {
    margin: 8px 5px 3px 0;
    padding: 0;
    display: inline-block;
    height: 120px;
    width: auto;
    cursor: pointer;
    overflow: hidden;
  }
  .jdgm-rev__pic-link:focus {
    outline: none;
  }
  .jdgm-rev__pic-link:hover {
    opacity: 0.7;
  }
  .jdgm-rev__pic-link:last-of-type {
    margin-right: 0;
  }
  .jdgm-rev__pic-link.jdgm--loading {
    width: 120px;
    padding: 20px;
  }
  .jdgm-rev__pic-link.jdgm--loading .jdgm-rev__pic-img {
    visibility: hidden;
    height: 1px;
  }
  .jdgm-rev__pic-link.jdgm--loading:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: 2px solid #eee;
    border-right: 2px solid #eee;
    border-bottom: 2px solid #eee;
    border-left: 2px solid #ccc;
    -webkit-animation: jdgm-spin 0.8s infinite linear;
    animation: jdgm-spin 0.8s infinite linear;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }
  .jdgm-rev__pic-img {
    display: block;
    width: auto;
    max-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    border-radius: 4px;
  }
  .jdgm-rev__body img {
    max-height: 120px;
    border-radius: 4px;
    margin: 8px 5px 3px 0;
  }
  .jdgm-rev__vids {
    overflow: auto;
    white-space: nowrap;
  }
  .jdgm-vid-player {
    position: relative;
    display: inline-block;
    height: 240px;
    max-width: 100%;
    margin-top: 16px;
    margin-right: 16px;
    vertical-align: middle;
  }
  .jdgm-vid-player:last-of-type {
    margin-right: 0;
  }
  .jdgm-vid-player__wrapper {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    font-size: 0;
  }
  .jdgm-vid-player__wrapper--with-placeholder {
    height: 100%;
  }
  .jdgm-vid-player__wrapper--with-placeholder:hover {
    opacity: 0.7;
  }
  .jdgm-vid-player__wrapper.jdgm--loading {
    width: 160px;
    height: 160px;
    padding: 40px;
  }
  .jdgm-vid-player__wrapper.jdgm--loading:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: 2px solid #eee;
    border-right: 2px solid #eee;
    border-bottom: 2px solid #eee;
    border-left: 2px solid #ccc;
    -webkit-animation: jdgm-spin 0.8s infinite linear;
    animation: jdgm-spin 0.8s infinite linear;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }
  .jdgm-vid-player__placeholder {
    display: block;
    height: 100%;
    text-decoration: none;
  }
  .jdgm-vid-player__placeholder > img {
    display: block;
    height: 100%;
    width: auto;
  }
  .jm-mfp-is-open.jm-mfp-is-open {
    overflow: hidden;
  }
  .jm-mfp-container button.jm-mfp-close,
  .jm-mfp-container button.jm-mfp-arrow,
  .jm-mfp-container .jm-mfp-rotate-btn {
    overflow: visible;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    display: block;
    outline: none;
    padding: 0;
    z-index: 1046;
    box-shadow: none;
    opacity: 0.65;
    touch-action: manipulation;
  }
  .jm-mfp-container img.jm-mfp-img {
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 40px 0 40px;
    margin: 0 auto;
    transition: transform 0.5s ease;
  }
  .jm-mfp-image-holder .mfp-close {
    right: 0;
    padding-right: 0;
  }
  .jm-mfp-preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 100px;
    height: 100px;
    color: white;
  }
  .jm-mfp-preloader > a {
    color: white;
  }
  .jm-mfp-preloader:before {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: 2px solid #555;
    border-right: 2px solid #555;
    border-bottom: 2px solid #555;
    border-left: 2px solid white;
    -webkit-animation: jdgm-spin 0.8s infinite linear;
    animation: jdgm-spin 0.8s infinite linear;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
  }
  .jm-mfp-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1042;
    overflow: hidden;
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
  }
  .jm-mfp-wrap {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1043;
    position: fixed;
    outline: none !important;
    -webkit-backface-visibility: hidden;
  }
  .jm-mfp-container {
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 20px;
  }
  .jm-mfp-container:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .jm-mfp-content {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: left;
    z-index: 1045;
  }
  .jm-mfp-inline-holder .jm-mfp-content,
  .jm-mfp-ajax-holder .jm-mfp-content {
    width: 100%;
    cursor: auto;
  }
  .jm-mfp-close,
  .jm-mfp-arrow,
  .jm-mfp-preloader,
  .jm-mfp-counter,
  .jm-mfp-rotate-btn {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .jm-mfp-loading.jm-mfp-figure {
    display: none;
  }
  .jm-mfp-hide {
    display: none !important;
  }
  .jm-mfp-s-ready .jm-mfp-preloader {
    display: none;
  }
  .jm-mfp-s-error .jm-mfp-content {
    display: none;
  }
  .jm-mfp-close,
  .jm-mfp-rotate-btn {
    width: 44px;
    height: 44px;
    line-height: 44px;
    position: absolute;
    right: 0;
    top: 0;
    text-decoration: none;
    color: #fff;
    font-style: normal;
    font-size: 28px;
    font-family: Arial, Baskerville, monospace;
    text-align: right;
  }
  .jm-mfp-close:hover,
  .jm-mfp-close:focus,
  .jm-mfp-rotate-btn:hover {
    opacity: 1;
  }
  .jm-mfp-close:active {
    top: 1px;
  }
  .jm-mfp-counter {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 14px;
    line-height: 2;
    white-space: nowrap;
    width: 100%;
  }
  .jm-mfp-counter__number {
    float: right;
  }
  .jm-mfp-arrow {
    position: absolute;
    margin: 0;
    top: 50%;
    margin-top: -55px;
    width: 90px;
    height: 110px;
    -webkit-tap-highlight-color: transparent;
  }
  .jm-mfp-arrow:active {
    margin-top: -54px;
  }
  .jm-mfp-arrow:hover,
  .jm-mfp-arrow:focus {
    opacity: 1;
  }
  .jm-mfp-arrow:before,
  .jm-mfp-arrow:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 35px;
    margin-left: 35px;
    border: medium inset transparent;
  }
  .jm-mfp-arrow:after {
    border-top-width: 13px;
    border-bottom-width: 13px;
    top: 8px;
  }
  .jm-mfp-arrow:before {
    border-top-width: 21px;
    border-bottom-width: 21px;
    opacity: 0.7;
  }
  .jm-mfp-arrow-left {
    left: 0;
  }
  .jm-mfp-arrow-left:after {
    border-right: 17px solid #fff;
    margin-left: 31px;
  }
  .jm-mfp-arrow-left:before {
    margin-left: 25px;
    border-right: 27px solid #3f3f3f;
  }
  .jm-mfp-arrow-right {
    right: 0;
  }
  .jm-mfp-arrow-right:after {
    border-left: 17px solid #fff;
    margin-left: 39px;
  }
  .jm-mfp-arrow-right:before {
    border-left: 27px solid #3f3f3f;
  }
  .jm-mfp-figure {
    line-height: 0;
  }
  .jm-mfp-figure:after {
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 40px;
    display: block;
    right: 0;
    width: auto;
    height: auto;
    z-index: -1;
    background: black;
  }
  .jm-mfp-figure figure {
    padding: 0;
    margin: 0;
  }
  .jm-mfp-bottom-bar {
    margin-top: -36px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    cursor: auto;
  }
  .jm-mfp-image-holder .jm-mfp-content {
    max-width: 100%;
  }
  .jm-mfp-gallery .jm-mfp-image-holder .jm-mfp-figure {
    cursor: pointer;
  }
  .jm-mfp-rotate-btn {
    text-align: center;
  }
  .jm-mfp-rotate-btn__left {
    right: 88px;
  }
  .jm-mfp-rotate-btn__right {
    right: 44px;
  }
  @media screen and (max-width: 800px) and (orientation: landscape),
    screen and (max-height: 300px) {
    .jm-mfp-img-mobile .jm-mfp-image-holder {
      padding-left: 0;
      padding-right: 0;
    }
    .jm-mfp-img-mobile img.jm-mfp-img {
      padding: 0;
    }
    .jm-mfp-img-mobile .jm-mfp-figure:after {
      top: 0;
      bottom: 0;
    }
    .jm-mfp-img-mobile .jm-mfp-figure small {
      display: inline;
      margin-left: 5px;
    }
    .jm-mfp-img-mobile .jm-mfp-bottom-bar {
      background: rgba(0, 0, 0, 0.6);
      bottom: 0;
      margin: 0;
      top: auto;
      padding: 3px 5px;
      position: fixed;
    }
    .jm-mfp-img-mobile .jm-mfp-bottom-bar:empty {
      padding: 0;
    }
    .jm-mfp-img-mobile .jm-mfp-counter {
      right: 5px;
      top: 3px;
    }
    .jm-mfp-img-mobile .jm-mfp-close {
      top: 0;
      right: 0;
      width: 35px;
      height: 35px;
      line-height: 35px;
      background: rgba(0, 0, 0, 0.6);
      position: fixed;
      text-align: center;
      padding: 0;
    }
  }
  @media all and (max-width: 900px) {
    .jm-mfp-arrow {
      -webkit-transform: scale(0.75);
      transform: scale(0.75);
    }
    .jm-mfp-arrow-left {
      -webkit-transform-origin: 0;
      transform-origin: 0;
    }
    .jm-mfp-arrow-right {
      -webkit-transform-origin: 100%;
      transform-origin: 100%;
    }
  }
  .jdgm-carousel-wrapper {
    width: 80%;
    margin: auto;
    padding: 48px 0;
  }
  .jdgm-carousel-wrapper .jdgm-all-reviews-rating-wrapper {
    display: block;
    text-align: center;
  }
  .jdgm-carousel-title-and-link {
    margin-bottom: 24px;
  }
  .jdgm-carousel-title {
    text-align: center;
    margin: 0;
  }
  .jdgm-carousel {
    margin: 25px auto;
    width: 100%;
  }
  .jdgm-carousel__item-container {
    overflow: auto;
  }
  .jdgm-carousel__item-wrapper {
    width: 100%;
    height: 200px;
    white-space: nowrap;
  }
  .jdgm-carousel-item {
    display: inline-block;
    height: 100%;
    width: 33.3%;
    vertical-align: middle;
    padding: 0 24px;
    overflow: hidden;
  }
  .jdgm-carousel-item.jdgm--shop-review .jdgm-carousel-item__product {
    display: none;
  }
  .jdgm-carousel-item.jdgm--shop-review
    .jdgm-carousel-item__product.jdgm--shop-review-has-image {
    display: block;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .jdgm-carousel-item {
      width: 50%;
    }
    .jdgm-carousel-wrapper {
      width: 90%;
    }
  }
  @media only screen and (max-width: 767px) {
    .jdgm-carousel-item {
      width: 100%;
    }
    .jdgm-carousel-wrapper {
      width: 100%;
    }
  }
  .jdgm-carousel-item__review-rating {
    font-size: 120%;
  }
  .jdgm-carousel-item__review {
    width: 100%;
    height: calc(72% - 4em);
    text-align: center;
    white-space: normal;
    overflow: hidden;
  }
  .jdgm-carousel-item__review-title {
    font-weight: bold;
  }
  .jdgm-carousel-item__review-title a {
    word-break: break-word;
  }
  .jdgm-carousel-item__review-body {
    margin: 0;
  }
  .jdgm-carousel-item__review-body > p {
    margin: 0 0 5px 0;
  }
  .jdgm-carousel-item__review-body > p:last-of-type {
    margin-bottom: 0;
  }
  .jdgm-carousel-item__review-body a {
    word-break: break-word;
  }
  .jdgm-carousel-item__reviewer-name-wrapper {
    text-align: center;
    margin: 6px 0;
  }
  .jdgm-carousel-item__reviewer-name {
    font-size: 90%;
    opacity: 0.6;
    line-height: 1;
    padding-bottom: 2px;
  }
  .jdgm-carousel-item__timestamp {
    font-size: 75%;
    font-style: italic;
    opacity: 0.35;
    line-height: 1;
  }
  .jdgm-carousel-item__product {
    display: block;
    text-align: center;
    height: 28%;
    width: 100%;
  }
  .jdgm-carousel-item__product-image {
    display: block;
    height: 100%;
    width: auto;
    margin: 0 auto;
  }
  .jdgm-carousel-item__product-image[src=''] {
    display: none;
  }
  .jdgm-carousel-item__product-image[src='']
    + .jdgm-carousel-item__product-title {
    font-size: 120%;
    padding-top: 16px;
  }
  .jdgm-carousel-item__product-title {
    width: 100%;
    font-size: 90%;
  }
  .jdgm-carousel__arrows {
    margin: 20px auto 10px auto;
    font-size: 0;
    text-align: center;
  }
  .jdgm-carousel__right-arrow,
  .jdgm-carousel__left-arrow {
    display: inline-block;
    border: 4px none #eee;
    width: 25px;
    height: 25px;
    cursor: pointer;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .jdgm-carousel__right-arrow {
    border-style: none solid solid none;
  }
  .jdgm-carousel__left-arrow {
    border-style: solid none none solid;
    margin-right: 15px;
  }
  .jdgm-carousel--done .jdgm-carousel__item-container {
    overflow: hidden;
    position: relative;
  }
  .jdgm-carousel--done .jdgm-carousel__item-wrapper {
    position: relative;
    transition: transform 500ms ease;
  }
  .jdgm-carousel-item__timestamp.jdgm-ellipsis.jdgm-spinner {
    color: transparent;
  }
  .jdgm-revs-tab {
    position: relative;
    z-index: 1041;
  }
  .jdgm-revs-tab.jdgm-revs-tab {
    display: none;
  }
  .jdgm-revs-tab .jdgm-branding-footer {
    color: white;
  }
  .jdgm-revs-tab .jdgm-histogram {
    margin-left: 0;
    padding-left: 0;
    border: 0;
  }
  .jdgm-revs-tab-btn {
    position: fixed;
    display: inline-block;
    width: auto;
    cursor: pointer;
    border-radius: 0;
  }
  .jdgm-revs-tab-btn[position='bottom'] {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .jdgm-revs-tab-btn[position='left'] {
    left: 0;
    top: 50%;
    -webkit-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotate(-90deg) translate(-50%, 50%);
    -ms-transform: rotate(-90deg) translate(-50%, 50%);
    transform: rotate(-90deg) translate(-50%, 50%);
  }
  .jdgm-revs-tab-btn[position='right'] {
    right: 0;
    top: 50%;
    -webkit-transform-origin: 100%;
    -ms-transform-origin: 100%;
    transform-origin: 100%;
    -webkit-transform: rotate(90deg) translate(50%, 50%);
    -ms-transform: rotate(90deg) translate(50%, 50%);
    transform: rotate(90deg) translate(50%, 50%);
  }
  .jdgm-revs-tab-btn[position='none'] {
    display: none;
  }
  .jdgm-revs-tab__header {
    position: absolute;
    bottom: 100%;
    width: 100%;
    padding: 8px 24px;
    text-align: center;
    background: white;
  }
  .jdgm-revs-tab__title {
    margin-bottom: 0;
    text-align: center;
  }
  .jdgm-mask {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.75;
  }
  .jdgm-revs-tab__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999999;
  }
  .jdgm-revs-tab__wrapper.jdgm-revs-tab__wrapper {
    display: none;
  }
  .jdgm-revs-tab__wrapper.jdgm-show {
    display: block;
  }
  .jdgm-revs-tab__main {
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 20%;
    left: 50%;
    height: 70%;
    width: 85%;
    max-width: 600px;
    background: white;
  }
  .jdgm-revs-tab__content-header:after {
    content: ' ';
    display: table;
    clear: both;
  }
  .jdgm-revs-tab__content {
    height: 100%;
    padding: 16px 24px;
    overflow: auto;
    box-shadow: inset 0 5px 9px -8px black;
  }
  .jdgm-revs-tab__branding {
    text-align: center;
    line-height: 2;
  }
  .jdgm-close-ico {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 32px;
    height: 32px;
    opacity: 0.5;
  }
  .jdgm-close-ico:hover {
    opacity: 1;
  }
  .jdgm-close-ico:before {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .jdgm-close-ico:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .jdgm-close-ico:before,
  .jdgm-close-ico:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 100%;
    width: 2px;
    background-color: #333;
  }
  .jdgm-subtab {
    padding-top: 12px;
    border-bottom: 1px solid #eee;
  }

  .jdgm-rev-widg__body {
    display: none;
  }

  .jdgm-rev-widg__header {
    min-width: 100%;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      min-width: 200px;
    }
  }

  .jdgm-rev-widg__reviews {
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    > * {
      margin-top: 0;
      margin-bottom: 20px;
      padding: 15px;
      background: ${props => props.theme.colors.background};
      border: 0;

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        width: calc(50% - 10px);
      }
    }
  }

  .jdgm-subtab ~ .jdgm-rev-widg__body .jdgm-rev:first-of-type,
  .jdgm-subtab ~ .jdgm-all-reviews__body .jdgm-rev:first-of-type,
  .jdgm-subtab ~ .jdgm-shop-reviews__body .jdgm-rev:first-of-type,
  .jdgm-subtab ~ .jdgm-revs-tab__content-body .jdgm-rev:first-of-type,
  .jdgm-subtab ~ .jdgm-quest-widg__body .jdgm-quest:first-of-type {
    border-top: 0;
    margin-top: 0;
  }
  .jdgm-subtab ~ .jdgm-rev-widg__paginate-spinner-wrapper {
    margin-top: 0;
  }
  .jdgm-subtab__name {
    display: inline-block;
    padding: 8px 0;
    margin-right: 16px;
    line-height: 1;
    cursor: pointer;
  }
  .jdgm-subtab__name.jdgm--active {
    border-bottom: 3px solid currentColor;
  }
  .jdgm-subtab__name:hover {
    opacity: 0.8;
  }
  .jdgm-quest .jdgm-rev__timestamp {
    margin-left: 0;
  }
  .jdgm-quest .jdgm-rev__buyer-badge-wrapper {
    display: none;
  }
  .jdgm-ans {
    margin-top: 16px;
    padding: 8px 16px;
    border-left: 3px solid #ddd;
    background: #f2f2f2;
  }
  .jdgm-ans .jdgm-rev__timestamp {
    font-size: 95%;
  }
  .jdgm-quest__body:before,
  .jdgm-ans__body:before {
    float: left;
    padding-right: 4px;
  }
  .jdgm-verified-badge {
    width: 150px;
    margin: 16px;
    font-family: 'Helvetica Neue';
  }
  .jdgm-verified-badge.jdgm-verified-badge.jdgm-verified-badge {
    display: inline-block;
  }
  .jdgm-verified-badge .jdgm-verified-badge__wrapper {
    position: relative;
  }
  .jdgm-verified-badge img {
    display: block;
    width: 100%;
  }
  .jdgm-verified-badge .jdgm-verified-badge__stars {
    position: absolute;
    top: 35%;
    width: 100%;
    line-height: 11px;
    text-align: center;
  }
  .jdgm-verified-badge .jdgm-verified-badge__stars.jdgm--last-level {
    top: 38.5%;
  }
  .jdgm-verified-badge .jdgm-verified-badge__stars .jdgm-star {
    padding-right: 3px !important;
    font-size: 11px;
    color: #fffb00 !important;
  }
  .jdgm-verified-badge .jdgm-verified-badge__stars .jdgm-star:last-of-type {
    padding-right: 0 !important;
  }
  .jdgm-verified-badge .jdgm-badge-text {
    position: absolute;
    width: 100%;
    line-height: 1;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .jdgm-verified-badge .jdgm-verified-badge__total {
    top: 19%;
    font-size: 21px;
  }
  .jdgm-verified-badge .jdgm-verified-badge__total.jdgm--last-level {
    top: 24%;
    font-size: 20px;
  }
  .jdgm-verified-badge .jdgm-verified-badge__text {
    top: 51%;
    font-size: 13px;
  }
  .jdgm-verified-badge .jdgm-verified-badge__text.jdgm--last-level {
    top: 54%;
  }
`

const reveal = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`

export const ReviewContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray};
  padding-top: 20px;
  margin-bottom: 30px;
  width: 100%;

  &.display-block {
    display: block;
    animation: ${reveal} 1s linear;
  }

  &.display-none {
    display: none;
  }

  &.is-first {
    width: 100%;
    padding: 20px;
    background: ${props => props.theme.colors.background};
    border-top: none;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: calc(100% - 300px);
    }

      .ReviewTagline {
        font-size: ${props => props.theme.fonts.heading5};
        letter-spacing: ${props => props.theme.letterSpacing.heading5};
        font-weight: 400;
        font-style: normal;
        text-transform: uppercase;
      }
    }
  }
`

export const ReviewTitle = styled(Title)``

export const ReviewText = styled(Text)``

export const ReviewButton = styled(Button)`
  margin: 40px auto 0 !important;
  max-width: 165px !important;
`

export const AddReviewButton = styled(Button)`
  position: absolute !important;
  top: ${props => props.numberOfReviews > 0 ? '105px' : '0 !important'};
  right: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 20px;
    right: 20px;
  }
`

export const ReviewsOverview = styled.div`
  width: 275px;
`
