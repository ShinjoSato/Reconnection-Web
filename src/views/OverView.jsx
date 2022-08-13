import { Box, Grid, Typography } from '@mui/material';

function OverView() {
    return (
        <Box p={1} style={{ color: 'white', backgroundColor: '#425572' }}>
            <Typography variant="h3">Reconnection for iOS</Typography>
            <Box p={3}>
                <Typography variant="h4">1. アカウントの作成</Typography>
                <Typography variant="body1" align="left">
                    ロビー画面の下部にある「Create New Account」からアカウント作成画面へ移動して登録。
                    入力する内容は以下の通りである。
                    <ul>
                        <li>URL：登録するサーバーのURL（＋ポート番号）</li>
                        <li>User ID：登録するユーザーIDを英数字で入力</li>
                        <li>User Name：登録するユーザーの表記名</li>
                        <li>Email：メールアドレス</li>
                        <li>Password：パスワード</li>
                        <li>Password Again：確認用に再び同じパスワードを入力</li>
                    </ul>
                    上記を入力したら左下の「Sign-On」ボタンをクリック。
                    成功するとロビー画面にサーバーデータが表示される。
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="h4">2. 登録したサーバーへアクセス</Typography>
                <Typography variant="body1" align="left">
                    ロビー画面に表示されているサーバーデータをクリックし、接続に成功すると新たなビュー画面（ホーム画面）へと移動する。
                    画面上にはないが既に登録されているサーバーを画面に表示させたい時、サーバーデータの上部にある「Log-in」からサーバーデータを保存させる。
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="h4">3. 部屋で呟く</Typography>
                <Typography variant="body1" align="left">
                    サーバーへアカウントを登録すると、登録したユーザー専用の部屋が既に作成されている。
                    「Rooms」画面にリスト表示されている部屋をクリックする事でチャット画面へ移動する。
                </Typography>
            </Box>

            <Box p={3}>
                <Typography variant="h4">ユーザーの友達追加</Typography>
                <Typography variant="body1" align="left">
                    「Friends」画面の「Search by USER-ID」からユーザーを検索。
                    IDが完全一致すると入力欄の下にユーザーが表示されるので、ユーザーの右側にある追加ボタンを押すと友達に追加できる。
                    友達とトークをするには新たに部屋を作成するか、既存の部屋に友達を追加させる必要がある。
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="h4">部屋の作成</Typography>
                <Typography variant="body1" align="left">
                    「Rooms」画面の上部にある「Make new room」から部屋を作成する。
                    登録する内容は以下になる。
                    <ul>
                        <li>アイコン画像：部屋のアイコン</li>
                        <li>Room Name：部屋名</li>
                        <li>Disclosure range：部屋での呟きの公開範囲
                            <ul>
                                <li>Secret：実装予定</li>
                                <li>Limited：部屋に登録されているユーザーのみ閲覧可能</li>
                                <li>Open：部屋に登録されているユーザー　かつ　自身を友達追加しているユーザーのtimeline上で閲覧可能。(たしか友達追加されていないユーザーの部屋内での呟きは閲覧不可。)</li>
                            </ul>
                        </li>
                        <li>Member：部屋に追加される友達がリスト表示される。</li>
                        <li>Not Member：部屋に追加されない友達がリスト表示される。</li>
                    </ul>
                    項目に間違いがなければ下部の「Make」をクリック。
                    成功するとRoomsに部屋が追加される。
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="h4">ログアウト</Typography>
                <Typography variant="body1" align="left">
                    左上に表示されているロゴマークをクリックする事でログアウト可能。
                </Typography>
            </Box>

            <Box p={3}>
                <Typography variant="h4">注意事項</Typography>
                <Typography variant="body1" align="left">
                    <ul>
                        <li>一度アプリから離れるか、ログインしてから操作せずに一定時間放置するとサーバーとの接続が切れてリアルタイムにデータを取得・更新する事が出来なくなる。そのような場合は再ログインし直す。</li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    )
}

export default OverView;