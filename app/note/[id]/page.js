import Note from '@/components/Note'
import {getNote} from '@/lib/redis';

export default async function Page({ params }) {

  const note = await getNote(params.id)

    // 动态路由 获取笔记 id
  const noteId = params.id;

  // 为了让 Suspense 的效果更明显
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(1000);

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}

