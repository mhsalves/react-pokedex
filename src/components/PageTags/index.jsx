import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';

function PageTags(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="shortcut icon" href="/icon/favicon.png"/>
    </Head>
  )
}

PageTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default React.memo(PageTags);