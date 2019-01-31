import React from 'react';
import Link from 'next/link';

const Footer = props => (
  <tr>
    <td style={{ padding: '0px' }}>
      <img alt="" src="/static/s.gif" height="10" width="0" />
      <table style={{ height: '2px', width: '100%', borderSpacing: '0px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#ff6600' }} />
          </tr>
        </tbody>
      </table>
      <br />
      <center>
        <span className="yclinks">
          <a href="/newsguidelines">Guidelines</a>
          &nbsp;| <a href="mailto:hn@ycombinator.com">Support</a>
          &nbsp;| <Link prefetch href="/security"><a>Security</a></Link>
          &nbsp;| <Link prefetch href="/bookmarklet"><a>Bookmarklet</a></Link>
        </span>
        <br />
        <br />
      </center>
    </td>
  </tr>
);

export default Footer;
